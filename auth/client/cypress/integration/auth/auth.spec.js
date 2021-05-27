import { cyan } from '@material-ui/core/colors';

describe('Render pages', () => {
  it('renders the hompage page on /', () => {
    cy.visit('/');
    cy.get('h4').should('exist');
  });

  it('renders the signup page on /signup', () => {
    cy.visit('/signup');
    cy.get('h4').should('exist');
  });

  it('renders the login page on /login', () => {
    cy.visit('/login');
    cy.get('h4').should('exist');
  });

  it('renders the error message on /feature when not authenticated', () => {
    cy.visit('/feature');
    cy.get('h3').should('exist');
  });
});

describe('Signup form', () => {
  it('render error message when credential missing on SignupForm', () => {
    cy.visit('/signup');
    cy.get('form').submit();
    cy.get('p').should('exist');
  });

  it('render create user when correct credentials on SignupForm', () => {
    cy.visit('/signup');
    cy.get('#email-input').should('exist');
    const rand = Math.floor(Math.random() * 100) + 1;
    cy.get('#email-input').type(`test@test${rand}.com`);
    cy.get('#password-input').type('azerty123');
    cy.get('form').submit();

    cy.location().should((path) => {
      expect(path.href).to.eql('http://localhost:3000/feature');
    });
  });
});
