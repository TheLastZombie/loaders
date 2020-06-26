// Show header
console.log("Calm Downloader");
console.log("");

// Import dependencies
console.log("Importing dependencies...");
const axios = require("axios");

// Create directory
require("../tools/directory")("Calm");

// Get scene database
console.log("Retrieving scene database...");
console.log("");
axios({
	url: "https://api.app.aws-prod.useast1.calm.com/scenes",
	headers: {
		"x-device-platform": "www"
	}
}).then(response => {
	var globalModels = response.data;

	// Do for each scene
	for (i = 0; i < globalModels.scenes.length; i++) {
		process.stdout.write("Downloading " + (i + 1) + "/" + globalModels.scenes.length + " (" + globalModels.scenes[i].id + ").");
		require("../tools/directory")(globalModels.scenes[i].title);

		// Download audio
		if (globalModels.scenes[i].audio) {
			require("../tools/download")(globalModels.scenes[i].audio.url);
			process.stdout.write(".");
		};

		// Download video
		if (globalModels.scenes[i].video) {
			require("../tools/download")(globalModels.scenes[i].video.url);
			process.stdout.write(".");
		};

		// Download image
		if (globalModels.scenes[i].image) {
			require("../tools/download")(globalModels.scenes[i].image.url);
			process.stdout.write(".");
		};

		// Return and flush
		process.chdir("..");
		console.log("");
	};
});
