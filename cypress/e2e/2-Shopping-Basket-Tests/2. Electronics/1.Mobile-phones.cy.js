import { Environment } from "../../../support/utils/environs";
import {MobilePhone} from "../../../support/pages/electronics/mobilePhone"
const baseUrl = Environment.getBaseUrl();
const mobilePhone = new MobilePhone();


describe('Mobile Phones', () => {
    beforeEach(() => {
        cy.visit(baseUrl);
        mobilePhone.pageActions.clickElectonicsLink().click({force: true})
        cy.linkText().contains('Mobile Phones').click({force: true});
        
    });

    it('HTC One Mini Blue', () => {
        cy.addToCart().eq(0).click();
        cy.selectRadio('128GB [+£10.00]').click();
        cy.selectRadio('Pay monthly').click();
        cy.get('#product_enteredQuantity_19').type('50')
        cy.addToCart().eq(0).click()
        mobilePhone.pageActions.clickShoppingCartLink().click();
        mobilePhone.pageActions.clickTermsOfServiceLink().click();
        mobilePhone.pageActions.clickCheckOutBtn().click();
        cy.checkoutAsGuest()

    });

    it('HTC smartphone', () => {
        cy.addToCart().eq(1).click();
        cy.selectRadio('512GB [+£40.00]').click();
        cy.selectRadio('Pay monthly').click();
        cy.get('#product_enteredQuantity_18').type('50')
        cy.addToCart().eq(0).click()
        mobilePhone.pageActions.clickShoppingCartLink().click();
        mobilePhone.pageActions.clickTermsOfServiceLink().click();
        mobilePhone.pageActions.clickCheckOutBtn().click();
        cy.checkoutAsGuest()
    });

    it('Samsung Galaxy S24', () => {
        cy.addToCart().eq(2).click();
        cy.selectRadio('512GB [+£40.00]').click();
        cy.selectRadio('Pay monthly').click();
        cy.selectRadio('Silver').click()
        cy.get('#product_enteredQuantity_52').type('120')
        cy.addToCart().eq(0).click()
        mobilePhone.pageActions.clickShoppingCartLink().click();
        mobilePhone.pageActions.clickTermsOfServiceLink().click({force: true});
        mobilePhone.pageActions.clickCheckOutBtn().click();
        cy.checkoutAsGuest()
    });
});