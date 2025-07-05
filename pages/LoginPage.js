require('dotenv').config();
const { expect } = require('@playwright/test');

exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('[data-test="username"]');
    this.passwordInput = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-button"]');
    this.errorMessage = page.locator('[data-test="error"]');
  }

  async login(username, password) {
    await this.page.goto('/');
    console.log('🔐 Logging in with:', { username, password });  // <-- LOG this
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async assertLoginSuccess() {
    // Wait for URL or some logged-in element
    await expect(this.page).toHaveURL(/inventory/);
    await expect(this.page.locator('.inventory_list')).toBeVisible();
  }

  async assertLoginFailure() {
    await expect(this.errorMessage).toBeVisible();
  }

  async loginAndAssert(username, password) {
    await this.login(username, password);

    if (await this.errorMessage.isVisible()) {
      await this.assertLoginFailure();
      throw new Error('❌ Login failed: Invalid credentials');
    } else {
      await this.assertLoginSuccess();
    }
  }
};
