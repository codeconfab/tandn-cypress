/// <reference types="Cypress" />

context('Location', () => {
  beforeEach(() => {
    cy.visit('/commands/location')
  })

  it('cy.hash() - get the current URL hash', () => {
    // https://on.cypress.io/hash
    cy.hash().should('be.empty')
  })

  it('cy.location() - get window.location', () => {
    // https://on.cypress.io/location
    cy.location().should((location) => {
      expect(location.hash).to.be.empty
      expect(location.href).to.eq('http://web/commands/location')
      expect(location.host).to.eq('web')
      expect(location.hostname).to.eq('web')
      expect(location.origin).to.eq('http://web')
      expect(location.pathname).to.eq('/commands/location')
      expect(location.port).to.eq('')
      expect(location.protocol).to.eq('http:')
      expect(location.search).to.be.empty
    })
  })

  it('cy.url() - get the current URL', () => {
    // https://on.cypress.io/url
    cy.url().should('include', '/commands/location')
  })
})
