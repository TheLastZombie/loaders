// Show header
console.log("Behang Downloader");
console.log("");

// Import dependencies
console.log("Importing dependencies...");
const fs = require("fs");
const axios = require("axios");
const exec = require("child_process").execFileSync;
const path = require("path");
const sanitize = require("sanitize-filename");

// Create directory
if (fs.existsSync("Behang")) {
	console.log("Directory already exists! Aborting...");
	return;
} else {
	console.log("Creating download directory...");
	fs.mkdirSync("Behang");
	process.chdir("Behang");
};

// Get wallpaper list
console.log("Getting wallpaper list...");
console.log("");
axios("https://knokfirst.com/behang_manifest.json").then(response => {

	// Do for each category
	for (i = 0; i < response.data.wallpapers.category.length; i++) {
		console.log("Downloading category " + (i + 1) + "/" + response.data.wallpapers.category.length + " (" + response.data.wallpapers.category[i].name + ")...");

		// Create category folder
		fs.mkdirSync(response.data.wallpapers.category[i].name);
		process.chdir(response.data.wallpapers.category[i].name);

		// Do for each entry
		for (j = 0; j < response.data.wallpapers.category[i].wallpaper.length; j++) {

			// Download image file
			console.log("Downloading image " + (j + 1) + "/" + response.data.wallpapers.category[i].wallpaper.length + " (" + response.data.wallpapers.category[i].wallpaper[j].name + ")...");
			exec("wget", ["-q", response.data.wallpapers.category[i].wallpaper[j].url, "-O", sanitize(response.data.wallpapers.category[i].wallpaper[j].name, {
				replacement: "_"
			}) + path.parse(response.data.wallpapers.category[i].wallpaper[j].url).ext]);

		};

		process.chdir("..");

	};

});
