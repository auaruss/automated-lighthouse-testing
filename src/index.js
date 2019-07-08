"use strict";

const MongoClient = require("mongodb").MongoClient;
const lighthouse = require("lighthouse");
const chromeLauncher = require("chrome-launcher");
const config = require("../config");
const utils = require("./utils");
const sitemapProcessor = require("./sitemap-processor");

const uri = config.uri;
const lighthouseOpts = config.lighthouse_opts;
const lighthouseDataSaved = config.lighthouseDataSaved;
const todaysDate = utils.todaysDate;

/*
 * I have used a bad solution for fixing the async problems in this file.
 * The intended thing to happen is to pass an array of sitemap links to buildPageList, then
 * buildPageList returns an array of sites linked to by all those sitemaps.
 * Before the solution, parseXML returned nothing. I added an empty array at the top and am now adding
 * each site to it in parseXML, then waiting with a setTimeout at the end.
 * This should be done in a different way, but I couldn't figure out how.
 * 
 * I also copy pasted the entire code from sitemap-processor.js back into this file. It doesn't work otherwise.
 */

// START sitemap-processor.js

const https = require("https");
const parseString = require('xml2js').parseString;
// const config = require("../config");

const INIT_SITES = config.INIT_SITES;
const TIMEOUT_THAT_SHOULD_NOT_EXIST = 10000;

let sites = []
/**
 * From a list of sitemaps, gets all pages linked to
 * @param {string[]} sites list of site links to XML files 
 */
function buildPageList(sites) {
  for (let site of sites) {
    parseXML(site);
  }
}

/**
 * Converts an XML sitemap link into a list of all the sites linked to on the sitemap
 * @param {string} site link to an XML
 */
function parseXML(site) {
  

  const options = {
    hostname: site,
    port: 443,
    path: '/sitemap.xml',
    method: 'GET'
  };

  const req = https.request(options, (res) => {
    res.on('data', (d) => {
      parseString(d.toString(), function (err, result) {
        try {
          const xmls = result.urlset.url;
          for (let xml of xmls) {
            sites.push(xml.loc[0]);
          }
        } catch (e) {}
      });
    });
  });

  req.on('error', (e) => {
    console.error(e);
  });
  req.end();
  
  return sites;
}

const client = new MongoClient(uri, { useNewUrlParser: true });

// END sitemap-processor.js

const pages = sites;

/**
 * Adds a piece of data to our MongoDB
 * @param {JSON} data data object to be added to the MongoDB
 */
function addObjectToDB(data) {
  client.connect(err => {
    const date = todaysDate();
    const collection = client.db("lighthouse_test").collection(date);
    
    collection.insertOne(
      data, function(err, result) {
      console.log("Inserted document into the collection");
    });
    
  });
}

/**
 * Source: https://github.com/GoogleChrome/lighthouse/blob/master/docs/headless-chrome.md
 * @param {String} url url to be tested by lighthouse
 * @param {JSON} lighthouse_opts options for lighthouse
 * @param {*} config
 */
function launchChromeAndRunLighthouse(url, lighthouse_opts, config = null) {
  return chromeLauncher.launch({chromeFlags: lighthouse_opts.chromeFlags}).then(chrome => {
    lighthouse_opts.port = chrome.port;
    return lighthouse(url, lighthouse_opts, config).then(results => {
      return chrome.kill().then(() => results.lhr);
    });
  }).catch();
}

/**
 * Test a site with lighthouse then save the results to a database
 * @param {String} site the site address to lighthouse test
 */
async function testSitesAndAddToDB(sites) {
  let time = Date.now();

  for (let site of sites) {
    console.log("Testing " + site);
    await launchChromeAndRunLighthouse(site, lighthouseOpts).then(results => {
      addObjectToDB(
        {
          "_id": site,
          // "json": JSON.stringify(results),
          "first-contentful-paint": results.audits["first-contentful-paint"],
          "first-meaningful-paint": results.audits["first-meaningful-paint"],
          "speed-index": results.audits["speed-index"],
          "first-cpu-idle": results.audits["first-cpu-idle"],
          "dom-size": results.audits["dom-size"],
          "estimated-input-latency": results.audits["estimated-input-latency"],
          "network-payload": results.audits["total-byte-weight"],
          "legible-font-sizes": results.audits["font-size"],
          "performance-info": results.categories["performance"],
          "accessibility-info": results.categories["accessibility"],
          "best-practices-info": results.categories["best-practices"],
          "seo-info": results.categories["seo"],
          "pwa-info": results.categories["pwa"]
        }
      );
    }).catch();
  }

  time = (Date.now() - time) / 1000;
  console.log("This took " + time + " seconds");
}

/**
 * Test a number of sites with lighthouse then save the results to a database
 */
function main() {
  testSitesAndAddToDB(pages);
}

if (require.main === module) {
  buildPageList(INIT_SITES);
  setTimeout(() => { main(); }, TIMEOUT_THAT_SHOULD_NOT_EXIST);
  client.close(); // where does this go?
}
