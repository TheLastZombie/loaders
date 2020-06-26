module.exports = function (name) {

	const fs = require("fs");

	if (fs.existsSync(name)) {
		throw "Download directory already exists!";
	} else {
		console.log("Creating download directory...");
		fs.mkdirSync(name);
		process.chdir(name);
	};

};
