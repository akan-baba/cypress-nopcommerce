const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config);
    },
    env: {
      allure: true,
      allureReuseAfterSpec: true,
      allureResultsPath: './allure-results', // Optional: Change the output directory
    },
    baseUrl: 'http://192.168.1.201:8085/',
    retries: {
      runMode: 2, // Retry failing tests twice in headless mode
      openMode: 0, // No retries in interactive mode
    }

    
  },
});
