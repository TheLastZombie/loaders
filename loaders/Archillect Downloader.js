// Show header
console.log("Archillect Downloader v1.1");
console.log("");

// Import dependencies
console.log("Importing dependencies...");
const fs = require("fs");
const request = require("request");
const reqsync = require("sync-request");
const exec = require("child_process").execFileSync;

// Create directory
if (fs.existsSync("Archillect Downloader")) {
	console.log("Directory already exists! Aborting...");
	return;
} else {
	console.log("Creating download directory...");
	fs.mkdirSync("Archillect Downloader");
	process.chdir("Archillect Downloader");
};

// Get latest image ID
console.log("Retrieving latest image ID...");
console.log("");
request("http://archillect.com/", function (error, response, body) {

	// Do for each image
	for (i = 0; i < body.match(/<a class="post" href="\/\d+">/).toString().slice(23, -2); i++) {
		console.log("Downloading " + (i + 1) + "/" + body.match(/<a class="post" href="\/\d+">/).toString().slice(23, -2) + " (" + (i + 1) + ")...");

		// Download image file
		var temp = reqsync("GET", "http://archillect.com/" + (i + 1)).getBody("utf8");
		exec("wget", ["-q", temp.match(/<img id="ii" src=".+">/).toString().slice(18, -2)]);
	};
});
