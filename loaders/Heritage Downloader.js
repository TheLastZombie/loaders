// Show header
console.log("Heritage Downloader");
console.log("");

// Import dependencies
console.log("Importing dependencies...");
const fs = require("fs");
const axios = require("axios");
const sanitize = require("sanitize-filename");
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
		fs.mkdirSync(sanitize(a_clock_heritage_data[i].name.en, {
			replacement: "_"
		}));
		process.chdir(sanitize(a_clock_heritage_data[i].name.en, {
			replacement: "_"
		}));

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
			require("../tools/download")("https://di.update.sony.net/ACLK/wallpaper/" + a_clock_heritage_data[i].id + "/3840_2160/fp/" + a_clock_heritage_data[i].id + "_3840_2160_fp_" + (j + 1).toString().padStart(2, "0") + ".zip");
			new AdmZip("./" + a_clock_heritage_data[i].id + "_3840_2160_fp_" + (j + 1).toString().padStart(2, "0") + ".zip").extractAllTo(process.cwd(), true);
			fs.unlinkSync("./" + a_clock_heritage_data[i].id + "_3840_2160_fp_" + (j + 1).toString().padStart(2, "0") + ".zip");
			process.stdout.write(".");
			require("../tools/download")("https://di.update.sony.net/ACLK/wallpaper/" + a_clock_heritage_data[i].id + "/1920_1200/fp/" + a_clock_heritage_data[i].id + "_1920_1200_fp_" + (j + 1).toString().padStart(2, "0") + ".zip");
			new AdmZip("./" + a_clock_heritage_data[i].id + "_1920_1200_fp_" + (j + 1).toString().padStart(2, "0") + ".zip").extractAllTo(process.cwd(), true);
			fs.unlinkSync("./" + a_clock_heritage_data[i].id + "_1920_1200_fp_" + (j + 1).toString().padStart(2, "0") + ".zip");
			process.stdout.write(".");
			require("../tools/download")("https://di.update.sony.net/ACLK/wallpaper/" + a_clock_heritage_data[i].id + "/1920_1080/fp/" + a_clock_heritage_data[i].id + "_1920_1080_fp_" + (j + 1).toString().padStart(2, "0") + ".zip");
			new AdmZip("./" + a_clock_heritage_data[i].id + "_1920_1080_fp_" + (j + 1).toString().padStart(2, "0") + ".zip").extractAllTo(process.cwd(), true);
			fs.unlinkSync("./" + a_clock_heritage_data[i].id + "_1920_1080_fp_" + (j + 1).toString().padStart(2, "0") + ".zip");
			process.stdout.write(".");
			require("../tools/download")("https://di.update.sony.net/ACLK/wallpaper/" + a_clock_heritage_data[i].id + "/1280_1024/fp/" + a_clock_heritage_data[i].id + "_1280_1024_fp_" + (j + 1).toString().padStart(2, "0") + ".zip");
			new AdmZip("./" + a_clock_heritage_data[i].id + "_1280_1024_fp_" + (j + 1).toString().padStart(2, "0") + ".zip").extractAllTo(process.cwd(), true);
			fs.unlinkSync("./" + a_clock_heritage_data[i].id + "_1280_1024_fp_" + (j + 1).toString().padStart(2, "0") + ".zip");
			process.stdout.write(".");
		};

		// Download snapshots
		for (j = 0; j < 10; j++) {
			require("../tools/download")("https://di.update.sony.net/ACLK/wallpaper/" + a_clock_heritage_data[i].id + "/3840_2160/ss/" + a_clock_heritage_data[i].id + "_3840_2160_ss_" + (j + 1).toString().padStart(2, "0") + ".zip");
			new AdmZip("./" + a_clock_heritage_data[i].id + "_3840_2160_ss_" + (j + 1).toString().padStart(2, "0") + ".zip").extractAllTo(process.cwd(), true);
			fs.unlinkSync("./" + a_clock_heritage_data[i].id + "_3840_2160_ss_" + (j + 1).toString().padStart(2, "0") + ".zip");
			process.stdout.write(".");
			require("../tools/download")("https://di.update.sony.net/ACLK/wallpaper/" + a_clock_heritage_data[i].id + "/1920_1200/ss/" + a_clock_heritage_data[i].id + "_1920_1200_ss_" + (j + 1).toString().padStart(2, "0") + ".zip");
			new AdmZip("./" + a_clock_heritage_data[i].id + "_1920_1200_ss_" + (j + 1).toString().padStart(2, "0") + ".zip").extractAllTo(process.cwd(), true);
			fs.unlinkSync("./" + a_clock_heritage_data[i].id + "_1920_1200_ss_" + (j + 1).toString().padStart(2, "0") + ".zip");
			process.stdout.write(".");
			require("../tools/download")("https://di.update.sony.net/ACLK/wallpaper/" + a_clock_heritage_data[i].id + "/1920_1080/ss/" + a_clock_heritage_data[i].id + "_1920_1080_ss_" + (j + 1).toString().padStart(2, "0") + ".zip");
			new AdmZip("./" + a_clock_heritage_data[i].id + "_1920_1080_ss_" + (j + 1).toString().padStart(2, "0") + ".zip").extractAllTo(process.cwd(), true);
			fs.unlinkSync("./" + a_clock_heritage_data[i].id + "_1920_1080_ss_" + (j + 1).toString().padStart(2, "0") + ".zip");
			process.stdout.write(".");
			require("../tools/download")("https://di.update.sony.net/ACLK/wallpaper/" + a_clock_heritage_data[i].id + "/1280_1024/ss/" + a_clock_heritage_data[i].id + "_1280_1024_ss_" + (j + 1).toString().padStart(2, "0") + ".zip");
			new AdmZip("./" + a_clock_heritage_data[i].id + "_1280_1024_ss_" + (j + 1).toString().padStart(2, "0") + ".zip").extractAllTo(process.cwd(), true);
			fs.unlinkSync("./" + a_clock_heritage_data[i].id + "_1280_1024_ss_" + (j + 1).toString().padStart(2, "0") + ".zip");
			process.stdout.write(".");
		};

		// Return and flush
		process.chdir("..");
		console.log("");

	};

});
