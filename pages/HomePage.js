/**
 * Created by Automators ""
 */
var commands = require('../commands/BaseClass.js');
var data = require('../data/Data.json');

var HomePage = function () {

    var textField = by.id("TEXTFIELD");
    var textFieldData = by.xpath("//li[contains(@class,'text-field')]/div[2]/div/input");
    var textArea = by.id("TEXTAREA");
    var textAreaData = by.xpath("//li[contains(@class,'textarea')]/div[2]/div/textarea");
    var formArea = by.id("frmb-0");
    var saveBtn = by.xpath("//button[contains(text(),'Save')]");
    var appLink = by.xpath("//a[@routerlink='collection/app']");
    var logoImage = by.xpath("//img[@alt='Alt Recruit']");


    this.logoPresent = function () {
        commands.verifyElementPresent(logoImage);
        return this;
    }
    this.verifyLogofunctionality = function () {
        commands.clickElement(logoImage);
        return this;
    }

    this.dragTextField = function () {


        commands.dragAndDropByJS(textField, formArea);
        commands.type(textFieldData, data.HomePage.TextField)
        return this;
    };



    this.dragTextArea = function () {

        commands.dragAndDropByJS(textArea, formArea);
        commands.type(textAreaData, data.HomePage.TextArea)
        return this;


    };

    this.clickOnSave = function () {


        commands.clickElement(saveBtn);
        return this;
    };


    this.clickOnApp = function () {

        commands.clickElement(appLink);
        return require('./AppPage.js');
    };

};
module.exports = new HomePage();