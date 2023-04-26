//@ui5-bundle ns/plantserviceapp/Component-preload.js
jQuery.sap.registerPreloadedModules({
"version":"2.0",
"modules":{
	"ns/plantserviceapp/Component.js":function(){sap.ui.define(["sap/fe/core/AppComponent"],function(e){"use strict";return e.extend("ns.plantserviceapp.Component",{metadata:{manifest:"json"}})});
},
	"ns/plantserviceapp/i18n/i18n.properties":'# This is the resource bundle for plantserviceapp\r\n\r\n#Texts for manifest.json\r\n\r\n#XTIT: Application name\r\nappTitle=Plants\r\n\r\n#YDES: Application description\r\nappDescription=App for Plant Service\r\n',
	"ns/plantserviceapp/manifest.json":'{"_version":"1.32.0","sap.app":{"id":"ns.plantserviceapp","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"1.0.0"},"crossNavigation":{"inbounds":{"fe-inbound":{"signature":{"parameters":{},"additionalParameters":"allowed"},"semanticObject":"Sample","action":"display","title":"CAP Sample App","subTitle":"","icon":""}}},"title":"{{appTitle}}","description":"{{appDescription}}","dataSources":{"mainService":{"uri":"service/plant/","type":"OData","settings":{"odataVersion":"4.0"}}},"offline":false,"resources":"resources.json","sourceTemplate":{"id":"ui5template.fiorielements.v4.lrop","version":"1.0.0"}},"sap.cloud":{"public":true,"service":"i538951_service_p"},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"resources":{"js":[],"css":[]},"dependencies":{"minUI5Version":"1.109.3","libs":{"sap.ui.core":{},"sap.fe.templates":{}}},"models":{"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"},"i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"},"":{"dataSource":"mainService","preload":true,"settings":{"synchronizationMode":"None","operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}}},"routing":{"routes":[{"pattern":":?query:","name":"PlantsList","target":"PlantsList"},{"pattern":"Plants({key}):?query:","name":"PlantsObjectPage","target":"PlantsObjectPage"}],"targets":{"PlantsList":{"type":"Component","id":"PlantsList","name":"sap.fe.templates.ListReport","options":{"settings":{"entitySet":"Plants","variantManagement":"Page","navigation":{"Plants":{"detail":{"route":"PlantsObjectPage"}}}}}},"PlantsObjectPage":{"type":"Component","id":"PlantsObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"entitySet":"Plants"}}}}},"contentDensities":{"compact":true,"cozy":true}},"sap.platform.abap":{"_version":"1.1.0","uri":""},"sap.platform.hcp":{"_version":"1.1.0","uri":""},"sap.fiori":{"_version":"1.1.0","registrationIds":[],"archeType":"transactional"}}'
}});
