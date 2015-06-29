// Copyright (c) 2015 Titanium I.T. LLC. All rights reserved. For license, see "README" or "LICENSE" file.
(function() {
	"use strict";

	var EXPECTED_NODE_VERSION = "v0.12.4";

	desc("Default build");
	task("default", [ "version" ], function() {
		console.log("\n\nBUILD OK");
	});

	desc("Check Node version");
	task("version", function() {
		console.log("Checking Node version: .");

		var actualVersion = process.version;
		if (actualVersion !== EXPECTED_NODE_VERSION) {
			fail("Incorrect Node version: expected " + EXPECTED_NODE_VERSION + ", but was " + actualVersion);
		}
	});

}());