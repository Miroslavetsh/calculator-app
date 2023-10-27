const URL = 'http://127.0.0.1:5173/'

describe('Login flow', () => {
  beforeEach(() => {
    cy.visit(URL)
  })

  it('"/" rout redirects to "/login"', () => {
    cy.contains('Username').should('exist')
    cy.contains('Email').should('exist')
  })

  it('validates the credentials', () => {
    cy.get('[data-testId="username-field"]').should('exist').type('a')
    cy.get('[data-testId="email-field"]').should('exist').type('a')
    cy.contains('Submit').click()

    cy.contains('3+ chars').should('exist')
    cy.contains('6+ chars').should('exist')
  })

  it('validates email pattern', () => {
    cy.get('[data-testId="email-field"]').should('exist').type('aa@aaaa')
    cy.contains('Submit').click()

    cy.contains('Should match email pattern').should('exist')
  })

  it('passes inside the /main', () => {
    cy.get('[data-testId="username-field"]').should('exist').type('Myroslav')
    cy.get('[data-testId="email-field"]').should('exist').type('dfgshte@gmail.com')
    cy.contains('Submit').click()

    cy.contains('Hello, Myroslav').should('exist')
  })
})
