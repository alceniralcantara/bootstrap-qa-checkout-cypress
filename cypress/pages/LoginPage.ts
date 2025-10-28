export class LoginPage {
  visit() {
    cy.visit('/');
  }
  login(username: string, password: string) {
    cy.get('[data-test="username"]').type(username);
    cy.get('[data-test="password"]').type(password, { log: false });
    cy.get('[data-test="login-button"]').click();
  }
}
