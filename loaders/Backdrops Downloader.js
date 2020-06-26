// Show header
console.log("Backdrops Downloader");
console.log("");

// Import dependencies
console.log("Importing dependencies...");
const fs = require("fs");
const axios = require("axios");
const path = require("path");

// Create directory
require("../tools/directory")("Backdrops");

// Get wallpaper list
console.log("Getting wallpaper list...");
console.log("");
axios("https://backdrops.io/walls/api_v3.2.php?task=all_walls").then(response => {

	// Do for each entry
	for (i = 0; i < response.data.wallList.length; i++) {
		console.log("Downloading " + (i + 1) + "/" + response.data.wallList.length + " (" + response.data.wallList[i].wallId + ")...");

		// Create category folder
		require("../tools/directory")(response.data.wallList[i].category, true);

		// Download image file
		require("../tools/download")("https://backdrops.io/walls/upload/" + response.data.wallList[i].url, response.data.wallList[i].name + path.parse(response.data.wallList[i].url).ext);
		process.chdir("..");

	};

});
