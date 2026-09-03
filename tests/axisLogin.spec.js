const { test, expect } = require('@playwright/test');
const loginData = require('../test-data/loginData');

test('Axis Remit Money Transfer Login', async ({ page }) => {

    await test.step('Open application and navigate to login', async () => {

        const emailInput = page.getByPlaceholder('Enter your email id');
        const passwordInput = page.getByPlaceholder('Enter your password');

        //From github
        // const loginEmail = process.env.QA_EMAIL;
        // const loginPassword = process.env.QA_PASSWORD;

        await page.goto(loginData.loginUrl);
        await expect(page.getByText('Welcome Back', { exact: true })).toBeVisible();

        await emailInput.fill(loginData.email);
        await expect(emailInput).toHaveValue(loginData.email);

        await passwordInput.fill(loginData.password);
        await expect(passwordInput).toHaveValue(loginData.password);

        await page.getByRole('button', { name: 'LOG IN' }).click();

        await page.locator('#otp').fill(loginData.otp);
        await page.getByRole('button', { name: 'VERIFY ACCOUNT' }).click();

        await expect(page).toHaveURL(loginData.dashboardUrl);
    });
});