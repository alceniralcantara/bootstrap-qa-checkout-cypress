import users from '../../fixtures/users.json';
import addresses from '../../fixtures/addresses.json';
import { LoginPage } from '../../pages/LoginPage';

describe('Checkout - Regression', () => {
  it('handles multi-item checkout and validates totals', () => {
    const login = new LoginPage();
    login.visit();
    login.login(users.standard.username, users.standard.password);

    cy.get('.inventory_item_name').eq(0).click();
    cy.get('[data-test^="add-to-cart"]').click();
    cy.get('[data-test="back-to-products"]').click();

    cy.get('.inventory_item_name').eq(1).click();
    cy.get('[data-test^="add-to-cart"]').click();
    cy.get('.shopping_cart_link').click();

    cy.get('.cart_item').should('have.length', 2);
    cy.get('[data-test="checkout"]').click();

    cy.get('[data-test="firstName"]').type(addresses.default.firstName);
    cy.get('[data-test="lastName"]').type(addresses.default.lastName);
    cy.get('[data-test="postalCode"]').type(addresses.default.postalCode);
    cy.get('[data-test="continue"]').click();

    cy.get('.summary_subtotal_label').invoke('text').then((text) => {
      const subtotal = parseFloat(text.replace(/[^0-9.]/g, ''));
      expect(subtotal).to.be.greaterThan(0);
    });
  });
});
