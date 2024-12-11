import { Environment } from "../../../support/utils/environs";
import {Jewellery} from '../../../support/pages/jewellery/jewellery'
const baseUrl = Environment.getBaseUrl();
const jewellery = new Jewellery();


describe('Womens Rings', () => {

    it('Perfect Fit 9ct Yellow Gold 0.33ct Diamond Cluster Bridal Set', () => {
        cy.visit(baseUrl);
        jewellery.pageAction.clickJewelleryLink().click({force: true})
        cy.linkText().contains('Womens Ring').click({force: true})
        cy.addToCart().eq(0).click()
        cy.selectRadio('Size P').click()
        cy.get('#product_enteredQuantity_72').clear().type('10')
        cy.addToCart().eq(0).click()
        jewellery.pageAction.clickShoppingCartLink().click();
        jewellery.pageAction.clickTermsOfServiceLink().click();
        jewellery.pageAction.clickCheckOutBtn().click();
        cy.checkoutAsGuest() 
    });

    it('9ct Yellow Gold Double Row 0.33ct Diamond Eternity Ring', () => {
        cy.visit(baseUrl);
        jewellery.pageAction.clickJewelleryLink().click({force: true})
        cy.linkText().contains('Womens Ring').click({force: true})
        cy.addToCart().eq(1).click()
        cy.selectRadio('Size P').click()
        cy.get('#product_enteredQuantity_73').clear().type('100')
        cy.addToCart().eq(0).click()
        jewellery.pageAction.clickShoppingCartLink().click();
        jewellery.pageAction.clickTermsOfServiceLink().click();
        jewellery.pageAction.clickCheckOutBtn().click();
        cy.checkoutAsGuest()   
    });

    it('9ct White Gold 0.33ct Diamond Illusion Halo Solitaire Ring', () => {
        cy.visit(baseUrl);
        jewellery.pageAction.clickJewelleryLink().click({force: true})
        cy.linkText().contains('Womens Ring').click({force: true})
        cy.addToCart().eq(2).click()
        cy.selectRadio('Size P').click()
        cy.get('#product_enteredQuantity_74').clear().type('100')
        cy.addToCart().eq(0).click()
        jewellery.pageAction.clickShoppingCartLink().click();
        jewellery.pageAction.clickTermsOfServiceLink().click();
        jewellery.pageAction.clickCheckOutBtn().click();
        cy.checkoutAsGuest() 
    });
    
});