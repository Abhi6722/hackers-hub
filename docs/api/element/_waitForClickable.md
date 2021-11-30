---
id: waitForClickable
title: waitForClickable
custom_edit_url: https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/element/waitForClickable.ts
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Wait for an element for the provided amount of milliseconds to be clickable or not clickable.

:::info

As opposed to other element commands WebdriverIO will not wait for the element to exist to execute
this command.

:::

##### Usage

```js
$(selector).waitForClickable({ timeout, reverse, timeoutMsg, interval })
```

##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>options</var></code><br /><span class="label labelWarning">optional</span> | <code>WaitForOptions</code> | waitForEnabled options (optional) |
| <code><var>options.timeout</var></code><br /><span class="label labelWarning">optional</span> | <code>Number</code> | time in ms (default: 500) |
| <code><var>options.reverse</var></code><br /><span class="label labelWarning">optional</span> | <code>Boolean</code> | if true it waits for the opposite (default: false) |
| <code><var>options.timeoutMsg</var></code><br /><span class="label labelWarning">optional</span> | <code>String</code> | if exists it overrides the default error message |
| <code><var>options.interval</var></code><br /><span class="label labelWarning">optional</span> | <code>Number</code> | interval between checks (default: `waitforInterval`) |

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

```js title="waitForClickable.js"
it('should detect when element is clickable', async () => {
    const elem = await $('#elem')
    await elem.waitForClickable({ timeout: 3000 });
});
it('should detect when element is no longer clickable', async () => {
    const elem = await $('#elem')
    await elem.waitForClickable({ reverse: true });
});
```

</TabItem>
<TabItem value="sync">

```js title="waitForClickable.js"
it('should detect when element is clickable', () => {
    const elem = $('#elem')
    elem.waitForClickable({ timeout: 3000 });
});
it('should detect when element is no longer clickable', () => {
    const elem = $('#elem')
    elem.waitForClickable({ reverse: true });
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

