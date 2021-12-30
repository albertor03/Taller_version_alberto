declare global {
    namespace Cypress {
      interface Chainable {
        clickProceedButton: typeof clickProceedButton;
        clickAgreeCheckBox: typeof clickAgreeCheckBox;
        selectPayMethod: typeof selectPayMethod;
      }
    }
}

export const clickProceedButton = () => {
    cy.fixture('shoppingCartSummary').then((shopping) => {
        cy.get(shopping.proceedButton).click();
    });
}

export const clickAgreeCheckBox = () => {
    cy.fixture('shoppingCartSummary').then((shopping) => {
        cy.get(shopping.agreeCheckBox).check();
    });
}

export const selectPayMethod = (Method:string) => {
    cy.fixture('shoppingCartSummary').then((shopping) => {
        let method:string;
        switch (Method) {
            case 'Banco':
                method = shopping.payBankWireMethod;
                break;
            case 'Cheque':
                method = shopping.payCheckMethod;
                break;    
            default:
                method = shopping.payBankWireMethod;
                break;
        }
        cy.get(method).click();
    })
}