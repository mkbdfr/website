const sass = require("node-sass");
const autoprefixer = require("autoprefixer");
const postcss = require("postcss");
const fs = require("fs");
const CleanCSS = require("clean-css");

const sassPlugin = async () => {
  try {
    const compiled = sass
      .renderSync({
        file: "./src/includes/style.scss",
      })
      .css.toString();
    const autoPrefixed = postcss([autoprefixer]).process(compiled).css;
    const minified = new CleanCSS({}).minify(autoPrefixed).styles;
    fs.writeFileSync("./dist/style.css", autoPrefixed);
    fs.writeFileSync("./dist/style.min.css", minified);
  } catch (e) {
    console.error(e);
    throw e;
  }
};
module.exports = {
  sassPlugin
};
