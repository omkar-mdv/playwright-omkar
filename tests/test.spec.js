const {test, expect} = require('@playwright/test');
test ('My First Test', async ({page}) => {

await page.goto('https://automatewithbipin.in/');
await page.getByPlaceholder('Enter your full name').fill('Omkar');

await expect(page.getByPlaceholder('Enter your full name')).toHaveValue('Omkar');
});