describe('Buy Products', () => {
    beforeEach(() =>{
        cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account');
        cy.fixture('login').then((user) => {
            cy.Login(user.username, user.password);
        })
    });

    it('Buy One Product', () => {
        cy.NavigateForTheMenu('Women');
        cy.fixture('productDashboard').then((dashboard) => {
            cy.get(dashboard.title).should('contain', 'Women');
        });

        cy.GoToProductSummaryFromName('Faded Short Sleeve T-shirts');
        cy.fixture('productSummary').then((summary) => {
            cy.get(summary.productName).should('contain', 'Faded Short Sleeve T-shirts');
        });

        cy.AddProductToCart();
        cy.fixture('summaryModal').then((modal) => {
            cy.get(modal.confirmText).should('contain', 'Product successfully added to your shopping cart');
            cy.get(modal.productNameText).should('contain', 'Faded Short Sleeve T-shirts');
        });

        cy.clickButtonInSummaryModal('Proceed');
        cy.fixture('shoppingCartSummary').then((shopping) => {
            cy.get(shopping.cartTitle).should('contain', 'Shopping-cart summary');
            cy.get(shopping.stepText).should('contain', 'Summary');
        });

        cy.clickProceedButton();
        cy.fixture('shoppingCartSummary').then((shopping) => {
            cy.get(shopping.stepText).should('contain', 'Address');
        });

        cy.clickProceedButton();
        cy.fixture('shoppingCartSummary').then((shopping) => {
            cy.get(shopping.stepText).should('contain', 'Shipping');
        });

        cy.clickAgreeCheckBox();
        cy.clickProceedButton();
        cy.fixture('shoppingCartSummary').then((shopping) => {
            cy.get(shopping.stepText).should('contain', 'Payment');
        });

        cy.selectPayMethod('Banco');
        cy.fixture('shoppingCartSummary').then((shopping) => {
            cy.get(shopping.payMethodTitle).should('contain', 'Bank-wire payment.');
        });

        cy.clickProceedButton();
        cy.fixture('shoppingCartSummary').then((shopping) => {
            cy.get(shopping.paymentCompleteText).should('contain', 'Your order on My Store is complete.');
        });

        cy.NavigateUserNav('Account');
        cy.fixture('userAccount').then((account) => {
            cy.get(account.userAccountTitle).should('contain', 'My account');
        });

        cy.GoToIntoUserAccount('Order History');
        cy.fixture('orderHistory').then((order) => {
            var actualDate = `${new Date().getMonth() + 1}/${new Date().getDate()}/${new Date().getFullYear()}`
            cy.get(order.orderHistoryTitle).should('contain', 'Order history');
            cy.get(order.fistItemText).should('contain', actualDate);
        });
    });

    it('Buy Several Products', () => {
        cy.NavigateForTheMenu('Women');
        cy.fixture('productDashboard').then((dashboard) => {
            cy.get(dashboard.title).should('contain', 'Women');
        });
        
        cy.AddSeveralProductsToCart(['Faded Short Sleeve T-shirts', 'Blouse']);
        cy.GoToShoppingCart();

        cy.fixture('shoppingCartSummary').then((shopping) => {
            cy.get(shopping.cartTitle).should('contain', 'Shopping-cart summary');
            cy.get(shopping.stepText).should('contain', 'Summary');
        });

        cy.clickProceedButton();
        cy.fixture('shoppingCartSummary').then((shopping) => {
            cy.get(shopping.stepText).should('contain', 'Address');
        });

        cy.clickProceedButton();
        cy.fixture('shoppingCartSummary').then((shopping) => {
            cy.get(shopping.stepText).should('contain', 'Shipping');
        });

        cy.clickAgreeCheckBox();
        cy.clickProceedButton();
        cy.fixture('shoppingCartSummary').then((shopping) => {
            cy.get(shopping.stepText).should('contain', 'Payment');
        });

        cy.selectPayMethod('Banco');
        cy.fixture('shoppingCartSummary').then((shopping) => {
            cy.get(shopping.payMethodTitle).should('contain', 'Bank-wire payment.');
        });

        cy.clickProceedButton();
        cy.fixture('shoppingCartSummary').then((shopping) => {
            cy.get(shopping.paymentCompleteText).should('contain', 'Your order on My Store is complete.');
        });

        cy.NavigateUserNav('Account');
        cy.fixture('userAccount').then((account) => {
            cy.get(account.userAccountTitle).should('contain', 'My account');
        });

        cy.GoToIntoUserAccount('Order History');
        cy.fixture('orderHistory').then((order) => {
            var actualDate = `${new Date().getMonth() + 1}/${new Date().getDate()}/${new Date().getFullYear()}`
            cy.get(order.orderHistoryTitle).should('contain', 'Order history');
            cy.get(order.fistItemText).should('contain', actualDate);
        });
    })
})