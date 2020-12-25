function LoginPage() {
    this.name = element(by.css(`div[class= form-group] input[name= name]`));
    this.email =element(by.css(`input[name = 'email']`));
    this.password =element(by.id('exampleInputPassword1'));
    this.examplecheck = element(by.id('exampleCheck1'));
    this.chooseGender = function (gender) {
        element(by.cssContainingText('#exampleFormControlSelect1 option', gender)).click();
    };
    this.selectOccupation = function (occupation) {
        element.all(by.className('form-check form-check-inline')).each(function (items) {
            items.element(by.css(`label[for*='inlineRadio']`)).getText().then(function (text) {
                if(text === occupation)
                {
                    items.click();
                }
            })
        });
    };
    this.submitButton = element(by.buttonText('Submit'));
    this.successMessage = element(by.css(`div[class *='success']`));
    this.errorMessage = element(by.css(`div[class='alert alert-danger']`));
    this.shopLink = element(by.linkText(`Shop`));
}

module.exports = new LoginPage();