/**
 * @fileoverview The entry point for the lighthouse automated testing program.
 *               
*/
'use strict';

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');

const uri = "mongodb+srv://auaruss:Kappapride_420@lighthouse-3rte9.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
const SITES = [
  // 'https://ovpueit.indiana.edu/sitemap.xml'
  'http://www.indiana.edu'
]
const opts = {
  chromeFlags: ['--headless'],
};

function todaysDate() {
  const d = new Date();
  return d.getMonth().toString() + d.getDate() + d.getFullYear()
}

/**
 * Adds a piece of data to our MongoDB
 * @param {Object} data data object to be added to the MongoDB
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
 * @param {Object} opts options for lighthouse
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
 * Test a number of sites with lighthouse then save the results to a database
 */
function main() {
  for (let site of SITES) {
    testSiteAndAddToDB(site);
  }
}

main();
client.close();