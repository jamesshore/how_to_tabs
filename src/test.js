// Copyright (c) 2015 Titanium I.T. LLC. All rights reserved. For license, see "README" or "LICENSE" file.
(function() {
	"use strict";

	assertEqual(add(3, 4), 7);

	function add(a, b) {
		return a + b;
	}

	function assertEqual(actual, expected) {
		if (actual !== expected) throw new Error("Expected " + expected + ", but got " + actual);
	}

}());