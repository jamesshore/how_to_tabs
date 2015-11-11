// Copyright (c) 2015 Titanium I.T. LLC. All rights reserved. For license, see "README" or "LICENSE" file.
(function() {
	"use strict";

	exports.initialize = function initialize(element, className) {
		var classes = element.getAttribute("class");

		if (classes === null) classes = className;
		else classes += " " + className;

		element.setAttribute("class", classes);
	};

}());