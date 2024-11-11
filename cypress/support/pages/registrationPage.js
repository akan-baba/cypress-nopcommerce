export class UserRegistration {

         //------------------Selectors --------------------------------

    webSelectors = {
        registerLink: '.ico-register',
        maleCheckBox: '#gender-male',
        femaleCheckBox: '#gender-female',
        firstName: '#FirstName',
        lastName: '#LastName',
        dobMonth: "select[name='DateOfBirthMonth']",
        dobDay: "select[name='DateOfBirthDay']",
        dobYear: "select[name='DateOfBirthYear']",
        email: '#Email',
        userName:'#Username',
        streetAddress: '#StreetAddress',
        zipCode:'#ZipPostalCode',
        county:'#County',
        city:'#City',
        country:'#CountryId',
        stateProvince:'#StateProvinceId',
        phone:'#Phone',
        Password:'#Password',
        confirmPassword:'#ConfirmPassword',
        consent:'#accept-consent',
        registerButton:'#register-button',
        successMessage:'[class="result"]',

       

    }

    //-----------------------------Actions-----------------------------  

    pageActions ={
        clickRegisterLink: () => cy.get(this.webSelectors.registerLink),
        clickMaleCheckBox: () => cy.get(this.webSelectors.maleCheckBox),
        clickFemaleCheckBox: () => cy.get(this.webSelectors.femaleCheckBox),
        enterFirstName: () => cy.get(this.webSelectors.firstName),
        enterLastName: () => cy.get(this.webSelectors.lastName),
        selectMonth: () => cy.get(this.webSelectors.dobMonth),
        selectDay: () => cy.get(this.webSelectors.dobDay),
        selectYear: () => cy.get(this.webSelectors.dobYear),
        enterEmail: () => cy.get(this.webSelectors.email),
        enterUserName: () => cy.get(this.webSelectors.userName),
        enterStreetAddress: () => cy.get(this.webSelectors.streetAddress),
        enterZipCode: () => cy.get(this.webSelectors.zipCode),
        enterCounty: () => cy.get(this.webSelectors.county),
        enterCity: () => cy.get(this.webSelectors.city),
        selectCountry: () => cy.get(this.webSelectors.country),
        selectStateProvince: () => cy.get(this.webSelectors.stateProvince),
        enterPhone: () => cy.get(this.webSelectors.phone),
        enterPassword: () => cy.get(this.webSelectors.Password),
        enterConfirmPassword: () => cy.get(this.webSelectors.confirmPassword),
        clickConsent: () => cy.get(this.webSelectors.consent),
        clickRegisterButton: () => cy.get(this.webSelectors.registerButton),
        verifySucessMessage: () => cy.get(this.webSelectors.successMessage),
    }


}