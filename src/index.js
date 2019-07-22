"use strict";

const MongoClient = require("mongodb").MongoClient;
const lighthouse = require("lighthouse");
const chromeLauncher = require("chrome-launcher");
const config = require("../config");
const utils = require("./utils");
const sitemapProcessor = require("./sitemap-processor");

const uri = config.uri;
const lighthouseOpts = config.LIGHTHOUSE_OPTS;
const todaysDate = utils.todaysDate;
const buildPageList = sitemapProcessor.buildPageList;

const client = new MongoClient(uri, { useNewUrlParser: true });

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
if (require.main === module) {
  buildPageList(config.SITE_LIST).then(res => {
    testSitesAndAddToDB(res);
  });
  client.close(); // where does this go?
}
