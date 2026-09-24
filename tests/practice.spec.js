const { test, expect } = require('@playwright/test');


// Test 1: Verify successful login and logout
test('OrangeHRM Login Test', async ({ page }) => {

    // Open OrangeHRM login page
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // Verify page title
    await expect(page).toHaveTitle('OrangeHRM');

    // Enter valid login credentials
    await page.locator("input[name='username']").fill('Admin', { delay: 300 });

    await page.getByPlaceholder('Password').fill('admin123', { delay: 300 });

    // Login
    await page.getByRole('button', { name: 'Login' }).click();

    // Verify successful login
    await expect(page).toHaveURL(/dashboard/);


    // Logout from application
    await test.step('OrangeHRM Logout Test', async () => {

        await page.getByAltText('profile picture').click();
        await page.getByText('Logout').click();

        // Verify user is redirected to login page
        await expect(page).toHaveURL(/login/);
    });
});


// Test 2: Verify login with invalid credentials
test('OrangeHRM Login Test With Invalid Credentials', async ({ page }) => {

    // Open login page
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // Verify page title
    await expect(page).toHaveTitle('OrangeHRM');

    // Enter invalid password
    await page.locator("input[name='username']").fill('Admin', { delay: 300 });

    await page.getByPlaceholder('Password').fill('admisansa', { delay: 300 });

    // Attempt login
    await page.getByRole('button', { name: 'Login' }).click();

    // Verify error message
    await expect(page.locator('.oxd-alert-content-text')).toContainText('Invalid credentials');
});


// Test 3: Verify forgot password functionality
test('Forgot Password Test', async ({ page }) => {

    // Open login page
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // Open Forgot Password
    await page.locator('.orangehrm-login-forgot-header').click();

    // Verify password reset page
    await expect(page).toHaveURL(/requestPasswordResetCode/);
});