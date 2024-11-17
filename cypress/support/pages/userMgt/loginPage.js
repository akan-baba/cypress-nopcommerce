export class LoginPage {
  webSelectors = {
      loginLink: '.ico-login',
      userName: '#Username',
      password: '#Password',
      loginButton: '.login-button',
      logOutLink: '.ico-logout',
      errorMessage: '.message-error',
      forgotPwd : "a[href='/passwordrecovery']"
  }

  pageActions = {
      clickLogin: () => cy.get(this.webSelectors.loginLink),
      enterUserName: () => cy.get(this.webSelectors.userName),
      enterPassword: () => cy.get(this.webSelectors.password),
      clickLoginButton: () => cy.get(this.webSelectors.loginButton),
      verifyLogOutLink: () => cy.get(this.webSelectors.logOutLink),
      checkLogOutLink: () => cy.get(this.webSelectors.logOutLink),
      verifyErrorMessage: () => cy.get(this.webSelectors.errorMessage),
      forgotPassword: () => cy.get(this.webSelectors.forgotPwd)
  }
}
