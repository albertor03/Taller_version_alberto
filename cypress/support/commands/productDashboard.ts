declare global {
    namespace Cypress {
      interface Chainable {
        GoToProductSummaryFromName: typeof GoToProductSummaryFromName;
        GoToProductSummaryFromPosition: typeof GoToProductSummaryFromPosition;
        AddSeveralProductsToCart: typeof AddSeveralProductsToCart;
        GoToShoppingCart: typeof GoToShoppingCart;
      }
    }
}

export const GoToProductSummaryFromName = (product:string) => {
    cy.fixture('productDashboard').then((dashboard) => {
        cy.get(dashboard.productName).contains(product).click();
    })
}

export const GoToProductSummaryFromPosition = (position:number) => {
    cy.fixture('productDashboard').then((dashboard) => {
        cy.get(dashboard.productName).contains(position).click();
    })
}

export const AddSeveralProductsToCart = (products:string[]) => {
    products.forEach(product => {
        cy.fixture('productDashboard').then((dashboard) => {
            cy.get(dashboard.productName).each(($e, index) => {
                if ($e.text().trim() === product) {
                    cy.get(dashboard.addCartButton).eq(index).click();
                }
            })
        });

        cy.fixture('summaryModal').then((modal) => {
            cy.get(modal.closeWindows).click();
        });
    });
}

export const GoToShoppingCart = () => {
    cy.fixture('productDashboard').then((dashboard) => {
        cy.get(dashboard.viewShoppingCart).click();
    });
}
