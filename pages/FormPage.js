var commands = require('../commands/BaseClass.js');

var FormPage = function () {

    var formLink = by.xpath("//a[@routerlink='form']");
    var formlist = by.xpath("//thead/tr");
    var formCreateButton = by.xpath("//button[contains(text(),'CREATE FORM')]");
    var createFormheader = by.xpath("//div[@class='popup-top clearfix']/h2[@class='title']");
    var formName = by.xpath("//div[@class='listing-popup-block vertical-scrollbox item_list']//div[1]//input");
    var formOkButton = by.xpath("//button[contains(text(),'OK')]");
    var typeDropdown = by.xpath("//div[2]/select");
    var confirmationMessage = by.xpath("//span[contains(text(),'Saved successfully')]");
    var typeSelection = by.xpath("//div[2]/select/option[contains(text(),'General')]");
    var clickFormName = by.xpath("//table[@class='table document-table mgn-b0 table_filter']//tr[1]/td[1]");
    var textField = by.xpath("//app-form-creator/div[2]//ul[2]/li[1]/span");
    var button = by.xpath("//div/ul[2]/li[8]");
    var saveButton = by.xpath("html/body/alt-application/div/div/ng-component/div/div/app-form-creator/div[1]/div/button[2]");
    var updateMessage = by.xpath("//span[@class='label label-success']");
    var clickdragelement = by.xpath("//input[@placeholder='Text Field']");
    var dragHereMenu = by.xpath("//div[contains(text(),'DROP HERE')]");
    var placeholder = by.xpath("//input[@type='text' and @placeholder='Text Field']");
    var fieldLabel = by.xpath("//*[@id='sub-tab1']/ul/li[2]/div/input");
    var fieldName = by.xpath("//*[@id='sub-tab1']/ul/li[3]/div/input");
    var fieldValue = by.xpath("//*[@id='sub-tab1']/ul/li[4]/div/input");
    var instruction = by.xpath("//*[@id='sub-tab1']/ul/li[5]/div/input");
    var fieldHelpText = by.xpath("//*[@id='sub-tab1']/ul/li[6]/div/input");


    var deleteField = by.xpath("//span[@class='menu-style-icon material-icons']");
    var copyField = by.xpath("//span[@class='menu-style-icon material-icons edit']");
    var highlightElement = by.xpath("//alt-button/div");
    var backendTab = by.xpath("//ul[@class='sub-tabs-head']/li[2]/a");
    var readClass = by.xpath(".//*[@id='sub-tab2']/ul[1]/li[1]/div/div/select");
    var selectReClassOption = by.xpath(".//*[@id='sub-tab2']/ul[1]/li[1]/div/div/select/option[4]");
    var readAttribute = by.xpath(".//*[@id='sub-tab2']/ul[1]/li[2]/div/div/select");
    var selectReAttributeOption = by.xpath(".//*[@id='sub-tab2']/ul[1]/li[2]/div/div/select/option[@value='3: bandcode']");
    var writeClass = by.xpath(".//*[@id='sub-tab2']/ul[2]/li[1]/div/div/select");
    var selectWrClassOption = by.xpath(".//*[@id='sub-tab2']/ul[2]/li[1]/div/div/select/option[4]");
    var writeAttribute = by.xpath(".//*[@id='sub-tab2']/ul[2]/li[2]/div/div/select");
    var selectWrAttributeOption = by.xpath(".//*[@id='sub-tab2']/ul[2]/li[2]/div/div/select/option[@value='3: bandcode']");
    var browserClick=by.xpath("//*[@id='sub-tab2']/h3[1]");

    this.verifyFormLinkPresent = function () {
        commands.verifyElementPresent(formLink);
        return this;
    };

    this.navigateToFormPage = function () {
        commands.clickElement(formLink);
        return this;
    };

    this.verifyFormMenuListPresent = function () {
        commands.verifyElementPresent(formlist);
        return this;
    };


    this.createForm = function (name) {
        commands.clickElement(formCreateButton);
        commands.clickElement(formName);
        commands.type(formName, name);
        commands.clickElement(typeDropdown);
        commands.clickElement(typeSelection);
        commands.clickElement(formOkButton);
        commands.verifyElementPresent(confirmationMessage);
        return this;
    };

    this.verifyFormCreation = function () {
        commands.verifyElementPresent(confirmationMessage);
    };

    this.clickOnFormName = function () {
        commands.clickElement(clickFormName);
        return this;
    };

    this.verifyDropHerePresent = function () {
        browser.sleep(2000);
        commands.verifyElementPresent(dragHereMenu);
        return this;
    };

    this.dragTextField = function () {
        commands.dragAndDropByJS(textField, dragHereMenu);
        browser.sleep(500);
        commands.verifyElementPresent(updateMessage);
        browser.sleep(500);
        commands.clickElement(placeholder);
        return this;
    };

    this.dragButton = function () {
        commands.dragAndDropByJS(button, dragHereMenu);
        return this;
    };

    this.clickField = function () {
        commands.clickElement(placeholder);
        return this;
    };


    this.enterFieldUIDetail = function (fieldLabelInput, fieldNameInput,
        fieldValueInput, instructionInput, fieldHelpTextInput) {   
        commands.type(fieldLabel, fieldLabelInput);
        commands.type(fieldName, fieldNameInput);
        commands.type(fieldValue, fieldValueInput);
        commands.type(instruction, instructionInput);
        commands.type(fieldHelpText, fieldHelpTextInput);
        commands.clickElement(saveButton);
        return this;

    };

    this.verifyCopyFunc = function () {

        commands.clickElement(highlightElement);
        commands.clickElement(copyField);
        return this;

    };

    this.verifyDeleteFunc = function () {

        commands.clickElement(highlightElement);
        commands.clickElement(deleteField);
        return this;

    };


    this.ClickOnBackendTab = function () {
        
                commands.clickElement(backendTab);
        
            };

    this.verifyReadBackendInfo = function () {

        commands.clickElement(readClass);
        commands.clickElement(selectReClassOption);
        commands.clickElement(readAttribute);
        commands.clickElement(selectReAttributeOption);
        return this;

    };

    this.verifyWriteBackendInfo = function () {
        commands.clickElement(writeClass);
        commands.clickElement(selectWrClassOption);
        commands.clickElement(writeAttribute);       
        commands.clickElement(selectWrAttributeOption);
        commands.clickElement(saveButton);
        return this;

    };

    };
module.exports = new FormPage();