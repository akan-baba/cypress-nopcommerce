// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import '@shelex/cypress-allure-plugin';

// Alternatively you can use CommonJS syntax:
// require('./commands')
require('@shelex/cypress-allure-plugin');


const app = window.top;
if (!app.document.head.querySelector('[data-hide-command-log-request]')) {
const style = app.document.createElement('style');
style.innerHTML =
'.command-name-request, .command-name-xhr { display: none }';
style.setAttribute('data-hide-command-log-request', '');
app.document.head.appendChild(style);
}


Cypress.on('fail', (error, runnable) => {
    cy.allure().testBody(error.stack); // Attach error stack to the Allure report
    throw error; // Still fail the test
  });


const skipFailures = (Cypress.env('skipFailures') === 'true');

Cypress.on('uncaught:exception', (err, runnable) => {
  // Prevent failing the test on uncaught exceptions
  if (skipFailures) {
    cy.allure().testBody(err.stack); // Attach the exception to the report
    return false;
  }
});
