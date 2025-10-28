QA Checkout E2E – Cypress + TS + POM

![CI](https://github.com/alceniralcantara/bootstrap-qa-checkout-cypress/actions/workflows/ci.yml/badge.svg)

## 🧰 Tech Stack

- Cypress + TypeScript
- Page Object Model (POM)
- Ajv for JSON schema validation
- Axios for API requests
- Mochawesome + JUnit for reporting
- GitHub Actions for CI/CD/CT (cross-browser: Chrome, Firefox, Edge)

---

## 🎯 Target Systems

- **UI:** [Sauce Demo](https://www.saucedemo.com) – checkout flow sem pagamento
- **API:** [Fake Store API](https://fakestoreapi.com) – dados públicos de e-commerce

---

### 🚀 Setup

## Prerequisites

- Node.js 18+
- npm

## Installation

````bash
npm ci
npx cypress open

### 🧪 Running Tests

## Run all tests
```bash
npx cypress run

### Run Suites

## Smoke:
```bash
npx cypress run --spec cypress/e2e/smoke/*

## Regression:
```bash
npx cypress run --spec cypress/e2e/regression/*

## Negative:
```bash
npx cypress run --spec cypress/e2e/negative/*

## Contract (GET/POST/PUT):
```bash
npx cypress run --spec cypress/e2e/contract/*

### Reports

## Merge JSON reports:
```bash
npx run report:merge

## Generate HTML report:
```bash
npx run report:generate

### 📁 Project Structure

qa-checkout-cypress/
├─ cypress/
│  ├─ e2e/
│  │  ├─ smoke/            		# Smoke checkout flow
│  │  ├─ regression/       		# Login, cart, multi-item, totals
│  │  ├─ negative/         		# Validation and edge cases
│  │  └─ contract/         		# API schema + POST/PUT contract tests
│  ├─ fixtures/            		# Test data (users, addresses)
│  ├─ pages/               		# POM classes
│  ├─ apis/contracts/      		# JSON schemas
│  └─ support/             		# Commands + seeding hooks
├─ cypress.config.ts       		# Cypress config + reporter
├─ tsconfig.json           		# TypeScript config
├─ package.json            		# Dependencies and scripts
├─ README.md               		# Documentation
└─ .github/workflows/ci.yml		# GitHub Actions CI (cross-browser)

### 🧪 Test Coverage

## ✅ Smoke Tests
 - Full checkout flow with valid data
 - Confirmation of order completion

## 🔁 Regression Tests
 - Login (valid and locked user)
 - Add/remove items in cart
 - Multi-item checkout
 - Totals validation

## ❌ Negative Tests
 - Missing postal code blocks progression
 - Error messages validated

## 📄 Contract Tests
 - GET /products returns valid schema
 - GET /products/:id returns valid product with price > 0
 - POST /products creates product with valid schema
 - PUT /products/:id updates product with valid schema

### 🧼 CI/CD Pipeline
 - Cross-browser matrix: Chrome, Firefox, Edge (To be implemented)
 - Runs on push and pull requests
 - Generates Mochawesome reports
 - Uploads artifacts: videos, screenshots, reports

### 🌱 Data Seeding
 - Before each test, a product is seeded via POST /products
 - The seeded product ID is stored in Cypress.env('seedProductId') for use in tests

### 👨‍💻 Author
## Alcenir Nascimento de Alcantara
SDET/QA Engineer | Automation Specialist | Strategic Thinker
````
