module.exports = function (url, json) {

	const execFileSync = require("child_process").execFileSync;

	const response = execFileSync("wget", [url, "-O", "-", "-q"], {
		maxBuffer: 1024 * 1024 * 1024
	}).toString();

	try {
		if (json) return JSON.parse(response);
		          return response;
	} catch (e) {
		throw e;
	};

};
