// These E2E tests are focussing on the request form

describe('request form', () => {
  beforeEach(() => {
    // Go to the request page
    cy.visit('/request')
    cy.viewport('macbook-13')
  })

  it('accepts the user input', () => {
    cy.get('#firstName')
      .type('Tobias')
      .should('have.value', 'Tobias')
      .clear()
      .should('have.value', '')
  })

  it('recognizes falsy inputs', () => {
    // Enter an incorrect mail address
    cy.get('#email').type('no_correct_mail')
    // Change the field to trigger the error message
    cy.get('#description').focus()
    // Check whether the error message is visible
    cy.get(':nth-child(3) > .text-xs').should('be.visible')
  })

  it('allows to submit the form', () => {
    // Fill out all the required fields
    cy.get('#firstName').type('Tobias').should('have.value', 'Tobias')
    cy.get('#lastName').type('Caliskan').should('have.value', 'Caliskan')
    cy.get('#email')
      .type('tobias@mail.de')
      .should('have.value', 'tobias@mail.de')
    cy.get('#description')
      .type('x'.repeat(100))
      .should('have.value', 'x'.repeat(100))
    cy.get('#giveConsent').click().should('be.checked')
    // Click on the submit button
    cy.get('.justify-center > .Button_root__G_l9X').click()
    // Check, if the request was successfully submitted
    cy.get('.row-span-5 > .flex > .w-full').should(
      'have.text',
      'Request successfully submitted'
    )
    // Close the popup
    cy.get('.rounded-full > .w-5').click()
  })
})
