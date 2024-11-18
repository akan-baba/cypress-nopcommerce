

export class Computers {

    webSelectors = {
        computersLink: '.mobile > :nth-child(1) > [href="/computers"]',
        deskTopsLink: ':nth-child(1) > .sub-category-item > .title > a',
        laptopsLink: ':nth-child(2) > .sub-category-item > .title > a',
        shoppingCartLink: '.cart-label',
        termssofServicelink: '#termsofservice',
        checkOutbtn: '#checkout',
    }

    pageActions = {
        clickComputersLink: () => cy.get(this.webSelectors.computersLink),
        clickDesktopsLink: () => cy.get(this.webSelectors.deskTopsLink),
        clickLaptopsLink: () => cy.get(this.webSelectors.laptopsLink),
        clickShoppingCartLink: () => cy.get(this.webSelectors.shoppingCartLink),
        clickTermsOfServiceLink: () => cy.get(this.webSelectors.termssofServicelink),
        clickCheckOutBtn: () => cy.get(this.webSelectors.checkOutbtn)

    }
}