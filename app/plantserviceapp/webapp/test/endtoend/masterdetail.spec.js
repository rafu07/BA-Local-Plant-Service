describe('exampleSpec', function () {
  beforeAll(() => {  
      const cookieSettingsDialog = element(by.control({
          controlType: "sap.m.Dialog",
          properties: {title: "Your Cookie Settings"}
      }));
      const acceptAllButton = cookieSettingsDialog.element(by.control({
          controlType: "sap.m.Button",
          properties: {text: "Accept All"}
      }));

      acceptAllButton.click()
  });

  beforeEach(() => {  });

  afterEach(() => {  });

  afterAll(() => {  });

  it('Check Change Version Dialog opening', function () {
      // get button by bindingPath
      const changeVersionButton = element(by.control({
          controlType: "sap.m.Button",
          bindingPath: {
              modelName: "appView",
              propertyPath: "/bShowVersionSwitchInHeader"
          }
      }));
      const changeVersionDialog = element(by.control({
          controlType: "sap.m.Dialog",
          properties: {title: "Change Version"}
      }));

      changeVersionButton.click();
      expect(changeVersionDialog.isDisplayed()).toBeTruthy()
  });
});