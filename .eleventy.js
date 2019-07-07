const pluginRss = require("@11ty/eleventy-plugin-rss");
const { DateTime } = require("luxon");
const { sassPlugin } = require("./scripts/scss-gen");
const fs = require("fs");
if (!fs.existsSync("./dist")) {
  fs.mkdirSync("./dist");
}
module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(sassPlugin);
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addFilter("htmlDateString", dateObj => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
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
