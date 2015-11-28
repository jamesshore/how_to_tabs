// Copyright (c) 2015 Titanium I.T. LLC. All rights reserved. For license, see "README" or "LICENSE" file.
/* globals jake:false, desc:false, task:false, complete:false, fail:false, directory:false */

(function() {
	"use strict";

	var semver = require("semver");
	var jshint = require("simplebuild-jshint");
	var karma = require("simplebuild-karma");
	var shell = require("shelljs");

	var KARMA_CONFIG = "karma.conf.js";
	var DIST_DIR = "generated/dist";

	//**** General-purpose tasks

	desc("Start the Karma server (run this first)");
	task("karma", function() {
		console.log("Starting Karma server:");
		karma.start({
			configFile: KARMA_CONFIG
		}, complete, fail);
	}, { async: true });

	desc("Default build");
	task("default", [ "version", "lint", "test" ], function() {
		console.log("\n\nBUILD OK");
	});

	desc("Run a localhost server");
	task("run", [ "build" ], function() {
		jake.exec("node node_modules/http-server/bin/http-server " + DIST_DIR, { interactive: true }, complete);
	}, { async: true });

	desc("Erase all generated files");
	task("clean", function() {
		console.log("Erasing generated files: .");
		shell.rm("-rf", "generated");
	});


	//**** Supporting tasks

	desc("Check Node version");
	task("version", function() {
		console.log("Checking Node version: .");

		var packageJson = require("./package.json");
		var expectedVersion = packageJson.engines.node;

		var actualVersion = process.version;
		if (semver.neq(expectedVersion, actualVersion)) {
			fail("Incorrect Node version: expected " + expectedVersion + ", but was " + actualVersion);
		}
	});

	desc("Lint JavaScript code");
	task("lint", function() {
		process.stdout.write("Linting JavaScript: ");

		jshint.checkFiles({
			files: [ "Jakefile.js", "src/javascript/**/*.js" ],
			options: lintOptions(),
			globals: lintGlobals()
		}, complete, fail);
	}, { async: true });

	desc("Run tests");
	task("test", function() {
		console.log("Testing JavaScript:");
		karma.run({
			configFile: KARMA_CONFIG,
			expectedBrowsers: [
				"Firefox 42.0.0 (Mac OS X 10.10.0)",
				"Chrome 46.0.2490 (Mac OS X 10.10.5)",
				"IE 11.0.0 (Windows 7 0.0.0)",
				"IE 9.0.0 (Windows 7 0.0.0)",
				"Safari 9.0.1 (Mac OS X 10.10.5)",
				"Mobile Safari 8.0.0 (iOS 8.4.0)",
				"Chrome Mobile 44.0.2403 (Android 6.0.0)"
			],
			strict: !process.env.loose
		}, complete, fail);
	}, { async: true });

	desc("Build distribution directory");
	task("build", [ DIST_DIR ], function() {
		console.log("Building distribution directory: .");

		shell.rm("-rf", DIST_DIR + "/*");
		shell.cp("src/content/*", DIST_DIR);

		jake.exec(
			"node node_modules/browserify/bin/cmd.js src/javascript/app.js -o " + DIST_DIR + "/bundle.js",
			{ interactive: true },
			complete);
	}, { async: true });

	directory(DIST_DIR);



	function lintOptions() {
		return {
			bitwise: true,
			eqeqeq: true,
			forin: true,
			freeze: true,
			futurehostile: true,
			latedef: "nofunc",
			noarg: true,
			nocomma: true,
			nonbsp: true,
			nonew: true,
			strict: true,
			undef: true,

			node: true,
			browser: true
		};
	}

	function lintGlobals() {
		return {
			// Mocha
			describe: false,
			it: false,
			before: false,
			after: false,
			beforeEach: false,
			afterEach: false
		};
	}

}());