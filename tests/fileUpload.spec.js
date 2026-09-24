const { test, expect } = require('@playwright/test');

// Test 1: Upload a single file
test('File Upload', async ({ page }) => {

    // Open file upload page
    await page.goto('https://the-internet.herokuapp.com/upload');

    // Upload a single file
    await page.locator('#file-upload').setInputFiles('./uploads/demo.pdf');

    await page.waitForTimeout(2000);

    // Click Upload button
    await page.getByRole('button', { name: 'Upload' }).click();

    // Verify file was uploaded successfully
    await expect(page.getByText('File Uploaded!')).toBeVisible();

    await page.waitForTimeout(2000);
});


// Test 2: Upload multiple files
test('Multiple Files Upload', async ({ page }) => {

    // Open multiple file upload page
    await page.goto('https://www.htmlelements.com/demos/fileupload/multiple/index.htm');

    // Upload multiple files at once
    await page.locator('input[type="file"]').setInputFiles(['./uploads/demo.pdf', './uploads/demo-2.pdf']);

    await page.waitForTimeout(2000);
});