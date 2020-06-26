module.exports = function (url, file = require("path").basename(url), dir = ".") {

	const path = require("path");
	const execFileSync = require("child_process").execFileSync;
	const fs = require("fs");

	file = require("./sanitize")(file);
	dir = require("./sanitize")(path.resolve(dir));

	try {
		execFileSync("wget", [url, "-O", file, "-P", dir, "-q"]);
	} catch (e) {
		console.log("wget error, skipping download.");
		fs.unlinkSync(path.resolve(dir, file));
	};

};
