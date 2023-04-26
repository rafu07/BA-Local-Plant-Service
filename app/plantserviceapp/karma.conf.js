module.exports = function(config) {
  config.set({

    frameworks: ["ui5"],

    ui5: {
      url: "https://openui5.hana.ondemand.com"
    },
    
    customLaunchers: {
      ChromeCustom: {
        base: "ChromeHeadless",
        flags: [
          "--disable-translate",
          "--disable-extensions",
          "--no-sandbox",
        ]
      }
    },
    browsers: ["ChromeCustom"],
    singleRun: true,
  });
};