# MK Fr website [![Build Status](https://travis-ci.org/zekth/mkfr.svg?branch=master)](https://travis-ci.org/zekth/mkfr) [![Discord](https://img.shields.io/discord/364402715545174027.svg?label=Discord&logo=Discord&logoColor=white)](https://discord.gg/yrUTU3m) ![Code Style](https://img.shields.io/badge/code%20style-prettier-success.svg)


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

## Deployment

Once a push on master is done, travis execute those task:

```bash
npm install
npm run chk:data
npm run prettier
npm run build
```

If no exception is thrown, Travis deploy the code to Github Pages at this address: [https://zekth.github.io/mkfr/](https://zekth.github.io/mkfr/)
