// These E2E tests are focusing on the drawer menu that
// only appears on smaller screens.

describe('drawer menu on mobile devices', () => {
  beforeEach(() => {
    // Open the landing page of the website
    cy.visit('/')
    // Change the viewport to activate the smaller view
    cy.viewport('iphone-x')
  })

  it('lists all the navigation options', () => {
    // Get the menu and open it
    cy.get('.stroke-secondary').click()
    // Get the element containing all the navigation options and
    // check, whether all navigation options are available
    cy.get('.h-screen > .w-full')
      .children()
      .should('have.length', 4)
      .last()
      .should('have.text', 'Request')
    // Close the menu again
    cy.get('.stroke-secondary').click()
  })

  it('can navigate to another page', () => {
    // Open the menu
    cy.get('.stroke-secondary').click()
    // Click on the 'Request' entry
    cy.get('.h-screen > .w-full > :nth-child(4) > div > #Request').click()
    // Check if the url is correct
    cy.url().should('include', 'request')
    // Close the menu again
    cy.get('.stroke-secondary').click()
  })
})
