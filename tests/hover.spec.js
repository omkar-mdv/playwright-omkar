const { test, expect } = require('@playwright/test');

test('Mouse Hover', async ({ page }) => {

    await page.goto('https://freelance-learn-automation.vercel.app/login');

    await page.getByPlaceholder('Enter Email').fill('admin@email.com');
    await page.waitForTimeout(2000);

    await page.getByPlaceholder('Enter Password').fill('admin@123');
    await page.waitForTimeout(2000);

    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.waitForTimeout(2000);

    await page.locator("//span[text()='Manage']").hover();
    await page.waitForTimeout(2000);

    await page.locator("//a[normalize-space()='Manage Courses']").click();
    expect(page.locator("//a[normalize-space()='Manage Courses']")).toContainText('Manage Courses');
});