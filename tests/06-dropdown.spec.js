const { test, expect } = require('@playwright/test');

test('Dropdown Test', async ({ page }) => {

    // Open application
    await page.goto('https://freelance-learn-automation.vercel.app/signup');

    // Select dropdown option using visible label
    await page.locator('#state').selectOption({ label: 'Mizoram' });
    await expect(page.locator('#state')).toHaveValue('Mizoram');

    await page.waitForTimeout(1000);

    // Select dropdown option using value
    await page.locator('#state').selectOption({ value: 'Uttarakhand' });
    await expect(page.locator('#state')).toHaveValue('Uttarakhand');

    await page.waitForTimeout(1000);

    // Select dropdown option using index
    await page.locator('#state').selectOption({ index: 4 });

    await page.waitForTimeout(1000);

    // Get all dropdown text
    const allDrpdwn = await page.locator('#state').textContent();

    console.log('All Dropdown Values: ' + allDrpdwn);

    // Verify a specific option exists
    expect(allDrpdwn.includes('Maharashtra')).toBeTruthy();


    // Get all option elements
    const state = await page.$('#state');
    const allStates = await state.$$('option');

    // Loop through and print each option
    for (let i = 0; i < allStates.length; i++) {

        const element = allStates[i];
        const values = await element.textContent();

        console.log('State: ' + values);
    }
});
