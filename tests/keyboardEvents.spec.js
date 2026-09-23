const { test, expect } = require('@playwright/test');

test('Keyboard Events', async ({ page }) => {

    await page.goto('https://www.google.com/');

    await page.locator("textarea[name='q']").fill('Playwright');
    await page.waitForTimeout(2000);

    await page.keyboard.press('Control+A');
    await page.waitForTimeout(1000);

    await page.keyboard.press('Control+C');
    await page.waitForTimeout(1000);

    await page.keyboard.press('Backspace');
    await page.waitForTimeout(1000);

    await page.keyboard.press('Control+V');
    await page.waitForTimeout(1000);

    await page.keyboard.press('Enter');
});

test('Keyboard Events Test', async ({ page }) => {

    await page.goto('https://www.google.com/');

    await page.locator("textarea[name='q']").focus();

    await page.keyboard.type('Google Drive!');
    await page.waitForTimeout(1000);

    await page.keyboard.press('ArrowLeft');
    await page.waitForTimeout(1000);

    await page.keyboard.down('Shift');
    await page.waitForTimeout(1000);

    for (let i = 0; i < 6; i++) {
        await page.keyboard.press('ArrowLeft');
        await page.waitForTimeout(1000);
    }

    await page.keyboard.up('Shift');
    await page.waitForTimeout(1000);

    await page.keyboard.press('Backspace');
    await page.waitForTimeout(1000);

    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
});