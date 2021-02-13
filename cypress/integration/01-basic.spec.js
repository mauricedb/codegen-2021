context('A basic test suite', () => {
  it('can load the movies page', () => {
    cy.visit('/movies');

    cy.get('tbody > :nth-child(2) > :nth-child(1)').should(
      'have.text',
      'Ad Astra'
    );

    cy.get('#movie-419704 > td.title').should('have.text', 'Ad Astra');
  });

  it('can load the page for Ad Astra', () => {
    cy.visit('/movie/419704');

    cy.get(':nth-child(1) > .form-control').should('be.visible');

    cy.get('#title > .form-control').should('be.visible');
  });
});
