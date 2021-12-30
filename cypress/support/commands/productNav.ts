declare global {
    namespace Cypress {
      interface Chainable {
        NavigateForTheMenu: typeof NavigateForTheMenu;
      }
    }
}

export const NavigateForTheMenu = (menu : string) => {
    cy.fixture('navigate').then((navigate) => {
        cy.get(navigate.navigateElement).contains(menu).click();
    })
}