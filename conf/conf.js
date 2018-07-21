/*Created by Automators ""*/



exports.config = {

	plugins: [{
		package: 'jasmine2-protractor-utils',
		disableHTMLReport: false,
		disableScreenshot: false,
		//screenshotPath: './reports/screenshots',
		screenshotPath: './ExecutionResults/reports/screenshots',
		screenshotOnExpectFailure: true,
		screenshotOnSpecFailure: true,
		clearFoldersBeforeTest: true,
		htmlReportDir: './reports/htmlReports',
		failTestOnErrorLog: {
			failTestOnErrorLogLevel: 1100,
			excludeKeywords: ['keyword1', 'keyword2']
		}
	}],
	directConnect: true,
	// Capabilities to be passed to the webdriver instance.
	multiCapabilities: [{
		'browserName': 'chrome',
		//shardTestFiles: true,

		// Maximum number of browser instances that can run in parallel for this
		// set of capabilities. This is only needed if shardTestFiles is true.
		// Default is 1.
		// maxInstances: 3,    

	}],





	framework: 'jasmine2',

	specs: ['../test_spec/a.js'],
	//specs: ['../test_spec/AppPageTest.js'],
	//specs: ['../test_spec/ModulePageTest.js'],
	//specs: ['../test_spec/PackagePageTest.js'],
	//specs: ['../test_spec/ClassMenuTest.js'],
	//specs: ['../test_spec/FormPageTest.js'],
	
	//specs: ['../test_spec/HomePageTest.js'],

	// Options to be passed to Jasmine.

	jasmineNodeOpts: {
		defaultTimeoutInterval: 60000
	},

	onPrepare: function () {
		// const XrayReporter = require('protractor-xray-reporter');

		// let onPrepareDefer;
		// let onCompleteDefer;

		//new code//////////

		//onPrepareDefer = protractor.promise.defer();

		// second promise is to make sure everything is done before protractor
		// quits

		// second promise is to make sure everything is done before protractor 
		// quits 

		//onCompleteDefer = protractor.promise.defer();
		//new code//////////


		var jasmineReporters = require('jasmine-reporters');
		var width = 1600;
		var height = 1200;
		browser.driver.manage().window().setSize(width, height);


		browser.ignoreSynchronization=true;

		useAllAngular2AppRoots: true;
		browser.driver.manage().timeouts().implicitlyWait(10000);




		var AllureReporter = require('jasmine-allure-reporter');
		jasmine.getEnv().addReporter(new AllureReporter({
			allureReport: {
				resultsDir: 'allure-results'
			}
		}));

		jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
			consolidateAll: true,
			savePath: 'testresults',
			filePrefix: 'xmloutput'
		}));



		var junitReporter = new jasmineReporters.JUnitXmlReporter({
			// setup the output path for the junit reports
			savePath: 'output/',
			// conslidate all true:
			//   output/junitresults.xml
			//
			// conslidate all set to false:
			//   output/junitresults-example1.xml
			//   output/junitresults-example2.xml
			consolidateAll: false
		});
		jasmine.getEnv().addReporter(junitReporter);
		return global.browser.getProcessedConfig().then(function (config) {});


	},

	onComplete: function () {
		var browserName, browserVersion;
		var capsPromise = browser.getCapabilities();

		capsPromise.then(function (caps) {
			browserName = caps.get('browserName');
			browserVersion = caps.get('version');

			var HTMLReport = require('protractor-html-reporter');

			testConfig = {
				reportTitle: 'Test Execution Report',
				outputPath: './ExecutionResults/reports',
				screenshotPath: './screenshots',
				testBrowser: browserName,
				browserVersion: browserVersion,
				modifiedSuiteName: false,
				screenshotsOnlyOnFailure: true
			};
			browser.sleep(5000)
			new HTMLReport().from('testresults/xmloutput.xml', testConfig);
			browser.close();

			//	return onCompleteDefer.promise;
		});
	}

};