// Copyright (c) 2015 Titanium I.T. LLC. All rights reserved. For license, see "README" or "LICENSE" file.
(function() {
	"use strict";

	var classList = require("../vendor/classList.js");

	classList.shim();

	exports.initialize = function initialize(elementList, className) {
		elementList.forEach(function(element) {
			element.classList.add(className);
		});
	};

}());