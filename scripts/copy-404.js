// GitHub Pages serves 404.html for any path that has no file, such as /about.
// Copying the SPA entry point there lets React Router handle deep links and refreshes.
const fs = require("fs");
const path = require("path");

const buildDir = path.join(__dirname, "..", "build");
fs.copyFileSync(path.join(buildDir, "index.html"), path.join(buildDir, "404.html"));
console.log("Copied build/index.html to build/404.html for SPA routing on GitHub Pages.");
