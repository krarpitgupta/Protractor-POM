/**
 * Created by Automators ""
 */
var commands = require('../commands/BaseClass.js');
var data = require('../data/Data.json');

var ClassPage = function () {
    var createPackageButton = by.xpath("//button[contains(text(),'CREATE CLASS')]");
    
    this.verifyClassPageIsDisplayed = function(){
    var createPackageButton = by.xpath("//button[contains(text(),'CREATE CLASS')]");
        commands.verifyElementPresent(createPackageButton);
    };


   

};
module.exports = new ClassPage();