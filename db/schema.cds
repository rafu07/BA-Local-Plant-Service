namespace sap.ui.plantmanagement;

using {managed} from '@sap/cds/common';

entity Plants : managed {
  key ID           : UUID @(Core.Computed: true);
      name         : String(100);
      organization : String(100);
      house_number : String;
      street       : String;
      post_code    : String;
      city         : String;
      country      : String;
      supplier     : Association to one Suppliers
                       on supplier.plant = $self;
}

entity Suppliers : managed {
  key ID              : UUID @(Core.Computed: true);
      name            : String(100);
      industry_sector : String(100);
      city            : String;
      country         : String;
      plant           : Association to Plants
}
