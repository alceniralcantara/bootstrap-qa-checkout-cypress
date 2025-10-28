import { cartSelectors } from '../selectors/cart';

export class CartPage {
  assertItems(count: number) {
    cy.get(cartSelectors.cartItem).should('have.length', count);
  }
  checkout() {
    cy.get(cartSelectors.checkoutButton).click();
  }
}
