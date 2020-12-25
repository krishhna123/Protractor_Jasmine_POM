function ShopPage() {
    this.allAppCards = element.all(by.tagName(`app-card`));
    let cardTitleLocator =`*[class = 'card-title'] a`;
    let shopButtonLocator = `button[class='btn btn-info']`;
    this.checkoutButton = element(by.partialLinkText('Checkout'));

    this.shopGivenProduct = function (item, product) {
            item.element(by.css(cardTitleLocator)).getText().then(function (text) {
                console.log(text);
                if(text === product) {
                    item.element(by.css(shopButtonLocator)).click();
                }
            });
    }
}

module.exports = new ShopPage();