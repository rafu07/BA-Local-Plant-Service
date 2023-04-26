

sap.ui.define(['sap/ui/test/opaQunit'], function(opaTest) {
    'use strict';

    var Journey = {
        run: function() {
            QUnit.module('Sample journey');

            opaTest('#000: Start', function(Given, When, Then) {
                Given.iResetTestData().and.iStartMyApp();
            });

        }
    };

    return Journey;
});
