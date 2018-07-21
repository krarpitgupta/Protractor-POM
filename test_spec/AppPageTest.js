/**
 * Created by Automators ""
 */

var logger = require('../logs/log.js');
var data = require('../data/Data.json');
var appData = require('../data/AppData.json');
var url = require('../data/URL.json');
var commands = require('../commands/BaseClass.js');
var app_page = require('../pages/AppPage.js');
var module_page = require('../pages/ModulePage.js');

/*Created by Automators ""*/

describe("Verify App Page", function () {
   

    it("Verify App Page is displayed", function () {
        commands.navigateToURL(url.testsiteurl);
        app_page.verifyAppsPagePresent();


    });

    it("Verify list present", function () {

        app_page.verifylistPresent();


    });

});

describe("Verify App create functionality", function () {
    var randomNumber = Math.floor((Math.random() * 10000) + 1);

    it("Verify user is able to create an app", function () {
        app_page.createApp(appData.AppPage.appName + randomNumber, randomNumber);
        app_page.verifyRecordCreated('"'+appData.AppPage.appName + randomNumber+'"');
    });


});
describe("Verify App edit functionality - functionality discarded currently", function () {
    var randomNumber = Math.floor((Math.random() * 10000) + 1);

    xit("Verify user is able to edit an app", function () {
        app_page.editApp(appData.AppPage.editedAppName + randomNumber, randomNumber);

    });


});

describe("Verify App Delete functionality - functionality discarded currently", function () {
 
    xit("Verify user is able to delete an app", function () {

        app_page.deleteApp();


    });

});

describe("Verify that user is navigated to Module page on clicking name list on App Page", function () {
   

    it("Verify module page is displayed on clicking name on App page", function () {

        app_page.clickOnAddedRecord();
        module_page.verifyModulePageIsDisplayed();

    });


});