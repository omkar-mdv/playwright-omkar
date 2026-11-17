
import { loginLocators } from '../locators/loginLocators.js';
import { loginData } from '../utils/testData.js';

export class LoginPage {

    constructor(page) {
        this.page = page;

        this.username = page.locator(loginLocators.username);
        this.password = page.locator(loginLocators.password);
        this.loginButton = page.locator(loginLocators.loginButton);
    }

    async navigateToLoginPage() {
        await this.page.goto(loginData.baseUrl);
    }

    async enterUsername(username) {
        await this.username.fill(username);
    }

    async enterPassword(password) {
        await this.password.fill(password);
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }

    async login(username, password) {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }
}