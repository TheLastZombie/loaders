// Show header
console.log("Earth View Downloader");
console.log("");

// Import dependencies
console.log("Importing dependencies...");
const inquirer = require("inquirer");

// Create directory
require("../tools/directory")("Earth View");

// Ask for host
console.log("");
inquirer.prompt([{
	type: "list",
	name: "host",
	message: "Which host do you want to download from?",
	choices: ["www.gstatic.com (lower resolution)", "earthview.withgoogle.com (watermarked)"]
}])
.then(answers => {
	console.log("");
	console.log("Some images will be skipped. This is not a bug.\nNot all digits within the 1003 to 7023 range are mapped to images.");

	// Do for each image
	console.log("");
	for (i = 1003; i < 7024; i++) {
		console.log("Downloading " + (i - 1002) + "/" + (7023 - 1002) + " (" + i + ")...");

		// Download image file
		try {
			if (answers.host == "www.gstatic.com (lower resolution)")     require("../tools/download")("https://www.gstatic.com/prettyearth/assets/full/" + i + ".jpg");
			if (answers.host == "earthview.withgoogle.com (watermarked)") require("../tools/download")("https://earthview.withgoogle.com/download/"       + i + ".jpg");
		} catch (e) {};

	};

});
