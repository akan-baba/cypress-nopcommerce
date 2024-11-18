
export class MobilePhone{

    webSelectors = {
       electonicsLink: 'ul.top-menu.notmobile > li:nth-of-type(2) > a',
       shoppingCartLink: '.cart-label',
       termssofServicelink: '#termsofservice',
       checkOutbtn: '#checkout',
    }

    pageActions = {
      clickElectonicsLink: () => cy.get(this.webSelectors.electonicsLink),
      clickShoppingCartLink: () => cy.get(this.webSelectors.shoppingCartLink),
      clickTermsOfServiceLink: () => cy.get(this.webSelectors.termssofServicelink),
      clickCheckOutBtn: () => cy.get(this.webSelectors.checkOutbtn)

    }
}