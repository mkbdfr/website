const pluginRss = require("@11ty/eleventy-plugin-rss");
const { DateTime } = require("luxon");
const { sassPlugin } = require("./scripts/scss-gen");
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");
if (!fs.existsSync("./dist")) {
  fs.mkdirSync("./dist");
}
const keebImgSizes = [
  { suffix: "thumb", crop: true, size: [150, 150] },
  { suffix: "320", size: [320, 240] }
];
const imgParse = async () => {
  const srcDir = "./src/img-keyboards";
  const outDir = "./dist/img-keyboards";
  if (!fs.existsSync(path.resolve(outDir))) {
    fs.mkdirSync(path.resolve(outDir), { recursive: true });
  }
  for (const img of fs.readdirSync(srcDir)) {
    const f = path.resolve(path.join(srcDir, img));
    for (const s of keebImgSizes) {
      const arrImgFilename = img.split(".");
      const file = arrImgFilename[0] + `-${s.suffix}`;
      const ext = arrImgFilename[1];
      const fit = s.crop ? "cover" : "inside";
      await sharp(f)
        .resize(s.size[0], s.size[1], { fit: fit })
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
  eleventyConfig.addNunjucksFilter("basefilename", function(value) {
    const arr = value.split('.');
    arr.pop();
    return arr.join('.');
  });
  eleventyConfig.addPassthroughCopy("./src/img");
  eleventyConfig.addPassthroughCopy("./src/favicon.ico");
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
