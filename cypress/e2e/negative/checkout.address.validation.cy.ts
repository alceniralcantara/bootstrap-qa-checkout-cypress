import { InventoryPage } from '../../pages/InventoryPage';
import { CartPage } from '../../pages/CartPage';
import { CheckoutPage } from '../../pages/CheckoutPage';
import users from '../../fixtures/users.json';
import addresses from '../../fixtures/addresses.json';
import { LoginPage } from '../../pages/LoginPage';

describe('Checkout - Negative', () => {
  it('blocks continue without postal code', () => {
    const login = new LoginPage();
    login.visit();
    login.login(users.standard.username, users.standard.password);

    const inventory = new InventoryPage();
    const cart = new CartPage();
    const checkout = new CheckoutPage();

    inventory.addItemByIndex(0);
    inventory.goToCart();

    cart.checkout();

    checkout.fillInfoNoPostalCode(addresses.missingPostal.firstName, addresses.missingPostal.lastName);
    checkout.assertError('Error');
  });
});
