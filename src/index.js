"use strict";

const MongoClient = require("mongodb").MongoClient;
const lighthouse = require("lighthouse");
const chromeLauncher = require("chrome-launcher");
const config = require("../config/config.json");
const utils = require("./utils");
const sitemapProcessor = require("./sitemap-processor");

const uri = config.uri;
const lighthouseOpts = config.LIGHTHOUSE_OPTS;
const dataSaved = config.DATA_SAVED;
const todaysDate = utils.todaysDate;
const buildPageList = sitemapProcessor.buildPageList;
const client = new MongoClient(uri, { useNewUrlParser: true });

/**
 * Adds a piece of data to our MongoDB
 * @param {JSON} data data object to be added to the MongoDB
 */
function addObjectToDB(data) {
  client.connect(err => {
    if (err) {
      console.log(err);
    }
    const date = todaysDate();
    const collection = client.db("lighthouse_test").collection(date);
    
    collection.insertOne(
      data, function(err, result) {
      console.log("Inserted document into the collection");
    });
  });
  client.close();
}

/**
 * Format the data returned from lighthouse to be stored in the database
 * @param {string} site the site tested by lighthouse
 * @param {JSON} results the results from the lighthouse api
 * @return {JSON} the data to be stored in the database
 */
function savedLighthouseData(site, results) {
  let o = {
    "_id": site,
  };

  for (let key of Object.keys(dataSaved)) {
    for (let key1 of dataSaved[key]) {
      o[key1] = results[key][key1];
    }
  }

  return o;
}

/**
 * Source: https://github.com/GoogleChrome/lighthouse/blob/master/docs/headless-chrome.md
 * @param {string} url url to be tested by lighthouse
 * @param {JSON} lighthouse_opts options for lighthouse
 * @param {JSON} config config for lighthouse
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
 * @param {string} site the site address to lighthouse test
 */
async function testSitesAndAddToDB(sites) {
  let time = Date.now();

  for (let site of sites) {
    console.log("Testing " + site);
    await launchChromeAndRunLighthouse(site, lighthouseOpts).then(results => {
      addObjectToDB(savedLighthouseData(site, results));
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
}