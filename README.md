# Lighthouse tests

This is a tool using Lighthouse to test all the pages in a list of sites and save the results in a MongoDB database.

## Dependencies and installation

### Step 1
Install node.js v10.15.3 or later https://nodejs.org/en/download/

### Step 2
Clone this project. Go up to the "Clone or Download" button on the right and copy the URL. Then run this:
```bash
git clone https://github.iu.edu/BL-VPUE-IT/lighthouse-tests.git
```

### Step 3
Install all dependencies by navigating to the project on your computer in the terminal and running
```bash
npm install
```

### Step 4
Make a copy the file `config.json.example` named `config.json` in the `config` directory of the project.
It contains the following values:

| Key | Value |
| :--- | :------ |
| "uri"             | the location of your MongoDB; see https://mongodb.github.io/node-mongodb-native/driver-articles/mongoclient.html#the-url-connection-format |
| "SITE_LIST"       | an array of strings, each being a site with a sitemap (do not add http:// or https:// )     |
| "LIGHTHOUSE_OPTS" | see below                                                  |

#### More about Lighthouse options
Example of LIGHTHOUSE_OPTS (feel free to use this example):

    {
        "chromeFlags": ["--headless"],
    }

To learn more, see:
- https://github.com/GoogleChrome/lighthouse/blob/master/docs/readme.md#using-programmatically
- https://github.com/GoogleChrome/lighthouse/blob/888bd6dc9d927a734a8e20ea8a0248baa5b425ed/typings/externs.d.ts#L82-L119

#### More about MongoDB
To quickly set up an online MongoDB database, see:
- https://docs.atlas.mongodb.com/getting-started/

## Usage
Navigate with the command line to the `src` folder, then run
```bash
node index.js
```