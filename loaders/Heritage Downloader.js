// Show header
console.log("Heritage Downloader");
console.log("");

// Import dependencies
console.log("Importing dependencies...");
const fs = require("fs");
const axios = require("axios");
const AdmZip = require("adm-zip");

// Create directory
require("../tools/directory")("α CLOCK");

// Get heritage database
console.log("Retrieving heritage database...");
console.log("");
axios("https://www.sony.net/united/clock/assets/js/heritage_data.js").then(response => {
	eval(response.data);

	// Do for each heritage
	for (i = 0; i < a_clock_heritage_data.length; i++) {
		process.stdout.write("Downloading " + (i + 1) + "/" + a_clock_heritage_data.length + " (" + a_clock_heritage_data[i].id + ").");
		require("../tools/directory")(a_clock_heritage_data[i].name.en);
		const resolutions = ["3840_2160", "1920_1200", "1920_1080", "1280_1024"];

		// Download music
		if (a_clock_heritage_data[i].music) {
			require("../tools/download")("https://www.sony.net/united/clock/assets/sound/theme_song_of_world_heritage_" + a_clock_heritage_data[i].music + ".mp3");
			process.stdout.write(".");
		};

		// Download soundscape
		if (a_clock_heritage_data[i].soundscape) {
			require("../tools/download")("https://www.sony.net" + a_clock_heritage_data[i].soundscape.media.mp3);
			process.stdout.write(".");
		};

		// Download photos
		for (j = 0; j < 12; j++) {
			resolutions.forEach(x => {
				require("../tools/download")("https://di.update.sony.net/ACLK/wallpaper/" + a_clock_heritage_data[i].id + "/" + x + "/fp/" + a_clock_heritage_data[i].id + "_" + x + "_fp_" + (j + 1).toString().padStart(2, "0") + ".zip");
				new AdmZip("./" + a_clock_heritage_data[i].id + "_" + x + "_fp_" + (j + 1).toString().padStart(2, "0") + ".zip").extractAllTo(process.cwd(), true);
				fs.unlinkSync("./" + a_clock_heritage_data[i].id + "_" + x + "_fp_" + (j + 1).toString().padStart(2, "0") + ".zip");
				process.stdout.write(".");
			});
		};

		// Download snapshots
		for (j = 0; j < 10; j++) {
			resolutions.forEach(x => {
				require("../tools/download")("https://di.update.sony.net/ACLK/wallpaper/" + a_clock_heritage_data[i].id + "/" + x + "/ss/" + a_clock_heritage_data[i].id + "_" + x + "_ss_" + (j + 1).toString().padStart(2, "0") + ".zip");
				new AdmZip("./" + a_clock_heritage_data[i].id + "_" + x + "_ss_" + (j + 1).toString().padStart(2, "0") + ".zip").extractAllTo(process.cwd(), true);
				fs.unlinkSync("./" + a_clock_heritage_data[i].id + "_" + x + "_ss_" + (j + 1).toString().padStart(2, "0") + ".zip");
				process.stdout.write(".");
			});
		};

		// Return and flush
		process.chdir("..");
		console.log("");

	};

});
