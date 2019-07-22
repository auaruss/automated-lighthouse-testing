# Lighthouse Tests

This is a tool using Lighthouse to test all the pages in a list of sites and save the results in a MongoDB database.

## Dependencies and Installation

You'll need node.js https://nodejs.org/en/download/

Then, install the Lighthouse API with

```bash
npm i lighthouse
```

Finally, you'll need to make a config.json with the following structure:
{
  uri: <location of MongoDB>,
  SITE_LIST: <Array<String>>,
  LIGHTHOUSE_OPTS: JSON
}

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

To learn more, see:
https://github.com/GoogleChrome/lighthouse/blob/master/docs/readme.md#using-programmatically
https://github.com/GoogleChrome/lighthouse/blob/888bd6dc9d927a734a8e20ea8a0248baa5b425ed/typings/externs.d.ts#L82-L119

## Usage
Navigate with the command line to the src folder, then run
```bash
node index.js
```