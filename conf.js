

// Read environment variables
const defaultParams = {
    url: "https://cf-dts-integration-de.launchpad.cfapps.eu10.hana.ondemand.com/i538951_service.nssuppliermanagement-1.0.0/index.html#fe-lrop-v4",
    user: "rafael.martin01@sap.com",
    pass: "BlauerPullover4711!"
  };
  
  // Resolve path to specs relative to the working directory
  const path = require('path');
  const specs = path.relative(process.cwd(), path.join(__dirname, 'app/supplier-management/webapp/test/endtoend/masterdetail.spec.js'));
  
  exports.config = {
    profile: 'integration',
    baseUrl: '\${params.url}',
    specs: specs,
    params: defaultParams,
    connectionConfigs: {
      direct: {
          binaries: {
              chromedriver: {
                  version: "108.0.5359.22"
              }
          }
      }
   } // can be overridden via cli `--params.<key>=<value>`
    
  };