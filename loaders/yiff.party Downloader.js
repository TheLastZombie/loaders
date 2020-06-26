// Show header
console.log("yiff.party Downloader");
console.log("");

// Import dependencies
console.log("Importing dependencies...");
const fs = require("fs");
const axios = require("axios");
const exec = require("child_process").execFileSync;

// Create directory
require("../tools/directory")("yiff.party");

// Get creator database
console.log("Retrieving creator database...");
console.log("");
axios("https://yiff.party/json/creators.json").then(response => {
	fs.writeFileSync("creators.json", response.data);

	// Do for each creator
	for (i = 0; i < response.data.creators.length; i++) {
		console.log("Downloading " + (i + 1) + "/" + response.data.creators.length + " (" + response.data.creators[i].id + ")...");

		// Download creator file
		exec("wget", ["-q", "https://yiff.party/" + response.data.creators[i].id + ".json"]);
	};
});
