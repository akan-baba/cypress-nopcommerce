import { Environment } from "../../../support/utils/environs";
import { Computers } from "../../../support/pages/computers/deskTop&Laptops"
const baseUrl = Environment.getBaseUrl();
const computers = new Computers();


describe('', () => {
    beforeEach(() => {
        cy.visit(baseUrl);
        computers.pageActions.clickComputersLink().click({ force: true })
        computers.pageActions.clickLaptopsLink().click({ force: true })

    });

    it('Acer Aspire 3 A315-44P Laptop', () => {
        cy.addToCart().eq(0).click();
        cy.selectValueByDataAttr("39", "149");
        cy.selectValueByDataAttr("40", "153");
        cy.selectValueByDataAttr("41", "158");
        cy.selectValueByDataAttr("42", "161");
        cy.selectRadio('Windows 10').click();
        cy.get('#product_enteredQuantity_4').clear().type('400')
        cy.addToCart().eq(0).click()
        computers.pageActions.clickShoppingCartLink().click();
        computers.pageActions.clickTermsOfServiceLink().click();
        computers.pageActions.clickCheckOutBtn().click();
        cy.checkoutAsGuest()
    });

    it('Inspiron 15 Laptop', () => {
        cy.addToCart().eq(3).click();
        cy.selectValueByDataAttr("44", "168");
        cy.selectValueByDataAttr("45", "172");
        cy.selectValueByDataAttr("46", "177");
        cy.selectValueByDataAttr("47", "180");
        cy.selectRadio('Windows 11').click();
        cy.get('#product_enteredQuantity_5').clear().type('500')
        cy.addToCart().eq(0).click()
        computers.pageActions.clickShoppingCartLink().click();
        computers.pageActions.clickTermsOfServiceLink().click();
        computers.pageActions.clickCheckOutBtn().click();
        cy.checkoutAsGuest()
    });

    it('Lenovo ThinkCentre M70s Gen 4', () => {
        cy.addToCart().eq(4).click();
        cy.selectValueByDataAttr("1039", "1149");
        cy.selectValueByDataAttr("1040", "1154");
        cy.selectValueByDataAttr("1041", "1157");
        cy.selectValueByDataAttr("1042", "1162");
        cy.selectRadio('Windows 11').click();
        cy.get('#product_enteredQuantity_6').clear().type('500')
        cy.addToCart().eq(0).click()
        computers.pageActions.clickShoppingCartLink().click();
        computers.pageActions.clickTermsOfServiceLink().click();
        computers.pageActions.clickCheckOutBtn().click();
        cy.checkoutAsGuest()
    });

    it('HP Spectre XT Pro UltraBook', () => {
        cy.addToCart().eq(2).click();
        cy.selectValueByDataAttr("1044", "1169");
        cy.selectValueByDataAttr("1045", "1172");
        cy.selectValueByDataAttr("1046", "1176");
        cy.selectValueByDataAttr("1047", "1181");
        cy.selectRadio('Windows Server 2022').click();
        cy.get('#product_enteredQuantity_7').clear().type('500')
        cy.addToCart().eq(0).click()
        computers.pageActions.clickShoppingCartLink().click();
        computers.pageActions.clickTermsOfServiceLink().click();
        computers.pageActions.clickCheckOutBtn().click();
        cy.checkoutAsGuest()
    });

    it('HP Envy 17 Touchscreen Laptop - Core™ Ultra 5', () => {
        cy.addToCart().eq(1).click();
        cy.selectValueByDataAttr("1049", "1187");
        cy.selectValueByDataAttr("1050", "1191");
        cy.selectValueByDataAttr("1051", "1196");
        cy.selectValueByDataAttr("1052", "1200");
        cy.selectRadio('Windows Server 2022').click();
        cy.get('#product_enteredQuantity_8').clear().type('500')
        cy.addToCart().eq(0).click()
        computers.pageActions.clickShoppingCartLink().click();
        computers.pageActions.clickTermsOfServiceLink().click();
        computers.pageActions.clickCheckOutBtn().click();
        cy.checkoutAsGuest() 
    });
});