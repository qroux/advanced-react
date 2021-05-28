describe('Responsive design on mobile viewport', () => {
  before(() => {
    cy.viewport('iphone-8');
  });

  it('Form justify-content center on mobile', () => {
    cy.visit('/');
    cy.visit('/login');
    cy.get('#page-container').should('have.css', 'display', 'flex');
    cy.get('#page-container').should('have.css', 'justify-content', 'center');
  });
});

describe('Responsive design on desktop viewport', () => {
  before(() => {
    cy.viewport('macbook-16');
  });

  it('Form justify-content flex-start on desktop', () => {
    cy.viewport('macbook-16');
    cy.visit('/login');
    cy.get('#page-container').should('have.css', 'display', 'flex');
    cy.get('#page-container').should(
      'have.css',
      'justify-content',
      'flex-start'
    );
  });
});
