// TODOS
// debug parseXML in sitemapProcessor.js
// figure out what config in launchChromeAndRunLighthouse really is
// make sure all non-logic info (like the specific sites to be tested) are in config, not the code
"use strict";

const MongoClient = require("mongodb").MongoClient;
const lighthouse = require("lighthouse");
const chromeLauncher = require("chrome-launcher");
const config = require("../config");
const utils = require("./utils");
const sitemapProcessor = require("./sitemap-processor");

const pages = sitemapProcessor.sites;
const uri = config.uri;
const lighthouseOpts = config.lighthouse_opts;
const lighthouseDataSaved = config.lighthouseDataSaved;
const todaysDate = utils.todaysDate;

const client = new MongoClient(uri, { useNewUrlParser: true });

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
      console.log("Inserted document into the collection");
    });
    client.close(); // where does this go?
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
      addObjectToDB(lighthouseDataSaved(site));
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
  main();
}
