const https = require("https");
const parseString = require('xml2js').parseString;
const config = require("../config");

const INIT_SITES = config.INIT_SITES;
const TIMEOUT_THAT_SHOULD_NOT_EXIST = 10000;


/**
 * From a list of sitemaps, gets all pages linked to
 * @param {string[]} sites list of site links to XML files
 * @return {Promise<string[]>} all pages linked to in all the XML files
 */
function buildPageList(sites) {
  return Promise.all( 
    sites.map(site => { return parseXML(site); }))
    .then(res => {
      return [].concat.apply([], res); // https://stackoverflow.com/questions/10865025/merge-flatten-an-array-of-arrays
    });
}

/**
 * Converts an XML sitemap link into a list of all the sites linked to on the sitemap
 * @param {string} site link to an XML
 * @return {Promise<string[]>} all pages linked to from the XML
 */
function parseXML(site) {
  const options = {
    hostname: site,
    port: 443,
    path: "/sitemap.xml",
    method: "GET"
  };
  
  let sites = [];

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
  
  return new Promise((res, err) => {
    setTimeout(() => {
			res(sites);
		}, 1000);
  });
}

module.exports = {
  "buildPageList": buildPageList,
  "parseXML": parseXML
}
