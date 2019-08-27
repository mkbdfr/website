# _[claviers-mecaniques.fr](https://claviers-mecaniques.fr)_

[![Discord](https://img.shields.io/discord/364402715545174027.svg?label=Discord&logo=Discord&logoColor=white)](https://discord.gg/yrUTU3m) [![Build Status](https://travis-ci.org/claviers/website.svg?branch=master)](https://travis-ci.org/mkbdfr/website) ![Code Style](https://img.shields.io/badge/code%20style-prettier-success.svg) [![Netlify Status](https://api.netlify.com/api/v1/badges/e3b278f2-0287-49c9-8594-75c012ccc12e/deploy-status)](https://app.netlify.com/sites/quirky-sammet-4e449c/deploys)


## Requirements

- [Node.js LTS](https://nodejs.org/en/)
- a mechanical keyboard of your choice :eyes:


## Build

```bash
npm install # install build dependencies
npm run build # build website
```

### Serve

```bash
npm run serve
```

Note: With the `serve` command, two processes will run to serve the HTML files: one with hot reload, and a second to generate CSS for the SASS files. Modifying the code will reload the website but modifying the SASS files will not; you will have to refresh the page by yourself because there is no event spread between those two processes.


## Contribute

Any contribution is welcome! Just run these commands before opening a pull request:

```bash
npm run prettier # Check code style
npm run prettier:fix # Fix code style
npm run chk:data # Ensure that data is well formated (e.g. keyboards)
```

## Deploy

Travis automatically executes these tasks for every push on the `master` branch:

```bash
npm install
npm run chk:data
npm run prettier
npm run build
```

If no exception is thrown, Travis will push the output to the `gh-pages` branch.

---

_Made in France :fr:_
