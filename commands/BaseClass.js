var BaseClass = function () {
    
        var EC = protractor.ExpectedConditions;
    
        this.clickElement = function (loc) {
            browser.wait(EC.presenceOf(element(loc)), 30000);
            element(loc).click();
    
        };
    
        this.type = function (loc, text) {
            var e = element(loc);
            browser.wait(EC.presenceOf(element(loc)), 15000);
            e.clear();
            e.sendKeys(text);
    
        };
    
        this.getPageTitle = function () {
            return browser.getTitle();
    
        };
    
        this.navigateToURL = function (url) {
            browser.get(url);
    
        };
    
        this.dragAndDrop = function (loc1, loc2) {
            var element1 = element(loc1);
            var element2 = element(loc2);
            browser.actions().
                dragAndDrop(element1, element2).
                perform();
    
        };
    
    
        this.dragAndDropByJS = function (loc1, loc2) {
            var java_script =
                "var src=arguments[0],tgt=arguments[1];var dataTransfer={dropEffe" +
                "ct:'',effectAllowed:'all',files:[],items:{},types:[],setData:fun" +
                "ction(format,data){this.items[format]=data;this.types.append(for" +
                "mat);},getData:function(format){return this.items[format];},clea" +
                "rData:function(format){}};var emit=function(event,target){var ev" +
                "t=document.createEvent('Event');evt.initEvent(event,true,false);" +
                "evt.dataTransfer=dataTransfer;target.dispatchEvent(evt);};emit('" +
                "dragstart',src);emit('dragenter',tgt);emit('dragover',tgt);emit(" +
                "'drop',tgt);emit('dragend',src);";
    
            var e1 = element(loc1);
            var e2 = element(loc2);
            browser.executeScript(java_script, e1.getWebElement(), e2.getWebElement());
    
        };
    
    
        this.dragAndDropBy = function (loc1, x, y) {
            var element = element(loc1);
            browser.actions().
                mouseMove(element).
                mouseMove({
                    x: x,
                    y: y
                }).
                doubleClick().
                perform();
    
        };
    
    
        this.switchToFrame = function (loc) {
            var element = element(loc);
            browser.switchTo().frame((element).getWebElement());
        };
    
        this.switchToAlertAndPressOk = function (loc) {
            var EC = protractor.ExpectedConditions;
            // Waits for an alert pops up.
            browser.wait(EC.alertIsPresent(), 1000);
            var alertDialog = browser.switchTo().alert();
            alertDialog.accept();
        };
    
        this.switchToAlertAndPressCancel = function (loc) {
            var EC = protractor.ExpectedConditions;
            // Waits for an alert pops up.
            browser.wait(EC.alertIsPresent(), 1000);
            var alertDialog = browser.switchTo().alert();
            alertDialog.dismiss();
        };
    
    
        this.verifyElementPresent = function (loc) {
            browser.wait(EC.presenceOf(element(loc)), 15000);
            var e = element(loc);
            expect(e.isDisplayed()).toBe(true);
        };
    
        this.verifyTextIsEqualTo = function (loc, text) {
            browser.wait(EC.presenceOf(element(loc)), 15000);
            var e = element(loc);
            expect(e.getText()).toEqual(text);      
            
        };
    
        this.verifyMessageTimeouts= function (loc, text) {
            browser.wait(EC.presenceOf(element(loc)), 15000);
            browser.ignoreSynchronization = true;
            var e = element(loc);
            expect(e.getText()).toEqual(text);  
            browser.sleep(500);
            browser.ignoreSynchronization = false;    
            
        };
    
    
        this.switchToWindows = function (loc, text) {
            browser.getAllWindowHandles().then(function (handles) {
                browser.switchTo().window(handles[1]);
            });
        };
    
        this.mouseHover = function (loc) {
            var e = element(loc);
            browser.actions().mouseMove(e).perform();
        };
    
        this.getTextByXpath = function (loc) {
            var e = element(loc);
            return e.getText().then(function (text) {
                return text;
            });
        };
    
        this.generateRandomString = function () {
            var text = "";
            var possible = "abcdefghijklmnopqrstuvwxyz";
            for (var i = 0; i < 5; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            return text;
    
        };
    
    
        this.selectDropdownbyOption = function (loc, text) {
            if (text) {
                var options = element.findElements(by.xpath(loc))
                    .then(function (options) {
                        options[text].click();
                    });
    
            }
        }
         
        this.getCurrentDate = function () {
            var d = new Date();
            var currentDate = d.getDate();
            return currentDate;
        };
    
        this.calSelectDate = function (loc,loc1) {
            element(loc).click();
            element(loc1).click();
        
        };
        
    };
    
    module.exports = new BaseClass();