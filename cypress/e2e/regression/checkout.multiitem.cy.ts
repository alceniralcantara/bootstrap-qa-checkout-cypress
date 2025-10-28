import { InventoryPage } from '../../pages/InventoryPage';
import { CartPage } from '../../pages/CartPage';
import { CheckoutPage } from '../../pages/CheckoutPage';
import cypress from 'cypress';

describe('Checkout - Regression', () => {
  it('handles multi-item checkout and validates totals', () => {
    cy.loginStandard();

    const inventory = new InventoryPage();
    const cart = new CartPage();
    const checkout = new CheckoutPage();

    inventory.addItemByIndex(0);
    inventory.addItemByIndex(1);
    inventory.goToCart();

    cart.assertItems(2);
    cart.checkout();

    cy.fillDefaultCheckoutInfo();
    checkout.assertSubtotalGreaterThan(0);
  });
});
