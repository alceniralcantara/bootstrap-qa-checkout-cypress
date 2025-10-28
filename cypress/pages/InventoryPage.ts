import { inventorySelectors } from '../selectors/inventory';

export class InventoryPage {
  addItemByIndex(index: number) {
    cy.get(inventorySelectors.itemName).eq(index).click();
    cy.get(inventorySelectors.addToCartButton).click();
    cy.get(inventorySelectors.backToProducts).click();
  }
  goToCart() {
    cy.get(inventorySelectors.cartLink).click();
  }
}
