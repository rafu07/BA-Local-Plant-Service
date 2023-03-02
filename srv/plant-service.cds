using { sap.ui.plantmanagement as my } from '../db/schema';

@path: 'service/plant'
service PlantService {
  entity Plants as projection on my.Plants;
  entity Suppliers as projection on my.Suppliers;
}