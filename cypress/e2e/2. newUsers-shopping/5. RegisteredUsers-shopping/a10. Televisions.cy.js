import { Environment } from "../../../support/utils/environs";
import { Electronics } from "../../../support/pages/electronics/mobilePhone&tv"
const baseUrl = Environment.getBaseUrl();
const electronics = new Electronics();


describe('TV shop basket', () => {
    it('Sony Inch K65XR80U Smart 4K HDR OLED Freeview TV', () => {
        cy.visit(baseUrl);
        cy.customerLogin()
        electronics.pageActions.clickElectonicsLink().click({ force: true })
        cy.linkText().contains('Television').click({ force: true });
        cy.addToCart().eq(0).click();
        cy.selectRadio('43 inch [+£200.00]').click();
        cy.selectRadio('TV Recycling [+£50.00]').click();
        cy.get('#product_enteredQuantity_63').type('100')
        cy.addToCart().eq(0).click()
        electronics.pageActions.clickShoppingCartLink().click();
        electronics.pageActions.clickTermsOfServiceLink().click();
        electronics.pageActions.clickCheckOutBtn().click();
        cy.registeredUserCheckout()
    });

    it('Hisense Smart TV 40A4NTUK, Natural Colour Enhancer', () => {
        cy.visit(baseUrl);
        cy.customerLogin()
        electronics.pageActions.clickElectonicsLink().click({ force: true })
        cy.linkText().contains('Television').click({ force: true });
        cy.addToCart().eq(1).click();
        cy.selectRadio('65 inch [+£400.00]').click();
        cy.selectRadio('TV Set Up & Demo [+£100.00]').click();
        cy.get('#product_enteredQuantity_64').type('100')
        cy.addToCart().eq(0).click()
        electronics.pageActions.clickShoppingCartLink().click();
        electronics.pageActions.clickTermsOfServiceLink().click();
        electronics.pageActions.clickCheckOutBtn().click();
        cy.registeredUserCheckout()
    });

    it('SONY BRAVIA X75WL LED 4K HDR Google TV - KD43X75WLPU', () => {
        cy.visit(baseUrl);
        cy.customerLogin()
        electronics.pageActions.clickElectonicsLink().click({ force: true })
        cy.linkText().contains('Television').click({ force: true });
        cy.addToCart().eq(2).click();
        cy.selectRadio('75 inch [+£500.00]').click();
        cy.selectRadio('Wall Mount Install & Set Up [+£150.00]').click();
        cy.get('#product_enteredQuantity_65').type('100')
        cy.addToCart().eq(0).click()
        electronics.pageActions.clickShoppingCartLink().click();
        electronics.pageActions.clickTermsOfServiceLink().click();
        electronics.pageActions.clickCheckOutBtn().click();
        cy.registeredUserCheckout() 
    });

});