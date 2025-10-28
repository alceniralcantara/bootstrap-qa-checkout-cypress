import users from '../../fixtures/users.json';
import addresses from '../../fixtures/addresses.json';
import { LoginPage } from '../../pages/LoginPage';

describe('Checkout - Negative', () => {
  it('blocks continue without postal code', () => {
    const login = new LoginPage();

    login.visit();
    login.login(users.standard.username, users.standard.password);

    cy.get('.inventory_item_name').first().click();
    cy.get('[data-test^="add-to-cart"]').click();
    cy.get('.shopping_cart_link').click();
    cy.get('[data-test="checkout"]').click();

    cy.get('[data-test="firstName"]').type(addresses.missingPostal.firstName);
    cy.get('[data-test="lastName"]').type(addresses.missingPostal.lastName);
    cy.get('[data-test="continue"]').click();

    cy.get('[data-test="error"]').should('contain.text', 'Error');
  });
});
