# Lighthouse Tests

This is a tool using Lighthouse to test all the pages in a list of sites and save the results in a MongoDB database.

## Dependencies and installation

### Step 1
Install node.js https://nodejs.org/en/download/

### Step 2
Install the Lighthouse API with

```bash
npm i lighthouse
```
### Step 3
Clone this project. Go up to the "Clone or Download" button on the right and copy the URL. Then run this:
```bash
git clone <this url>
```
### Step 4
Make a config.json in the root directory of the projectwith the following keys:<br/>
"uri" (the location of your MongoDB, see https://mongodb.github.io/node-mongodb-native/driver-articles/mongoclient.html#the-url-connection-format)<br/>
"SITE_LIST" (an array of strings, each being a site with a sitemap)<br/>
"LIGHTHOUSE_OPTS"<br/>
"SITEMAP_OPTS" (optional; you don't need this if your sitemaps are located at /sitemap.xml)

Example of LIGHTHOUSE_OPTS (feel free to use this example):

    {
        chromeFlags: ["--headless"],
        onlyAudits: [
          "first-contentful-paint",
          "first-meaningful-paint",
          "speed-index",
          "first-cpu-idle",
          "dom-size",
          "estimated-input-latency",
          "network-payload",
          "legible-font-sizes",
          "performance-info",
          "accessibility-info",
          "best-practices-info",
          "seo-info",
          "pwa-info"
        ]
    }

To learn more, see:<br/>
https://github.com/GoogleChrome/lighthouse/blob/master/docs/readme.md#using-programmatically <br/>
https://github.com/GoogleChrome/lighthouse/blob/888bd6dc9d927a734a8e20ea8a0248baa5b425ed/typings/externs.d.ts#L82-L119

## Usage
Navigate with the command line to the src folder, then run
```bash
node index.js
```