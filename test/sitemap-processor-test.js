"use strict";

const assert = require("assert");
const sitemapProcessor = require("../src/sitemap-processor");


describe("utils", () => {
  describe("buildPageList", () => {
    it("should exist", () => {
      assert.notEqual(sitemapProcessor.buildPageList, undefined);
    });

    it("should return an array of strings", () => {
      const pageList = sitemapProcessor.buildPageList();
      assert.equal(typeof pageList, 'object');
      assert.equal(typeof pageList[0], 'string');
    });
  });

  describe("parseXML", () => {
    it("should exist", () => {
      assert.notEqual(sitemapProcessor.parseXML, undefined);
    });

    it("should return an array of strings", () => {
      const pageList = sitemapProcessor.parseXML();
      assert.equal(typeof pageList, 'object');
      assert.equal(typeof pageList[0], 'string');
    })
  });
});