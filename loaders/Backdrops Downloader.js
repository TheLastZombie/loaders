// Show header
console.log("Backdrops Downloader v1.0");
console.log("");

// Import dependencies
console.log("Importing dependencies...");
const fs = require("fs");
const axios = require("axios");
const exec = require("child_process").execFileSync;
const path = require("path");
const sanitize = require("sanitize-filename");

// Create directory
if (fs.existsSync("Backdrops")) {
	console.log("Directory already exists! Aborting...");
	return;
} else {
	console.log("Creating download directory...");
	fs.mkdirSync("Backdrops");
	process.chdir("Backdrops");
};

// Get wallpaper list
console.log("Getting wallpaper list...");
console.log("");
axios("https://backdrops.io/walls/api_v3.2.php?task=all_walls").then(response => {

	// Do for each entry
	for (i = 0; i < response.data.wallList.length; i++) {
		console.log("Downloading " + (i + 1) + "/" + response.data.wallList.length + " (" + response.data.wallList[i].wallId + ")...");

		// Create category folder
		if (!fs.existsSync(response.data.wallList[i].category)) fs.mkdirSync(response.data.wallList[i].category);
		process.chdir(response.data.wallList[i].category);

		// Download image file
		exec("wget", ["-q", "https://backdrops.io/walls/upload/" + response.data.wallList[i].url, "-O", sanitize(response.data.wallList[i].name, {
			replacement: "_"
		}) + path.parse(response.data.wallList[i].url).ext]);
		process.chdir("..");

	};

});