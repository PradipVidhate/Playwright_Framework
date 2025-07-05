exports.InventoryPage = class InventoryPage {
  constructor(page) {
    this.page = page;
    this.items = page.locator('.inventory_item');
    this.cartIcon = page.locator('.shopping_cart_link');
  }

  async addRandomItems(count = 3) {
    const itemCount = await this.items.count();
    const selected = new Set();

    while (selected.size < count) {
      selected.add(Math.floor(Math.random() * itemCount));
    }

    for (const index of selected) {
      const item = this.items.nth(index);
      const button = item.locator('button');
      await button.click();
    }
  }

  async goToCart() {
    await this.cartIcon.click();
  }
};
