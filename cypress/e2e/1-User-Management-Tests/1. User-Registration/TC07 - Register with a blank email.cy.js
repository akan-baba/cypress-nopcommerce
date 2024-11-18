import { Environment } from "../../../support/utils/environs";
import { UserRegistration } from "../../../support/pages/userMgt/registrationPage";
import { faker } from "@faker-js/faker";

const userRegistration = new UserRegistration();
const baseUrl = Environment.getBaseUrl();
const userName = faker.internet.userName();
const email = faker.internet.email();
const firstname = faker.person.firstName();
const lastname = faker.person.lastName();

describe('User Registration', () => {
    it('Registration Page', () => {
        cy.visit(baseUrl);
        userRegistration.pageActions.clickRegisterLink().click()
        userRegistration.pageActions.clickMaleCheckBox().click()
        userRegistration.pageActions.enterFirstName().type(firstname)
        userRegistration.pageActions.enterLastName().type(lastname)
        userRegistration.pageActions.selectDay().select('25')
        userRegistration.pageActions.selectMonth().select('7')
        userRegistration.pageActions.selectYear().select('1990')
        //userRegistration.pageActions.enterEmail().type(email)
        userRegistration.pageActions.enterUserName().type(userName)
        userRegistration.pageActions.enterStreetAddress().type('2 Moss Grange Avenue')
        userRegistration.pageActions.enterZipCode().type('M16 7RJ')
        userRegistration.pageActions.enterCounty().type('Greater Manchester')
        userRegistration.pageActions.enterCity().type('Storkport')
        userRegistration.pageActions.selectCountry().select('235')
        userRegistration.pageActions.selectStateProvince().select('626')
        userRegistration.pageActions.enterPhone().type('016221085')
        userRegistration.pageActions.enterPassword().type('r')
        userRegistration.pageActions.enterConfirmPassword().type('r')
        userRegistration.pageActions.clickConsent().click()
        userRegistration.pageActions.clickRegisterButton().click()
        cy.get('#Email-error').contains('Email is required.')
        
             
        
    });
});