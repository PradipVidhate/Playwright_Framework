const { expect } = require('@playwright/test');

exports.CheckoutPage = class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.firstName = page.locator('[data-test="firstName"]');
    this.lastName = page.locator('[data-test="lastName"]');
    this.postalCode = page.locator('[data-test="postalCode"]');
    this.continueBtn = page.locator('[data-test="continue"]');
    this.finishBtn = page.locator('[data-test="finish"]');
    this.summaryInfo = page.locator('.summary_info');
  }

  async enterDetailsAndContinue() {
    await this.firstName.fill('John');
    await this.lastName.fill('Doe');
    await this.postalCode.fill('12345');
    await this.continueBtn.click();
  }

  async finishCheckout() {
    await expect(this.summaryInfo).toBeVisible();
    await this.finishBtn.click();
  }
};
