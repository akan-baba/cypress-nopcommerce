import { Environment } from "../../../support/utils/environs";
import {Clothing} from "../../../support/pages/apparel/men&womensClothing"
const baseUrl = Environment.getBaseUrl();
const clothing = new Clothing();


describe('Mens Shoes', () => {

    it('Weaver Black Suede', () => {
        cy.visit(baseUrl);
        clothing.pageActions.clickAppareLink().click({force: true})
        clothing.pageActions.clickMenShoesLink().click({force: true})
        cy.addToCart().eq(0).click()
        cy.selectValueByDataAttr("1059", "1225");
        cy.selectRadio('Black').click()
        cy.get('#product_enteredQuantity_53').clear().type('20')
        cy.addToCart().eq(0).click()
        clothing.pageActions.clickShoppingCartLink().click({force: true})
        clothing.pageActions.clickTermsOfServiceLink().click()
        clothing.pageActions.clickCheckOutBtn().click()
        cy.checkoutAsGuest()
    });

    it('Leather Wide Fit Brogue Boots', () => {
        cy.visit(baseUrl);
        clothing.pageActions.clickAppareLink().click({force: true})
        clothing.pageActions.clickMenShoesLink().click({force: true})
        cy.addToCart().eq(1).click()
        cy.selectValueByDataAttr("1062", "1241");
        cy.selectRadio('Black').click()
       
        cy.get('#product_enteredQuantity_54').clear().type('20')
        cy.addToCart().eq(0).click()
        clothing.pageActions.clickShoppingCartLink().click({force: true})
        clothing.pageActions.clickTermsOfServiceLink().click()
        clothing.pageActions.clickCheckOutBtn().click()
        cy.checkoutAsGuest()
    });

    it('Bruno Marc Mens Oxfords Shoes Mens Lace-ups', () => {
        cy.visit(baseUrl);
        clothing.pageActions.clickAppareLink().click({force: true})
        clothing.pageActions.clickMenShoesLink().click({force: true})
        cy.addToCart().eq(2).click()
        cy.selectValueByDataAttr("1064", "1255");
        cy.selectRadio('Black').click()
        
        cy.get('#product_enteredQuantity_55').clear().type('20')
        cy.addToCart().eq(0).click()
        clothing.pageActions.clickShoppingCartLink().click({force: true})
        clothing.pageActions.clickTermsOfServiceLink().click()
        clothing.pageActions.clickCheckOutBtn().click()
        cy.checkoutAsGuest()
    });
    
});