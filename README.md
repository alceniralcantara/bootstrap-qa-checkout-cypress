# QA Checkout E2E – Cypress + POM

## Tech Stack
- Cypress + TypeScript
- Page Object Model (POM)
- Ajv for JSON schema validation
- Axios for API requests
- GitHub Actions for CI/CD

## Target Systems
- UI: https://www.saucedemo.com
- API: https://fakestoreapi.com

## Setup
```bash
npm ci
npx cypress open
```

## Run Tests
- All tests: `npm test`
- Smoke: `npx cypress run --spec cypress/e2e/smoke/checkout.smoke.cy.ts`
- Regression: `npx cypress run --spec cypress/e2e/regression/*`
- Negative: `npx cypress run --spec cypress/e2e/negative/*`
- Contract: `npx cypress run --spec cypress/e2e/contract/*`

## Project Structure
- cypress/pages: POM classes
- cypress/e2e: smoke, regression, negative, contract tests
- cypress/fixtures: test data
- cypress/apis/contracts: API schemas

## Test Coverage
- Smoke: full checkout flow
- Regression: login, cart, summary
- Negative: address validation
- Contract: product API schema

## CI/CD
- GitHub Actions workflow runs Cypress tests on push/PR
- Artifacts: videos, screenshots

## Next Steps
- Expand regression suite (multi-item checkout, remove items, totals validation)
- Add API POST/PUT contract tests with mock payloads
- Integrate reporting (JUnit, Mochawesome) for CI pipelines
- Add cross-browser testing (Chrome, Firefox, Edge)
- Seed test data dynamically via API before runs
