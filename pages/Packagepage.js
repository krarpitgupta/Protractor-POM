/**
 * Created by Automators ""
 */
var commands = require('../commands/BaseClass.js');
var data = require('../data/Data.json');
var packageData = require('../data/PackageData.json');
var PackagePage = function () {

    var packageLink = by.xpath("//a[contains(text(),'Package')]");
    var createPackageButton = by.xpath("//button[contains(text(),'CREATE PACKAGE')]");
    var createPackageName = by.xpath("(//input[@class='form-control ng-untouched ng-pristine ng-valid'])[1]");
    var createPackageCode = by.xpath("(//input[@class='form-control ng-untouched ng-pristine ng-valid'])[1]/../../div[2]/input");
    var clickOnOKbutton = by.xpath("//button[contains(text(),'OK')]");
    var createPackageHeader = by.xpath("//h2[contains(text(),'CREATE PACKAGE')]");
    var addedRecord = by.xpath("//table/thead/following-sibling::tbody/tr[1]/td[1]");



    this.verifyPackagePagePresent = function () {

        commands.verifyElementPresent(packageLink);
        commands.clickElement(packageLink);

        return this;
    };

    this.createPackage = function (name, code) {

        commands.clickElement(createPackageButton);
        commands.type(createPackageName, name);
        commands.type(createPackageCode, code);
        commands.clickElement(createPackageHeader);
        browser.sleep(5000);
        commands.clickElement(clickOnOKbutton);
        browser.sleep(5000);
        return this;
    };

    this.clickOnAddedRecord = function () {
        commands.clickElement(addedRecord);
        return require('./ClassPage.js');
    }

};
module.exports = new PackagePage();