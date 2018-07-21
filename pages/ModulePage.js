/*Created by Automators ""*/


var commands = require('../commands/BaseClass.js');
var data = require('../data/Data.json');
var url = require('../data/URL.json');
var moduleData = require('../data/ModuleData.json');

var ModulePage = function () {

    var addModule = by.xpath("//a[@class='blue_link']");
    var moduleName = by.xpath("//input[contains(@class,'module')]");
    var insertMenu = by.xpath("//a[contains(@class,'click_add_menu')][2]");
    var insertMenu1 = by.xpath("//a[@class='blue_link click_add_menu']");
    var menuName = by.xpath("//input[@placeholder='Enter Menu Name']");
    var menuNameEdit = by.xpath("//td[@class='table-cell-3 menu_level_1']");
    var save = by.xpath("//button[contains(text(),'Save')]");
    var formModuleListLink = by.xpath("//a[contains(text(),'Attach Form')][1][1]");
    var verifySaveMessage = by.xpath("//span[@class='label label-success']");
    var verifyModulePresent = by.xpath("//input[@ng-reflect-model='leave']");
    var formSelect = by.xpath("((//tbody)[3]/tr/td[1])[1]");
    var editModuleLink = by.xpath("//span[@class='material-icons']");
    var formModuleLink = by.xpath("//div[@class='attach-form-module']");
    var attachForm = by.xpath("//button[contains(text(),'Attach')]");
    var randomNumber = Math.floor((Math.random() * 10000) + 1);
    var moduleNameData = moduleData.ModulePage.moduleName + randomNumber;

    this.verifyModulePageIsDisplayed = function () {
        browser.sleep(1000);
        commands.verifyElementPresent(addModule);
        return this;
    };


    this.clickAddModulelink = function () {  
        commands.clickElement(addModule);
        return this;

    };


    this.moduleSavefunctionality = function () {
        commands.clickElement(moduleName);
        commands.type(moduleName, moduleNameData);
        commands.clickElement(save);
        return this;
    };

    this.verifyEditModulefunctionality = function () {
    
        commands.clickElement(editModuleLink);
      
        commands.type(moduleName, moduleNameData + 'edit');
       
        commands.clickElement(save);
       
    };

    this.verifySaveModulePresent = function () {
       
        commands.verifyElementPresent(verifyModulePresent);
    }
    this.verifyMenuPresent = function (text) {
     
        commands.clickElement(insertMenu);
        return this;
    };
    this.clickonMenu = function (text) {
      
        commands.clickElement(insertMenu);
        return this;
    };


    this.saveMenuName = function (text) {
        
        commands.clickElement(insertMenu);
    
        commands.clickElement(menuName);
   
        commands.type(menuName, text);
       
        commands.clickElement(save);
        return this;
    };

    this.saveEditMenuName = function (text) {
        commands.clickElement(menuName);
        commands.type(menuName, text);
        commands.clickElement(save);
        return this;
    };

    this.saveModule = function () {
        commands.clickElement(save);
        return this;
    };

    this.verifyInsertMenuGroup = function () {
        commands.verifyElementPresent(insertMenuGroup);
    };

    this.verifyAttachFormModule = function () {
        commands.verifyElementPresent(formModuleListLink);
    }

    this.verifyAttachFormlinkModule = function () {
        commands.clickElement(formModuleListLink);
    }

    this.verifyAttachFormlistModule = function () {
        commands.verifyElementPresent(formSelect);
    }
    this.verifyFormListFromSelection = function () {

        commands.clickElement(formSelect);
        browser.sleep(2000);
    }

    this.verifyAttachButtonfunctionality = function () {

        commands.clickElement(attachForm);
    }
};
module.exports = new ModulePage();