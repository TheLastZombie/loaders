// Show header
console.log("Facets Downloader");
console.log("");

// Import dependencies
console.log("Importing dependencies...");
const fs = require("fs");
const sqlite3 = require("sqlite3").verbose();

// Create directory
require("../tools/directory")("Facets");

// Check if facets.db exists
if (!fs.existsSync("../../facets.db")) {
	console.log("facets.db not found! Aborting...");
	return;
};

// Import facets.db database
console.log("Importing Facets database...");
const db = new sqlite3.Database("../../facets.db");

// Parse imported database
console.log("Parsing imported database...");
console.log("");

// Download Facets 365
console.log("Downloading Facets 365...");
console.log("");
db.all("SELECT * FROM jm_facets", function (err, rows) {
	for (i = 0; i < rows.length; i++) {
		console.log("Downloading " + (i + 1) + "/" + rows.length + " (" + rows[i].title + ")...");
		if (rows[i].thumbnail) require("../tools/download")("http://www.facets.la/thumbnail/" + rows[i].thumbnail, undefined, "Facets 365/Thumbnail");
		if (rows[i].fullview)  require("../tools/download")("http://www.facets.la/fullview/"  + rows[i].fullview,  undefined, "Facets 365/Full View");
		if (rows[i].wallpaper) require("../tools/download")("http://www.facets.la/wallpaper/" + rows[i].wallpaper, undefined, "Facets 365/Wallpaper");
	};
	console.log("");

	// Download Premium Facets
	console.log("Downloading Premium Facets...");
	console.log("");
	db.all("SELECT * FROM jm_facets_update", function (err, rows) {
		for (i = 0; i < rows.length; i++) {
			console.log("Downloading " + (i + 1) + "/" + rows.length + " (" + rows[i].title + ")...");
			require("../tools/download")("http://dsn28cf3a7751.cloudfront.net/update_thumbs/" + rows[i].title.replace(/ /g, "-").toLowerCase() + ".jpg", undefined, "Premium Facets/Thumbnail");
			require("../tools/download")("http://dsn28cf3a7751.cloudfront.net/update/"        + rows[i].title.replace(/ /g, "-").toLowerCase() + ".jpg", undefined, "Premium Facets/Default");
		};
	});

});
