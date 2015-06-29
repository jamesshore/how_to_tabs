// Copyright (c) 2015 Titanium I.T. LLC. All rights reserved. For license, see "README" or "LICENSE" file.
(function() {
	"use strict";

	desc("Default build");
	task("default", [ "version" ], function() {
		console.log("\n\nBUILD OK");
	});

	desc("Check Node version");
	task("version", function() {
		console.log("Checking Node version: .");

		var packageJson = require("./package.json");
		var expectedVersion = "v" + packageJson.engines.node;

		var actualVersion = process.version;
		if (actualVersion !== expectedVersion) {
			fail("Incorrect Node version: expected " + expectedVersion + ", but was " + actualVersion);
		}
	});

}());