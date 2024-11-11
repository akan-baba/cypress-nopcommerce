export class LoginPage {
  webSelectors = {
      loginLink: '.ico-login',
      userName: '#Username',
      password: '#Password',
      loginButton: '.login-button',
      logOutLink: '.ico-logout',
      errorMessage: '.message-error.validation-summary-errors' // Locator for the error message
  }

  pageActions = {
      clickLogin: () => cy.get(this.webSelectors.loginLink).click(),
      enterUserName: (username) => cy.get(this.webSelectors.userName).type(username),
      enterPassword: (password) => cy.get(this.webSelectors.password).type(password),
      clickLoginButton: () => cy.get(this.webSelectors.loginButton).click(),
      verifyLogOutLink: () => cy.get(this.webSelectors.logOutLink).should('be.visible'),
      checkLogOutLink: () => cy.get(this.webSelectors.logOutLink).click(),
      verifyErrorMessage: () => cy.get(this.webSelectors.errorMessage).should('be.visible')
  }
}
