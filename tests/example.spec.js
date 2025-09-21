import { test, expect } from '@playwright/test';

test('login test', async ({ page }) => {
  await page.goto('https://demoblaze.com/');

  await expect(page).toHaveTitle("STORE");

  // open login modal
  await page.locator('#login2').click();

  // fill credentials
  await page.locator("#loginusername").fill('pavanol');
  await page.locator("#loginpassword").fill('test@123');

  // click modal "Log in" button (specific)
  await page.locator('button.btn.btn-primary:has-text("Log in")').click();

  // verify logout button visible
  await expect(page.locator('#logout2')).toBeVisible();
});
