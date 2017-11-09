/**
 * Initialization Code and shared classes of library cirrus.ui5.
 */
sap.ui.define([
	'jquery.sap.global', 
	'sap/ui/core/library' // library dependency
	],  function(jQuery, library) {

		"use strict";

		/**
		 * Suite controls library.
		 *
		 * @namespace
		 * @name custom.ui5
		 * @author Milan Nankov
		 * @version ${version}
		 * @public
		 */
		
		// delegate further initialization of this library to the Core
		sap.ui.getCore().initLibrary({
			name : "custom.ui5",
			noLibraryCSS: false,
			version: "${version}",
			dependencies : ["sap.ui.core", "sap.m"],
			types: [],
			interfaces: [],
			controls: [ 
				"custom.ui5.customControl"
			],
			elements: []
		});

		return custom.ui5;

}, /* bExport= */ false);