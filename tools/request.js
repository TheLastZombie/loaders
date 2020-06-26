module.exports = function (url) {

	const execFileSync = require("child_process").execFileSync;

	try {
		return execFileSync("wget", [url, "-O", "-", "-q"]).toString();
	} catch (e) {
		throw e;
	};

};
