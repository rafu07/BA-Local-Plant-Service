sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'ns/plantserviceapp/test/integration/pages/MainListReport' ,
        'ns/plantserviceapp/test/integration/pages/MainObjectPage',
        'ns/plantserviceapp/test/integration/OpaJourney'
    ],
    function(JourneyRunner, MainListReport, MainObjectPage, Journey) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('ns/plantserviceapp') + '/index.html'
        });

        JourneyRunner.run(
            {
                pages: { onTheMainPage: MainListReport, onTheDetailPage: MainObjectPage }
            },
            Journey.run
        );
    }
);        
