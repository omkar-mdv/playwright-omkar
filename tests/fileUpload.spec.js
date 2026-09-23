const { test, expect } = require('@playwright/test');

test('File Upload', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/upload');

    await page.locator('#file-upload').setInputFiles('./uploads/demo.pdf');

    await page.waitForTimeout(2000);

    await page.getByRole('button', { name: 'Upload' }).click();

    await expect(page.getByText('File Uploaded!')).toBeVisible();

    await page.waitForTimeout(2000);
});

test('Multiple Files Upload', async ({ page }) => {

    await page.goto('https://www.htmlelements.com/demos/fileupload/multiple/index.htm');

    await page.locator('input[type="file"]').setInputFiles(['./uploads/demo.pdf', './uploads/demo-2.pdf']);

    await page.waitForTimeout(2000);
});