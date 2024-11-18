
  Cypress.Commands.add('linkText', () => {
    cy.get("a[href*='/']");
  });
  
  Cypress.Commands.add('selectValueByDataAttr', (attrValue, selectValue) => {
    cy.get(`select[data-attr="${attrValue}"]`).select(selectValue);
  });

  Cypress.Commands.add("addToCart", () => {
    cy.get('button:contains("Add to cart")');
    
  });

  Cypress.Commands.add("selectRadio", (text) => {
    return cy.contains('label', text).prev('input[type="radio"]'); // Find the radio button based on the label text
  });
  
  Cypress.Commands.add("creditCard", () => {
    cy.get('#CardholderName').type('John Doe');
    cy.get('#CardNumber').type('5373170427721005')
    cy.get('#ExpireMonth').select('7')
    cy.get('#ExpireYear').select('2030')
    cy.get('#CardCode').type('123');
    cy.get('.button-1.payment-info-next-step-button').click()
  });
  
 
  import { faker } from "@faker-js/faker";
 
  Cypress.Commands.add('checkoutAsGuest', () => {
    const firstname = faker.person.firstName();
    const lastname = faker.person.lastName();
    const userName = faker.internet.userName();
    const randomString = Math.random().toString(36).substring(2, 5);
    const email = `john.doe${randomString}@live.co.uk`;
    cy.get('.button-1.checkout-as-guest-button').click()
    cy.get('#BillingNewAddress_FirstName').type(firstname);
    cy.get('#BillingNewAddress_LastName').type(lastname);
    cy.get('#BillingNewAddress_Email').type(email);
    cy.get('#BillingNewAddress_CountryId').select('235');
    cy.get('#BillingNewAddress_StateProvinceId').select('628');
    cy.get('#BillingNewAddress_County').type('Greater Manchester');
    cy.get('#BillingNewAddress_City').type('Manchester');
    cy.get('#BillingNewAddress_Address1').type('123 Test Street');
    cy.get('#BillingNewAddress_ZipPostalCode').type('M1 3QQ');
    cy.get('#BillingNewAddress_PhoneNumber').type('01612251085');
    cy.get("button[onclick='Billing.save()']").click();
    cy.get('.button-1.shipping-method-next-step-button').click();
    cy.get('#paymentmethod_1').click();
    cy.get("button[class='button-1 payment-method-next-step-button']").click();;
    cy.creditCard()
    cy.get('.button-1.confirm-order-next-step-button').click();
    cy.get("div[class='section order-completed'] div[class='title'] strong").should('be.visible', 'Your order has been successfully processed!');
   });
