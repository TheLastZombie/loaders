// Show header
console.log("Backdrops Downloader");
console.log("");

// Create directory
require("../tools/directory")("Backdrops");

// Get wallpaper list
console.log("Getting wallpaper list...");
console.log("");
const response = require("../tools/request")("https://backdrops.io/walls/api_v3.2.php?task=all_walls", true);
require("fs").writeFileSync("api_v3.2.php", JSON.stringify(response));

// Do for each entry
for (i = 0; i < response.wallList.length; i++) {
	console.log("Downloading " + (i + 1) + "/" + response.wallList.length + " (" + response.wallList[i].wallId + ")...");

	// Create category folder
	require("../tools/directory")(response.wallList[i].category, true);

	// Download image file
	require("../tools/download")("https://backdrops.io/walls/upload/" + response.wallList[i].url, response.wallList[i].name + require("../tools/extension")(response.wallList[i].url));
	process.chdir("..");

};
