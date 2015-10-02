// Copyright (c) 2015 Titanium I.T. LLC. All rights reserved. For license, see "README" or "LICENSE" file.
(function() {
	"use strict";

	var assert = require("./assert.js");
	var tabs = require("./tabs.js");

	describe("Tabs", function() {

		it("hides an element", function() {
			// Arrange
			var element = document.createElement("div");

			// Act
			tabs.initialize(element);

			// Assert
			var styles = getComputedStyle(element);
			var display = styles.getPropertyValue("display");

			assert.equal(display, "none");

			// Reset
			// remove the test element




			//var div = document.createElement("div");
			//div.innerHTML = "This is an example.";
			//document.body.appendChild(div);
			//div.parentNode.removeChild(div);
		});

	});

}());