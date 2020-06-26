// Show header
console.log("Wallpaperboard Downloader");
console.log("");

// Import dependencies
console.log("Importing dependencies...");
const axios = require("axios");
const path = require("path");

// Create directory
require("../tools/directory")("Wallpaperboard");

// Get wallpaper list
console.log("Getting wallpaper list...");
console.log("");
axios("https://raw.githubusercontent.com/danimahardhika/wallpaperboard/master/json%20example/wallpaper_sample.json").then(response => {

	// Do for each entry
	for (i = 0; i < response.data.Wallpapers.length; i++) {
		console.log("Downloading " + (i + 1) + "/" + response.data.Wallpapers.length + " (" + response.data.Wallpapers[i].name + ")...");

		// Download image file
		require("../tools/download")(response.data.Wallpapers[i].url, response.data.Wallpapers[i].name + path.parse(response.data.Wallpapers[i].url).ext);

	};

});
