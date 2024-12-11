

describe('Change Password', () => {

    it('Chang pasword form', () => {

        cy.visit('http://192.168.1.201:8085/')
        cy.customerLogin()
        cy.get('.ico-account').click()
        cy.get('.block > .title').click()
        cy.get('.change-password > a').click()
        cy.get('#OldPassword').type('red1234')
        cy.get('#NewPassword').type('red1234')
        cy.get('#ConfirmNewPassword').type('red1234')
        cy.get("button[class='button-1 change-password-button']").click()
        cy.get('.content').should('be.visible', 'Password was changed')
    });
    
});