---
id: wdio-ywinappdriver-service
title: ywinappdriver Service
custom_edit_url: https://github.com/licanhua/wdio-ywinappdriver-service/edit/main//README.md
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> wdio-ywinappdriver-service is a 3rd party package, for more information please see [GitHub](https://github.com/licanhua/wdio-ywinappdriver-service) | [npm](https://www.npmjs.com/package/wdio-ywinappdriver-service)

This service helps you to run the ywinappdriver server seamlessly when running tests with the [WDIO testrunner](https://webdriver.io/guide/testrunner/gettingstarted.html). It starts the [ywinappdriver](https://github.com/licanhua/YWinAppDriver) in a child process.

## Installation

```bash
npm install wdio-ywinappdriver-service --save-dev
```

Instructions on how to install `WebdriverIO` can be found [here.](https://webdriver.io/docs/gettingstarted.html)

## Configuration

In order to use the service you need to add `ywinappdriver` to your service array:

```js
// wdio.conf.js
export.config = {
    // ...
    services: ['ywinappdriver'],
    // ...
};
```

## Options

The following options can be added to the wdio.conf.js file. To define options for the service you need to add the service to the `services` list in the following way:

```js
// wdio.conf.js
export.config = {
    // ...
    services: [
        ['ywinappdriver', {
            // ywinappdriver service options here
            // ...
        }]
    ],
    // ...
};
```

### logPath

Path where all logs from the ywinappdriver server should be stored.

Type: `String`

Example:

```js
export.config = {
    // ...
    services: [
        ['ywinappdriver', {
            logPath : './'
        }]
    ],
    // ...
}
```

### command

To use your own installation of winappdriver, e.g. globally installed, specify the command which should be started.

Type: `String`

Example:

```js
export.config = {
    // ...
    services: [
        ['ywinappdriver', {
            command : 'c:\\xx\\ywinappdriver.exe'
        }]
    ],
    // ...
}
```

### args

List of arguments passed directly to `ywinappdriver`.

See [the documentation](https://github.com/licanhua/ywinappdriver) for possible arguments.

Type: `Array`

Default: `[]`

Example:

```js
export.config = {
    // ...
    services: [
        ['ywinappdriver', {
            args: ['--urls' 'http://127.0.0.1:4723' '--basepath' '/wd/hub']
        }]
    ],
    // ...
}
```
