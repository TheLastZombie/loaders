// Show header
console.log("Calm Downloader");
console.log("");

// Import dependencies
console.log("Importing dependencies...");
const fs = require("fs");
const axios = require("axios");
const sanitize = require("sanitize-filename");
const exec = require("child_process").execFileSync;

// Create directory
if (fs.existsSync("Calm")) {
	console.log("Directory already exists! Aborting...");
	return;
} else {
	console.log("Creating download directory...");
	fs.mkdirSync("Calm");
	process.chdir("Calm");
};

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
		fs.mkdirSync(sanitize(globalModels.scenes[i].title, {
			replacement: "_"
		}));
		process.chdir(sanitize(globalModels.scenes[i].title, {
			replacement: "_"
		}));

		// Download audio
		if (globalModels.scenes[i].audio) {
			exec("wget", ["-q", globalModels.scenes[i].audio.url]);
			process.stdout.write(".");
		};

		// Download video
		if (globalModels.scenes[i].video) {
			exec("wget", ["-q", globalModels.scenes[i].video.url]);
			process.stdout.write(".");
		};

		// Download image
		if (globalModels.scenes[i].image) {
			exec("wget", ["-q", globalModels.scenes[i].image.url]);
			process.stdout.write(".");
		};

		// Return and flush
		process.chdir("..");
		console.log("");
	};
});
