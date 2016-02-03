// Copyright (c) 2015-2016 Titanium I.T. LLC. All rights reserved. For license, see "README" or "LICENSE" file.
/* globals sinon:false */

(function() {
	"use strict";

	var assert = require("./assert.js");
	var tabs = require("./tabs.js");

	describe("Tabs", function() {

		var ACTIVE_TAB = "activeClass";
		var HIDDEN_CONTENT = "hideClass";
		var IRRELEVANT = "irrelevant";

		function createFakeElement() {
			return {
				addEventListener: function() {},
				classList: {
					add: function() {},
					remove: function() {}
				}
			};
		}

		it("use a class to hide all content elements except the default upon initialization", sinon.test(function() {
			var defaultTab = createFakeElement();

			var content1 = createFakeElement();
			var defaultContent = createFakeElement();
			var content3 = createFakeElement();

			// Expect every content element to be hidden
			this.mock(content1.classList).expects("add").once().withExactArgs(HIDDEN_CONTENT);
			this.mock(defaultContent.classList).expects("add").once().withExactArgs(HIDDEN_CONTENT);
			this.mock(content3.classList).expects("add").once().withExactArgs(HIDDEN_CONTENT);

			// And then the default content element should be revealed
			this.mock(defaultContent.classList).expects("remove").once().withExactArgs(HIDDEN_CONTENT);

			// No other content elements should be revealed
			this.mock(content1.classList).expects("remove").never();
			this.mock(content3.classList).expects("remove").never();


			tabs.initialize({
				tabs: [ createFakeElement(), defaultTab, createFakeElement() ],
				content: [ content1, defaultContent, content3 ],
				defaultTab: defaultTab,
				activeTabClass: IRRELEVANT,
				hiddenContentClass: HIDDEN_CONTENT
			});
		}));


		//*** REMAINING TESTS LEFT AS AN EXERCISE FOR THE VIEWER ***

		//it("styles the default tab with a class upon initialization", function() {
		//	var tab1 = createTab();
		//	var defaultTab = createTab();
		//	var tab3 = createTab();
		//
		//	var defaultContent = createTabContent();
		//
		//	tabs.initialize({
		//		tabs: [ tab1, defaultTab, tab3 ],
		//		content: [ createTabContent(), defaultContent, createTabContent() ],
		//		defaultTab: defaultTab,
		//		activeTabClass: ACTIVE_TAB,
		//		hiddenContentClass: IRRELEVANT
		//	});
		//
		//	assertTabInactive(tab1, "tab 1 should be hidden");
		//	assertTabActive(defaultTab, "default tab should not be hidden");
		//	assertTabInactive(tab3, "tab 3 should be hidden");
		//});
		//
		//it("switches content when tab is clicked", function() {
		//	var tab1 = createTab();
		//	var tab2 = createTab();
		//	var tab3 = createTab();
		//
		//	var content1 = createTabContent();
		//	var content2 = createTabContent();
		//	var content3 = createTabContent();
		//
		//	tabs.initialize({
		//		tabs: [ tab1, tab2, tab3 ],
		//		content: [ content1, content2, content3 ],
		//		defaultTab: tab1,
		//		activeTabClass: ACTIVE_TAB,
		//		hiddenContentClass: HIDDEN_CONTENT
		//	});
		//
		//	tab2.click();
		//	assertContentVisible(content2, "content2 should be visible after click");
		//	assertTabActive(tab2, "tab2 should be visible after click");
		//
		//	assertContentHidden(content1, "content1 should no longer be visible after click");
		//	assertTabInactive(tab1, "tab1 should no longer be visible after click");
		//
		//	tab3.click();
		//	assertContentVisible(content3, "should be able to click multiple tabs");
		//});
		//
		//it("handles clicks on sub-elements within tabs", function() {
		//	var defaultTab = createTab();
		//
		//	var complexTab = addElement("div");
		//	complexTab.innerHTML = "<a id='link'>link</a>";
		//	var link = document.getElementById("link");
		//
		//	tabs.initialize({
		//		tabs: [ defaultTab, complexTab ],
		//		content: [ createTabContent(), createTabContent() ],
		//		defaultTab: defaultTab,
		//		activeTabClass: ACTIVE_TAB,
		//		hiddenContentClass: IRRELEVANT
		//	});
		//
		//	link.click();
		//	assertTabActive(complexTab);
		//});
		//
		//it("preserves existing classes when adding new classes", function() {
		//	var defaultTab = createTab();
		//	defaultTab.setAttribute("class", "existingTabClass");
		//
		//	var defaultContent = createTabContent();
		//	var hiddenContent = createTabContent();
		//	hiddenContent.setAttribute("class", "existingContentClass");
		//
		//	tabs.initialize({
		//		tabs: [ defaultTab, createTab() ],
		//		content: [ defaultContent, hiddenContent ],
		//		defaultTab: defaultTab,
		//		activeTabClass: "activeTab",
		//		hiddenContentClass: "hiddenContent"
		//	});
		//
		//	assert.equal(getClasses(defaultTab), "existingTabClass activeTab", "tab should preserve existing classes");
		//	assert.equal(getClasses(hiddenContent), "existingContentClass hiddenContent", "content should preserve existing classes");
		//});

	});

}());