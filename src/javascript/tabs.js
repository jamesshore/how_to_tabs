// Copyright (c) 2015 Titanium I.T. LLC. All rights reserved. For license, see "README" or "LICENSE" file.
(function() {
	"use strict";

	var classList = require("../vendor/classList.js");

	classList.shim();

	exports.initialize = function initialize(options) {
		var content = options.content;
		var defaultElement = options.default;
		var contentHideClass = options.contentHideClass;

		if (content === undefined) throw new Error("Expected options.content");
		if (defaultElement === undefined) throw new Error("Expected options.default");
		if (contentHideClass === undefined) throw new Error("Expected options.contentHideClass");

		content.forEach(function(element) {
			element.classList.add(contentHideClass);
		});
		defaultElement.classList.remove(contentHideClass);
	};

}());