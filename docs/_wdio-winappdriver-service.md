---
id: wdio-winappdriver-service
title: winappdriver Service
custom_edit_url: https://github.com/licanhua/wdio-winappdriver-service/edit/main//README.md
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> wdio-winappdriver-service is a 3rd party package, for more information please see [GitHub](https://github.com/licanhua/wdio-winappdriver-service) | [npm](https://www.npmjs.com/package/wdio-winappdriver-service)

This service helps you to run the WinAppDriver server seamlessly when running tests with the [WDIO testrunner](https://webdriver.io/guide/testrunner/gettingstarted.html). It starts the [WinAppDriver](https://github.com/Microsoft/WinAppDriver) in a child process.

## Installation

```bash
npm install wdio-winappdriver-service --save-dev
```

Instructions on how to install `WebdriverIO` can be found [here.](https://webdriver.io/docs/gettingstarted.html)

## Configuration

In order to use the service you need to add `winappdriver` to your service array:

```js
// wdio.conf.js
export.config = {
    // ...
    services: ['winappdriver'],
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
        ['winappdriver', {
            // WinAppDriver service options here
            // ...
        }]
    ],
    // ...
};
```

### logPath

Path where all logs from the winappdriver server should be stored.

Type: `String`

Example:

```js
export.config = {
    // ...
    services: [
        ['winappdriver', {
            logPath : './'
        }]
    ],
    // ...
}
```

### command

To use your own installation of WinAppDriver, e.g. globally installed, specify the command which should be started.

Type: `String`

Example:

```js
export.config = {
    // ...
    services: [
        ['winappdriver', {
            command : 'c:\\Program Files (x86)\\Windows Application Driver\\WinAppDriver.exe'
        }]
    ],
    // ...
}
```

### args

List of arguments passed directly to `WinAppDriver`.

See [the documentation](https://github.com/Microsoft/WinAppDriver) for possible arguments.

Type: `Array`

Default: `[]`

Example:

```js
export.config = {
    // ...
    services: [
        ['winappdriver', {
            args: ['10.0.0.10', '4723/wd/hub']
        }]
    ],
    // ...
}
```
