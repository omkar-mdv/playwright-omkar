const { test, expect } = require('@playwright/test');

test('OrangeHRM Login and Logout', async ({ page }) => {

  // Open OrangeHRM login page
  await test.step('Open Login Page', async () => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // Verify login page is displayed
    await expect(page.getByRole('textbox', { name: 'Username' })).toBeVisible();
  });


  // Enter login credentials
  await test.step('Enter Login Credentials', async () => {

    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');

    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  });


  // Login to application
  await test.step('Login to Application', async () => {

    await page.getByRole('button', { name: 'Login' }).click();

    // Verify profile picture is displayed after login
    await expect(page.getByRole('banner').getByRole('img', { name: 'profile picture' })).toBeVisible();
  });


  // Logout from application
  await test.step('Logout from Application', async () => {

    await page.getByRole('banner')
      .getByRole('img', { name: 'profile picture' }).click();

    await page.getByRole('menuitem', { name: 'Logout' }).click();

    // Verify user is returned to login page
    await expect(
      page.getByRole('textbox', { name: 'Username' })).toBeVisible();
  });
});
