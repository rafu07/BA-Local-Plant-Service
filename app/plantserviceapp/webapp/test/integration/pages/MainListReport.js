sap.ui.define(['sap/fe/test/ListReport', 'sap/ui/test/OpaBuilder', 'sap/ui/test/Opa5'], function(ListReport, OpaBuilder, Opa5) {
    'use strict';
    return new ListReport(
        {
            appId: 'ns.plantserviceapp',
            componentId: 'PlantsList',
            entitySet: 'Plants'
        },
    );
});
