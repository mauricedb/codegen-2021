context('cy.intercept() and data returned', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/popular-movies', {
      fixture: './popular-movies.json',
    }).as('popular-movies');

    cy.visit('/movies');
  });

  it('loads the complete data set', () => {
    return cy.wait('@popular-movies').then((xhr) => {
      const movies = xhr.response.body;

      movies.forEach((movie, index) => {
        cy.findAllByRole('rowgroup')
          .eq(1)
          .findAllByRole('row')
          .eq(index)
          .should('have.attr', 'id', `movie-${movie.id}`);

        cy.findAllByRole('rowgroup')
          .eq(1)
          .findAllByRole('row')
          .eq(index)
          .within((row) => {
            cy.wrap(row)
              .findAllByRole('cell')
              .eq(0)
              .should('have.text', movie.title);
            cy.wrap(row)
              .findAllByRole('cell')
              .eq(1)
              .should('have.text', movie.vote_average);
            cy.wrap(row)
              .findAllByRole('cell')
              .eq(2)
              .should('have.text', 'Edit');
          });
      });
    });
  });
});
