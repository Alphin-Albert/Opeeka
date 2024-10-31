const { LoginJWTPage } = require("../../pages/API/loginAPI");
const { test, request, expect } = require('@playwright/test');
const CommonLocators = require('../../locators/Locators');

exports.AgencyAPI = class AgencyAPI {
    constructor(page) {
        this.page = page;
        this.loginJWTPage = new LoginJWTPage(page);
        this.locators = new CommonLocators();
    }

    async createAgency() {
        try {
            const { content } = await this.loginJWTPage.getToken();

            if (!content) {
                throw new Error("Failed to retrieve JWT token");
            }

            const apiRequestContext = await request.newContext({
                ignoreHTTPSErrors: true
            });


            const agencyData = {
                "name": "Adam",
                "agencyIndex": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                "addressIndex": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                "agencyID": 50,
                "addressID": 10,
                "updateUserID": 12,
                "note": "Test Note",
                "abbrev": "Test abbrev",
                "phone1": "552123",
                "phone2": "245454",
                "email": "test@yopmail.com",
                "contactLastName": "Nick",
                "contactFirstName": "Jason",
                "address1": "23 Lane",
                "address2": "Laren street",
                "zip": "22531",
                "zip4": "544588",
                "countryStateID": 26,
                "city": "texas",
                "countryId": 21474847,
                "agencyLanguageId": 12
            };


            const response = await apiRequestContext.post(this.locators.agencyPostApI, {
                headers: {
                    'accept': 'text/plain',
                    'Authorization': `Bearer ${content}`,
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify(agencyData)
            });

            console.log("API Response Status:", response.status());
            if (response.ok()) { // Check if the response is successful
                const responseBody = await response.json();
                console.log("API Response Body:", responseBody);
                expect(response.status()).toBe(200);
                const headers = response.headers();
                console.log("headers: ====>", headers);
                const aa = expect(headers['content-type']).toBe('application/json');
                // const bb = expect(headers['access-control-allow-origin']).toBe('https://stage-api.p-cis.com');
            } else {
                console.error("Error response:", await response.text());
            }
        } catch (error) {
            console.error("Error in createAgency:", error);
        }
    }
};
