import { Environment } from "../../../support/utils/environs";
import {Jewellery} from '../../../support/pages/jewellery/jewellery'
const baseUrl = Environment.getBaseUrl();
const jewellery = new Jewellery();

describe('Mens Ring', () => {

   it('9ct Yellow Gold & Diamond Polished Signet Ring', () => {
    cy.visit(baseUrl);
    cy.customerLogin()
    jewellery.pageAction.clickJewelleryLink().click({force: true})
    cy.linkText().contains('Mens Ring').click({force: true})
    cy.addToCart().eq(0).click()
    cy.selectRadio('Size P').click()
    cy.get('#product_enteredQuantity_69').clear().type('1000')
    cy.addToCart().eq(0).click()
    jewellery.pageAction.clickShoppingCartLink().click();
    jewellery.pageAction.clickTermsOfServiceLink().click();
    jewellery.pageAction.clickCheckOutBtn().click();
    cy.registeredUserCheckout()
   });

   it('9ct Yellow Gold Diamond & Onyx Signet Ring', () => {
    cy.visit(baseUrl);
    cy.customerLogin()
    jewellery.pageAction.clickJewelleryLink().click({force: true})
    cy.linkText().contains('Mens Ring').click({force: true})
    cy.addToCart().eq(1).click()
    cy.selectRadio('Size Q').click()
    cy.get('#product_enteredQuantity_70').clear().type('1000')
    cy.addToCart().eq(0).click()
    jewellery.pageAction.clickShoppingCartLink().click();
    jewellery.pageAction.clickTermsOfServiceLink().click();
    jewellery.pageAction.clickCheckOutBtn().click();
    cy.registeredUserCheckout()
   });
     
   it('Mens Sterling Silver Diamond & Onyx Signet Ring', () => {
    cy.visit(baseUrl);
    cy.customerLogin()
    jewellery.pageAction.clickJewelleryLink().click({force: true})
    cy.linkText().contains('Mens Ring').click({force: true})
    cy.addToCart().eq(2).click()
    cy.selectRadio('Size R').click()
    cy.get('#product_enteredQuantity_71').clear().type('10000')
    cy.addToCart().eq(0).click()
    jewellery.pageAction.clickShoppingCartLink().click();
    jewellery.pageAction.clickTermsOfServiceLink().click();
    jewellery.pageAction.clickCheckOutBtn().click();
    cy.registeredUserCheckout()
   });
    
});