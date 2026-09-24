const { test, expect } = require('@playwright/test');

// Test 1: Navigate Google suggestions using keyboard
test('Google Search - Keyboard Navigation', async ({ page }) => {

    // Open Google
    await page.goto('https://www.google.com/');

    // Locate search box
    const searchBox = page.locator('#ti6dpd');

    // Enter search text
    await searchBox.fill('Mukesh Otwani');

    // Locate search suggestions
    const suggestions = page.locator('li[role="presentation"]');

    // Verify suggestions are displayed
    await expect(suggestions.first()).toBeVisible();

    // Navigate suggestions using keyboard
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(500);

    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(500);

    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(500);

    // Select the suggestion
    await page.keyboard.press('Enter');
});


// Test 2: Find a suggestion using a loop
test.only('Verify Application Title Using Loop', async ({ page }) => {

    // Open Google
    await page.goto('https://www.google.com/');

    // Locate search box
    const searchBox = page.locator('#ti6dpd');

    // Enter search text
    await searchBox.fill('Mukesh Otwani');

    // Wait for suggestions to appear
    await page.waitForSelector('li[role="presentation"]');

    // Get all matching suggestion elements
    const elements = await page.$$('li[role="presentation"]');

    // Check each suggestion
    for (let i = 0; i < elements.length; i++) {

        // Get suggestion text
        const text = await elements[i].textContent();

        await page.waitForTimeout(500);

        // Click the suggestion containing "website"
        if (text.includes('website')) {
            await elements[i].click();
            await page.waitForTimeout(2000);
            break;
        }
    }
});
