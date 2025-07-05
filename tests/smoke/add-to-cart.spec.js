require('dotenv').config();
const { test } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage');
const { InventoryPage } = require('../../pages/InventoryPage');

test.describe('@smoke Add To Cart Tests', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.loginAndAssert(process.env.APP_USERNAME, process.env.APP_PASSWORD);
  });

  test('Should add 3 random items to the cart', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.addRandomItems(3);
    await inventoryPage.goToCart();
  });
});