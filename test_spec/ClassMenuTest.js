
var logger = require('../logs/log.js');


describe("Verify Class page", function () {
    var data = require('../data/Data.json');
    var url = require('../data/URL.json');
    var classData = require('../data/ClassData.json');
    var commands = require('../commands/BaseClass.js');
    var classmenu_page = require('../pages/ClassMenuPage.js');


    it("Verify Class Menu is displayed", function () {
        commands.navigateToURL(url.testsiteurl);
        classmenu_page.verifyClassPagePresent();

    });

    it("Verify class list present", function () {

        classmenu_page.verifyclasslistPresent();
    });
    it("Verify class create button visible", function () {

        classmenu_page.verifyclassButtonPresent();
    });

    it("Verify user is able to create class", function () {
        classmenu_page.createClass();

    });
});