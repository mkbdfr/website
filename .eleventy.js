const pluginRss = require('@11ty/eleventy-plugin-rss');
const { DateTime } = require('luxon');
const { sassPlugin } = require('./scripts/scss-gen');
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
if (!fs.existsSync('./dist')) {
  fs.mkdirSync('./dist');
}
const keebImgSizes = [{ suffix: 'thumb', crop: true, size: [150, 150] }, { suffix: '320', size: [320, 240] }];
const imgParse = async () => {
  const srcDir = './src/img-keyboards';
  const outDir = './dist/img-keyboards';
  if (!fs.existsSync(path.resolve(outDir))) {
    fs.mkdirSync(path.resolve(outDir), { recursive: true });
  }
  for (const img of fs.readdirSync(srcDir)) {
    const f = path.resolve(path.join(srcDir, img));
    for (const s of keebImgSizes) {
      const arrImgFilename = img.split('.');
      const file = arrImgFilename[0] + `-${s.suffix}`;
      const ext = arrImgFilename[1];
      const fit = s.crop ? 'cover' : 'inside';
      await sharp(f)
        .resize(s.size[0], s.size[1], { fit: fit })
        .toFile(path.resolve(path.join(outDir, `${file}.${ext}`)));
    }
  }
};
function formatTitle(t) {
  t = t.replace(/-/g, ' ');
  t = t[0].toUpperCase() + t.slice(1);
  return t;
}
module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(sassPlugin);
  eleventyConfig.addPlugin(imgParse);
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addFilter('htmlDateString', dateObj => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat('yyyy-LL-dd');
  });
  eleventyConfig.addNunjucksFilter('basefilename', function(value) {
    const arr = value.split('.');
    arr.pop();
    return arr.join('.');
  });
  eleventyConfig.addNunjucksFilter('breadcrumb', function(page) {
    const path = page.url.split('/').filter(d => {
      return d;
    });
    if (path.length <= 1) {
      return '';
    }
    const last = path.pop();
    const breadcrumb = [];
    const breadcrumbPath = ['/'];
    breadcrumb.push(`<ul class="breadcrumb">`);
    breadcrumb.push('<li><a href="/">Accueil</a></li>');
    path.forEach(p => {
      breadcrumbPath.push(p);
      breadcrumb.push(`<li><a href="${breadcrumbPath.join('/').replace('//', '/')}">${formatTitle(p)}</a></li>`);
    });
    breadcrumb.push(`<li>${formatTitle(last)}</li>`);
    breadcrumb.push(`</ul>`);
    return breadcrumb.join('');
  });
  eleventyConfig.addPassthroughCopy('./src/img');
  eleventyConfig.addPassthroughCopy('./src/assets');
  eleventyConfig.addPassthroughCopy('./src/favicon.ico');
  return {
    pathPrefix: '/',
    dir: {
      input: './src',
      includes: 'includes',
      data: 'data',
      output: 'dist',
    },
  };
};
