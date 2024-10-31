const { test, expect } = require('@playwright/test');
const { LoginJWTPage } = require("../../pages/API/loginAPI");

test('Verify the Login JWT functionality', async ({ page }) => {
    const loginJWTPage = new LoginJWTPage(page);
    await loginJWTPage.gotoUrl();
    await loginJWTPage.loginToApplication();
});

