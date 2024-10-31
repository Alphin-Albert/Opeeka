const { test, expect } = require('@playwright/test');
const testdata = JSON.parse(JSON.stringify(require("../../testdata/testdata.json")));
const CommonLocators = require('../../locators/Locators');

exports.LoginJWTPage = class LoginJWTPage {
    constructor(page) {
        this.page = page
        this.locators = new CommonLocators();
    }

    async gotoUrl() {
        await this.page.goto(this.locators.apiUrl, { waitUntil: 'load' })
    }

    async loginToApi() {
        await this.page.waitForTimeout(2000);
        await this.page.fill(this.locators.username, testdata.username);
        await this.page.fill(this.locators.password, testdata.password);
        await this.page.waitForTimeout(2000);
        await this.page.click(this.locators.loginButton);
        await this.page.waitForTimeout(2000);
        await this.page.waitForNavigation();
        await this.page.waitForTimeout(2000);
    }

    async getToken() {
        const element = this.page.locator(this.locators.tokenGen);

        if (await element.count() > 0) {
            const content = await element.innerText();
            console.log("Token: ", content);
            return { content };
        } else {
            console.log("Element not found");
            return { content: null };
        }
    }


};