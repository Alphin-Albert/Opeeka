class CommonLocators {
    constructor() {
        //Login page
        this.username = "#signInName";
        this.password = "#password";
        this.loginButton = "//button[contains(text(), 'Sign in')]";
        //dashboard page
        this.search = "Search";
        this.searchbtn = "i";
        this.clickDashMenu = "(//*[contains(text(),'Dashboard')])[1]";
        this.clickViewAll = "(//*[contains(text(),'View All')])[1]";

        //jwt
        this.tokenGen = "//*[@id='encodedToken']";

        //urls
      //  this.urlStage = "https://stage-login.p-cis.com/"; - delete
        this.apiUrl = "https://opeekab2cqa.b2clogin.com/opeekab2cqa.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1A_SIGNIN_SIGNUP_FRP&client_id=1108c96c-8377-4cd6-ae89-9b303f5eab37&nonce=defaultNonce&redirect_uri=https%3A%2F%2Fjwt.ms%2F&scope=openid&response_type=id_token&prompt=login";
        //API Urls
        this.agencyPostApI = "https://stage-api.p-cis.com/api/agency";
    }
}

module.exports = CommonLocators;