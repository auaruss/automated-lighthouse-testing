// TODOS
// debug parseXML in sitemapProcessor.js
// add tests
// connect config file properly
// figure out what config in launchChromeAndRunLighthouse really is 
"use strict";

const MongoClient = require("mongodb").MongoClient;
const lighthouse = require("lighthouse");
const chromeLauncher = require("chrome-launcher");
const config = require("../config");

const pages = config.pages;
const uri = config.uri;
const lighthouse_opts = config.lighthouse_opts;

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
      assert.equal(err, null);
      console.log("Inserted document into the collection");
    });
  });
  client.close(); // where does this go?
};

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
    await launchChromeAndRunLighthouse(site, lighthouse_opts).then(results => {
      addObjectToDB({
        "_id": site,
        "json": JSON.stringify(results)
      });
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

main();