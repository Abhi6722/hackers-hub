---
id: newWindow
title: newWindow
custom_edit_url: https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/browser/newWindow.ts
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Open new window in browser. This command is the equivalent function to `window.open()`. This command does not
work in mobile environments.

__Note:__ When calling this command you automatically switch to the new window.

##### Usage

```js
browser.newWindow(url, { windowName, windowFeatures })
```

##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>url</var></code> | <code>String</code> | website URL to open |
| <code><var>options</var></code><br /><span class="label labelWarning">optional</span> | <code>NewWindowOptions</code> | newWindow command options |
| <code><var>options.windowName</var></code><br /><span class="label labelWarning">optional</span> | <code>String</code> | name of the new window |
| <code><var>options.windowFeatures</var></code><br /><span class="label labelWarning">optional</span> | <code>String</code> | features of opened window (e.g. size, position, scrollbars, etc.) |

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

```js title="newWindowSync.js"
it('should open a new tab', async () => {
    await browser.url('https://google.com')
    console.log(await browser.getTitle()) // outputs: "Google"

    await browser.newWindow('https://webdriver.io', {
        windowName: 'WebdriverIO window',
        windowFeature: 'width=420,height=230,resizable,scrollbars=yes,status=1',
    })
    console.log(await browser.getTitle()) // outputs: "WebdriverIO · Next-gen browser and mobile automation test framework for Node.js"

    const handles = await browser.getWindowHandles()
    await browser.switchToWindow(handles[1])
    await browser.closeWindow()
    await browser.switchToWindow(handles[0])
    console.log(await browser.getTitle()) // outputs: "Google"
});
```

</TabItem>
<TabItem value="sync">

```js title="newWindowSync.js"
it('should open a new tab', () => {
    browser.url('https://google.com')
    console.log(browser.getTitle()) // outputs: "Google"

    browser.newWindow('https://webdriver.io', {
        windowName: 'WebdriverIO window',
        windowFeature: 'width=420,height=230,resizable,scrollbars=yes,status=1',
    })
    console.log(browser.getTitle()) // outputs: "WebdriverIO · Next-gen browser and mobile automation test framework for Node.js"

    const handles = browser.getWindowHandles()
    browser.switchToWindow(handles[1])
    browser.closeWindow()
    browser.switchToWindow(handles[0])
    console.log(browser.getTitle()) // outputs: "Google"
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

