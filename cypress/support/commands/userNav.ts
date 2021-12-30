declare global {
    namespace Cypress {
      interface Chainable {
        NavigateUserNav: typeof NavigateUserNav;
      }
    }
}

export const NavigateUserNav = (Where: string) => {
    cy.fixture('userNav').then((navigate) => {
        let where: string;
        switch (Where) {
            case 'Contact':
                where = navigate.contactItemNav;
                break;
            case 'Logout':
                where = navigate.logoutItemNav;
                break;
            case 'Account':
                where = navigate.accountItemNav;
                break;
            default:
                where = navigate.accountItemNav;
                break;
        }
        cy.get(where).click();
    })
}