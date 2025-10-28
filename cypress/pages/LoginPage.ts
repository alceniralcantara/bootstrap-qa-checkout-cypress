import { loginSelectors } from '../selectors/login';

export class LoginPage {
  visit() {
    cy.visit('/');
  }
  login(username: string, password: string) {
    cy.get(loginSelectors.username).type(username);
    cy.get(loginSelectors.password).type(password, { log: false });
    cy.get(loginSelectors.loginButton).click();
  }
  assertError(message: string) {
    cy.get(loginSelectors.errorMessage).should('contain.text', message);
  }
}
