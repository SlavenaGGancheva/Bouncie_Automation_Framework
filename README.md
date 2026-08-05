# Bouncie Automation Framework
![Playwright](https://img.shields.io/badge/Playwright-2EAD33?logo=playwright&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/CI-GitHub_Actions-2088FF?logo=githubactions&logoColor=white)

A modern QA automation framework built with **Playwright** and **TypeScript** to demonstrate scalable UI and API test automation practices.

This project was created as a portfolio framework to showcase automation architecture, reusable components, API testing, CI/CD integration, and clean test design.

---

## Tech Stack

- Playwright
- TypeScript
- Node.js
- ESLint
- GitHub Actions
- Dotenv

---

## Features

### UI Automation

- Page Object Model (POM)
- Reusable Components
- Custom Fixtures
- Smoke Tests
- Navigation Tests
- Cross-browser ready configuration
- Automatic screenshots, videos and traces on failure

### API Automation

- Playwright APIRequestContext
- Public endpoint validation
- Response status validation
- Header validation
- HTML response verification
- Data-driven API tests

### Framework

- Environment configuration using `.env`
- TypeScript support
- ESLint configuration
- HTML reporting
- Parallel execution
- Retry support
- GitHub Actions CI pipeline

---

# Project Structure

```text
.
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── components/
│   └── header.component.ts
│
├── fixtures/
│   └── test.fixture.ts
│
├── pages/
│   ├── home.page.ts
│   └── login.page.ts
│
├── tests/
│   ├── api/
│   ├── navigation/
│   └── smoke/
│
├── playwright.config.ts
├── package.json
└── README.md
```

---

# Installation

Clone the repository

```bash
git clone https://github.com/SlavenaGGancheva/Bouncie_Automation_Framework.git
```

Install dependencies

```bash
npm install
```

Install Playwright browsers

```bash
npx playwright install
```

---

# Environment Variables

Create a `.env` file from the example.

```text
BASE_URL=https://www.bouncie.com
LOGIN_URL=https://www.bouncie.app/login
```

---

# Running Tests

Run all tests

```bash
npm test
```

Run Chromium UI tests

```bash
npm run test:chromium
```

Run API tests

```bash
npm run test:api
```

Run smoke tests

```bash
npm run test:smoke
```

Run navigation tests

```bash
npm run test:navigation
```

Run Playwright UI Mode

```bash
npm run test:ui
```

---

# Code Quality

Run ESLint

```bash
npm run lint
```

Automatically fix ESLint issues

```bash
npm run lint:fix
```

Run TypeScript type checking

```bash
npm run typecheck
```

---

# Test Reports

Generate and open the Playwright HTML Report

```bash
npm run report
```

The framework is configured to automatically capture:

- Screenshots on failure
- Video on failure
- Trace on first retry

---

# Continuous Integration

GitHub Actions automatically executes:

- ESLint
- TypeScript type checking
- API tests
- Chromium UI tests

Reports and test artifacts are uploaded after every workflow execution.

---

# Framework Design

This framework follows several common automation design principles:

- Page Object Model (POM)
- Reusable Components
- Custom Fixtures
- Separation of UI and API tests
- Environment-based configuration
- Reusable locators
- Clean test organization
- CI-ready architecture

---

# Example Test Coverage

### UI

- Home page validation
- Login page validation
- Header navigation
- Pricing navigation

### API

- Home page endpoint
- Pricing endpoint
- Family endpoint
- Fleet endpoint
- Login endpoint

---

# Future Improvements

Potential enhancements include:

- Authentication with `storageState`
- BasePage abstraction
- Test data builders
- API schema validation
- Visual regression testing
- Docker support
- Allure reporting

---

# Author

**Slavena Gancheva**

QA Automation Engineer

GitHub:

https://github.com/SlavenaGGancheva

---

