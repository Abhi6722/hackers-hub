---
id: switchWindow
title: switchWindow
custom_edit_url: https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/browser/switchWindow.ts
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Switch focus to a particular tab / window.

##### Usage

```js
browser.switchWindow(matcher)
```

##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>matcher</var></code> | <code>String</code>, <code>RegExp</code> | String or regular expression that matches the title and url of the page or window name |

##### Example
<Tabs
defaultValue="async"
className="runtime"
values={[
{label: 'Asynchronous Mode', value: 'async'},
{label: 'Synchronous Mode', value: 'sync'}
]
}>
<TabItem value="async">

```js title="switchWindow.js"
it('should switch to another window', async () => {
    // open url
    await browser.url('https://google.com')

    // create new window
    await browser.newWindow('https://webdriver.io')

    // switch back via url match
    await browser.switchWindow('google.com')

    // switch back via title match
    await browser.switchWindow('Next-gen browser and mobile automation test framework for Node.js')
});
```

</TabItem>
<TabItem value="sync">

```js title="switchWindow.js"
it('should switch to another window', () => {
    // open url
    browser.url('https://google.com')

    // create new window
    browser.newWindow('https://webdriver.io')

    // switch back via url match
    browser.switchWindow('google.com')

    // switch back via title match
    browser.switchWindow('Next-gen browser and mobile automation test framework for Node.js')
});
```

:::caution
Synchronous Mode will depcrecated with Node.js v16. With an update to the
underlying Chromium version it became technically impossible to provide the
same synchronous behavior. We recommend to start transition to asynchronous
command execution. For more information, see our <a href="https://github.com/webdriverio/webdriverio/discussions/6702">RFC</a>.
:::
</TabItem>
</Tabs>

