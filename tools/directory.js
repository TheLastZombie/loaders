module.exports = function (name, silent) {

	const fs = require("fs");

	name = require("./sanitize")(name);

	if (fs.existsSync(name)) {
		if (silent) {
			process.chdir(name);
		} else {
			throw "Directory '" + name + "' already exists!";
		};
	} else {
		fs.mkdirSync(name);
		process.chdir(name);
	};

};
