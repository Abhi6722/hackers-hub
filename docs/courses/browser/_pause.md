---
id: pause
title: pause
custom_edit_url: https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/browser/pause.ts
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Pauses execution for a specific amount of time. It is recommended to not use this command to wait for an
element to show up. In order to avoid flaky test results it is better to use commands like
[`waitForExist`](/docs/api/element/waitForExist) or other waitFor* commands.

##### Usage

```js
browser.pause(milliseconds)
```

##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>milliseconds</var></code> | <code>Number</code> | time in ms |

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

```js title="pause.js"
it('should pause the execution', async () => {
    const starttime = new Date().getTime()
    await browser.pause(3000)
    const endtime = new Date().getTime()
    console.log(endtime - starttime) // outputs: 3000
});
```

</TabItem>
<TabItem value="sync">

```js title="pause.js"
it('should pause the execution', () => {
    const starttime = new Date().getTime()
    browser.pause(3000)
    const endtime = new Date().getTime()
    console.log(endtime - starttime) // outputs: 3000
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

