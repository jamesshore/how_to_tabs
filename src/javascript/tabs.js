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

		if (tabs === undefined) throw new Error("Expected options.tabs");
		if (content === undefined) throw new Error("Expected options.content");
		if (defaultElement === undefined) throw new Error("Expected options.default");
		if (activeTabClass === undefined) throw new Error("Expected options.activeTabClass");
		if (contentHideClass === undefined) throw new Error("Expected options.contentHideClass");

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

}());