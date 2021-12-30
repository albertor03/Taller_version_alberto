declare global {
    namespace Cypress {
      interface Chainable {
        clickButtonInSummaryModal: typeof clickButtonInSummaryModal;
      }
    }
}

export const clickButtonInSummaryModal = (button:string) => {
    cy.fixture('summaryModal').then((modal) => {
        let btn:string;
        switch (button) {
            case 'Proceed':
                btn = modal.proccedToCheckoutButton;
                break;
            case 'Continue':
                btn = modal.continueButton;
                break;
            default:
                btn = modal.proccedToCheckoutButton;
                break;
        }
        cy.get(btn).click();
    });
}