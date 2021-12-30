declare global {
    namespace Cypress {
      interface Chainable {
        AddProductToCart: typeof AddProductToCart;
      }
    }
}

export const AddProductToCart = () => {
    cy.fixture('productSummary').then((summary) => {
        cy.get(summary.addCartButton).click();
    });
}