// playwright.config.js

require('dotenv').config();

const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  timeout: 50000, // ⬅️ timeout for each test = 50 seconds
  use: {
    headless: false,
    baseURL: process.env.BASE_URL,
    launchOptions: {
      slowMo: 300,
    },
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  //retries: 1,
  reporter: [['html', { open: 'never' }]],
});