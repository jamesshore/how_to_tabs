// Copyright (c) 2015 Titanium I.T. LLC. All rights reserved. For license, see "README" or "LICENSE" file.
(function() {
	"use strict";

	var addition = require("./addition.js");
	var assert = require("./assert.js");

	describe("Addition", function() {

		it("adds positive numbers", function() {
			assert.equal(addition.add(3, 4), 7);
		});

		it("uses IEEE 754 floating point", function() {
			assert.equal(addition.add(0.1, 0.2), 0.30000000000000004);
		});

	});


	describe("Subtraction", function() {

		it("subtracts positive numbers", function() {
			assert.equal(addition.subtract(10, 3), 7);
		});

	});

}());