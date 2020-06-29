// Show header
console.log("yiff.party Downloader");
console.log("");

// Import dependencies
console.log("Importing dependencies...");
const fs = require("fs");

// Create directory
require("../tools/directory")("yiff.party");

// Get creator database
console.log("Retrieving creator database...");
console.log("");
const response = require("../tools/request")("https://yiff.party/json/creators.json", true);
fs.writeFileSync("creators.json", JSON.stringify(response));

// Do for each creator
for (i = 0; i < response.creators.length; i++) {
	console.log("Downloading " + (i + 1) + "/" + response.creators.length + " (" + response.creators[i].id + ")...");

	// Download creator file
	require("../tools/download")("https://yiff.party/" + response.creators[i].id + ".json");

};
