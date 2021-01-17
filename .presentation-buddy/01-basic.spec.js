context('A basic test suite', () => {
  it('can load the movies page', () => {
    cy.visit('http://localhost:3000/movies');

    cy.get('tbody > :nth-child(2) > :nth-child(1)').should(
      'have.text',
      'Ad Astra'
    );
  });

  it('can load the page for Ad Astra', () => {
    cy.visit('http://localhost:3000/movie/419704');

    cy.get(':nth-child(1) > .form-control').should('be.visible');
  });
});
