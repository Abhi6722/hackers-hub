---
id: wdio-ms-teams-service
title: Microsoft Teams Service
custom_edit_url: https://github.com/marcelblijleven/wdio-ms-teams-service/edit/master//README.md
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> wdio-ms-teams-service is a 3rd party package, for more information please see [GitHub](https://github.com/marcelblijleven/wdio-ms-teams-service) | [npm](https://www.npmjs.com/package/wdio-ms-teams-service)

This service will report your test run results to a Microsoft Teams channel using a webhook.

(note: this has only been tested with WebdriverIO v7)

## Setup

Install `wdio-ms-teams-service` as a devDependency

```
npm install wdio-ms-teams-service --save-dev
```

Next, configure your config file

```js
// wdio.conf.js
export.config = {
    // ...
    services: [["ms-teams", {
        webhookURL: "https://your-webhook.url.com/c0ffee",
        failingTestsOnly: true,
    }]]
    // ...
};
```

## Options

### webhookURL

The URL of the Microsoft Teams webhook

Example: `https://your-webhook.url.com/c0ffee`

Type: `string`

Required: `true`

### failingTestsOnly

Decide whether to report on failures only. If a test has no failures, it will not be reported.

Type: `boolean`

Default: `false`

Required: `false`

### message

Provide a custom message to show at the top of each webhook message, default: _An automated test run just completed_

Type: `string` ([A subset of markdown is supported](https://docs.microsoft.com/en-us/adaptive-cards/authoring-cards/text-features))

Default: `An automated test run just completed`

Required: `false`

### timeout

Provide a timeout for the webhook request.

Type `number`

Default: `10000`

Required: `false`

## Author

Marcel Blijleven <marcelblijleven@gmail.com>
