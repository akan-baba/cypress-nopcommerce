
export class Clothing {
    webSelectors = {
        apparelLink: '.notmobile.top-menu > li:nth-of-type(3) > a',
        menShoesLink: "h2[class='title'] a[title='Show products in category Mens Shoes']",
        womenShoesLink: "h2[class='title'] a[title='Show products in category Womens Shoes']",
        mensClothingLink: "h2[class='title'] a[title='Show products in category Mens Clothes']",
        womensClothingLink: "h2[class='title'] a[title='Show products in category Womens Clothes']",
        shoppingCartLink: '.cart-label',
        termssofServicelink: '#termsofservice',
        checkOutbtn: '#checkout',
    }

    pageActions = {
        clickAppareLink: () => cy.get(this.webSelectors.apparelLink),
        clickMenShoesLink: () => cy.get(this.webSelectors.menShoesLink),
        clickWomenShoesLink: () => cy.get(this.webSelectors.womenShoesLink),
        clickMensClothingLink: () => cy.get(this.webSelectors.mensClothingLink),
        clickWomensClothingLink: () => cy.get(this.webSelectors.womensClothingLink),
        clickShoppingCartLink: () => cy.get(this.webSelectors.shoppingCartLink),
        clickTermsOfServiceLink: () => cy.get(this.webSelectors.termssofServicelink),
        clickCheckOutBtn: () => cy.get(this.webSelectors.checkOutbtn)
    }

}