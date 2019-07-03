"use strict";

const assert = require("assert");
const lighthouseDataAnalysis = require("../src/lighthouse-data-analysis");
const SAMPLE_DATA = require("../sample-data").SAMPLE_DATA;

describe("lighthouse-data-analysis", () => {
  describe("analyzeAttributes", () => {
    it("tests all the attributes we saved to see if they pass a predefined score", () => {
      const analyzedJson = lighthouseDataAnalysis.analyzeAttributes(SAMPLE_DATA);
      assert.equal("object", typeof analyzedJson);
      assert.equal("boolean", typeof analyzedJson["first-contentful-paint"]);
      assert.equal("boolean", typeof analyzedJson["first-meaningful-paint"]);
      assert.equal("boolean", typeof analyzedJson["speed-index"]);
      assert.equal("boolean", typeof analyzedJson["first-cpu-idle"]);
      assert.equal("boolean", typeof analyzedJson["dom-size"]);
      assert.equal("boolean", typeof analyzedJson["estimated-input-latency"]);
      assert.equal("boolean", typeof analyzedJson["network-payload"]);
      assert.equal("boolean", typeof analyzedJson["legible-font-sizes"]);
      assert.equal("boolean", typeof analyzedJson["performance-info"]);
      assert.equal("boolean", typeof analyzedJson["accessibility-info"]);
      assert.equal("boolean", typeof analyzedJson["best-practices-info"]);
      assert.equal("boolean", typeof analyzedJson["seo-info"]);
      assert.equal("boolean", typeof analyzedJson["pwa-info"]);
    });
  });
})