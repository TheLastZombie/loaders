module.exports = function (url, json) {

	const execFileSync = require("child_process").execFileSync;

	try {
		if (json) {
			return JSON.parse(execFileSync("wget", [url, "-O", "-", "-q"]).toString());
		} else {
			return execFileSync("wget", [url, "-O", "-", "-q"]).toString();
		};
	} catch (e) {
		throw e;
	};

};
