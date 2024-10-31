const { test, expect } = require('@playwright/test');
const testdata = JSON.parse(JSON.stringify(require("../../testdata/testdata.json")));
const CommonLocators = require('../../locators/Locators');

exports.DashboardPage = class DashboardPage {

    constructor(page) {
        this.page = page;
        this.locators = new CommonLocators();
    }

    async dashboard() {
        await this.page.getByPlaceholder(this.locators.search).click();
        await this.page.getByPlaceholder(this.locators.search).fill(testdata.searchName);
        await this.page.locator(this.locators.searchbtn).nth(2).click();
        await this.page.locator(this.locators.clickDashMenu).click();
        await this.page.locator(this.locators.clickViewAll).click();
    }
}
