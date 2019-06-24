"use strict";

const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const lighthouse = require("lighthouse");
const chromeLauncher = require("chrome-launcher");
const config = require("./config");
const https = require("https");
const parseString = require('xml2js').parseString;

const SITES = [
  "acp.iu.edu",
  // "bar.indiana.edu",
  // "iubest.indiana.edu",
  // "employers.cdc.indiana.edu",
  // // "cdc.indiana.edu",
  // "studentemployment.cdc.indiana.edu",
  // "class.indiana.edu",
  // "sit.indiana.edu",
  // "engagedlearning.indiana.edu",
  // "gened.indiana.edu",
  // "hpplc.indiana.edu",
  // // "hutton.indiana.edu",
  // "hiep.indiana.edu",
  // "ifs.indiana.edu",
  // "ovpueit.indiana.edu",
  // "iu2u.indiana.edu",
  // "accreditation.indiana.edu",
  // "iuhighschool.iu.edu",
  // "undergradresearch.indiana.edu",
  // "open.indiana.edu",
  // "nsa.indiana.edu",
  // "ovpue.indiana.edu",
  // "tsap.indiana.edu",
  // "sab.ovpue.indiana.edu",
  // "nondegree.indiana.edu",
  // "sac.indiana.edu",
  // // "ud.indiana.edu",
  // "wellsscholars.indiana.edu",
  // "womeninstem.indiana.edu",
  // "wts.indiana.edu",
  // // "citl.indiana.edu",
  // // "iujur.iu.edu"
];

const uri = "mongodb+srv://auaruss:Kappapride_420@lighthouse-3rte9.mongodb.net/test?retryWrites=true&w=majority";
const opts = {
  chromeFlags: ['--headless'],
};

const client = new MongoClient(uri, { useNewUrlParser: true });

/**
 * Constructs today's date as a numeric string in the format MMDDYYYY
 * @return today's date in MMDDYYYY
 */
function todaysDate() {
  const d = new Date();
  return (d.getMonth() + 1).toString() + d.getDate() + d.getFullYear();
}

/**
 * Adds a piece of data to our MongoDB
 * @param {JSON} data data object to be added to the MongoDB
 */
function addObjectToDB(data) {
  client.connect(err => {
    const date = todaysDate();
    const collection = client.db("lighthouse_test").collection(date);
    
    collection.insertMany([
      data
    ], function(err, result) {
      assert.equal(err, null);
      console.log("Inserted document into the collection");
    });
  });
};

/**
 * Source: https://github.com/GoogleChrome/lighthouse/blob/master/docs/headless-chrome.md
 * @param {String} url url to be tested by lighthouse
 * @param {JSON} opts options for lighthouse
 * @param {*} config
 */
function launchChromeAndRunLighthouse(url, opts, config = null) {
  return chromeLauncher.launch({chromeFlags: opts.chromeFlags}).then(chrome => {
    opts.port = chrome.port;
    return lighthouse(url, opts, config).then(results => {
      return chrome.kill().then(() => results.lhr)
    });
  });
}

/**
 * Test a site with lighthouse then save the results to a database
 * @param {String} site the site address to lighthouse test
 */
function testSiteAndAddToDB(site) {  
  launchChromeAndRunLighthouse(site, opts).then(results => {
    addObjectToDB({
      "_id": site,
      "json": JSON.stringify(results)
    });
  }).catch();
}

/**
 * From a list of sitemaps, gets all pages linked to
 * @param {string[]} sites list of site links to XML files 
 * @return {string[]} list of pages to linked to in all sitemaps
 */
async function buildPageList(sites) {
  const siteList = await sites.map(site => parseXML(site));
  return siteList;
              // .reduce((returnedList, nextList) => returnedList.concat(nextList), []);
}

/**
 * Converts an XML sitemap link into a list of all the sites linked to on the sitemap
 * @param {string} site link to an XML
 * @return {string[]} array of sites linked to in the XML 
 */
function parseXML(site) {
  let sites = []

  const options = {
    hostname: site,
    port: 443,
    path: '/sitemap.xml',
    method: 'GET'
  };

  const req = https.request(options, (res) => {
    res.on('data', (d) => {
      parseString(d.toString(), function (err, result) {
        const xmls = result.urlset.url;
        for (let xml of xmls) {
          sites.push(xml.loc[0]);
          // console.log(sites);
          // console.log(xml.loc[0]);
        }
      });
    });

    res.on('end', (d) => {
      sites.forEach(site => console.log('\"' + site + '\",'));
    });
  });

  req.on('error', (e) => {
    console.error(e);
  });
  req.end();
  
  return sites;
}

/**
 * Test a number of sites with lighthouse then save the results to a database
 */
function main() {
  // for (let page of PAGES) {
  //   testSiteAndAddToDB(page);
  // }
  console.log(buildPageList(SITES));
}

main();
client.close(); // where does this go?