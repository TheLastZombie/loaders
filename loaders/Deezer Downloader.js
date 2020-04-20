const request = require("request");
const crypto = require("crypto");

// var id = "12345";

request({
	url: "https://www.deezer.com/ajax/gw-light.php?method=deezer.ping&api_version=1.0&api_token",
	headers: {
		"Cookie": "arl=79437723c0024e17559a2f26b2d5023373506cdadd5e29dceda8c7b0aa03accaa40b4b17e8f8d21743edef40a2a16fca3511b5be4ca15c26c871082543c08893c0dd89f0d415378957e05179b3e7ec2c93625d5a8cf2d51a0d177de1a9833aff"
	}
}, function (error, response, body) {

	if (error) throw error;

	request({
		method: "POST",
		url: "https://api.deezer.com/1.0/gateway.php?method=song.getData&api_key=ZAIVAHCEISOHWAICUQUEXAEPICENGUAFAEZAIPHAELEEVAHPHUCUFONGUAPASUAY&input=3&output=3&sid=" + JSON.parse(body).results.SESSION,
		headers: {
			"User-Agent": "User-Agent: Deezer/7.17.0.2 CFNetwork/1098.6 Darwin/19.0.0",
			"Cache-Control": "max-age=0",
			"Accept-Language": "en-US,en;q=0.9,en-US;q=0.8,en;q=0.7",
			"Accept-Charset": "utf-8,ISO-8859-1;q=0.8,*;q=0.7",
			"Content-Type": "text/plain;charset=UTF-8",
		},
		json: {
			sng_id: id
		}
	}, function (error, response, body) {

		if (error) throw error;

		results = body.results;

		results.MD5_ORIGIN = results.PUID;

		if (results.SNG_ID == undefined) throw "No song with this ID was found.";

		var quality;

		if (results.FILESIZE_MP3_128 != 0) quality = 1;
		if (results.FILESIZE_MP3_256 != 0) quality = 5;
		if (results.FILESIZE_MP3_320 != 0) quality = 3;
		if (results.FILESIZE_FLAC != 0) quality = 9;

		if (quality == undefined) throw "Song appears to be unavailable.";

		var step1 = [results.MD5_ORIGIN, quality, results.SNG_ID, results.MEDIA_VERSION].join("¤");
		var step2 = crypto.createHash("md5").update(step1, "ascii").digest("hex") + "¤" + step1 + "¤";
		while (step2.length % 16 > 0) step2 += " ";
		var step3 = crypto.createCipheriv("aes-128-ecb", "jo6aey6haid2Teih", "").update(step2, "ascii", "hex");

		request({
			url: "http://e-cdn-proxy-" + results.PUID[0] + ".deezer.com/mobile/1/" + step3,
			encoding: null
		}, function (error, response, body) {

			if (error) throw error;

			var chunksize;

			var checksum = crypto.createHash("md5");
			checksum.update(Buffer.from(results.SNG_ID.toString(), "ascii"));
			checksum = checksum.digest("hex");

			var blowfish = "";
			for (let i = 0; i < 16; i++) {
				blowfish += String.fromCharCode(checksum.charCodeAt(i) ^ checksum.charCodeAt(i + 16) ^ "g4el58wc0zvf9na1".charCodeAt(i));
			};

			var i = 0;
			var position = 0;

			var destbuffer = Buffer.alloc(body.length);
			destbuffer.fill(0);

			while (position < body.length) {

				var chunk;

				if ((body.length - position) >= 2048) {
					chunksize = 2048;
				} else {
					chunksize = body.length - position;
				};

				chunk = Buffer.alloc(chunksize);

				var chunkstring;

				chunk.fill(0);

				body.copy(chunk, 0, position, position + chunksize);

				if (i % 3 > 0 || chunksize < 2048) {
					chunkstring = chunk.toString("binary");
				} else {
					var cipher = crypto.createDecipheriv("bf-cbc", blowfish, Buffer.from([0, 1, 2, 3, 4, 5, 6, 7]));
					cipher.setAutoPadding(false);
					chunkstring = cipher.update(chunk, "binary", "binary") + cipher.final();
				};

				destbuffer.write(chunkstring, position, chunkstring.length, "binary");

				position += chunksize;
				i++;

			};

			// console.log(destbuffer);

		});

	});

});
