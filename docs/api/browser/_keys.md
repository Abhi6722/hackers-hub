---
id: keys
title: keys
custom_edit_url: https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/browser/keys.ts
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Send a sequence of key strokes to the active element. You can also use characters like
"Left arrow" or "Back space". WebdriverIO will take care of translating them into unicode
characters. You’ll find all supported characters [here](https://w3c.github.io/webdriver/webdriver-spec.html#keyboard-actions).
To do that, the value has to correspond to a key from the table.

Modifier like Ctrl, Shift, Alt and Meta will stay pressed so you need to trigger them again to release them.
Modifiying a click however requires you to use the WebDriver Actions API through the [performActions](https://webdriver.io/docs/api/webdriver#performactions) method.

##### Usage

```js
browser.keys(value)
```

##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>value</var></code> | <code>String</code>, <code>Array.&lt;String&gt;</code> | The sequence of keys to type. An array or string must be provided. |

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

```js title="keys.js"
it('copies text out of active element', async () => {
    // copies text from an input element
    const input = await $('#username')
    await input.setValue('anonymous')

    await browser.keys(['Meta', 'a'])
    await browser.keys(['Meta', 'c'])
});
```

</TabItem>
<TabItem value="sync">

```js title="keys.js"
it('copies text out of active element', () => {
    // copies text from an input element
    const input = $('#username')
    input.setValue('anonymous')

    browser.keys(['Meta', 'a'])
    browser.keys(['Meta', 'c'])
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

