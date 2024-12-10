import { Environment } from "../../../support/utils/environs";
import { Computers } from "../../../support/pages/computers/deskTop&Laptops"
const baseUrl = Environment.getBaseUrl();
const computers = new Computers();



describe('Registered user shopping basket', () => {

    it('Acer Aspire XC-840 Pentium Silver Desktop PC', () => {
        cy.visit(baseUrl);
        computers.pageActions.clickComputersLink().click({ force: true })
        computers.pageActions.clickDesktopsLink().click()
        cy.customerLogin()
        cy.addToCart().eq(0).click();
        cy.selectValueByDataAttr("22", "86");
        cy.selectValueByDataAttr("23", "90");
        cy.selectValueByDataAttr("24", "94");
        cy.selectValueByDataAttr("25", "99");
        cy.selectRadio('Windows 10').click();
        cy.get('#product_enteredQuantity_2').clear().type('1300')
        cy.addToCart().eq(0).click()
        computers.pageActions.clickShoppingCartLink().click();
        computers.pageActions.clickTermsOfServiceLink().click();
        computers.pageActions.clickCheckOutBtn().click();
        cy.registeredUserCheckout()
    });

    it('HP Pavilion TP01-5015na Desktop - Core', () => {
        cy.visit(baseUrl);
        computers.pageActions.clickComputersLink().click({ force: true })
        computers.pageActions.clickDesktopsLink().click()
        cy.customerLogin()
        cy.addToCart().eq(1).click();
        cy.selectValueByDataAttr("2", "74");
        cy.selectValueByDataAttr("3", "76");
        cy.selectValueByDataAttr("1", "77");
        cy.selectValueByDataAttr("20", "80");
        cy.selectRadio('Windows 11').click();
        cy.get('#product_enteredQuantity_1').clear().type('550')
        cy.addToCart().eq(0).click()
        computers.pageActions.clickShoppingCartLink().click();
        computers.pageActions.clickTermsOfServiceLink().click();
        computers.pageActions.clickCheckOutBtn().click();
        cy.registeredUserCheckout()
    });

    it('Lenovo IdeaCentre 3 24in Ryzen All-in-One PC', () => {
        cy.visit(baseUrl);
        computers.pageActions.clickComputersLink().click({ force: true })
        computers.pageActions.clickDesktopsLink().click()
        cy.customerLogin()
        cy.addToCart().eq(2).click();
        cy.selectValueByDataAttr("27", "105");
        cy.selectValueByDataAttr("28", "109");
        cy.selectValueByDataAttr("29", "113");
        cy.selectValueByDataAttr("30", "118");
        cy.selectRadio('Windows 11').click();
        cy.get('#product_enteredQuantity_3').clear().type('250')
        cy.addToCart().eq(0).click()
        computers.pageActions.clickShoppingCartLink().click();
        computers.pageActions.clickTermsOfServiceLink().click();
        computers.pageActions.clickCheckOutBtn().click();
    });

    
});

