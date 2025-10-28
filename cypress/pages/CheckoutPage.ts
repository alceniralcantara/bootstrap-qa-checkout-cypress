import { checkoutSelectors } from '../selectors/checkout';

export class CheckoutPage {
  fillInfo(first: string, last: string, postalCode: string) {
    cy.get(checkoutSelectors.firstName).type(first);
    cy.get(checkoutSelectors.lastName).type(last);
    cy.get(checkoutSelectors.postalCode).type(postalCode);
    cy.get(checkoutSelectors.continueButton).click();
  }
  fillInfoNoPostalCode(first: string, last: string) {
    cy.get(checkoutSelectors.firstName).type(first);
    cy.get(checkoutSelectors.lastName).type(last);
    cy.get(checkoutSelectors.continueButton).click();
  }
  finish() {
    cy.get(checkoutSelectors.finishButton).click();
  }
  assertCompleted() {
    cy.get(checkoutSelectors.completeHeader).should('contain.text', 'Thank you for your order!');
  }
  assertError(message: string) {
    cy.get(checkoutSelectors.errorMessage).should('contain.text', message);
  }
  assertSubtotalGreaterThan(value: number) {
    cy.get(checkoutSelectors.subtotal).invoke('text').then((text) => {
      const subtotal = parseFloat(text.replace(/[^0-9.]/g, ''));
      expect(subtotal).to.be.greaterThan(value);
    });
  }
}
