
export class Jewellery {

    webSelectors = {
        jewelleryLink: '.notmobile > li:nth-child(5) > a',
        shoppingCartLink: '.cart-label',
        termssofServicelink: '#termsofservice',
        checkOutbtn: '#checkout',
    }


    pageAction = {
        clickJewelleryLink: () => cy.get(this.webSelectors.jewelleryLink),
        clickShoppingCartLink: () => cy.get(this.webSelectors.shoppingCartLink),
        clickTermsOfServiceLink: () => cy.get(this.webSelectors.termssofServicelink),
        clickCheckOutBtn: () => cy.get(this.webSelectors.checkOutbtn)

    }
}