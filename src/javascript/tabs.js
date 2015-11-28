// Copyright (c) 2015 Titanium I.T. LLC. All rights reserved. For license, see "README" or "LICENSE" file.
(function() {
	"use strict";

	var classList = require("../vendor/classList.js");

	classList.shim();

	exports.initialize = function initialize(options) {
		var tabs = options.tabs;
		var content = options.content;
		var defaultElement = options.default;
		var activeTabClass = options.activeTabClass;
		var contentHideClass = options.contentHideClass;

		checkOption(tabs, "options.tabs");
		checkOption(content, "options.content");
		checkOption(defaultElement, "options.defaultElement");
		checkOption(activeTabClass, "options.activeTabClass");
		checkOption(contentHideClass, "options.contentHideClass");

		content.forEach(function(element) {
			element.classList.add(contentHideClass);
		});
		defaultElement.classList.remove(contentHideClass);

		var activeIndex = findIndexOfDefaultElement(content, defaultElement);
		tabs[activeIndex].classList.add(activeTabClass);
	};

	function findIndexOfDefaultElement(contentTabs, defaultContentTab) {
		for (var i = 0; i < contentTabs.length; i++) {
			if (contentTabs[i] === defaultContentTab) return i;
		}
		throw new Error("Could not find default in list");
	}

	function checkOption(option, name) {
		if (option === undefined) throw new Error("Expected " + name);
	}

}());