var dataObject = require("./data/data");
var using = require("jasmine-data-provider");
var loginPageObj = require("./Pages/LoginPage");
var shopPageObj = require("./Pages/ShopPage.js");

describe("test", () => {
  it("test", async () => {
    let count1, count2;
    browser.get("https://about.google/intl/en/commitments/reports/");
    browser.sleep(4000);
    var notifications = element.all(by.xpath("//a"));
    count1 = notifications.count();
    console.log(count1);
    // var notifications = element.all(by.xpath("//a"));
    // count2 = notifications.count();
    expect(count1).toBe(562.5714285714286);
  });
});
describe("Real time project automation", function () {
  using(dataObject.Datadriven, function (data, description) {
    it("should test automation", function () {
      loginPageObj.name.sendKeys(data.name);
      loginPageObj.email.sendKeys(data.email);
      loginPageObj.password.sendKeys("1qaz2wsx");
      loginPageObj.examplecheck.click();

      loginPageObj.chooseGender("Female");
      loginPageObj.selectOccupation("Student");
      loginPageObj.submitButton.click().then(function () {
        loginPageObj.successMessage.getText().then(function (text) {
          console.log(text);
          expect(text).toMatch(
            `Success! The Form has been submitted successfully!.`
          );
        });
      });

      loginPageObj.name.clear();
      loginPageObj.name.sendKeys("M").then(() => {
        loginPageObj.errorMessage.getText().then((text) => {
          console.log(text);
          expect(text).toMatch(`Name should be at least 2 characters`);
        });
      });
      selectProduct(data.model);
      expect(countOfIteamsinCart).toMatch(`1`);
      shopPageObj.checkoutButton.click();
    });
  });

  function selectProduct(product) {
    loginPageObj.shopLink.click();
    //take all 4 cards into list
    // to through each index and for desired title, click on add button to add in cart
    shopPageObj.allAppCards.each((item) => {
      shopPageObj.shopGivenProduct(item, product);
      browser.sleep(3000);
    });
  }

  let countOfIteamsinCart = function () {
    shopPageObj.checkoutButton.getText().then((text) => {
      let count = Number(
        text.substring(text.indexOf(`(`) + 1, text.indexOf(`)`)).trim()
      );
      console.log(count);
      return count;
    });
  };

  beforeEach(function () {
    browser.get("https://qaclickacademy.github.io/protocommerce/");
  });

  afterEach(function () {
    console.log("Execution is complete");
  });
});
