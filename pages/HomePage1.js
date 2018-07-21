var commands = require('../commands/BaseClass.js');
//var data = require('../data/MarketPlaceData/SignInData.json');

var MPPartnerWithUsPage = function () {

    var signIn = by.xpath("//form[@class='form-inline mt-2 mt-md-0 ng-untouched ng-pristine ng-valid']/div/button");
    var email=by.xpath("//input[@name='email']");
    var password=by.xpath("//input[@type='password']");
    var signButton=by.xpath("//a[contains(text(),'sign in')]");
    var signInConfirmation=by.xpath("//ul[@class='navbar-nav mr-auto']//a[contains(text(),'Partner with us')]");
    var partnerMenu=by.xpath("//a[contains(text(),'Partner with us')]");
    var addIcon=by.xpath("//a[@class='add_thumb']/i");
    var appTitle=by.xpath("//input[@name='appTitle']");
    var categoryClick=by.xpath("//select[@name='category']");
    var categorySelect=by.xpath("//select[@name='category']/option[1]");
    var subCategoryClick=by.xpath("//select[@name='subCategory']");
    var subCategorySelect=by.xpath("//select[@name='subCategory']/option[1]");
    var companyName=by.xpath("//input[@name='companyName']");
    var webSiteUrl=by.xpath("//input[@name='websiteUrl']");
    var videoUrl=by.xpath("//input[@name='videoUrl']");
    var appUrl=by.xpath("//input[@name='appUrl']");
    var shortDescription=by.xpath("//textarea[@name='shortDescription']");
    var description=by.xpath("//textarea[@name='description']");
    var appCreate=by.xpath("//button[@class='btn btn-default btn-primary']");
    var appCancel=by.xpath("//button[@class='btn btn-default btn_gray']");
    var clickEdit=by.xpath("//div[@class='menu-style']/ul/li/a[contains(text(),'Edit/Update')]");
    var verifyAppTitle=
    


    this.clickPartnerWithUs = function () {
       // commands.verifyElementPresent(partnerMenu);
        commands.clickElement(partnerMenu);
        return this;
    }


    this.clickSignIn = function () {
        commands.verifyElementPresent(signIn);
        commands.clickElement(signIn);
        return this;
    }

    this.verifyPartnerSignIn = function (emailInput,passwordInput) {
      //  commands.verifyElementPresent(signIn);
        commands.type(email,emailInput)
        commands.verifyElementPresent(password);
        commands.type(password,passwordInput);
        commands.clickElement(signButton);
        commands.verifyElementPresent(signInConfirmation);
        commands.verifyTextIsEqualTo(signInConfirmation,'Partner Apps');
        return this;
    }

    this.verifyAddNewApp = function (appTitleInput,companyNameInput,websiteUrlInput,videoUrlInput,
        appUrlInput,shortDescriptionInput,descriptionInput) {

        commands.clickElement(addIcon);
        commands.type(appTitle,appTitleInput);
        commands.clickElement(categoryClick);
        commands.clickElement(categorySelect);
        commands.clickElement(subCategoryClick);
        commands.clickElement(subCategorySelect);
        commands.type(companyName,companyNameInput);
        commands.type(webSiteUrl,websiteUrlInput);
        commands.type(videoUrl,videoUrlInput);
        commands.type(appUrl,appUrlInput);
        commands.type(shortDescription,shortDescriptionInput);
        commands.type(description,descriptionInput);
        commands.clickElement(appCreate);
        commands.clickElement(appCancel);

        return this;
    }
    this.verifyEditNewApp = function (appTitleInput) {
        var editapp=by.xpath("//a[contains(text(),'" + appTitleInput + "')]/../../preceding-sibling::a/i");
        commands.clickElement(editapp);
        commands.clickElement(clickEdit);
        commands.verifyTextIsEqualTo(categorySelect,'Alt Apps');
        commands.verifyTextIsEqualTo(subCategorySelect,'Alt It Apps');
        /* var fileToUpload = "C:\Users\anoop.kumar\Desktop\issue.png";
        var absolutePath = path.resolve(fileToUpload);
        $('input[type="file"]').sendKeys(absolutePath);
         commands.clickElement("/html/body/app-root/app-partner/app-create-app/main/div/form/div/div[2]/div[1]/label/div/i");
        browser.sleep(1500);
 */
        return this;
    }
};
module.exports = new MPPartnerWithUsPage();