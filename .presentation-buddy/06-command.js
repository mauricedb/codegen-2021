Cypress.Commands.add('predictableRandomness', () => {
  const randomQueue = [
    0.5968,
    0.6896,
    0.1954,
    // Add more numbers here
  ];
  cy.window().then((win) => {
    cy.stub(win.Math, 'random').callsFake(() => {
      const rnd = randomQueue.shift();
      randomQueue.push(rnd);
      return rnd;
    });
  });
});
