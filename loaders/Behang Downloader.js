// Show header
console.log("Behang Downloader");
console.log("");

// Import dependencies
console.log("Importing dependencies...");
const fs = require("fs");
const axios = require("axios");
const path = require("path");

// Create directory
require("../tools/directory")("Behang");

// Get wallpaper list
console.log("Getting wallpaper list...");
console.log("");
const response = require("../tools/request")("https://knokfirst.com/behang_manifest.json", true);

// Do for each category
for (i = 0; i < response.wallpapers.category.length; i++) {
	console.log("Downloading category " + (i + 1) + "/" + response.wallpapers.category.length + " (" + response.wallpapers.category[i].name + ")...");

	// Create category folder
	require("../tools/directory")(response.wallpapers.category[i].name);

	// Do for each entry
	for (j = 0; j < response.wallpapers.category[i].wallpaper.length; j++) {

		// Download image file
		console.log("Downloading image " + (j + 1) + "/" + response.wallpapers.category[i].wallpaper.length + " (" + response.wallpapers.category[i].wallpaper[j].name + ")...");
		require("../tools/download")(response.wallpapers.category[i].wallpaper[j].url, response.wallpapers.category[i].wallpaper[j].name + path.parse(response.wallpapers.category[i].wallpaper[j].url).ext);

	};

	process.chdir("..");

};
