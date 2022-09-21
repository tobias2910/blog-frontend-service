// Testing, whether the navigation bar is working as intended
// on bigger screens.

describe('Navigation bar on big screens', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.viewport('macbook-13')
  })

  it('allows to switch the site', () => {
    cy.get('#Request').click()
    cy.url().should('include', 'request')
  })

  it('allows to switch the display mode', () => {
    // The next-theme lib is automatically placing a
    // cookie when opening the page. To ensure we always
    // have the default ('dark') at the beginning,
    // we need to clear the local storage
    cy.clearLocalStorage()
    // Click on the switch theme and validate, whether
    // the value in the local storage is now switched
    // to light mode
    cy.get('.fill-secondary')
      .click()
      .should(() => {
        expect(localStorage.getItem('theme')).to.eq('light')
      })
  })
})

export {}
