// Copyright (c) 2015 Titanium I.T. LLC. All rights reserved. For license, see "README" or "LICENSE" file.
(function() {
	"use strict";

	var addition = require("./addition.js");

	describe("Addition", function() {

		it("adds positive numbers", function() {
			assertEqual(addition.add(3, 4), 7);
		});

		it("uses IEEE 754 floating point", function() {
			assertEqual(addition.add(0.1, 0.2), 0.30000000000000004);
		});

		function assertEqual(actual, expected) {
			if (actual !== expected) throw new Error("expected " + expected + ", but was " + actual);
		}

	});

}());