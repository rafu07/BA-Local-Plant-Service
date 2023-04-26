sap.ui.define(['sap/fe/test/ObjectPage','sap/ui/test/OpaBuilder', 'sap/ui/test/Opa5'], function(ObjectPage, OpaBuilder, Opa5) {
    'use strict';
    return new ObjectPage(
        {
            appId: 'ns.plantserviceapp', // MANDATORY: Compare sap.app.id in manifest.json
            componentId: 'PlantsObjectPage', // MANDATORY: Compare sap.ui5.routing.targets.id in manifest.json
            entitySet: 'Plants' // MANDATORY: Compare entityset in manifest.json
        }    );
});