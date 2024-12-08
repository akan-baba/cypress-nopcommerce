import { Environment } from "../../../support/utils/environs";
import {Perfumes} from "../../../support/pages/perfumes/men&womenPerfumes"
const baseUrl = Environment.getBaseUrl();
const perfumes = new Perfumes();


describe('Womens Perfumes Basket', () => {
    
    it('DIOR Miss Dior Eau de Parfum', () => {
        cy.visit(baseUrl);
        perfumes.pageActions.clickPerfumeLink().click({force: true})
        perfumes.pageActions.clickWomenPerfumeLink().click({force: true})
        cy.customerLogin()
        cy.addToCart().eq(0).click();
        cy.selectRadio('75ml [+£50.00]').click();
        cy.get('#product_enteredQuantity_49').clear().type('50')
        cy.addToCart().eq(0).click()
        perfumes.pageActions.clickShoppingCartLink().click();
        perfumes.pageActions.clickTermsOfServiceLink().click();
        perfumes.pageActions.clickCheckOutBtn().click();
        cy.registeredUserCheckout()
    });

    it('Vera Wang Princess for Women Eau de Toilette', () => {
        cy.visit(baseUrl);
        perfumes.pageActions.clickPerfumeLink().click({force: true})
        perfumes.pageActions.clickWomenPerfumeLink().click({force: true})
        cy.customerLogin()
        cy.addToCart().eq(1).click();
        cy.selectRadio('100ml [+£70.00]').click();
        cy.get('#product_enteredQuantity_50').clear().type('50')
        cy.addToCart().eq(0).click()
        perfumes.pageActions.clickShoppingCartLink().click();
        perfumes.pageActions.clickTermsOfServiceLink().click();
        perfumes.pageActions.clickCheckOutBtn().click();
        cy.registeredUserCheckout()
    });

    it('Rabanne Lady Million Fabulous Eau De Parfum', () => {
        cy.visit(baseUrl);
        perfumes.pageActions.clickPerfumeLink().click({force: true})
        perfumes.pageActions.clickWomenPerfumeLink().click({force: true})
        cy.customerLogin()
        cy.addToCart().eq(2).click();
        cy.selectRadio('200ml [+£100.00]').click();
        cy.get('#product_enteredQuantity_51').clear().type('50')
        cy.addToCart().eq(0).click()
        perfumes.pageActions.clickShoppingCartLink().click();
        perfumes.pageActions.clickTermsOfServiceLink().click();
        perfumes.pageActions.clickCheckOutBtn().click();
        cy.registeredUserCheckout()
    });
});