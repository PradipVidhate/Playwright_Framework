require('dotenv').config();
const { test } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage');
const { InventoryPage } = require('../../pages/InventoryPage');
const { CartPage } = require('../../pages/CartPage');
const { CheckoutPage } = require('../../pages/CheckoutPage');

test.describe('@checkout Checkout Flow', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.loginAndAssert(process.env.APP_USERNAME, process.env.APP_PASSWORD);
  });

  test('Should complete the checkout process', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await inventoryPage.addRandomItems(3);
    await inventoryPage.goToCart();
    await cartPage.verifyCartCount(3);
    await cartPage.proceedToCheckout();
    await checkoutPage.enterDetailsAndContinue();
    await checkoutPage.finishCheckout();
  });
});