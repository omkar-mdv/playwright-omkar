const { test, expect } = require('@playwright/test');

// Test 1: Copy, paste and keyboard shortcuts
test('Keyboard Events', async ({ page }) => {

    // Open Google
    await page.goto('https://www.google.com/');

    // Enter text in search box
    await page.locator("textarea[name='q']").fill('Playwright');
    await page.waitForTimeout(2000);

    // Select all text
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(1000);

    // Copy selected text
    await page.keyboard.press('Control+C');
    await page.waitForTimeout(1000);

    // Delete selected text
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(1000);

    // Paste copied text
    await page.keyboard.press('Control+V');
    await page.waitForTimeout(1000);

    // Search
    await page.keyboard.press('Enter');
});


// Test 2: Keyboard navigation and text selection
test('Keyboard Events Test', async ({ page }) => {

    // Open Google
    await page.goto('https://www.google.com/');

    // Focus on search box
    await page.locator("textarea[name='q']").focus();

    // Type text using keyboard
    await page.keyboard.type('Google Drive!');
    await page.waitForTimeout(1000);

    // Move cursor one position to the left
    await page.keyboard.press('ArrowLeft');
    await page.waitForTimeout(1000);

    // Hold Shift to select text
    await page.keyboard.down('Shift');
    await page.waitForTimeout(1000);

    // Move left while Shift is pressed
    // This selects the characters
    for (let i = 0; i < 6; i++) {
        await page.keyboard.press('ArrowLeft');
        await page.waitForTimeout(1000);
    }

    // Release Shift
    await page.keyboard.up('Shift');
    await page.waitForTimeout(1000);

    // Delete selected text
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(1000);

    // Search
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
});