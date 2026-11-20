import { Page } from "@playwright/test";
import { productPageLocators } from "../locators/ProductPageLocators";

export class ProductPage {

    constructor(page) {
        this.page = page;
    }

    async openAboutPage() {
        await this.page.click(productPageLocators.settingsIcon);
        await this.page.click(productPageLocators.aboutLink);
    }

    async logout() {
        await this.page.click(productPageLocators.settingsIcon);
        await this.page.click(productPageLocators.logoutLink);
    }
}
