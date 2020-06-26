// Show header
console.log("Archillect Downloader");
console.log("");

// Import dependencies
console.log("Importing dependencies...");
const axios = require("axios");
const exec = require("child_process").execFileSync;

// Create directory
require("../tools/directory")("Archillect");

// Get latest image ID
console.log("Retrieving latest image ID...");
console.log("");
axios("http://archillect.com/").then(response => {

	// Do for each image
	for (i = 0; i < response.data.match(/<a class="post" href="\/\d+">/).toString().slice(23, -2); i++) {
		console.log("Downloading " + (i + 1) + "/" + response.data.match(/<a class="post" href="\/\d+">/).toString().slice(23, -2) + " (" + (i + 1) + ")...");

		// Download image file
		var temp = exec("wget", ["-q", "http://archillect.com/" + (i + 1), "-O", "-"]).toString();
		require("../tools/download")(temp.match(/<img id="ii" src=".+">/).toString().slice(18, -2));

	};

});
