const { test, expect } = require('@playwright/test');
const { DashboardPage } = require('../../pages/WEB/dashboardPage');
const { LoginPage } = require("../../pages/WEB/loginPage");

test.describe('Add a simple test', () => {

    test.describe.configure({ mode: 'serial' });

    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.gotoUrl();
        await loginPage.loginToApplication();
    });

    test('Verify the Dashboard functionality', async ({ page }) => {
        const dashboardPage = new DashboardPage(page);
        await dashboardPage.dashboard();
    });
    

})

