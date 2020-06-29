// Show header
console.log("Backdrops Downloader");
console.log("");

// Import dependencies
console.log("Importing dependencies...");
const path = require("path");

// Create directory
require("../tools/directory")("Backdrops");

// Get wallpaper list
console.log("Getting wallpaper list...");
console.log("");
const response = require("../tools/request")("https://backdrops.io/walls/api_v3.2.php?task=all_walls", true);

// Do for each entry
for (i = 0; i < response.wallList.length; i++) {
	console.log("Downloading " + (i + 1) + "/" + response.wallList.length + " (" + response.wallList[i].wallId + ")...");

	// Create category folder
	require("../tools/directory")(response.wallList[i].category, true);

	// Download image file
	require("../tools/download")("https://backdrops.io/walls/upload/" + response.wallList[i].url, response.wallList[i].name + path.parse(response.wallList[i].url).ext);
	process.chdir("..");

};
