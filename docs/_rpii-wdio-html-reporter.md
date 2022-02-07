---
id: rpii-wdio-html-reporter
title: HTML Reporter
custom_edit_url: https://github.com/rpii/wdio-html-reporter/edit/master//README.md
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> @rpii/wdio-html-reporter is a 3rd party package, for more information please see [GitHub](https://github.com/rpii/wdio-html-reporter) | [npm](https://www.npmjs.com/package/@rpii/wdio-html-reporter)
 # wdio-html-nice-reporter

A reporter for webdriver.io which generates a nice HTML report.  
The name is silly but provides integration with webdriverio

Compatible with webdriverio version 7.7

### See note below if getting duplicate type errors on TS compile


## [Changelog](https://github.com/rpii/wdio-html-reporter/blob/master/changes.md)

## Information

This project is a rewrite of [@rpii/wdio-html-reporter](https://www.npmjs.com/package/wdio-html-reporter)
It is written in typescript with many enhancements.


### Duplicate Types NOTE:

The problem below is in NOT latest  version of npm and yarn!!!

if you use npm install, you can have duplicate types installed.  yarn does not have this issue.

For a typescript compile in your test project you may have to add the script below to your package.json and rerun the npm install if you are getting duplicate types.

Add to devDependencies:

"@wdio/types": "^7.8.0",

Add to scripts:

    "postinstall": "rimraf -rm node_modules/wdio-html-nice-reporter/node_modules/@wdio/types"


## Configuration

### WDIO.config.ts

The following code shows the default wdio test runner configuration. Just add an HtmlReporter object as another reporter to the reporters array:

### A functioning wdio.config.ts is provided in the [/samples/wdio.config.ts](https://github.com/rpii/wdio-html-reporter/blob/master/samples/wdio.config.ts)

below are snippets from that file.

```typescript

// wdio.config.ts
import {ReportAggregator, HtmlReporter} from 'wdio-html-nice-reporter';
let reportAggregator: ReportAggregator;

const BaseConfig: WebdriverIO.Config = {
    
  reporters: ['spec',
        ["html-nice", {
            outputDir: './reports/html-reports/',
            filename: 'report.html',
            reportTitle: 'Test Report Title',
            linkScreenshots: true,
            //to show the report in a browser when done
            showInBrowser: true,
            collapseTests: false,
            //to turn on screenshots after every test
            useOnAfterCommandForScreenshot: false,

            //to initialize the logger
            LOG: log4j.getLogger("default")
        }
        ]
    ]
    
 
};
```
## Configuration Options:
  
### To generate a master report for all suites

webdriver.io will call the reporter for each test suite.  It does not aggregate the reports.  To do this, add the following event handlers to your wdio.config.js

```javascript
    onPrepare: function (config, capabilities) {

        reportAggregator = new ReportAggregator({
            outputDir: './reports/html-reports/',
            filename: 'master-report.html',
            reportTitle: 'Master Report',
            browserName : capabilities.browserName,
            collapseTests: true
          });
        reportAggregator.clean() ;
    },
    
    onComplete: function(exitCode, config, capabilities, results) {
        (async () => {
            await reportAggregator.createReport();
        })();
    },
    
``` 
### To use a logger for debugging

A new feature for developers is to add a log4js logger to see detailed debug output.  See the test/reporter.spec.js for configuration options.
If you dont want to use the logging, include in your project @log4js-node/log4js-api and you can quiet all debugging.
via:

    const log4js = require('@log4js-node/log4js-api');
    const logger = log4js.getLogger(this.options.debug ? 'debug' : 'default');
 

  
### To generate a pdf file from this report

Requires an additional plugin to keep the support lightweight for those that dont want it.
see [@rpii/wdio-html-reporter-pdf](https://www.npmjs.com/package/@rpii/wdio-html-reporter-pdf)


## Sample Output:

![Report Screenshot](https://github.com/rpii/wdio-html-reporter/blob/master/TestReport.png)

## browserName

This must be set manually.  Its not available at config time since the browser object doesnt exist until you start a session.

Add to browser config object:
```
let baseConfig = require('./base.config') ;
exports.config = Object.assign({}, baseConfig.config, {
    path: '/',
    capabilities: [
        {
            // Set maxInstances to 1 if screen recordings are enabled:
            // maxInstances: 1,
            browserName: 'chrome',
            'goog:chromeOptions': {
                args: [process.env.CHROME_ARGS]
            }
        }
    ],
    port: 9515, // default for ChromeDriver
    services: ['chromedriver'],
    chromeDriverLogs: './logs'
});
```

Add to onPrepare:
```
    onPrepare: function (config, capabilities) {

        reportAggregator = new ReportAggregator({
            outputDir: './reports/html-reports/',
            filename: 'master-report.html',
            reportTitle: 'Master Report',
            LOG: logger,
            showInBrowser: true,
            collapseTests: true,
            browserName : capabilities.browserName,
        });
        reportAggregator.clean() ;

        reportAggregator = reportAggregator;
    },
```
