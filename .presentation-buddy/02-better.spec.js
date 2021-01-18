context('A test suite using @testing-library/cypress', () => {
  it('can load the movies page', () => {
    cy.visit('/movies');

    cy.findByRole('cell', { name: 'Ad Astra' }).should('have.text', 'Ad Astra');
  });

  it('can load the page for Ad Astra', () => {
    cy.visit('/movie/419704');

    cy.findAllByLabelText('Title').should('be.visible');
    cy.findAllByLabelText('Title').should('have.value', 'Ad Astra');
    cy.findAllByLabelText('Vote').should('have.value', '6');
  });

  it('can navigate to a movie details', () => {
    cy.visit('/movies');

    cy.findByRole('row', { name: 'Avengers: Endgame 8.3 Edit' })
      .findByRole('link', { name: 'Edit' })
      .click();

    cy.findAllByLabelText('Title').should('have.value', 'Avengers: Endgame');
    cy.findAllByLabelText('Vote').should('have.value', '8.3');
    cy.findAllByLabelText('Release date').should('have.value', '2019-04-24');
  });
});
