import { Environment } from "../../../support/utils/environs";
import { Clothing } from "../../../support/pages/apparel/men&womensClothing"
const baseUrl = Environment.getBaseUrl();
const clothing = new Clothing();


describe('Men Shirts', () => {

    it('Charles Tyrwhitt Non-Iron Cotton Regular Fit Check Shirt', () => {
        cy.visit(baseUrl);
        clothing.pageActions.clickAppareLink().click({ force: true })
        clothing.pageActions.clickMensClothingLink().click({ force: true })
        cy.addToCart().eq(0).click()
        cy.selectRadio('XXL').click()
        cy.selectRadio('Black').click()
        cy.get('#product_enteredQuantity_25').clear().type('10')
        cy.addToCart().eq(0).click()
        clothing.pageActions.clickShoppingCartLink().click({ force: true })
        clothing.pageActions.clickTermsOfServiceLink().click()
        clothing.pageActions.clickCheckOutBtn().click()
        cy.checkoutAsGuest()
    });

    it('Polo Ralph Lauren Slim Fit Oxford Shirt', () => {
        cy.visit(baseUrl);
        clothing.pageActions.clickAppareLink().click({ force: true })
        clothing.pageActions.clickMensClothingLink().click({ force: true })
        cy.addToCart().eq(1).click()
        cy.selectRadio('M').click()
        cy.selectRadio('Blue').click()
      
        cy.get('#product_enteredQuantity_26').clear().type('10')
        cy.addToCart().eq(0).click()
        clothing.pageActions.clickShoppingCartLink().click({ force: true })
        clothing.pageActions.clickTermsOfServiceLink().click()
        clothing.pageActions.clickCheckOutBtn().click()
        cy.checkoutAsGuest()
    });

    it('Bengal Stripe Windsor Collar Classic Fit Formal Shirt - Double Cuff', () => {
        cy.visit(baseUrl);
        clothing.pageActions.clickAppareLink().click({ force: true })
        clothing.pageActions.clickMensClothingLink().click({ force: true })
        cy.addToCart().eq(2).click()
        cy.selectRadio('XL').click()
        cy.selectRadio('Grey').click()
       
        cy.get('#product_enteredQuantity_59').clear().type('10')
        cy.addToCart().eq(0).click()
        clothing.pageActions.clickShoppingCartLink().click({ force: true })
        clothing.pageActions.clickTermsOfServiceLink().click()
        clothing.pageActions.clickCheckOutBtn().click()
        cy.checkoutAsGuest()
    });

});