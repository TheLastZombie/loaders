// Show header
console.log("yiff.party Downloader v1.1");
console.log("");

// Import dependencies
console.log("Importing dependencies...");
const fs = require("fs");
const request = require("request");
const exec = require("child_process").execFileSync;

// Create directory
if (fs.existsSync("yiff.party Downloader")) {
	console.log("Directory already exists! Aborting...");
	return;
} else {
	console.log("Creating download directory...");
	fs.mkdirSync("yiff.party Downloader");
	process.chdir("yiff.party Downloader");
};

// Get creator database
console.log("Retrieving creator database...");
console.log("");
request("https://yiff.party/json/creators.json", function (error, response, body) {
	fs.writeFileSync("creators.json", body);

	// Do for each creator
	for (i = 0; i < JSON.parse(body).creators.length; i++) {
		console.log("Downloading " + (i + 1) + "/" + JSON.parse(body).creators.length + " (" + JSON.parse(body).creators[i].id + ")...");

		// Download creator file
		exec("wget", ["-q", "https://yiff.party/" + JSON.parse(body).creators[i].id + ".json"]);
	};
});
