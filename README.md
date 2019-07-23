# Lighthouse tests

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
Make a config.json in the config directory of the project with the following keys:

| Key | Value |
| :--- | :------ |
| "uri"             | the location of your MongoDB, see https://mongodb.github.io/node-mongodb-native/driver-articles/mongoclient.html#the-url-connection-format |
| "SITE_LIST"       | an array of strings, each being a site with a sitemap      |
| "LIGHTHOUSE_OPTS" | see below                                                  |

#### More about Lighthouse options
Example of LIGHTHOUSE_OPTS (feel free to use this example):

    {
        "chromeFlags": ["--headless"],
    }

To learn more, see:
https://github.com/GoogleChrome/lighthouse/blob/master/docs/readme.md#using-programmatically
https://github.com/GoogleChrome/lighthouse/blob/888bd6dc9d927a734a8e20ea8a0248baa5b425ed/typings/externs.d.ts#L82-L119

## Usage
Navigate with the command line to the src folder, then run
```bash
node index.js
```