module.exports = function (url, file = require("path").basename(url), dir = ".", args = []) {

	const path = require("path");
	const execFileSync = require("child_process").execFileSync;
	const fs = require("fs");

	file = require("./sanitize")(file);
	dir = require("./sanitize")(dir);
	file = path.resolve(dir, file);

	if (!fs.existsSync(dir)) fs.mkdirSync(dir);

	try {
		execFileSync("wget", [url, "-O", file, "-q", ...args]);
	} catch (e) {
		console.log("wget error, skipping download.");
	};

};
