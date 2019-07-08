/*
 * I have used a bad solution for fixing the async problems in this file.
 * The intended thing to happen is to pass an array of sitemap links to buildPageList, then
 * buildPageList returns an array of sites linked to by all those sitemaps.
 * Before the solution, parseXML returned nothing. I added an empty array at the top and am now adding
 * each site to it in parseXML, then waiting with a setTimeout at the end.
 * This should be done in a different way, but I couldn't figure out how.
 */

const https = require("https");
const parseString = require('xml2js').parseString;
const config = require("../config");

const INIT_SITES = config.INIT_SITES;
const TIMEOUT_THAT_SHOULD_NOT_EXIST = 10000;

let sites = []
/**
 * From a list of sitemaps, gets all pages linked to
 * @param {string[]} sites list of site links to XML files 
 */
function buildPageList(sites) {
  for (let site of sites) {
    parseXML(site);
  }
}

/**
 * Converts an XML sitemap link into a list of all the sites linked to on the sitemap
 * @param {string} site link to an XML
 */
function parseXML(site) {
  

  const options = {
    hostname: site,
    port: 443,
    path: '/sitemap.xml',
    method: 'GET'
  };

  const req = https.request(options, (res) => {
    res.on('data', (d) => {
      parseString(d.toString(), function (err, result) {
        try {
          const xmls = result.urlset.url;
          for (let xml of xmls) {
            sites.push(xml.loc[0]);
          }
        } catch (e) {}
      });
    });
  });

  req.on('error', (e) => {
    console.error(e);
  });
  req.end();
  
  return sites;
}

buildPageList(INIT_SITES);
setTimeout(() => { console.log(sites); }, TIMEOUT_THAT_SHOULD_NOT_EXIST);

module.exports = {
  "buildPageList": buildPageList,
  "parseXML": parseXML
}
