/**
 * Created by Automators ""
 */

var logger = require('../logs/log.js');
/*Created by Automators ""*/

describe("Verify Package Page", function () {
    var data = require('../data/Data.json');
    var url = require('../data/URL.json');
    var packageData = require('../data/PackageData.json');
    var commands = require('../commands/BaseClass.js');
    var packagePage = require('../pages/PackagePage.js');
    var randomNumber = Math.floor((Math.random() * 10000) + 1);

    it("Verify Package Page is displayed", function () {
        commands.navigateToURL(data.testsiteurl);
        packagePage.verifyPackagePagePresent();
    

    });

   it("Verify user is able to create a Package", function () {
       
          packagePage.createPackage(packageData.packagePage+randomNumber,randomNumber);
          
  
      });



});

describe("Verify that user is navigated to Class page on clicking name list on App Page", function () {
    var data = require('../data/Data.json');
    var packageData = require('../data/PackageData.json');
    var commands = require('../commands/BaseClass.js');
    var packagePage = require('../pages/PackagePage.js');
    var classPage = require('../pages/ClassPage.js');
   

    it("Verify class page is displayed on clicking name on package page", function () {
      
        packagePage.clickOnAddedRecord();
        classPage.verifyClassPageIsDisplayed();
        
    });

   


});