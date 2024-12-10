import { Environment } from "../../../support/utils/environs";
import {Clothing} from "../../../support/pages/apparel/men&womensClothing"
const baseUrl = Environment.getBaseUrl();
const clothing = new Clothing();


describe('Womens dress basket', () => {

    it('Long Sleeve Bubble Hem Mini Dress', () => {
        cy.visit(baseUrl);
        cy.customerLogin()
        clothing.pageActions.clickAppareLink().click({force: true})
        clothing.pageActions.clickWomensClothingLink().click({force: true})
        cy.addToCart().eq(0).click()
        cy.selectRadio('6').click()
        cy.selectRadio('Black').click()
        cy.addToCart().eq(0).click()
        cy.get('#product_enteredQuantity_60').clear().type('10')
        clothing.pageActions.clickShoppingCartLink().click({force: true})
        clothing.pageActions.clickTermsOfServiceLink().click()
        clothing.pageActions.clickCheckOutBtn().click()
        cy.registeredUserCheckout()
    });

    it('Monochrome Bow Midi Column Dress', () => {
        cy.visit(baseUrl);
        cy.customerLogin()
        clothing.pageActions.clickAppareLink().click({force: true})
        clothing.pageActions.clickWomensClothingLink().click({force: true})
        cy.addToCart().eq(1).click()
        cy.selectRadio('12').click()
        cy.selectRadio('White').click()
        cy.addToCart().eq(0).click()
        cy.get('#product_enteredQuantity_61').clear().type('10')
        clothing.pageActions.clickShoppingCartLink().click({force: true})
        clothing.pageActions.clickTermsOfServiceLink().click()
        clothing.pageActions.clickCheckOutBtn().click()
        cy.registeredUserCheckout()
    });

    it('Journee Mari Lurex Long Sleeve Dress', () => {
        cy.visit(baseUrl);
        cy.customerLogin()
        clothing.pageActions.clickAppareLink().click({force: true})
        clothing.pageActions.clickWomensClothingLink().click({force: true})
        cy.addToCart().eq(2).click()
        cy.selectRadio('18').click()
        cy.selectRadio('Black').click()
        cy.addToCart().eq(0).click()
        cy.get('#product_enteredQuantity_62').clear().type('10')
        clothing.pageActions.clickShoppingCartLink().click({force: true})
        clothing.pageActions.clickTermsOfServiceLink().click()
        clothing.pageActions.clickCheckOutBtn().click()
        cy.registeredUserCheckout()
    });
    
});