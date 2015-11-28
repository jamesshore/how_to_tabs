// Copyright (c) 2015 Titanium I.T. LLC. All rights reserved. For license, see "README" or "LICENSE" file.
(function() {
	"use strict";

	var classList = require("../vendor/classList.js");

	classList.shim();

	exports.initialize = function initialize(options) {
		checkOption(options.tabs, "options.tabs");
		checkOption(options.content, "options.content");
		checkOption(options.defaultTab, "options.defaultTab");
		checkOption(options.activeTabClass, "options.activeTabClass");
		checkOption(options.hiddenContentClass, "options.hiddenContentClass");

		showTab(options.defaultTab, options);
	};

	function showTab(tabToShow, options) {
		var activeIndex = findIndex(options.tabs, tabToShow);
		var contentToShow = options.content[activeIndex];

		options.content.forEach(function(element) {
			element.classList.add(options.hiddenContentClass);
		});

		contentToShow.classList.remove(options.hiddenContentClass);
		tabToShow.classList.add(options.activeTabClass);
	}

	function findIndex(contentTabs, defaultContentTab) {
		for (var i = 0; i < contentTabs.length; i++) {
			if (contentTabs[i] === defaultContentTab) return i;
		}
		throw new Error("Could not find default in list");
	}

	function checkOption(option, name) {
		if (option === undefined) throw new Error("Expected " + name);
	}

}());