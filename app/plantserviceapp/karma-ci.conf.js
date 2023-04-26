module.exports = function(config) {
  config.set({

    frameworks: ["ui5"],

    ui5: {
      url: "https://openui5.hana.ondemand.com"
    },
    browsers: ["ChromeHeadless"],
    customLaunchers: {
      ChromeCustom: {
        base: "ChromeHeadless",
        flags: [
          "--disable-translate",
          "--disable-extensions",
          "--no-sandbox",
          "--user-data-dir=/path/to/user/directory"
        ]
      }
    },
    browsers: ["ChromeCustom"],
    singleRun: true,

  });
};