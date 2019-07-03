"use strict";

const assert = require("assert");
const sitemapProcessor = require("../src/sitemap-processor");


describe("sitemap-processor", () => {
  describe("buildPageList", () => {
    it("exists", () => {
      assert.notEqual(sitemapProcessor.buildPageList, undefined);
    });

    it("returns an array of strings", () => {
      const pageList = sitemapProcessor.buildPageList();
      assert.equal(typeof pageList, 'object');
      assert.equal(typeof pageList[0], 'string');
    });
  });

  describe("parseXML", () => {
    it("exists", () => {
      assert.notEqual(sitemapProcessor.parseXML, undefined);
    });

    it("returns an array of strings", () => {
      const pageList = sitemapProcessor.parseXML();
      assert.equal(typeof pageList, 'object');
      assert.equal(typeof pageList[0], 'string');
    })
  });
});