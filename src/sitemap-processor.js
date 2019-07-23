const https = require("https");

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
 * @param {JSON} sitemap_opts options for the sitemap request
 * @return {Promise<string[]>} all pages linked to from the XML
 */
function parseXML(site, sitemap_opts=undefined) {

  // To allow other users to specify a different location of the XML on the site
  if (! sitemap_opts) {
    sitemap_opts = {
      hostname: site,
      port: 443,
      path: "/sitemap.xml",
      method: "GET"
    };
  }
  
  let sites = [];

  const req = https.request(sitemap_opts, (res) => {
    let sitemapString = "";
    
    res.on('data', (d) => {
      sitemapString += d.toString();
    });

    res.on('end', () => {
      sites = sitemapString.replace(/(\r\n|\n|\r|\s)/gm, "").match(/https[^<]+/g);
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