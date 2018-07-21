
var commands = require('../commands/BaseClass.js');
var data = require('../data/Data.json');
var cData = require('../data/ClassData.json');
var url = require('../data/URL.json');


var ClassMenuPage = function () {
    var classmLink = by.xpath("//a[contains(text(),'Class')]");
    var classlistHeaders = by.xpath("//thead/tr");
    var classlistRecord = by.xpath("//thead/../tbody/tr[1]");
    var classCreateButton = by.xpath("//button[@class='btn btn-primary fl-right add-click']");
    var classCreateHeader =by.xpath("//div[@class='info_title']");
    var classCreateButton =by.xpath("//button[@class='btn btn-primary width90']");
    var randomNumber = Math.floor((Math.random() * 10000) + 1);
    var classNameData = cData.ClassPage.className + randomNumber;
    var classCodeRandom = randomNumber;


    this.verifyClassPagePresent = function () {

        commands.verifyElementPresent(classmLink);
        commands.clickElement(classmLink);

        return this;
    };
    this.verifyclasslistPresent = function () {

        commands.verifyElementPresent(classlistRecord);
        commands.clickElement(classlistRecord);

        return this;

    };
    this.verifyclassButtonPresent = function () {

        commands.verifyElementPresent(classCreateButton);
        commands.clickElement(classCreateButton);

        return this;

    };
    this.createClass = function (name, code) {

        commands.clickElement(classCreateButton);
        commands.type(classNameData, name);
        browser.sleep(1000);
        commands.type(classCodeRandom, code);
        commands.clickElement(classCreateHeader);
        browser.sleep(5000);
        commands.clickElement(classCreateButton);
        browser.sleep(5000);
        return this;


    }

};

module.exports = new ClassMenuPage();
