import { Environment } from "../../../support/utils/environs";
import {Clothing} from "../../../support/pages/apparel/men&womensClothing"
const baseUrl = Environment.getBaseUrl();
const clothing = new Clothing();



describe('Womens Shoes', () => {

    it('Zelda Bow Detail Court Shoes', () => {
        cy.visit(baseUrl);
        cy.customerLogin()
        clothing.pageActions.clickAppareLink().click({force: true})
        clothing.pageActions.clickWomenShoesLink().click({force: true})
        cy.addToCart().eq(0).click()
        cy.selectValueByDataAttr("1066", "1264");
        cy.selectRadio('Black').click()
        
        cy.get('#product_enteredQuantity_56').clear().type('10')
        cy.addToCart().eq(0).click()
        clothing.pageActions.clickShoppingCartLink().click({force: true})
        clothing.pageActions.clickTermsOfServiceLink().click()
        clothing.pageActions.clickCheckOutBtn().click()
        cy.registeredUserCheckout()
    });

    it('Anya Extra-Wide Fit Platform Heels - Black Suede', () => {
        cy.visit(baseUrl);
        cy.customerLogin()
        clothing.pageActions.clickAppareLink().click({force: true})
        clothing.pageActions.clickWomenShoesLink().click({force: true})
        cy.addToCart().eq(1).click()
        cy.selectValueByDataAttr("1069", "1278");
        cy.selectRadio('Brown').click()
       
        cy.get('#product_enteredQuantity_57').clear().type('10')
        cy.addToCart().eq(0).click()
        clothing.pageActions.clickShoppingCartLink().click({force: true})
        clothing.pageActions.clickTermsOfServiceLink().click()
        clothing.pageActions.clickCheckOutBtn().click()
        cy.registeredUserCheckout()
    });

    it('Wide Fit Forever Comfort® Leather Shoes', () => {
        cy.visit(baseUrl);
        cy.customerLogin()
        clothing.pageActions.clickAppareLink().click({force: true})
        clothing.pageActions.clickWomenShoesLink().click({force: true})
        cy.addToCart().eq(2).click()
        cy.selectValueByDataAttr("1070", "1287");
        cy.selectRadio('White').click()
        
        cy.get('#product_enteredQuantity_58').clear().type('10')
        cy.addToCart().eq(0).click()
        clothing.pageActions.clickShoppingCartLink().click({force: true})
        clothing.pageActions.clickTermsOfServiceLink().click()
        clothing.pageActions.clickCheckOutBtn().click()
        cy.registeredUserCheckout() 
    });
    
});