describe('Snapshot Testing', () => {

  beforeEach(() => {
    cy.visit('./test.html')
  })

  it('snapshot DOM element', () => {
    cy.get('[data-testid="test-title"]')
      .snapshot({
        name: 'test-title'
      })
    cy.get('[data-testid="test-body"]')
      .snapshot({
        name: 'test-body'
      })
  })
})