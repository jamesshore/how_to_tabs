// Copyright (c) 2015 Titanium I.T. LLC. All rights reserved. For license, see "README" or "LICENSE" file.
(function() {
	"use strict";

	var assert = require("./assert.js");

	describe("Something", function() {

		it("something", function() {

			var div = document.createElement("div");

			div.innerHTML = "This is an example.";

			document.body.appendChild(div);


			var p = document.createElement("p");
			p.innerHTML = "This is an embedded paragraph";
			div.appendChild(p);



			div.parentNode.removeChild(div);

		});

	});

}());