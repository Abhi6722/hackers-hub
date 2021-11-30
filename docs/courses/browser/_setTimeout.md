---
id: setTimeout
title: setTimeout
custom_edit_url: https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/browser/setTimeout.ts
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Sets the timeouts associated with the current session, timeout durations control such
behaviour as timeouts on script injection, document navigation, and element retrieval.
For more information and examples, see [timeouts guide](https://webdriver.io/docs/timeouts#selenium-timeouts).

##### Usage

```js
browser.setTimeout({ implicit, pageLoad, script })
```

##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>timeouts</var></code> | <code>Timeouts</code> | Object containing session timeout values |
| <code><var>timeouts.implicit</var></code><br /><span class="label labelWarning">optional</span> | <code>Number</code> | Time in milliseconds to retry the element location strategy when finding an element. |
| <code><var>timeouts.pageLoad</var></code><br /><span class="label labelWarning">optional</span> | <code>Number</code> | Time in milliseconds to wait for the document to finish loading. |
| <code><var>timeouts.script</var></code><br /><span class="label labelWarning">optional</span> | <code>Number</code> | Scripts injected with [`execute`](https://webdriver.io/docs/api/browser/execute) or [`executeAsync`](https://webdriver.io/docs/api/browser/executeAsync) will run until they hit the script timeout duration, which is also given in milliseconds. |

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

```js title="setTimeout.js"
it('should change timeout duration for session with long code duration', async () => {
    await browser.setTimeout({
        'pageLoad': 10000,
        'script': 60000
    });
    // Execute code which takes a long time
    await browser.executeAsync((done) => {
        console.log('Wake me up before you go!');
        setTimeout(done, 59000);
    });
});
```

</TabItem>
<TabItem value="sync">

```js title="setTimeout.js"
it('should change timeout duration for session with long code duration', () => {
    browser.setTimeout({
        'pageLoad': 10000,
        'script': 60000
    });
    // Execute code which takes a long time
    browser.executeAsync((done) => {
        console.log('Wake me up before you go!');
        setTimeout(done, 59000);
    });
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

