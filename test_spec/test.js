/*Created by Automators ""*/

var logger = require('../logs/log.js');


describe("This is xebia test set @XEB-6", function () {
    var data = require('../data/Data.json');
    var commands = require('../commands/BaseClass.js');
    var add_customer = require('../pages/HomePage');

    it("this is xebia test case 1", function () {
        logger.log('info', 'navigate to website')
        commands.navigateToURL(data.testsiteurl);
        add_customer.dragTextArea();
        add_customer.dragTextField();
        add_customer.clickOnSave();

        browser.sleep(3000);
   
    });

    // it("Adding a form record @XRAY-14", function () {
    //     logger.log('info', 'navigate to website')
    //     commands.navigateToURL(data.testsiteurl);
    //     add_customer.dragTextArea();
    //     add_customer.dragTextField();
    //     add_customer.clickOnSave();

    //     browser.sleep(3000);
   
    // });
 





});