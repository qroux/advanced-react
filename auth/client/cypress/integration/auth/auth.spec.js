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

  it('redirect to homepage when not authenticated', () => {
    cy.visit('/feature');
    cy.location().should((path) => {
      expect(path.href).to.eql('http://localhost:3000/');
    });
  });
});

describe('Signup form', () => {
  let email = '';
  const password = 'azerty123';

  before(() => {
    const rand = Math.floor(Math.random() * 100) + 1;
    email = `test@test${rand}.com`;
  });

  it('render error message when credential missing on SignupForm', () => {
    cy.visit('/signup');
    cy.get('form').submit();
    cy.get('p').should('exist');
  });

  it('render create user when correct credentials on SignupForm', () => {
    cy.visit('/signup');
    cy.get('#email-input').should('exist');
    cy.get('#email-input').type(email);
    cy.get('#password-input').type(password);
    cy.get('form').submit();

    cy.location().should((path) => {
      expect(path.href).to.eql('http://localhost:3000/feature');
    });
  });

  it('Disconnect user and redirect to Homepage', () => {
    cy.visit('/signout');
    cy.location().should((path) => {
      expect(path.href).to.eql('http://localhost:3000/');
    });
  });

  it('Login user with credentials and redirect to /feature', () => {
    cy.visit('/login');
    cy.get('#email-input').should('exist');
    cy.get('#email-input').type(email);
    cy.get('#password-input').type(password);
    cy.get('form').submit();

    cy.location().should((path) => {
      expect(path.href).to.eql('http://localhost:3000/feature');
    });
  });
});
