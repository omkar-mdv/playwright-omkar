const { test, expect } = require('@playwright/test');

test('Dropdown Test', async ({ page }) => {

    await page.goto('https://freelance-learn-automation.vercel.app/signup');

    await page.locator('#state').selectOption({ label: 'Mizoram' });
    expect(page.locator('#state')).toHaveValue('Mizoram');

    await page.waitForTimeout(1000);

    await page.locator('#state').selectOption({ value: 'Uttarakhand' });
    expect(page.locator('#state')).toHaveValue('Uttarakhand');

    await page.waitForTimeout(1000);

    await page.locator('#state').selectOption({ index: 4 });
    await page.waitForTimeout(1000);

    const allDrpdwn = await page.locator('#state').textContent();

    console.log('All Dropdown Values ' + allDrpdwn);
    expect(allDrpdwn.includes('Maharashtra')).toBeTruthy();

});