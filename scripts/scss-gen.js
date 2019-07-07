const sass = require("node-sass");
const autoprefixer = require("autoprefixer");
const postcss = require("postcss");
const fs = require("fs");
const CleanCSS = require("clean-css");

const sassPlugin = async () => {
  const compiled = sass
    .renderSync({
      data: fs.readFileSync("./src/includes/style.scss", "utf8")
    })
    .css.toString();
  const autoPrefixed = postcss([autoprefixer]).process(compiled).css;
  const minified = new CleanCSS({}).minify(autoPrefixed).styles;
  fs.writeFileSync("./dist/style.css", autoPrefixed);
  fs.writeFileSync("./dist/style.min.css", minified);
};
module.exports = {
  sassPlugin
};
