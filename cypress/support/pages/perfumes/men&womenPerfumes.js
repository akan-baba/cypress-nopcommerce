

export class Perfumes {

    webSelectors = {
        perfumeLink: 'ul.top-menu.notmobile > li:nth-of-type(4) > a',
        mensPerfumeLink: ':nth-child(1) > .sub-category-item > .title > a',
        womenPerfumeLink: ':nth-child(2) > .sub-category-item > .title > a',
        shoppingCartLink: '.cart-label',
        termssofServicelink: '#termsofservice',
        checkOutbtn: '#checkout',
    }

    pageActions = {
        clickPerfumeLink: () => cy.get(this.webSelectors.perfumeLink),
        clickMensPerfumeLink: () => cy.get(this.webSelectors.mensPerfumeLink),
        clickWomenPerfumeLink: () => cy.get(this.webSelectors.womenPerfumeLink),
        clickShoppingCartLink: () => cy.get(this.webSelectors.shoppingCartLink),
        clickTermsOfServiceLink: () => cy.get(this.webSelectors.termssofServicelink),
        clickCheckOutBtn: () => cy.get(this.webSelectors.checkOutbtn)
    }
}