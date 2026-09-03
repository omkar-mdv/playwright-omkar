const { test, expect } = require('@playwright/test');

function generateRandomUser() {

    const firstNames = ['Jason', 'Alex', 'David', 'John', 'Michael', 'Daniel'];

    const surnames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Miller', 'Davis'];

    const firstName =
        firstNames[Math.floor(Math.random() * firstNames.length)];

    const surname =
        surnames[Math.floor(Math.random() * surnames.length)];

    const number =
        Math.floor(1000 + Math.random() * 9000);

    return {
        name: `${firstName} ${surname}`,
        email: `${firstName.toLowerCase()}${number}@yopmail.com`
    };
}

test('Axis Remit Money Transfer Sign Up', async ({ page }) => {

    const user = generateRandomUser();

    console.log('Name:', user.name);
    console.log('Email:', user.email);

    await test.step('Open application and navigate to Sign Up', async () => {
        await page.goto('https://qaonerxm.remit.in/#/');

        await page.getByRole('link', { name: 'Sign Up', exact: true }).click();

        await expect(page.getByText('Create Your Account')).toBeVisible();
    });


    await test.step('Select Country and Eurozone Country', async () => {

        await page.locator('#country').click();
        await page.getByText('Eurozone', { exact: true }).click();

        await page.locator('#euro_country').click();
        await page.getByText('Finland', { exact: true }).click();
    });


    await test.step('Enter Personal Details', async () => {

        const nameInput = page.getByPlaceholder('Enter your Name');
        const emailInput = page.getByPlaceholder('Enter Email ID');
        const passwordInput = page.locator('#newPassword');
        const mobileInput = page.getByPlaceholder('Enter your Mob No.');

        await nameInput.fill(user.name);
        await expect(nameInput).toHaveValue(user.name);
        console.log(`Generated Name: ${user.name}`);

        await emailInput.fill(user.email);
        await expect(emailInput).toHaveValue(user.email);
        console.log(`Generated Email: ${user.email}`);

        await passwordInput.fill('Password@1');
        await expect(passwordInput).toHaveValue('Password@1');

        await mobileInput.fill('9876543210');
        await expect(mobileInput).toHaveValue('9876543210');
    });


    await test.step('Enter Account Details', async () => {

        const yesRadio = page.getByRole('radio', { name: 'Yes' });

        await yesRadio.click();
        await expect(yesRadio).toBeChecked();

        const accountNumber = page.locator('#accountNo');

        await accountNumber.fill('1234567890');
        await expect(accountNumber).toHaveValue('1234567890');

        const indianRadio = page.getByRole('radio', { name: 'Indian' });

        await indianRadio.click();
        await expect(indianRadio).toBeChecked();
    });


    await test.step('Accept Preferences and Terms', async () => {

        const receiveMail = page.locator('#recvMailChk');
        const terms = page.locator('#terms');
        const consent = page.locator('#consentChkBox');

        await receiveMail.check();
        await expect(receiveMail).toBeChecked();

        await terms.check();
        await expect(terms).toBeChecked();

        await consent.check();
        await expect(consent).toBeChecked();
    });


    await test.step('Register Account', async () => {

        await page.getByRole('button', { name: 'REGISTER NOW' }).click();
    });


    await test.step('Enter OTP and Verify Registration', async () => {

        const otpInput = page.locator('#otp');

        await otpInput.fill('123456');
        await expect(otpInput).toHaveValue('123456');

        await page.getByRole('button', { name: 'VERIFY ACCOUNT' }).click();

        await expect(page).toHaveURL('https://qaonerxm.remit.in/#/signin');
        await expect(page.getByText('Thank you. You are successfully registered.', { exact: true })).toBeVisible();

    });
});