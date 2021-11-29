---
id: wdio-slack-service
title: Slack Service
custom_edit_url: https://github.com/carmenmitru/wdio-slack-service/edit/master//README.md
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> wdio-slack-service is a 3rd party package, for more information please see [GitHub](https://github.com/carmenmitru/wdio-slack-service) | [npm](https://www.npmjs.com/package/wdio-slack-service)
Webdriverio library to send test results as a slack notification/message to channels

## Installation

The easiest way is to keep `wdio-slack-service` as a devDependency in your `package.json`.

```json
{
  "devDependencies": {
    "wdio-slack-service": "2.0.8"
  }
}
```

You can simple do it by:

```bash
npm install wdio-slack-service --save-dev
```

Instructions on how to install `WebdriverIO` can be found [here.](https://webdriver.io/docs/gettingstarted.html)

## Configuration

At first, import the service to wdio config file `wdio.conf.js`

```js
// wdio.conf.js
const slack = require('wdio-slack-service');
```

In order to use the service you need to have slack webhook url to send the notification and you need to add `slack` to your `services` array

Example:

```js
// wdio.conf.js
export.config = {
    // ...
    services: [
        [slack, {
            webHookUrl: "<SLACK_WEBHOOK_URL>", // Used to post notification to a particular channel
            notifyOnlyOnFailure: true, // Send notification only on test failure
            messageTitle: "<NOTIFICATION_TITLE>" // Name of the notification
        }]
]
```
## Features

- Send notification irrespective of test results
- Send notification only on test failure
- Support for `mocha`, `jasmine` and `cucumber`
- Retry/Rerun tests will be logged with addional info
- Test duration info
- Error details
- Cucumber scenario/step reporting
- Browser and Version info

## How it works
For `mocha`/`jasmine`, notification will be sent on spec level and for `cucumber`, it will be on feature level. Let's say, if you have 10 spec/feature files, you will receive 10 notifications as it is triggered in `after` hook

## Options

To send a notification, you should have slack webhook url. To know how to create slack webhook URL, see this [page](https://api.slack.com/messaging/webhooks)

### webHookUrl

This url is used to identity/authenticate the post message and sends it to a slack channel

Type: `String` <br/>
Optional: `NO` <br/>
Default: `NA`

### notifyOnlyOnFailure

If you want to receive slack notifications only on test failure, then set this option to `true`. Otherwise, it sends notification for all test executions irrespective of pass/fail

Type: `Boolean` <br/>
Optional: `YES` <br/>
Default: `false`

### messageTitle

Title of the notification

Type: `String` <br/>
Optional: `YES` <br/>
Default: `Webdriverio Slack Reporter`

## Screenshots

### Cucumber Pass/Fail

![Cucumber Pass/fail](https://github.com/carmenmitru/wdio-slack-service/blob/master/assets/Cucumber.PNG)

### Cucumber Retry

![Cucumber Retry](https://github.com/carmenmitru/wdio-slack-service/blob/master/assets/Cucumberretry.PNG)

### All Pass

![All Pass](https://github.com/carmenmitru/wdio-slack-service/blob/master/assets/allpass.PNG)

### Fail Pass

![Fail Pass](https://github.com/carmenmitru/wdio-slack-service/blob/master/assets/failpass.PNG)

### Retry Failed

![Retry Failed](https://github.com/carmenmitru/wdio-slack-service/blob/master/assets/retryfail.PNG)

### Retry Passed

![Retry Passed](https://github.com/carmenmitru/wdio-slack-service/blob/master/assets/retrypassed.PNG)

---

For more information on WebdriverIO see the [homepage](https://webdriver.io).
