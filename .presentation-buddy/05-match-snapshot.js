it('compares against a snapshot', () => {
  cy.visit('/movies');
  cy.findByText('Movie 2').should('be.visible');

  cy.findByRole('table').matchImageSnapshot();
});
