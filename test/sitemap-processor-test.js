"use strict";

const assert = require("assert");
const sitemapProcessor = require("../src/sitemap-processor");

describe("utils", function() {
  describe("buildPageList", function() {
    it("should exist", () => {
      assert.notEqual(sitemapProcessor.buildPageList, undefined);
    });
  });

  describe("parseXML", function() {
    it("should exist", () => {
      assert.notEqual(sitemapProcessor.parseXML, undefined);
    });
  });
});