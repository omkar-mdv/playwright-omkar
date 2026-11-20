import { test, expect } from "@playwright/test";
import { ProductPage } from "../pages/ProductPage";
import { loginData } from "../utils/testData";
import { LoginPage } from "../pages/loginPage";
import { loginLocators } from "../locators/loginLocators";
import { productPageLocators } from "../locators/ProductPageLocators";

test.describe("Product Page Validation", () => {

    let loginPage;
    let productPage;

    test.beforeEach(async ({ page }) => {

        loginPage = new LoginPage(page);
        productPage = new ProductPage(page);

        await loginPage.navigateToLoginPage();

        await loginPage.login(
            loginData.validUsername,
            loginData.validPassword
        );

        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    });

    test("Verify About Page", async ({ page }) => {
        await productPage.openAboutPage();
        await expect(page.locator(productPageLocators.heroHeading)).toHaveText("Verify AI-generated code at the pace it's written.");
    });

    test("Verify Logout", async ({ page }) => {
        await productPage.logout();
        await expect(page.locator(loginLocators.loginButton)).toBeVisible();
    });
});