---
id: waitUntil
title: waitUntil
custom_edit_url: https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/element/waitUntil.ts
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This wait command is your universal weapon if you want to wait on something. It expects a condition
and waits until that condition is fulfilled with a truthy value. If you use the WDIO testrunner the
commands within the condition are getting executed synchronously like in your test.

:::info

As opposed to other element commands WebdriverIO will not wait for the element to exist to execute
this command.

:::

A common example is to wait until a certain element contains a certain text (see example).

##### Usage

```js
$(selector).waitUntil(condition, { timeout, timeoutMsg, interval })
```

##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>condition</var></code> |  | condition to wait on |
| <code><var>options</var></code><br /><span class="label labelWarning">optional</span> | <code>WaitUntilOptions</code> | command options |
| <code><var>options.timeout</var></code><br /><span class="label labelWarning">optional</span> | <code>Number</code> | timeout in ms (default: 5000) |
| <code><var>options.timeoutMsg</var></code><br /><span class="label labelWarning">optional</span> | <code>String</code> | error message to throw when waitUntil times out |
| <code><var>options.interval</var></code><br /><span class="label labelWarning">optional</span> | <code>Number</code> | interval between condition checks (default: 500) |

##### Examples
<Tabs
defaultValue="async"
className="runtime"
values={[
{label: 'Asynchronous Mode', value: 'async'},
{label: 'Synchronous Mode', value: 'sync'}
]
}>
<TabItem value="async">

```html title="example.html"
<div id="someText">I am some text</div>
<script>
  setTimeout(() => {
    await $('#someText').html('I am now different');
  }, 1000);
</script>

```

```js title="waitUntil.js"
it('should wait until text has changed', async () => {
    const elem = await $('#someText')
    await elem.waitUntil(async function () {
        return (await this.getText()) === 'I am now different'
    }, {
        timeout: 5000,
        timeoutMsg: 'expected text to be different after 5s'
    });
});
```

</TabItem>
<TabItem value="sync">

```html title="example.html"
<div id="someText">I am some text</div>
<script>
  setTimeout(() => {
    $('#someText').html('I am now different');
  }, 1000);
</script>

```

```js title="waitUntil.js"
it('should wait until text has changed', () => {
    const elem = $('#someText')
    elem.waitUntil(async function () {
        return (this.getText()) === 'I am now different'
    }, {
        timeout: 5000,
        timeoutMsg: 'expected text to be different after 5s'
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

