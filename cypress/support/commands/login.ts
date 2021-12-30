declare global {
    namespace Cypress {
      interface Chainable {
        Login: typeof Login;
      }
    }
}

export const Login = (username: string, password: string) => {
    cy.fixture('login').then((login) => {
        cy.get(login.emailInput).type(username);
        cy.get(login.passwordInput).type(password);
        cy.get(login.loginButton).click();
    }) 
}
