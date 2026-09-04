const { test, expect } = require('@playwright/test');

test.use({ viewport: { width: 1280, height: 720 } });

test('OrangeHRM Login Test', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await expect(page).toHaveTitle('OrangeHRM');

    await page.locator("input[name='username']").fill('Admin', { delay: 300 });
    await page.getByPlaceholder('Password').fill('admin123', { delay: 300 });

    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page).toHaveURL(/dashboard/);

    await test.step('OrangeHRM Logout Test', async () => {

        await page.getByAltText('profile picture').click();
        await page.getByText('Logout').click();

        await expect(page).toHaveURL(/login/);
    });
});

test.skip('OrangeHRM Login Test With Invalid Credentials', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await expect(page).toHaveTitle('OrangeHRM');

    await page.locator("input[name='username']").fill('Admin', { delay: 300 });
    await page.getByPlaceholder('Password').fill('admisansa', { delay: 300 });

    await page.getByRole('button', { name: 'Login' }).click();

    await page.waitForTimeout(2000);

    const errorMessage = await page.locator('.oxd-alert-content-text').textContent();

    expect(errorMessage).toContain('Invalid credentials');

});

test('Forgot Password Test', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.locator('.orangehrm-login-forgot-header').click();
    await expect(page).toHaveURL(/requestPasswordResetCode/);
});