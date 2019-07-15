"use strict";

/* Ideas for analysis
 * Retrieve top/bottom X sites for any particular measure
 * array of certain measure for certain page over time
 * array of average over an entire site over time
 * combine the above with tests for passing scores
 */

const PASSING_SCORES = require("../config").PASSING_SCORES;

/**
 * @param {JSON} attributesJson saved data from lighthouse test
 * @param {JSON} passingScores contains all the passing score values
 * @return {JSON} whether or not each lighthouse test "passes" 
 */
function analyzeAttributes(attributesJson, passingScores=PASSING_SCORES) {
  let analyzedJson = {}
  let testKey = (key) => {
    if ( !(key == "_id") ) {
      // console.log(attributesJson[key]["score"]);
      if (attributesJson[key]["score"].hasOwnProperty("$numberDouble")) {
        analyzedJson[key] = attributesJson[key]["score"]["$numberDouble"] >= passingScores[key];
      } else {
        analyzedJson[key] = attributesJson[key]["score"]["$numberInt"] == 1;
      }
    }
  }
  
  for (let key in attributesJson) {
    testKey(key);
  }

  return analyzedJson;
}

module.exports = {
  "analyzeAttributes": analyzeAttributes
}