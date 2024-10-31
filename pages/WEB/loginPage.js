const { test, expect } = require('@playwright/test');
const { baseURLs } = require('../../urls/baseurls');
// const testdata = JSON.parse(JSON.stringify(require("../../testdata/testdata.json")));
const CommonLocators = require('../../locators/Locators');

exports.LoginPage = class LoginPage {
    constructor(page) {
        this.page = page
        this.locators = new CommonLocators();
    }

    async gotoUrl() {
        const env = process.env.ENV || 'qa';
        console.log('Current Environment:', env);
        const loginUrl = baseURLs[env];
        console.log(`Navigating to ${loginUrl}...`);
        await this.page.goto(loginUrl, { waitUntil: 'load' });
    }

    async loginToApplication() {
        await this.page.fill(this.locators.username, process.env.USERNAME);
        await this.page.fill(this.locators.password, process.env.PASSWORD);
        await this.page.waitForTimeout(2000);
        await this.page.click(this.locators.loginButton);
        const title = await this.page.title();
        expect(title).toBe('Sign in');
        console.log("Page Title: ", title);
        await this.page.waitForNavigation();
    }

};