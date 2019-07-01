const https = require("https");
const parseString = require('xml2js').parseString;

/**
 * From a list of sitemaps, gets all pages linked to
 * @param {string[]} sites list of site links to XML files 
 * @return {string[]} list of pages to linked to in all sitemaps
 */
async function buildPageList(sites) {
  return await sites.map(site => parseXML(site));
              // .reduce((returnedList, nextList) => returnedList.concat(nextList), []);
}

/**
 * Converts an XML sitemap link into a list of all the sites linked to on the sitemap
 * @param {string} site link to an XML
 * @return {string[]} array of sites linked to in the XML 
 */
function parseXML(site) {
  let sites = []

  const options = {
    hostname: site,
    port: 443,
    path: '/sitemap.xml',
    method: 'GET'
  };

  const req = https.request(options, (res) => {
    res.on('data', (d) => {
      parseString(d.toString(), function (err, result) {
        const xmls = result.urlset.url;
        for (let xml of xmls) {
          sites.push(xml.loc[0]);
          // console.log(sites);
          // console.log(xml.loc[0]);
        }
      });
    });

    res.on('end', (d) => {
      sites.forEach(site => console.log('\"' + site + '\",'));
    });
  });

  req.on('error', (e) => {
    console.error(e);
  });
  req.end();
  
  return sites;
}
