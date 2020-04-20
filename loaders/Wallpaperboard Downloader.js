// Show header
console.log("Wallpaperboard Downloader v1.0");
console.log("");

// Import dependencies
console.log("Importing dependencies...");
const fs = require("fs");
const axios = require("axios");
const exec = require("child_process").execFileSync;
const path = require("path");
const sanitize = require("sanitize-filename");

// Create directory
if (fs.existsSync("Wallpaperboard")) {
	console.log("Directory already exists! Aborting...");
	return;
} else {
	console.log("Creating download directory...");
	fs.mkdirSync("Wallpaperboard");
	process.chdir("Wallpaperboard");
};

// Get wallpaper list
console.log("Getting wallpaper list...");
console.log("");
axios("https://raw.githubusercontent.com/danimahardhika/wallpaperboard/master/json%20example/wallpaper_sample.json").then(response => {

	// Do for each entry
	for (i = 0; i < response.data.Wallpapers.length; i++) {
		console.log("Downloading " + (i + 1) + "/" + response.data.Wallpapers.length + " (" + response.data.Wallpapers[i].name + ")...");

		// Download image file
		try {
			exec("wget", ["-q", response.data.Wallpapers[i].url, "-O", sanitize(response.data.Wallpapers[i].name, {
				replacement: "_"
			}) + path.parse(response.data.Wallpapers[i].url).ext]);
		} catch(e) {
			console.log("wget error, skipping download.");
			fs.unlinkSync(sanitize(response.data.Wallpapers[i].name, {
				replacement: "_"
			}) + path.parse(response.data.Wallpapers[i].url).ext);
		};

	};

});
