import { Environment } from "../../../support/utils/environs";
import {Electronics} from "../../../support/pages/electronics/mobilePhone&tv"
const baseUrl = Environment.getBaseUrl();
const mobilePhone = new Electronics();


describe('Mobile phone basket', () => {

    it('HTC One Mini Blue', () => {
        cy.visit(baseUrl);
        mobilePhone.pageActions.clickElectonicsLink().click({force: true})
        cy.linkText().contains('Mobile Phones').click({force: true});
        cy.customerLogin()
        cy.addToCart().eq(0).click();
        cy.selectRadio('128GB [+£10.00]').click();
        cy.selectRadio('Pay monthly').click();
        cy.get('#product_enteredQuantity_19').type('750')
        cy.addToCart().eq(0).click()
        mobilePhone.pageActions.clickShoppingCartLink().click();
        mobilePhone.pageActions.clickTermsOfServiceLink().click();
        mobilePhone.pageActions.clickCheckOutBtn().click();
        cy.registeredUserCheckout()
    });

    it('HTC smartphone', () => {
        cy.visit(baseUrl);
        mobilePhone.pageActions.clickElectonicsLink().click({force: true})
        cy.linkText().contains('Mobile Phones').click({force: true});
        cy.customerLogin()
        cy.addToCart().eq(1).click();
        cy.selectRadio('512GB [+£40.00]').click();
        cy.selectRadio('Pay monthly').click();
        cy.get('#product_enteredQuantity_18').type('350')
        cy.addToCart().eq(0).click()
        mobilePhone.pageActions.clickShoppingCartLink().click();
        mobilePhone.pageActions.clickTermsOfServiceLink().click();
        mobilePhone.pageActions.clickCheckOutBtn().click();
        cy.registeredUserCheckout()
    });

    it('Samsung Galaxy S24', () => {
        cy.visit(baseUrl);
        mobilePhone.pageActions.clickElectonicsLink().click({force: true})
        cy.linkText().contains('Mobile Phones').click({force: true});
        cy.customerLogin()
        cy.addToCart().eq(2).click();
        cy.selectRadio('512GB [+£40.00]').click();
        cy.selectRadio('Pay monthly').click();
        cy.selectRadio('Silver').click()
        cy.get('#product_enteredQuantity_52').type('620')
        cy.addToCart().eq(0).click()
        mobilePhone.pageActions.clickShoppingCartLink().click();
        mobilePhone.pageActions.clickTermsOfServiceLink().click({force: true});
        mobilePhone.pageActions.clickCheckOutBtn().click();
        cy.registeredUserCheckout()
    });
    
});