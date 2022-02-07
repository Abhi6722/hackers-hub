---
id: waitForDisplayed
title: waitForDisplayed
custom_edit_url: https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/element/waitForDisplayed.ts
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Wait for an element for the provided amount of milliseconds to be displayed or not displayed.

:::info

As opposed to other element commands WebdriverIO will not wait for the element to exist to execute
this command.

:::

##### Usage

```js
$(selector).waitForDisplayed({ timeout, reverse, timeoutMsg, interval })
```

##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>options</var></code><br /><span class="label labelWarning">optional</span> | <code>WaitForOptions</code> | waitForEnabled options (optional) |
| <code><var>options.timeout</var></code><br /><span class="label labelWarning">optional</span> | <code>Number</code> | time in ms (default: 500) |
| <code><var>options.reverse</var></code><br /><span class="label labelWarning">optional</span> | <code>Boolean</code> | if true it waits for the opposite (default: false) |
| <code><var>options.timeoutMsg</var></code><br /><span class="label labelWarning">optional</span> | <code>String</code> | if exists it overrides the default error message |
| <code><var>options.interval</var></code><br /><span class="label labelWarning">optional</span> | <code>Number</code> | interval between checks (default: `waitforInterval`) |

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

```html title="index.html"
<div id="elem" style="visibility: hidden;">Hello World!</div>
<script type="text/javascript">
    setTimeout(() => {
        document.getElementById('elem').style.visibility = 'visible';
    }, 2000);
</script>
```

```js title="waitForDisplayedExample.js"
it('should detect when element is visible', async () => {
    const elem = await $('#elem')
    await elem.waitForDisplayed({ timeout: 3000 });
});
it('should detect when element is no longer visible', async () => {
    const elem = await $('#elem')
    await elem.waitForDisplayed({ reverse: true });
});
```

</TabItem>
<TabItem value="sync">

```html title="index.html"
<div id="elem" style="visibility: hidden;">Hello World!</div>
<script type="text/javascript">
    setTimeout(() => {
        document.getElementById('elem').style.visibility = 'visible';
    }, 2000);
</script>
```

```js title="waitForDisplayedExample.js"
it('should detect when element is visible', () => {
    const elem = $('#elem')
    elem.waitForDisplayed({ timeout: 3000 });
});
it('should detect when element is no longer visible', () => {
    const elem = $('#elem')
    elem.waitForDisplayed({ reverse: true });
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

