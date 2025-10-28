import { InventoryPage } from '../../pages/InventoryPage';
import { CartPage } from '../../pages/CartPage';
import { CheckoutPage } from '../../pages/CheckoutPage';

describe('Checkout - Smoke', () => {
  it('completes checkout with valid data', () => {
    cy.loginStandard();

    const inventory = new InventoryPage();
    const cart = new CartPage();
    const checkout = new CheckoutPage();

    inventory.addItemByIndex(0);
    inventory.goToCart();

    cart.assertItems(1);
    cart.checkout();

    cy.fillDefaultCheckoutInfo();
    checkout.finish();
    checkout.assertCompleted();
  });
});
