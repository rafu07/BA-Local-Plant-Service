sap.ui.define([
	"sap/ui/test/Opa5",
	"sap/ui/test/actions/Press"
], function (Opa5, Press) {
	"use strict";

	Opa5.createPageObjects({
		onTheAppPage: {
			actions: {
				iPressGoButton: function () {
					return this.waitFor({
						id: "ns.suppliermanagement::SuppliersList--fe::FilterBar::Suppliers-btnSearch-BDI-content",
						actions: new Press(),
						errorMessage: "Did not find the 'Say Hello With Dialog' button on the HelloPanel view"
					});
				}
			},

			assertions: {
				iShouldSeeLineItem: function () {
					return this.waitFor({
						controlType: "sap.m.ColumnListItem",
						success: function () {
							// we set the view busy, so we need to query the parent of the app
							Opa5.assert.ok(true, "The dialog is open");
						},
						errorMessage: "Did not find the dialog control"
					});
				}
			}
		}
	});
});