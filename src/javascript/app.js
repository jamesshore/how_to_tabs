// Copyright (c) 2015 Titanium I.T. LLC. All rights reserved. For license, see "README" or "LICENSE" file.
(function() {
	"use strict";

	var tabs = require("./tabs.js");

	document.addEventListener("DOMContentLoaded", function() {
		var tab1 = document.getElementById("tab1");
		var tab2 = document.getElementById("tab2");
		var tab3 = document.getElementById("tab3");

		var content1 = document.getElementById("content1");
		var content2 = document.getElementById("content2");
		var content3 = document.getElementById("content3");

		tabs.initialize({
			tabs: [ tab1, tab2, tab3 ],
			content: [ content1, content2, content3 ],
			defaultTab: tab1,
			activeTabClass: "active",
			hiddenContentClass: "hidden"
		});
	});


}());