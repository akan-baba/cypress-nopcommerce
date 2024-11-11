
  Cypress.Commands.add('linkText', () => {
    cy.get("a[href*='/']");
  });

 
  import { faker } from "@faker-js/faker";
 
  Cypress.Commands.add('checkout', () => {
    const firstname = faker.person.firstName();
    const lastname = faker.person.lastName();
    const userName = faker.internet.userName();
    const randomString = Math.random().toString(36).substring(2, 5);
    const email = `john.doe${randomString}@live.co.uk`;
  
    cy.get('#billing_first_name').type(firstname);
    cy.get('#billing_last_name').type(lastname);
    cy.get('#billing_address_1').type('2 Moss Grange');
    cy.get('#billing_city').type('Manchester');
    cy.get('#billing_postcode').type('M13 0RE');
    cy.get('#billing_phone').type('01612261085');
    cy.get('#billing_email').clear().type(email);
    cy.get('#account_username').type(userName);
    cy.get('#account_password_field').type('New57hue%');
    cy.get('#place_order').click();
  });
