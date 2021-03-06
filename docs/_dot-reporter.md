---
id: dot-reporter
title: Dot Reporter
custom_edit_url: https://github.com/webdriverio/webdriverio/edit/main/packages/wdio-dot-reporter/README.md
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> A WebdriverIO plugin to report in dot style.

![Dot Reporter](/img/dot.png "Dot Reporter")

## Installation

The easiest way is to keep `@wdio/dot-reporter` as a devDependency in your `package.json`, via:

```sh
npm install @wdio/dot-reporter --save-dev
```

Instructions on how to install `WebdriverIO` can be found [here](/docs/gettingstarted).

## Configuration

Following code shows the default wdio test runner configuration. Just add `'dot'` as reporter
to the array.

```js
// wdio.conf.js
module.exports = {
  // ...
  reporters: ['dot'],
  // ...
};
```

----

For more information on WebdriverIO see the [homepage](https://webdriver.io).
