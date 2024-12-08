import { Environment } from "../../../support/utils/environs";
import {Perfumes} from "../../../support/pages/perfumes/men&womenPerfumes"
const baseUrl = Environment.getBaseUrl()
const perfumes = new Perfumes();


describe('Mens Perfumes Basket', () => {
    
    it('Hugo Boss Bottled Elixir Parfum', () => {
        cy.visit(baseUrl);
        perfumes.pageActions.clickPerfumeLink().click({force: true})
        perfumes.pageActions.clickMensPerfumeLink().click() 
        cy.customerLogin()
        cy.addToCart().eq(0).click();
        cy.selectRadio('75ml [+£50.00]').click();
        cy.get('#product_enteredQuantity_46').clear().type('150')
        cy.addToCart().eq(0).click()
        perfumes.pageActions.clickShoppingCartLink().click();
        perfumes.pageActions.clickTermsOfServiceLink().click();
        perfumes.pageActions.clickCheckOutBtn().click();
        cy.registeredUserCheckout()
    });

    it('Rabanne 1 Million Eau De Toilette', () => {
        cy.visit(baseUrl);
        perfumes.pageActions.clickPerfumeLink().click({force: true})
        perfumes.pageActions.clickMensPerfumeLink().click() 
        cy.customerLogin()
        cy.addToCart().eq(1).click();
        cy.selectRadio('100ml [+£70.00]').click();
        cy.get('#product_enteredQuantity_47').type('150')
        cy.addToCart().eq(0).click()
        perfumes.pageActions.clickShoppingCartLink().click();
        perfumes.pageActions.clickTermsOfServiceLink().click();
        perfumes.pageActions.clickCheckOutBtn().click();
        cy.registeredUserCheckout()
    });

    it('Calvin Klein Eternity for Men Eau de Parfum', () => {
        cy.visit(baseUrl);
        perfumes.pageActions.clickPerfumeLink().click({force: true})
        perfumes.pageActions.clickMensPerfumeLink().click() 
        cy.customerLogin()
        cy.addToCart().eq(2).click();
        cy.selectRadio('25ml [+£10.00]').click();
        cy.get('#product_enteredQuantity_48').type('150')
        cy.addToCart().eq(0).click()
        perfumes.pageActions.clickShoppingCartLink().click();
        perfumes.pageActions.clickTermsOfServiceLink().click();
        perfumes.pageActions.clickCheckOutBtn().click();
        cy.registeredUserCheckout()
    });
});