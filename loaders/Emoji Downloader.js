// Show header
console.log("Emoji Downloader");
console.log("");

// Import dependencies
console.log("Importing dependencies...");
const axios = require("axios");

// Create directory
require("../tools/directory")("Discord Emoji");

// Get emoji database
console.log("Retrieving emoji database...");
console.log("");
axios("https://discordemoji.com/api").then(response => {

	// Do for each emoji
	for (i = 0; i < response.data.length; i++) {
		console.log("Downloading " + (i + 1) + "/" + response.data.length + " (" + response.data[i].id + ")...");

		// Download emoji file
		require("../tools/download")(response.data[i].image);

	};

});
