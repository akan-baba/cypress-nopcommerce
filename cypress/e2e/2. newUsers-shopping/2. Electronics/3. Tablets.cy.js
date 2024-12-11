import { Environment } from "../../../support/utils/environs";
import {Electronics} from "../../../support/pages/electronics/mobilePhone&tv"
const baseUrl = Environment.getBaseUrl();
const electronics = new Electronics();


describe('Tablets Shopping Basket', () => {

    it('Samsung Galaxy Tab A9+ 11in Wi-Fi Tablet', () => {
        cy.visit(baseUrl);
        electronics.pageActions.clickElectonicsLink().click({force: true})
        cy.linkText().contains('Tablets and IPad').click({force: true});
        cy.addToCart().eq(0).click();
        cy.selectRadio('11').click();
        cy.selectRadio('16GB').click();
        cy.get('#product_enteredQuantity_66').type('100')
        cy.addToCart().eq(0).click()
        electronics.pageActions.clickShoppingCartLink().click();
        electronics.pageActions.clickTermsOfServiceLink().click();
        electronics.pageActions.clickCheckOutBtn().click();
        cy.checkoutAsGuest()
    });

    it('Amazon Fire HD 10 2023 Wi-Fi Tablet', () => {
        cy.visit(baseUrl);
        electronics.pageActions.clickElectonicsLink().click({force: true})
        cy.linkText().contains('Tablets and IPad').click({force: true});
        cy.addToCart().eq(1).click();
        cy.selectRadio('12.4').click();
        cy.selectRadio('32GB').click();
        cy.get('#product_enteredQuantity_67').type('100')
        cy.addToCart().eq(0).click()
        electronics.pageActions.clickShoppingCartLink().click();
        electronics.pageActions.clickTermsOfServiceLink().click();
        electronics.pageActions.clickCheckOutBtn().click();
        cy.checkoutAsGuest()
    });

    it('Apple iPad Pro (M4) with Nano-texture glass', () => {
        cy.visit(baseUrl);
        electronics.pageActions.clickElectonicsLink().click({force: true})
        cy.linkText().contains('Tablets and IPad').click({force: true});
        cy.addToCart().eq(2).click();
        cy.selectRadio('14.6').click();
        cy.selectRadio('64GB').click();
        cy.get('#product_enteredQuantity_68').type('100')
        cy.addToCart().eq(0).click()
        electronics.pageActions.clickShoppingCartLink().click();
        electronics.pageActions.clickTermsOfServiceLink().click();
        electronics.pageActions.clickCheckOutBtn().click();
        cy.checkoutAsGuest()
    });
    
});