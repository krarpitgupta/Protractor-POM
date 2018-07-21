var logger = require('../logs/log.js');

var url = require('../data/URL.json');
//var data=require('../data/MarketPlaceData/SignInData.json');
//var appData=require('../data/MarketPlaceData/AppData.json');
var commands = require('../commands/BaseClass.js');
//var home_page = require('../pages/MPHomePage.js');
var partnerWithUs_page=require('../pages/HomePage1.js')

describe("Verify market place is displayed", function () {

    it("Open market place URL", function () {
        commands.navigateToURL(url.testsiteurl);
      
        
    });

    /* it("Verify text is present", function () {
        browser.sleep(5000)
        home_page.verifyTextPresent();
    });

    it("Verify text visibility", function () {
        browser.sleep(5000)
        home_page.verifyTextVisibility();
        
    }); */
});

 describe("Verify partner creation functionality", function () {
    var randomNumber = Math.floor((Math.random() * 10000) + 1);

    it("Click partner with us link", function () {
        
        partnerWithUs_page.clickPartnerWithUs();
        
    });

     it("Click sign In link", function () {
        
        partnerWithUs_page.clickSignIn();
        
    });

    it("Verify that partner is able to create an account", function () {
        
        partnerWithUs_page.verifyPartnerSignIn("anoop.kumar@peoplestrong.com","demo");       
    });

    it("Verify that partner is able to add a new app", function () {
        
        partnerWithUs_page.verifyAddNewApp(appData.AppData.appTitle + randomNumber,
            appData.AppData.companyName,appData.AppData.websiteUrl,appData.AppData.videoUrl,
            appData.AppData.appUrl,appData.AppData.shortDescription,appData.AppData.description);        
    });

    it("Verify that partner is able to edit app", function () {
        
        partnerWithUs_page.verifyEditNewApp(appData.AppData.appTitle + randomNumber);        
    }); 
});
 