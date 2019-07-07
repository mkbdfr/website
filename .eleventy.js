const pluginRss = require("@11ty/eleventy-plugin-rss");
const { DateTime } = require("luxon");
const { sassPlugin } = require("./scripts/scss-gen");
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");
const keebImgSizes = [{ suffix: "320", size: [320, 240] }];
if (!fs.existsSync("./dist")) {
  fs.mkdirSync("./dist");
}
const imgParse = async options => {
  const srcDir = "./src/img-keebs";
  const outDir = "./dist/img-keebs";
  const imgKeebs = fs.readdirSync(srcDir);
  for (const img of imgKeebs) {
    const f = path.resolve(path.join(srcDir, img));
    for (const s of keebImgSizes) {
      const arrImgFilename = img.split(".");
      const file = arrImgFilename[0] + `-${s.suffix}`;
      const ext = arrImgFilename[1];
      await sharp(f)
        .resize(s.size[0], s.size[1], { fit: "inside" })
        .toFile(path.resolve(path.join(outDir, `${file}.${ext}`)));
    }
  }
};

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(sassPlugin);
  eleventyConfig.addPlugin(imgParse);
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
