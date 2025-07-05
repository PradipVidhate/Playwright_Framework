require('dotenv').config();
const { test } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage');

test.describe('@smoke Login Tests', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.loginAndAssert(process.env.APP_USERNAME, process.env.APP_PASSWORD);
  });

  test('Should login successfully with valid credentials', async ({ page }) => {
    // Already logged in via beforeEach
    await page.waitForURL(/inventory/);
  });
});