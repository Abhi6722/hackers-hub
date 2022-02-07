---
id: waitForExist
title: waitForExist
custom_edit_url: https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/element/waitForExist.ts
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Wait for an element for the provided amount of
milliseconds to be present within the DOM. Returns true if the selector
matches at least one element that exists in the DOM, otherwise throws an
error. If the reverse flag is true, the command will instead return true
if the selector does not match any elements.

:::info

As opposed to other element commands WebdriverIO will not wait for the
element to exist to execute this command.

:::

##### Usage

```js
$(selector).waitForExist({ timeout, reverse, timeoutMsg, interval })
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

```js title="waitForExistSyncExample.js"
it('should display a notification message after successful form submit', async () => {
    const form = await $('form');
    const notification = await $('.notification');
    await form.$(".send").click();
    await notification.waitForExist({ timeout: 5000 });
    expect(await notification.getText()).to.be.equal('Data transmitted successfully!')
});
it('should remove a message after successful form submit', async () => {
    const form = await $('form');
    const message = await $('.message');
    await form.$(".send").click();
    await message.waitForExist({ reverse: true });
});
```

</TabItem>
<TabItem value="sync">

```js title="waitForExistSyncExample.js"
it('should display a notification message after successful form submit', () => {
    const form = $('form');
    const notification = $('.notification');
    form.$(".send").click();
    notification.waitForExist({ timeout: 5000 });
    expect(notification.getText()).to.be.equal('Data transmitted successfully!')
});
it('should remove a message after successful form submit', () => {
    const form = $('form');
    const message = $('.message');
    form.$(".send").click();
    message.waitForExist({ reverse: true });
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

