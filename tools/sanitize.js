module.exports = function (input, replacement = "_") {

	const sanitize = require("sanitize-filename");

	return sanitize(input, {
		replacement: replacement
	});

};
