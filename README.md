# 🧪 Sauce Demo - Playwright Automation Framework (POM)

This project leverages [Playwright](https://playwright.dev/) to automate the end-to-end checkout flow on the [Sauce Demo](https://www.saucedemo.com/) website using the **Page Object Model (POM)** design pattern.

---

## ✅ Features

- Selects **3 random products** from inventory
- Completes the full **checkout process**
- Implements **Page Object Model** for modular and scalable design
- Runs in **headed mode** with optional slow motion for debugging
- Generates detailed **HTML reports** with cart item names and count attached
- Supports `.env` file configuration for environment separation and secure credentials

---

## 📁 Project Structure

```
Playwright_Framework/
├── .env                         # Environment variables (e.g., APP_USERNAME, APP_PASSWORD)
├── package.json                 # Project metadata & dependencies
├── playwright.config.js         # Playwright config (baseURL, reporter, etc.)
├── README.md                    # Project overview and usage
├── tests/                       # All test specs grouped by feature or tag
│   ├── smoke/                   # Smoke tests (quick, critical flows)
│   │   ├── login.spec.js        # Login functionality
│   │   └── add-to-cart.spec.js  # Add-to-cart flow
│   ├── checkout/                # Checkout-related tests
│   │   ├── checkout.spec.js     # Checkout process
│   │   └── confirmation.spec.js # Final confirmation page
├── pages/                       # Page Object Model (POM) files
│   ├── LoginPage.js
│   ├── InventoryPage.js
│   ├── CartPage.js
│   ├── CheckoutPage.js
│   └── CompletePage.js
└── playwright-report/           # Auto-generated HTML test report (after test run)
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/PradipVidhate/Playwright_Framework.git
cd Playwright_Framework
```

### 2. Install Dependencies

```bash
npm install
npx playwright install
```

### 3. Configure Environment Variables

Create a `.env` file in the root of the project with the following contents:

```env
BASE_URL=https://www.saucedemo.com
APP_USERNAME=standard_user
APP_PASSWORD=secret_sauce
```

> ✅ Do not use `USERNAME` or `PASSWORD` as those may conflict with built-in system variables (especially on Windows).

### 4. How to Run Tests by Tags or Groups (Headed Mode)
Run only smoke tests:
```bash
npx playwright test --headed
```
 
Run only checkout tests:
```bash
npx playwright test --grep @checkout
```
Run only smoke tests:
```bash
npx playwright test --grep @smoke
```

### 5. View the HTML Report

```bash
npx playwright show-report
```

---

## 📝 Dependencies

- [Node.js](https://nodejs.org/) (v18 or above **required**)
- [Playwright Test](https://playwright.dev/test): `@playwright/test`
- [dotenv](https://www.npmjs.com/package/dotenv): For loading `.env` variables
- Browsers: Installed via `npx playwright install`

---

## 📎 Report Attachments

The test report includes:
- ✅ **Cart item count**
- ✅ **Cart item names** (dynamically attached using Playwright’s `test.info().attach()`)

---

## 🔐 Sauce Demo Credentials

These values are now securely managed in the `.env` file.

> Visit: [https://www.saucedemo.com](https://www.saucedemo.com)

---

## 👤 Author

**Pradip Vidhate**  
GitHub: [@PradipVidhate](https://github.com/PradipVidhate)

---

## 📄 License

This project is for learning and demonstration purposes only.