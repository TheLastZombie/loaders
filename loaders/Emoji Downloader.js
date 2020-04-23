// Show header
console.log("Emoji Downloader v1.0");
console.log("");

// Import dependencies
console.log("Importing dependencies...");
const fs = require("fs");
const axios = require("axios");
const exec = require("child_process").execFileSync;

// Create directory
if (fs.existsSync("Emoji Downloader")) {
	console.log("Directory already exists! Aborting...");
	return;
} else {
	console.log("Creating download directory...");
	fs.mkdirSync("Emoji Downloader");
	process.chdir("Emoji Downloader");
};

// Get emoji database
console.log("Retrieving emoji database...");
console.log("");
axios("https://discordemoji.com/api").then(response => {

	// Do for each emoji
	for (i = 0; i < response.data.length; i++) {
		console.log("Downloading " + (i + 1) + "/" + response.data.length + " (" + response.data[i].id + ")...");

		// Download emoji file
		exec("wget", ["-q", response.data[i].image]);

	};

});
