describe('API Snapshot Testing', () => {
  it('snapshots response', () => {
    cy.request('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => {
        cy.wrap(response.body).snapshot()
        cy.wrap(response.status).snapshot()
      })
  })
})