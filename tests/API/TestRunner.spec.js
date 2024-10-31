const { test, expect } = require('@playwright/test');
const { LoginJWTPage } = require("../../pages/API/loginAPI");
const { AgencyAPI } = require("../../pages/API/Agency");

test('Verify the Agency server responses', async ({ page }) => {
    const loginJWTPage = new LoginJWTPage(page);
   await loginJWTPage.gotoUrl();
    await loginJWTPage.loginToApi();
    const agencyAPI = new AgencyAPI(page);
    await agencyAPI.createAgency();
}); 