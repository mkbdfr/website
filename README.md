# Claviers-mecanique.fr [![Build Status](https://travis-ci.org/claviers/website.svg?branch=master)](https://travis-ci.org/claviers/website) [![Discord](https://img.shields.io/discord/364402715545174027.svg?label=Discord&logo=Discord&logoColor=white)](https://discord.gg/yrUTU3m) ![Code Style](https://img.shields.io/badge/code%20style-prettier-success.svg)

## Build

Mandatory: [NodeJs LTS](https://nodejs.org/en/)

```bash
npm install # install all build dependencies
npm run serve # serve local server on http://localhost:8080/.
npm run prettier # Check code style
npm run prettier:fix # Fix code style
npm run chk:data # Ensure all Datas are well formated. eg: keyboards
npm run build # build website
```

### Serve

During `serve` command, the process starts 2 parallel tasks to serve the html files with the hotreload and another one to generate CSS with the SASS files. If you modify the code the website is hotreloaded but if you modify the sass you'll have to refresh the page by yourself because there is no event spread between those 2 process.

## Deployment

Once a push on master is done, travis execute those task:

```bash
npm install
npm run chk:data
npm run prettier
npm run build
```

If no exception is thrown, Travis deploy the code to Gh-pages branch.
