// Show header
console.log("Wallpaperboard Downloader");
console.log("");

// Import dependencies
console.log("Importing dependencies...");
const path = require("path");

// Create directory
require("../tools/directory")("Wallpaperboard");

// Get wallpaper list
console.log("Getting wallpaper list...");
console.log("");
const response = require("../tools/request")("https://raw.githubusercontent.com/danimahardhika/wallpaperboard/master/json%20example/wallpaper_sample.json", true);

// Do for each entry
for (i = 0; i < response.Wallpapers.length; i++) {
	console.log("Downloading " + (i + 1) + "/" + response.Wallpapers.length + " (" + response.Wallpapers[i].name + ")...");

	// Download image file
	require("../tools/download")(response.Wallpapers[i].url, response.Wallpapers[i].name + path.parse(response.Wallpapers[i].url).ext);

};
