const URL = 'http://127.0.0.1:5173/'

describe('Login flow', () => {
  beforeEach(() => {
    cy.visit(URL)
  })

  const login = () => {
    cy.get('[data-testId="username-field"]').should('exist').type('Myroslav')
    cy.get('[data-testId="email-field"]').should('exist').type('dfgshte@gmail.com')
    cy.contains('Submit').click()
  }

  const doCalculation = () => {
    login()

    Cypress._.times(3, () => {
      cy.get('[data-testId="key-9"]').click()
    })

    cy.get('[data-testId="display"]').should('exist').should('have.value', '999')

    cy.get('[data-testId="key-+"]').click()

    Cypress._.times(3, () => {
      cy.get('[data-testId="key-1"]').click()
    })

    cy.get('[data-testId="key-="]').click()
    cy.get('[data-testId="display"]').should('exist').should('have.value', '1110')
  }

  it('getting /main after login', () => {
    login()

    cy.contains('Hello, Myroslav').should('exist')
    cy.contains('Logout').should('exist')
    cy.contains('Calculator').should('exist')
    cy.contains('History').should('exist')
  })

  describe('Calculator', () => {
    it('calculates', () => {
      doCalculation()
    })

    it('clears the display', () => {
      doCalculation()

      cy.contains('Clear Calculator').click()
      cy.get('[data-testId="display"]').should('exist').should('have.value', '')
    })

    it('shows errors', () => {
      doCalculation()

      cy.get('[data-testId="key-/"]').click()
      cy.get('[data-testId="key-+"]').click()
      cy.get('[data-testId="key-="]').click()

      cy.get('[data-testId="display"]').should('exist').should('have.value', 'Invalid Input')
    })
  })

  describe('History', () => {
    it('remembers values', () => {
      doCalculation()

      cy.contains('History').should('exist').click()
      cy.get('ol').find('li').should('have.length', 8)
    })

    it("clears the history, but saves the calculator's state", () => {
      doCalculation()

      cy.contains('History').should('exist').click()
      cy.get('ol').find('li').should('have.length', 8)

      cy.contains('Clear History').click()

      cy.contains('No history here, start calculating 😉').should('exist')

      cy.contains('Calculator').click()

      cy.get('[data-testId="display"]').should('exist').should('have.value', '1110')
    })

    it('has 20 operations limit', () => {
      doCalculation()

      Cypress._.times(3, () => {
        cy.get('[data-testId="key-9"]').click()
      })

      cy.get('[data-testId="display"]').should('exist').should('have.value', '1110999')

      cy.get('[data-testId="key-+"]').click()

      Cypress._.times(3, () => {
        cy.get('[data-testId="key-1"]').click()
      })

      cy.get('[data-testId="key-="]').click()

      cy.get('[data-testId="display"]').should('exist').should('have.value', '1111110')

      Cypress._.times(5, () => {
        cy.get('[data-testId="key-8"]').click()
      })

      cy.contains('History').click()

      cy.get('ol')
        .find('li')
        .each((item, index) => {
          if (index < 2) expect(item.text()).to.equal('9')
          if (index === 3) expect(item.text()).not.to.equal('9')
        })
    })
  })
})
