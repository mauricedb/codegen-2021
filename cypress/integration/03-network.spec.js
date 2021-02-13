context('Fake the network with cy.intercept()', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/popular-movies', {
      fixture: './popular-movies.json',
    }).as('popular-movies');
  });

  it('can load a fake movie', () => {
    cy.visit('/movies');

    cy.findAllByRole('rowgroup')
      .eq(1)
      .findAllByRole('row')
      .eq(1)
      .findAllByRole('cell')
      .eq(0)
      .should('have.text', 'Movie 2');
  });
});
