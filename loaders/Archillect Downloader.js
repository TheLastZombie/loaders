// Show header
console.log("Archillect Downloader");
console.log("");

// Import dependencies
console.log("Importing dependencies...");
const fs = require("fs");
const axios = require("axios");
const exec = require("child_process").execFileSync;

// Create directory
if (fs.existsSync("Archillect")) {
	console.log("Directory already exists! Aborting...");
	return;
} else {
	console.log("Creating download directory...");
	fs.mkdirSync("Archillect");
	process.chdir("Archillect");
};

// Get latest image ID
console.log("Retrieving latest image ID...");
console.log("");
axios("http://archillect.com/").then(response => {

	// Do for each image
	for (i = 0; i < response.data.match(/<a class="post" href="\/\d+">/).toString().slice(23, -2); i++) {
		console.log("Downloading " + (i + 1) + "/" + response.data.match(/<a class="post" href="\/\d+">/).toString().slice(23, -2) + " (" + (i + 1) + ")...");

		// Download image file
		var temp = exec("wget", ["-q", "http://archillect.com/" + (i + 1), "-O", "-"]).toString();
		exec("wget", ["-q", temp.match(/<img id="ii" src=".+">/).toString().slice(18, -2)]);

	};

});
