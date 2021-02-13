context('Snapshot testing', () => {
  it('compare the movie list against a snapshot', () => {
    cy.intercept('GET', '**/popular-movies', {
      fixture: './popular-movies.json',
    }).as('popular-movies');

    cy.visit('/movies');
    cy.findByRole('columnheader', { name: 'Movie Title' }).should('be.visible');

    cy.findByRole('table').matchImageSnapshot();
  });

  it('compare the movie details against a snapshot', () => {
    cy.visit('/movie/419704');
    cy.predictableRandomness();

    cy.findByLabelText('Title').should('be.visible');

    cy.get('form').matchImageSnapshot({
      failureThreshold: 0,
    });
  });
});
