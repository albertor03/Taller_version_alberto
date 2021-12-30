// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// in cypress/support/index.ts
// load type definitions that come with Cypress module
/// <reference types="cypress" />n

// Import commands.js using ES2015 syntax:

import { Login } from "./commands/login";
import { NavigateUserNav } from "./commands/userNav";
import { NavigateForTheMenu } from "./commands/productNav";
import { 
    GoToProductSummaryFromName, 
    GoToProductSummaryFromPosition, 
    GoToShoppingCart,
    AddSeveralProductsToCart
} from "./commands/productDashboard";
import { AddProductToCart } from "./commands/productSummary";
import { 
    clickProceedButton,
    clickAgreeCheckBox,
    selectPayMethod
} from "./commands/shoppingCartSummary";
import { clickButtonInSummaryModal } from "./commands/summaryModal";
import { GoToIntoUserAccount } from "./commands/userAccount";

Cypress.Commands.add('Login', Login);
Cypress.Commands.add('NavigateUserNav', NavigateUserNav);
Cypress.Commands.add('NavigateForTheMenu', NavigateForTheMenu);
Cypress.Commands.add('GoToProductSummaryFromName', GoToProductSummaryFromName);
Cypress.Commands.add('GoToProductSummaryFromPosition', GoToProductSummaryFromPosition);
Cypress.Commands.add('GoToShoppingCart', GoToShoppingCart);
Cypress.Commands.add('AddSeveralProductsToCart', AddSeveralProductsToCart);
Cypress.Commands.add('AddProductToCart', AddProductToCart);
Cypress.Commands.add('clickProceedButton', clickProceedButton);
Cypress.Commands.add('clickAgreeCheckBox', clickAgreeCheckBox);
Cypress.Commands.add('selectPayMethod', selectPayMethod);
Cypress.Commands.add('clickButtonInSummaryModal', clickButtonInSummaryModal);
Cypress.Commands.add('GoToIntoUserAccount', GoToIntoUserAccount);