/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ns/plantserviceapp/test/integration/OpaJourney"
	], function () {
		QUnit.start();
	});
});