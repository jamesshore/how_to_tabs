// Copyright (c) 2015 Titanium I.T. LLC. All rights reserved. For license, see "README" or "LICENSE" file.
(function() {
	"use strict";

	var assert = require("./assert.js");
	var tabs = require("./tabs.js");

	describe("Tabs", function() {

		it("hides an element", function() {
			var element = addElement("div");
			tabs.initialize(element);
			assert.equal(getDisplayProperty(element), "none");
			removeElement(element);
		});

		function addElement(tagName) {
			var element = document.createElement(tagName);
			document.body.appendChild(element);
			return element;
		}

		function getDisplayProperty(element) {
			var styles = getComputedStyle(element);
			return styles.getPropertyValue("display");
		}

		function removeElement(element) {
			element.parentNode.removeChild(element);
		}

	});

}());