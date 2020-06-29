// Show header
console.log("Emoji Downloader");
console.log("");

// Create directory
require("../tools/directory")("Discord Emoji");

// Get emoji database
console.log("Retrieving emoji database...");
console.log("");
const response = require("../tools/request")("https://discordemoji.com/api", true);

// Do for each emoji
for (i = 0; i < response.length; i++) {
	console.log("Downloading " + (i + 1) + "/" + response.length + " (" + response[i].id + ")...");

	// Download emoji file
	require("../tools/download")(response[i].image);

};
