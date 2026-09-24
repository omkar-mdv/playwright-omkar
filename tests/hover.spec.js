const { test, expect } = require('@playwright/test');

test('Mouse Hover', async ({ page }) => {

    // Open login page
    await page.goto('https://freelance-learn-automation.vercel.app/login');

    // Enter login credentials
    await page.getByPlaceholder('Enter Email').fill('admin@email.com');
    await page.waitForTimeout(2000);

    await page.getByPlaceholder('Enter Password').fill('admin@123');
    await page.waitForTimeout(2000);

    // Sign in
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.waitForTimeout(2000);

    // Hover over Manage to display submenu
    await page.locator("//span[text()='Manage']").hover();
    await page.waitForTimeout(2000);

    // Click Manage Courses from submenu
    const manageCourses = page.locator("//a[normalize-space()='Manage Courses']");

    await manageCourses.click();

    // Verify Manage Courses is displayed
    await expect(manageCourses).toContainText('Manage Courses');
});