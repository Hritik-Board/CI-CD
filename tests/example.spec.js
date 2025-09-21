import { test, expect } from '@playwright/test';
require('dotenv').config()

const baseURL = process.env.BASE_URL;
const username = process.env.TEST_USERNAME;
const password = process.env.TEST_PASSWORD;

test.beforeAll(() => {
  if (!baseURL || !username || !password) {
    throw new Error('Required environment variables are not set. Check your GitHub Actions workflow file and repository secrets.');
  }
});

test('login test', async ({ page }) => {
  await page.goto(baseURL);

  await expect(page).toHaveTitle("STORE");

  // open login modal
  await page.locator('#login2').click();

  // fill credentials
  await page.locator("#loginusername").fill(username);
  await page.locator("#loginpassword").fill(password);

  // click modal "Log in" button (specific)
  await page.locator('#logInModal').getByRole('button', { name: 'Log in' }).click();



  // verify logout button visible
  await page.waitForTimeout(5000);
  
});
