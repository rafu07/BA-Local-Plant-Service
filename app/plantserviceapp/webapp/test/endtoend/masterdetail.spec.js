describe('masterdetail', function () {

    it('should load the app',function() {
      expect(browser.getTitle()).toBe('Supplier Management');
    });
  
    it('should display the details screen', function () {
        element(by.control({
            id: "ns.suppliermanagement::SuppliersList--fe::FilterBar::Suppliers-btnSearch",
            controlType: 'sap.m.Button',
        })).click();

  });

})