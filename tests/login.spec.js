const { test, expect } = require('@playwright/test');
const loginData = require('../test-data/loginData');

test('Login Test', async ({ page }) => {

    // Group login actions into one test step
    await test.step('Open application and navigate to login', async () => {

        // Locate email and password fields
        const emailInput = page.getByPlaceholder('Enter your email id');
        const passwordInput = page.getByPlaceholder('Enter your password');

        // Login credentials can also be stored as GitHub Secrets
        // const loginEmail = process.env.QA_EMAIL;
        // const loginPassword = process.env.QA_PASSWORD;

        // Open application
        await page.goto(loginData.loginUrl);

        // Verify login page is displayed
        await expect(
            page.getByText('Welcome Back', { exact: true })
        ).toBeVisible();

        // Enter and verify email
        await emailInput.fill(loginData.email);
        await expect(emailInput).toHaveValue(loginData.email);

        // Enter and verify password
        await passwordInput.fill(loginData.password);
        await expect(passwordInput).toHaveValue(loginData.password);

        // Click Login
        await page.getByRole('button', { name: 'LOG IN' }).click();

        // Enter OTP and verify account
        await page.locator('#otp').fill(loginData.otp);
        await page.getByRole('button', { name: 'VERIFY ACCOUNT' }).click();

        // Verify successful login
        await expect(page).toHaveURL(loginData.dashboardUrl);
    });
});
