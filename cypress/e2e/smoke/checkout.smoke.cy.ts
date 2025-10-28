import users from '../../fixtures/users.json';
import addresses from '../../fixtures/addresses.json';
import { LoginPage } from '../../pages/LoginPage';

describe('Checkout - Smoke', () => {
  it('completes checkout with valid data', () => {
    const login = new LoginPage();

    login.visit();
    login.login(users.standard.username, users.standard.password);

    cy.get('.inventory_item_name').first().click();
    cy.get('[data-test^="add-to-cart"]').click();
    cy.get('.shopping_cart_link').click();
    cy.get('[data-test="checkout"]').click();

    cy.get('[data-test="firstName"]').type(addresses.default.firstName);
    cy.get('[data-test="lastName"]').type(addresses.default.lastName);
    cy.get('[data-test="postalCode"]').type(addresses.default.postalCode);
    cy.get('[data-test="continue"]').click();

    cy.get('[data-test="finish"]').click();
    cy.get('[data-test="complete-header"]').should('contain.text', 'THANK YOU FOR YOUR ORDER');
  });
});
