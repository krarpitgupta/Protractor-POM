
var logger = require('../logs/log.js');
/*Created by Automators ""*/

describe("Verify Module Page", function () {
    var logger = require('../logs/log.js');
    var data = require('../data/Data.json');
    var appData = require('../data/AppData.json');
    var url = require('../data/URL.json');
    var commands = require('../commands/BaseClass.js');
    var app_page = require('../pages/AppPage.js');
    var moduleData = require('../data/ModuleData.json');
    var module_page = require('../pages/ModulePage.js');
    var randomNumber = Math.floor((Math.random() * 10000) + 1);
    


    it("Verify Module Page is displayed", function () {
        commands.navigateToURL(url.testsiteurl);
        app_page.verifyAppsPagePresent();
        app_page.createApp(appData.AppPage.appName + randomNumber, randomNumber);
        app_page.clickOnAddedRecord();
    });

    it("Verify module link functionality", function () {
        module_page.clickAddModulelink();
    });

    it("Verify Module saving functionality", function () {
        module_page.moduleSavefunctionality();
    });

    it("Verify editing an module record", function () {
        module_page.verifyEditModulefunctionality();
    });

    it("Verify menu present", function () {
        module_page.verifyMenuPresent();
    });

    it("Verify saving an menu record", function () {
        module_page.verifyMenuPresent();
        module_page.saveMenuName(data.HomePage.menuName);
    });

    it("Verify editing an menu record", function () {
        module_page.verifyMenuPresent();
        module_page.saveEditMenuName(data.HomePage.menuNameEdit);
    });

    it("Verify attach form visible under module", function () {
        module_page.verifyAttachFormModule();
    });

    it("Verify Attach Form link is clickable Module create", function () {
        module_page.verifyAttachFormlinkModule();
    });

    it("Verify attach form functionality with module", function () {
        module_page.verifyAttachFormModule();
        module_page.verifyFormListFromSelection();
    });

    it("Verify functionality of Attach button for selecting form  ", function () {
        module_page.verifyAttachButtonfunctionality();

    });
});
