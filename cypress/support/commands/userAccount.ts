declare global {
    namespace Cypress {
      interface Chainable {
        GoToIntoUserAccount: typeof GoToIntoUserAccount;
      }
    }
}

export const GoToIntoUserAccount = (Where:string) => {
    cy.fixture('userAccount').then((account) => {
        let where:string;
        switch (Where) {
            case 'Order History':
                where = account.orderHistoryButton;
                break;
            case 'My Credit':
                where = account.myCreditSlipsButton;
                break;
            case 'My Address':
                where = account.myAddressButton;
                break;
            case 'My Info':
                where = account.myPersonalInformationButton;
                break;
            case 'My Wish List':
                where = account.myWishListButton;
                break;
            default:
                where = account.orderHistoryButton;
                break;
        }
        cy.get(where).click();
    });
}