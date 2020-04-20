// Show header
console.log("Calm Downloader v1.0");
console.log("");

// Import dependencies
console.log("Importing dependencies...");
const fs = require("fs");
const request = require("request");
const sanitize = require("sanitize-filename");
const exec = require("child_process").execFileSync;

// Create directory
if (fs.existsSync("Calm Downloader")) {
	console.log("Directory already exists! Aborting...");
	return;
} else {
	console.log("Creating download directory...");
	fs.mkdirSync("Calm Downloader");
	process.chdir("Calm Downloader");
};

// Get scene database
console.log("Retrieving scene database...");
console.log("");
request("https://www.calm.com/meditate", function (error, response, body) {
	eval(body.split("\n")[42].substring(17));

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
			exec("wget", ["-q", globalModels.scenes[i].audio]);
			process.stdout.write(".");
		};

		// Download video
		if (globalModels.scenes[i].video) {
			exec("wget", ["-q", globalModels.scenes[i].video]);
			process.stdout.write(".");
		};

		// Download image
		if (globalModels.scenes[i].image) {
			exec("wget", ["-q", globalModels.scenes[i].image]);
			process.stdout.write(".");
		};

		// Return and flush
		process.chdir("..");
		console.log("");
	};
});
