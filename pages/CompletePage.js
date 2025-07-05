const { expect } = require('@playwright/test');

exports.CompletePage = class CompletePage {
  constructor(page) {
    this.page = page;
    this.completeHeader = page.locator('.complete-header');
  }

  async verifyCompletion() {
    await expect(this.completeHeader).toHaveText('Thank you for your order!');
  }
};