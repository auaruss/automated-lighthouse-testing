"use strict";

const assert = require("assert");
const utils = require("../src/utils");

describe("utils", function() {
  describe("todaysDate", function() {
    it("formats the date string in MMDDYYYY", () => {
      assert.equal(utils.todaysDate().length, 8);
    });
  });
});