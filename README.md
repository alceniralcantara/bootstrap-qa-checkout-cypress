# QA Checkout E2E – Cypress + TS + POM

### 📦 CI Status!

- Actual CI Status: ![CI](https://github.com/alceniralcantara/bootstrap-qa-checkout-cypress/actions/workflows/ci.yml/badge.svg)

### 📦 CI Artifacts

- Cypress videos and screenshots
- HTML reports (Mochawesome)
- Available after each run in: [GitHub Actions](https://github.com/alceniralcantara/bootstrap-qa-checkout-cypress/actions)

## 🧰 Tech Stack

- Cypress + TypeScript
- Page Object Model (POM)
- Centralized selectors in `cypress/selectors/`
- Reusable commands in `cypress/support/commands.ts`
- Ajv for JSON schema validation
- Axios for API requests
- Mochawesome + JUnit for reporting
- GitHub Actions for CI/CD/CT (currently single‑browser; cross‑browser to be re‑implemented later)

---

## 🎯 Target Systems

- **UI:** [Sauce Demo](https://www.saucedemo.com) – checkout flow without payment
- **API:** [Fake Store API](https://fakestoreapi.com) – public e‑commerce data

---

## 🚀 Setup

### Prerequisites

- Node.js 18+
- npm

### Installation

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
│  │  ├─ smoke/             	# Smoke checkout flow
│  │  ├─ regression/       	 	# Login, cart, multi-item, totals
│  │  ├─ negative/          	# Validation and edge cases
│  │  └─ contract/          	# API schema + POST/PUT contract tests
│  ├─ fixtures/             	# Test data (users, addresses)
│  ├─ selectors/            	# Centralized selectors
│  ├─ pages/                	# Page Object Model classes
│  ├─ apis/contracts/       	# JSON schemas
│  └─ support/              	# Commands + seeding hooks
│     ├─ commands.ts        	# Custom reusable commands
│     └─ e2e.ts             	# Support entry point
├─ cypress.config.ts        	# Cypress config + reporter
├─ tsconfig.json            	# TypeScript config
├─ package.json             	# Dependencies and scripts
├─ README.md                	# Documentation
└─ .github/workflows/ci.yml 	# GitHub Actions CI/CT (single-browser, Linux and Windows instances)


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
 - GET "/products" returns valid schema
 - GET "/products/:id" returns valid product with price > 0
 - POST "/products" creates product with valid schema
 - PUT "/products/:id" updates product with valid schema

### 🧼 CI/CD Pipeline
 - Currently runs on single browser (Electron for Linux and Edge for Windows instances)
 - Cross-browser matrix: Chrome, Firefox, Edge (Will be implemented later)
 - Runs on push and pull requests
 - Generates Mochawesome reports
 - Uploads artifacts: videos, screenshots, reports

### 🌱 Data Seeding
 - Before each test, a product is seeded via "POST /products"
 - The seeded product ID is stored in "Cypress.env('seedProductId')" for use in tests

### 🗂️ Architecture Diagram
## Mermaid
flowchart TD
    A [Selectors]         -->   B [Page Objects]
    B [Page Objects]      -->   C [Custom Commands]
    C [Custom Commands]   -->   D [Tests]
    D [Tests]             -->   E [Reports & CI/CD]


### 👨‍💻 Author
## Alcenir Nascimento de Alcantara
SDET/QA Engineer | Automation Specialist | Strategic Thinker
````
