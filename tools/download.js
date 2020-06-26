module.exports = function (url, file = require("path").basename(url), dir = ".") {

	const path = require("path");
	const execFileSync = require("child_process").execFileSync;
	const sanitize = require("sanitize-filename");
	const fs = require("fs");

	dir = path.resolve(dir);

	try {
		execFileSync("wget", [url, "-O", sanitize(file, {
			replacement: "_"
		}), "-P", dir, "-q"]);
	} catch (e) {
		console.log("wget error, skipping download.");
		fs.unlinkSync(path.resolve(dir, sanitize(file, {
			replacement: "_"
		})));
	};

};
