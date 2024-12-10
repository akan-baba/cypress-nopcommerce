import { Environment } from "../../../support/utils/environs";
import {Electronics} from "../../../support/pages/electronics/mobilePhone&tv"
const baseUrl = Environment.getBaseUrl();
const electronics = new Electronics();


describe('Mobile Phones', () => {
    beforeEach(() => {
        cy.visit(baseUrl);
        electronics.pageActions.clickElectonicsLink().click({force: true})
        cy.linkText().contains('Mobile Phones').click({force: true});
        
    });

    it('HTC One Mini Blue', () => {
        cy.addToCart().eq(0).click();
        cy.selectRadio('128GB [+£10.00]').click();
        cy.selectRadio('Pay monthly').click();
        cy.get('#product_enteredQuantity_19').type('750')
        cy.addToCart().eq(0).click()
        electronics.pageActions.clickShoppingCartLink().click();
        electronics.pageActions.clickTermsOfServiceLink().click();
        electronics.pageActions.clickCheckOutBtn().click();
        cy.checkoutAsGuest()

    });

    it('HTC smartphone', () => {
        cy.addToCart().eq(1).click();
        cy.selectRadio('512GB [+£40.00]').click();
        cy.selectRadio('Pay monthly').click();
        cy.get('#product_enteredQuantity_18').type('350')
        cy.addToCart().eq(0).click()
        electronics.pageActions.clickShoppingCartLink().click();
        electronics.pageActions.clickTermsOfServiceLink().click();
        electronics.pageActions.clickCheckOutBtn().click();
        cy.checkoutAsGuest()
    });

    it('Samsung Galaxy S24', () => {
        cy.addToCart().eq(2).click();
        cy.selectRadio('512GB [+£40.00]').click();
        cy.selectRadio('Pay monthly').click();
        cy.selectRadio('Silver').click()
        cy.get('#product_enteredQuantity_52').type('620')
        cy.addToCart().eq(0).click()
        electronics.pageActions.clickShoppingCartLink().click();
        electronics.pageActions.clickTermsOfServiceLink().click({force: true});
        electronics.pageActions.clickCheckOutBtn().click();
        cy.checkoutAsGuest()
    });
});