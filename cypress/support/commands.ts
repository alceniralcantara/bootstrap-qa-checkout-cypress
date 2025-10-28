import users from '../fixtures/users.json';
import addresses from '../fixtures/addresses.json';
import { LoginPage } from '../pages/LoginPage';
import { CheckoutPage } from '../pages/CheckoutPage';

declare global {
  namespace Cypress {
    interface Chainable {
      loginStandard(): Chainable<void>;
      fillDefaultCheckoutInfo(): Chainable<void>;
    }
  }
}

Cypress.Commands.add('loginStandard', () => {
  const login = new LoginPage();
  login.visit();
  login.login(users.standard.username, users.standard.password);
});

Cypress.Commands.add('fillDefaultCheckoutInfo', () => {
  const checkout = new CheckoutPage();
  checkout.fillInfo(addresses.default.firstName, addresses.default.lastName, addresses.default.postalCode);
});
