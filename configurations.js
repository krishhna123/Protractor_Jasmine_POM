var Jasmine2HtmlReporter = require("protractor-jasmine2-html-reporter");

exports.config = {
  seleniumAddress: "http://localhost:4444/wd/hub",
  specs: ["PracticeProject.js"],

  //script will automatically trigger execution in chrome browser
  //to run on firefox, provide capabilites
  //to run on internet explorer, do webdriver-manager update --ie
  // capabilities : {
  //     browserName : 'firefox'
  // }
  onPrepare: function () {
    browser.driver.manage().window().maximize();
    browser.waitForAngularEnabled(false);
    jasmine.getEnv().addReporter(
      new Jasmine2HtmlReporter({
        savePath: "target/screenshots",
      })
    );
  },
  jasmineNodeOpts: {
    showColors: true,
  },
  suites: {
    Smoke: ["smokeSuite1.js", "somkeSuite2.js"],
    Regression: "PracticeProject.js",
  },
};
