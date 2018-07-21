var logger = require('../logs/log.js');


describe("Verify Logo functionality", function () {
    var data = require('../data/Data.json');
    var commands = require('../commands/BaseClass.js');
    var Home_page = require('../pages/HomePage.js');


    it("Verify Logo present", function () {
        commands.navigateToURL(data.testsiteurl);
        Home_page.logoPresent();
    
    });
    
    it("Verify Logo functionality", function () {
        Home_page.verifyLogofunctionality();
    
    });
});
