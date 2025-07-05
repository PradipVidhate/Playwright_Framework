const { expect, test } = require('@playwright/test');

exports.CartPage = class CartPage {
  constructor(page) {
    this.page = page;
    this.cartItems = page.locator('.cart_item');
    this.checkoutBtn = page.locator('[data-test="checkout"]');
  }

  async verifyCartCount(expectedCount) {
    const itemCount = await this.cartItems.count();
    const itemDetails = [];

    for (let i = 0; i < itemCount; i++) {
      const item = this.cartItems.nth(i);
      const name = await item.locator('.inventory_item_name').innerText();
      itemDetails.push(`Item ${i + 1}: ${name}`);
    }

    // Attach to report
    await test.info().attach('🛒 Cart Items', {
      body: `Total Items: ${itemCount}\n${itemDetails.join('\n')}`,
      contentType: 'text/plain',
    });

    // Assertion
    await expect(this.cartItems).toHaveCount(expectedCount);
  }

  async proceedToCheckout() {
    await this.checkoutBtn.click();
  }
};
