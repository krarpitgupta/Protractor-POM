/**
 * Created by Automators ""
 */
var commands = require('../commands/BaseClass.js');
var appData = require('../data/AppData.json');
var data = require('../data/Data.json');
var url = require('../data/URL.json');

var AppPage = function () {
    var i = 1;
    var prexpathRecord = "//thead/following-sibling::tbody/tr[";
    var postxpathRecord = "]/td[2]";
    var appsLink = by.xpath("//a[contains(text(),'Apps')]");
    var listHeaders = by.xpath("//thead/tr");
    var listRecord = by.xpath("//thead/../tbody/tr[1]");
    var create = by.xpath("/html/body/alt-app/div/div/div/div/div/ng-component/div/h1/a");
    var createAppButton = by.xpath("//button[contains(text(),'CREATE APP')]");
    var createAppName = by.xpath("(//input[@class='form-control ng-untouched ng-pristine ng-valid'])[1]");
    var createAppCode = by.xpath("(//input[@class='form-control ng-untouched ng-pristine ng-valid'])[1]/../../div[2]/input");
    var clickOnOKbutton = by.xpath("//button[contains(text(),'OK')]");
    var createAppHeader = by.xpath("//h2[contains(text(),'CREATE APP')]");
    var addedRecord = by.xpath("(//tbody//td[2])[1]");
    var editAppIcon = by.xpath("//tbody//tr[1]//span[@class='menu-style-icon material-icons edit-icon13']");
    var deleteAppIcon = by.xpath("//tbody//tr[1]//span[@class='menu-style-icon material-icons']");
    var randomNumber = Math.floor((Math.random() * 10000) + 1);
    var appNameData = appData.AppPage.appName + randomNumber;
    var appCodeRandom = randomNumber;
    var appDeleteOkbutton = by.xpath("//button[@class='btn btn-primary width90']");

    this.verifyTheColumnHeaders = function () {

        var elementList = element(by.xpath("//tr"));
        var list1 = elementList.all(by.tagName('th'));

        list1.map(function (links) {

            return links;

        }).then(function (links) {

            for (var i = 0; i < links.length; i++) {

                links[i].getText().then(function (text) {

                    console.log('text of elem1 is: ' + text);

                })

            }

        })

        return this;
    };

    this.verifyAppsPagePresent = function () {

        commands.verifyElementPresent(appsLink);
        commands.clickElement(appsLink);

        return this;
    };

    this.verifylistPresent = function () {

        commands.verifyElementPresent(listHeaders);
        return this;
    };

    this.verifyRecordsPresent = function () {

        commands.verifyElementPresent(listRecord);
        return this;
    };


    this.createApp = function (name, code) {

        commands.clickElement(createAppButton);
        commands.type(createAppName, name);
        commands.type(createAppCode, code);
        commands.clickElement(createAppHeader);
        commands.clickElement(clickOnOKbutton);
        return this;
    };

    this.verifyRecordCreated = function (text) {

        commands.verifyTextIsEqualTo(addedRecord,text)
        return this;
    };

    this.editApp = function (name, code) {
        commands.clickElement(editAppIcon);
        commands.type(createAppName, name);
        commands.type(createAppCode, code);
        commands.clickElement(createAppHeader);
        commands.clickElement(clickOnOKbutton);
        return this;
    };

    this.deleteApp = function () {
        commands.clickElement(deleteAppIcon);
        commands.clickElement(clickOnOKbutton);
        return this;
    };



    this.clickOnListRecord = function () {
        while (this.verifyElementPresentInList(rows)) {
            // console.log(prexpathRecord+i+postxpathRecord);
            var e = element(rows).getText();
            if (e == "dee") {
                console.log("exist");
            } else {
                console.log("not exist");
            }

        }


    };



    this.verifyElementPresentInList = function (loc) {
        var e = element.all(loc).count();
        console.log(e);
        if (e == 0) {
            return false;
        } else {
            return true;
        }
        i++;
    };


    this.clickOnAddedRecord = function () {
        commands.clickElement(addedRecord);
        return require('./ModulePage.js');
    }
};
module.exports = new AppPage();