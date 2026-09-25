const { test, expect } = require('@playwright/test');

// Test 1: Handle JavaScript Alert
test('Handle Alert', async ({ page }) => {

    // Open JavaScript Alerts page
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    // Verify page heading
    await expect(page.getByText('JavaScript Alerts', { exact: true })).toBeVisible();

    // Handle JavaScript alert
    page.on('dialog', async (alertDialog) => {

        // Verify alert type and message
        expect(alertDialog.type()).toContain('alert');
        expect(alertDialog.message()).toContain('I am a JS Alert');

        await page.waitForTimeout(2000);

        // Accept the alert
        await alertDialog.accept();
    });

    // Trigger the alert
    await page.locator('//button[text()="Click for JS Alert"]').click();

    await page.waitForTimeout(1000);

    // Verify alert result
    await expect(page.getByText('You successfully clicked an alert')).toBeVisible();
});


// Test 2: Handle Confirm Popup
test('Handle Confirm Popup', async ({ page }) => {

    // Open JavaScript Alerts page
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    // Verify page heading
    await expect(page.getByText('JavaScript Alerts', { exact: true })).toBeVisible();

    // Handle confirm popup
    page.on('dialog', async (confirmDialog) => {

        // Verify dialog type and message
        expect(confirmDialog.type()).toContain('confirm');
        expect(confirmDialog.message()).toContain('I am a JS Confirm');

        await page.waitForTimeout(2000);

        // Click OK on confirm popup
        await confirmDialog.accept();
    });

    // Trigger confirm popup
    await page.locator('//button[text()="Click for JS Confirm"]').click();

    // Verify OK was selected
    await expect(page.getByText('You clicked: Ok')).toBeVisible();
});


// Test 3: Handle Prompt Alert
test('Handle Prompt', async ({ page }) => {

    // Open JavaScript Alerts page
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    // Verify page heading
    await expect(page.getByText('JavaScript Alerts', { exact: true })).toBeVisible();

    // Text to enter in the prompt
    const promptText = 'Hello Omkar';

    // Handle prompt dialog
    page.on('dialog', async (promptDialog) => {

        // Verify dialog type and message
        expect(promptDialog.type()).toContain('prompt');
        expect(promptDialog.message()).toContain('I am a JS prompt');

        await page.waitForTimeout(2000);

        // Enter text and accept prompt
        await promptDialog.accept(promptText);
    });

    // Trigger prompt dialog
    await page.locator('//button[text()="Click for JS Prompt"]').click();

    // Verify entered text
    await expect(page.getByText(`You entered: ${promptText}`)).toBeVisible();

    await page.waitForTimeout(2000);
});