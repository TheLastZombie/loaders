// Show header
console.log("Heritage Downloader v1.0");
console.log("");

// Import dependencies
console.log("Importing dependencies...");
const fs = require("fs");
const request = require("request");
const _ = require("lodash");
const sanitize = require("sanitize-filename");
const exec = require("child_process").execFileSync;
const AdmZip = require("adm-zip");

// Create directory
if (fs.existsSync("Heritage Downloader")) {
	console.log("Directory already exists! Aborting...");
	return;
} else {
	console.log("Creating download directory...");
	fs.mkdirSync("Heritage Downloader");
	process.chdir("Heritage Downloader");
};

// Get heritage database
console.log("Retrieving heritage database...");
console.log("");
request("https://www.sony.net/united/clock/assets/js/heritage_data.js", function (error, response, body) {
	eval(body);

	// Do for each heritage
	for (i = 0; i < _.size(a_clock_heritage_data); i++) {
		process.stdout.write("Downloading " + (i + 1) + "/" + _.size(a_clock_heritage_data) + " (" + a_clock_heritage_data[i].id + ").");
		fs.mkdirSync(sanitize(a_clock_heritage_data[i].name.en, {
			replacement: "_"
		}));
		process.chdir(sanitize(a_clock_heritage_data[i].name.en, {
			replacement: "_"
		}));

		// Download music
		if (a_clock_heritage_data[i].music) {
			exec("wget", ["-q", "https://www.sony.net/united/clock/assets/sound/theme_song_of_world_heritage_" + a_clock_heritage_data[i].music + ".mp3"]);
			process.stdout.write(".");
		};

		// Download soundscape
		if (a_clock_heritage_data[i].soundscape) {
			exec("wget", ["-q", "https://www.sony.net" + a_clock_heritage_data[i].soundscape.media.mp3]);
			process.stdout.write(".");
		};

		// Download photos
		for (j = 0; j < 12; j++) {
			exec("wget", ["-q", "https://di.update.sony.net/ACLK/wallpaper/" + a_clock_heritage_data[i].id + "/3840_2160/fp/" + a_clock_heritage_data[i].id + "_3840_2160_fp_" + _.padStart(j + 1, 2, 0) + ".zip"]);
			new AdmZip("./" + a_clock_heritage_data[i].id + "_3840_2160_fp_" + _.padStart(j + 1, 2, 0) + ".zip").extractAllTo(process.cwd(), true);
			fs.unlinkSync("./" + a_clock_heritage_data[i].id + "_3840_2160_fp_" + _.padStart(j + 1, 2, 0) + ".zip");
			process.stdout.write(".");
			exec("wget", ["-q", "https://di.update.sony.net/ACLK/wallpaper/" + a_clock_heritage_data[i].id + "/1920_1200/fp/" + a_clock_heritage_data[i].id + "_1920_1200_fp_" + _.padStart(j + 1, 2, 0) + ".zip"]);
			new AdmZip("./" + a_clock_heritage_data[i].id + "_1920_1200_fp_" + _.padStart(j + 1, 2, 0) + ".zip").extractAllTo(process.cwd(), true);
			fs.unlinkSync("./" + a_clock_heritage_data[i].id + "_1920_1200_fp_" + _.padStart(j + 1, 2, 0) + ".zip");
			process.stdout.write(".");
			exec("wget", ["-q", "https://di.update.sony.net/ACLK/wallpaper/" + a_clock_heritage_data[i].id + "/1920_1080/fp/" + a_clock_heritage_data[i].id + "_1920_1080_fp_" + _.padStart(j + 1, 2, 0) + ".zip"]);
			new AdmZip("./" + a_clock_heritage_data[i].id + "_1920_1080_fp_" + _.padStart(j + 1, 2, 0) + ".zip").extractAllTo(process.cwd(), true);
			fs.unlinkSync("./" + a_clock_heritage_data[i].id + "_1920_1080_fp_" + _.padStart(j + 1, 2, 0) + ".zip");
			process.stdout.write(".");
			exec("wget", ["-q", "https://di.update.sony.net/ACLK/wallpaper/" + a_clock_heritage_data[i].id + "/1280_1024/fp/" + a_clock_heritage_data[i].id + "_1280_1024_fp_" + _.padStart(j + 1, 2, 0) + ".zip"]);
			new AdmZip("./" + a_clock_heritage_data[i].id + "_1280_1024_fp_" + _.padStart(j + 1, 2, 0) + ".zip").extractAllTo(process.cwd(), true);
			fs.unlinkSync("./" + a_clock_heritage_data[i].id + "_1280_1024_fp_" + _.padStart(j + 1, 2, 0) + ".zip");
			process.stdout.write(".");
		};

		// Download snapshots
		for (j = 0; j < 10; j++) {
			exec("wget", ["-q", "https://di.update.sony.net/ACLK/wallpaper/" + a_clock_heritage_data[i].id + "/3840_2160/ss/" + a_clock_heritage_data[i].id + "_3840_2160_ss_" + _.padStart(j + 1, 2, 0) + ".zip"]);
			new AdmZip("./" + a_clock_heritage_data[i].id + "_3840_2160_ss_" + _.padStart(j + 1, 2, 0) + ".zip").extractAllTo(process.cwd(), true);
			fs.unlinkSync("./" + a_clock_heritage_data[i].id + "_3840_2160_ss_" + _.padStart(j + 1, 2, 0) + ".zip");
			process.stdout.write(".");
			exec("wget", ["-q", "https://di.update.sony.net/ACLK/wallpaper/" + a_clock_heritage_data[i].id + "/1920_1200/ss/" + a_clock_heritage_data[i].id + "_1920_1200_ss_" + _.padStart(j + 1, 2, 0) + ".zip"]);
			new AdmZip("./" + a_clock_heritage_data[i].id + "_1920_1200_ss_" + _.padStart(j + 1, 2, 0) + ".zip").extractAllTo(process.cwd(), true);
			fs.unlinkSync("./" + a_clock_heritage_data[i].id + "_1920_1200_ss_" + _.padStart(j + 1, 2, 0) + ".zip");
			process.stdout.write(".");
			exec("wget", ["-q", "https://di.update.sony.net/ACLK/wallpaper/" + a_clock_heritage_data[i].id + "/1920_1080/ss/" + a_clock_heritage_data[i].id + "_1920_1080_ss_" + _.padStart(j + 1, 2, 0) + ".zip"]);
			new AdmZip("./" + a_clock_heritage_data[i].id + "_1920_1080_ss_" + _.padStart(j + 1, 2, 0) + ".zip").extractAllTo(process.cwd(), true);
			fs.unlinkSync("./" + a_clock_heritage_data[i].id + "_1920_1080_ss_" + _.padStart(j + 1, 2, 0) + ".zip");
			process.stdout.write(".");
			exec("wget", ["-q", "https://di.update.sony.net/ACLK/wallpaper/" + a_clock_heritage_data[i].id + "/1280_1024/ss/" + a_clock_heritage_data[i].id + "_1280_1024_ss_" + _.padStart(j + 1, 2, 0) + ".zip"]);
			new AdmZip("./" + a_clock_heritage_data[i].id + "_1280_1024_ss_" + _.padStart(j + 1, 2, 0) + ".zip").extractAllTo(process.cwd(), true);
			fs.unlinkSync("./" + a_clock_heritage_data[i].id + "_1280_1024_ss_" + _.padStart(j + 1, 2, 0) + ".zip");
			process.stdout.write(".");
		};

		// Return and flush
		process.chdir("..");
		console.log("");
	};
});