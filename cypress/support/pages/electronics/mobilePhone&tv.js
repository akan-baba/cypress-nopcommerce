
export class Electronics{

    webSelectors = {
       electonicsLink: 'ul.top-menu.notmobile > li:nth-of-type(2) > a',
       tvLink:"h2[class='title'] a[title='Show products in category Television']",
       shoppingCartLink: '.cart-label',
       termssofServicelink: '#termsofservice',
       checkOutbtn: '#checkout',
    }

    pageActions = {
      clickElectonicsLink: () => cy.get(this.webSelectors.electonicsLink),
      clickTVLink: () => cy.get(this.webSelectors.tvLink),
      clickShoppingCartLink: () => cy.get(this.webSelectors.shoppingCartLink),
      clickTermsOfServiceLink: () => cy.get(this.webSelectors.termssofServicelink),
      clickCheckOutBtn: () => cy.get(this.webSelectors.checkOutbtn)

    }
}