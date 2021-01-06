context('Issue 14405', () => {

  it('Fails if test runner is minimized', () => {
   cy.visit('/')
   cy.wait(9000) // give some time to minimize the test runner window
   cy.contains('Open test dialog').click()
   cy.contains('This is a test dialog')
   cy.get('.ui-dropdown-trigger-icon').click()
   cy.contains('New York').click()
   cy.contains('Submit').click()
   cy.contains('Your selection has been submitted.')
  })
})
