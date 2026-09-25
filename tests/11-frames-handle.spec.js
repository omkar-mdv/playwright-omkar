const { test, expect } = require('@playwright/test');

test('Handle Single iFrame', async ({ page }) => {

    // Open iFrame demo page
    await page.goto('https://demo.automationtesting.in/Frames.html');

    // Locate the single iFrame
    const singleFrame = page.frameLocator('#singleframe');

    // Enter text inside the iFrame
    await singleFrame.locator('//input[@type="text"]').fill('Frame Test');
});

test('Handle Nested iFrames', async ({ page }) => {

    // Open iFrame demo page
    await page.goto('https://demo.automationtesting.in/Frames.html');

    // Navigate to the nested iFrame section
    await page.getByText('Iframe with in an Iframe').click();

    // Locate the parent iFrame
    const parentFrame = page.frameLocator('#Multiple iframe');

    // Verify nested iFrame section is visible
    await expect(parentFrame.getByText('Nested iFrames')).toBeVisible();

    // Locate the child iFrame inside the parent iFrame
    const childFrame = parentFrame.frameLocator("//iframe[contains(@style,'height: 250px')]");

    // Enter text inside the child iFrame
    await childFrame.locator('//input[@type="text"]').fill('Nested iFrame Test');

    // Verify entered text
    await expect(page.getByText('Nested iFrame Test')).toBeVisible();
});