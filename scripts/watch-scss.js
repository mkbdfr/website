const watch = require("node-watch");
const { sassPlugin } = require("./scss-gen");

watch("./src", { recursive: true, filter: /\.scss$/ }, function(evt, name) {
  console.log("Generate Sass");
  sassPlugin();
});
