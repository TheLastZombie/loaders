// Show header
console.log("Calm Downloader");
console.log("");

// Create directory
require("../tools/directory")("Calm");

// Get scene database
console.log("Retrieving scene database...");
console.log("");
const response = require("../tools/request")("https://api.app.aws-prod.useast1.calm.com/scenes", true, [
	"--header=x-device-platform: www"
]);

// Do for each scene
for (i = 0; i < reponse.scenes.length; i++) {
	process.stdout.write("Downloading " + (i + 1) + "/" + reponse.scenes.length + " (" + reponse.scenes[i].id + ").");
	require("../tools/directory")(reponse.scenes[i].title);

	// Download audio
	if (reponse.scenes[i].audio) {
		require("../tools/download")(reponse.scenes[i].audio.url);
		process.stdout.write(".");
	};

	// Download video
	if (reponse.scenes[i].video) {
		require("../tools/download")(reponse.scenes[i].video.url);
		process.stdout.write(".");
	};

	// Download image
	if (reponse.scenes[i].image) {
		require("../tools/download")(reponse.scenes[i].image.url);
		process.stdout.write(".");
	};

	// Return and flush
	process.chdir("..");
	console.log("");

};
