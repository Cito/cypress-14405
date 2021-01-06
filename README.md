# Cypress 14405

This is an example for [Cypress issue 14405](https://github.com/cypress-io/cypress/issues/14405).

Cypress tests can fail when running them with a minimized test runner window.

## Steps to reproduce the problem

1. Install the project with `npm install`.
2. Run `ng serve` to start the web server and wait until it is running.
3. Run `npx cypress open` to start Cypress.
4. Choose "Chrome 87" as test browser.
5. Run the integration spec.
6. Wait about 10s until the test passes.
7. Run the integration spec again, but this time immediately minimize the test runner window.
8. Again, wait about 10s while the test runner is running minimized.
9. Maximize the test runner again and notice that there is a CypressError on step 10:
   "Timed out retrying after 4050ms: `cy.click()` failed because the submit button is not visible."

If you cannot reproduce it, make sure you minimize the window early enough and then wait until the test starts "in the dark", don't maximize the window too early.
