

// Read environment variables
const defaultParams = {
    url: "https://openui5.hana.ondemand.com/api/",
  };
  
  // Resolve path to specs relative to the working directory
  const path = require('path');
  const specs = path.relative(process.cwd(), path.join(__dirname, 'app/plantserviceapp/webapp/test/endtoend/masterdetail.spec.js'));
  
  exports.config = {
    profile: 'integration',
    baseUrl: '\${params.url}',
    specs: specs,
    params: defaultParams,

  };