// "use strict";

// const MongoClient = require('mongodb').MongoClient;
// const assert = require("assert");
// const index = require("../src/index");
// const config = require("../config");
// const todaysDate = require("../src/utils").todaysDate;

// const pages = config.pages;
// const uri = config.uri;

// const client = new MongoClient(uri, { useNewUrlParser: true });

// describe("index", () => {
//   describe("testSitesAndAddToDB", () => {
//     it("should have added all the correct sites to the database", () => {
//       for (let page of config.pages) {
//         MongoClient.connect(uri, (err, client) => {
//           console.log(err);
//           assert.ok(client.db("lighthouse_test").collection(todaysDate()).find( { "_id": page }).count());
//         client.close();
//       });
//       }
//     });
//   });
// });