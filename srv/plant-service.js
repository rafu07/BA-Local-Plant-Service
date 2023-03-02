
const cds = require("@sap/cds");
module.exports = async (srv) => {
    const {Suppliers} = srv.entities;
    const messaging = await cds.connect.to("messaging");

    messaging.on('dts/I538951mc/I538951/topic2', async msg => {
        const data = msg.data
        await INSERT.into(Suppliers).columns('ID','name','industry_sector', 'city', 'country', 'plant_id').values([data.ID, data.name, data.industry_sector,data.city, data.country, data.plant_id])        
    })


}