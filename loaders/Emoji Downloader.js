// Show header
console.log("Emoji Downloader v1.0");
console.log("");

// Import dependencies
console.log("Importing dependencies...");
const fs = require("fs");
const request = require("request");
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
request("https://discordemoji.com/api", function (error, response, body) {

	// Do for each emoji
	for (i = 0; i < JSON.parse(body).length; i++) {
		console.log("Downloading " + (i + 1) + "/" + JSON.parse(body).length + " (" + JSON.parse(body)[i].id + ")...");

		// Download emoji file
		exec("wget", ["-q", JSON.parse(body)[i].image]);
	};
});