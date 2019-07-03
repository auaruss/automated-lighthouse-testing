"use strict";

const PASSING_SCORES = require("../config").PASSING_SCORES;

/**
 * @param {JSON} attributesJson saved data from lighthouse test
 * @param {JSON} passingScores contains all the passing score values
 * @return {JSON} whether or not each lighthouse test "passes" 
 */
function analyzeAttributes(attributesJson, passingScores=PASSING_SCORES) {
  let analyzedJson = {}
  
  for (let key in attributesJson) {
    if (key == "_id") {
      continue;
    }
    console.log(attributesJson[key]["score"]);
    if (attributesJson[key]["score"].hasOwnProperty("$numberDouble")) {
      analyzedJson[key] = attributesJson[key]["score"]["$numberDouble"] >= passingScores[key];
    } else {
      analyzedJson[key] = attributesJson[key]["score"]["$numberInt"] == 1;
    }
  }

  return analyzedJson;
}

module.exports = {
  "analyzeAttributes": analyzeAttributes
}