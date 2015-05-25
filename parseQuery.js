// Url to key/value dictionary

	function split(url) {
		var query = url.split("?", 2)[1];
		var pairs = query.split("&");

		var dictionary = {};
		pairs.forEach(function (pair) {
			var keyValue = decodeURIComponent(pair).split("=", 2);
			dictionary[keyValue[0]] = keyValue[1];
		});

		return dictionary;
	}
