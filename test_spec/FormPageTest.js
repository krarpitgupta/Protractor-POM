var logger = require('../logs/log.js');

var url = require('../data/URL.json');
var commands = require('../commands/BaseClass.js');
var form_page = require('../pages/FormPage.js');
var formData = require('../data/FormData.json');
var app_page = require('../pages/AppPage.js');
var module_page = require('../pages/ModulePage.js');
var appData = require('../data/AppData.json');


describe("Verify Form Page is displayed", function () {

    it("Navigate to Form Page", function () {
        commands.navigateToURL(url.testsiteurl);
    });

    it("Click on form link", function () {

        form_page.navigateToFormPage();

    });

    it("Verify Form List Present", function () {
        form_page.verifyFormMenuListPresent();
    });


});

describe("Verify that user is able to create a form", function () {
    var randomNumber = Math.floor((Math.random() * 10000) + 1);

    it("Verify create form functionality", function () {
        form_page.createForm(formData.FormPage.formName + randomNumber);
    });

});


describe("Verify that user is able to edit a form for drag and drop", function () {


    it("Verify user is able to drop a button", function () {
        form_page.clickOnFormName();
        form_page.verifyDropHerePresent();
        form_page.dragButton();
    });

    it("Verify user is able to drop a textfield", function () {
        form_page.verifyDropHerePresent();
        form_page.dragTextField();
    });


});

describe("Verify that user is able to enter UI detail of field in form", function () {


    it("Verify that user is able enter the field UI detail", function () {
        form_page.clickField();
        form_page.enterFieldUIDetail(formData.FormPage.fieldLabel,
            formData.FormPage.fieldName,
            formData.FormPage.fieldValue,
            formData.FormPage.instruction,
            formData.FormPage.fieldHelpText);

    });

});

describe("Verify that user is able to copy field in form", function () {


    it("Verify that user is able copy field", function () {
        form_page.verifyCopyFunc();
        form_page.verifyDeleteFunc();
    });

});

describe("Verify that user is able to delete field in form", function () {


    it("Verify that user is able delete field", function () {
        form_page.verifyDeleteFunc();

    });

});

describe("Verify that user is able to map detail in backend property tab in the form", function () {

    it("Click on Backend Tab ", function () {
        form_page.clickField();
        form_page.ClickOnBackendTab();
    });

    it("Verify that user is able to read detail ", function () {
        form_page.verifyReadBackendInfo();

    });

    it("Verify that user is able to write detail ", function () {
        form_page.verifyWriteBackendInfo();

    });
});
describe("Verify that user is able to perform action on App form", function () {


    it("Click on App link", function () {

        app_page.verifyAppsPagePresent();

    });

});

describe("Verify preview of mapped form on module page", function () {

    var randomNumber = Math.floor((Math.random() * 10000) + 1);

    it("Verify user is able to create an app", function () {
        app_page.createApp(appData.AppPage.appName + randomNumber, randomNumber);

    });

    it("Verify module page is displayed on clicking app name", function () {

        app_page.clickOnAddedRecord();

    });

    it("Verify form is attached on module page", function () {

        module_page.clickAddModulelink();
        module_page.verifyAttachFormlinkModule();
        module_page.verifyFormListFromSelection();
        module_page.verifyAttachButtonfunctionality();
        module_page.moduleSavefunctionality();
    });

});

describe("Verify mapped form detail on preview page", function () {

    /* it("Click on preview button", function () {
        
            module_page.verifyPreviewButtonFuntionality();
                
    }); */

    it('Switch to new tab', function () {
        browser.driver.executeScript(function () {
            (function (a) {
                document.body.appendChild(a);
                a.setAttribute('href', 'http://10.226.0.219:4300/application/470');
                a.dispatchEvent((function (e) {
                    e.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, true, false, false, false, 0, null);
                    return e;
                }(document.createEvent('MouseEvents'))))
            }(document.createElement('a')));
        });

    });


    it("Click on mapped module", function () {

        module_page.verifyMappedModuleLink();

    });
});