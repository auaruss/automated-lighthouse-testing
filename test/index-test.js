"use strict";

const assert = require("assert");
const index = require("../src/index");
const config = require("../config");

const pages = config.pages;
const uri = config.uri;

const client = new MongoClient(uri, { useNewUrlParser: true });

describe("index", () => {
  describe("addObjectToDB", () => {
    
  });

  describe("launchChromeAndRunLighthouse", () => {
    
  });

  describe("testSitesAndAddToDB", () => {
    
  });
});