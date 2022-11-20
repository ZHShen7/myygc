const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "76xo3p",
  e2e: {
    setupNodeEvents(on, config) {

    },
    baseUrl: "http://localhost:3000",
    supportFile: "test/cypress/support/e2e.{js,jsx,ts,tsx}",
    specPattern: "test/cypress/e2e/**/*.cy.{js,jsx,ts,tsx}"
  },
  fixturesFolder: "test/cypress/fixtures",
  videosFolder: "test/cypress/videos",
});
