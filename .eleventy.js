const CleanCSS = require("clean-css");
module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });
  eleventyConfig.addPassthroughCopy("./src/img");
  return {
    pathPrefix: "/mkfr/",
    dir: {
      input: "./src",
      includes: "includes",
      data: "data",
      output: "dist"
    }
  };
};

