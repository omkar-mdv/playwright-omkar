
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage.js';
import { loginData } from '../utils/testData.js';

test('Verify successful login with valid credentials', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage();

    await loginPage.login(
        loginData.validUsername,
        loginData.validPassword
    );

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});