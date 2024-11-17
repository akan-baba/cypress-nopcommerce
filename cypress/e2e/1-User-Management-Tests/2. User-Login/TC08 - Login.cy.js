import { Environment } from "../../../support/utils/environs";
import { LoginPage } from "../../../support/pages/userMgt/loginPage";


const loginPage = new LoginPage();
const baseUrl = Environment.getBaseUrl();

describe('User-login', () => {

    beforeEach(() => {
        cy.visit(baseUrl);
    });
    it('Login with invalid credentials', () => {
        loginPage.pageActions.clickLogin().click()
        loginPage.pageActions.enterUserName().type('invalid_username')
        loginPage.pageActions.enterPassword().type('invalid_password')
        loginPage.pageActions.clickLoginButton().click()
        loginPage.pageActions.verifyErrorMessage().should('be.visible')
    });

    it(' Login with empty fields', () => {
        loginPage.pageActions.clickLogin().click()
        //loginPage.pageActions.enterUserName().type('invalid_username')
        //loginPage.pageActions.enterPassword().type('invalid_password')
        loginPage.pageActions.clickLoginButton().click()
        loginPage.pageActions.verifyErrorMessage().should('be.visible')
    });

    it('Login with valid credentials', () => {
        loginPage.pageActions.clickLogin().click()
        loginPage.pageActions.enterUserName().type('Bridget.Howell')
        loginPage.pageActions.enterPassword().type('red1234')
        loginPage.pageActions.clickLoginButton().click()
        loginPage.pageActions.verifyLogOutLink().should('be.visible')
        loginPage.pageActions.checkLogOutLink().click()
    });
});