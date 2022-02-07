---
id: isClickable
title: isClickable
custom_edit_url: https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/element/isClickable.ts
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Return true if the selected DOM-element:

- exists
- is visible
- is within viewport (if not try scroll to it)
- its center is not overlapped with another element
- is not disabled

otherwise return false.

:::info

Please note that `isClickable` works only in web browser and in mobile webviews,
it doesn't work in mobile app native context. Also, As opposed to other element
commands WebdriverIO will not wait for the element to exist to execute this command.

:::

##### Usage

```js
$(selector).isClickable()
```

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

```js title="isClickable.js"
it('should detect if an element is clickable', async () => {
    const el = await $('#el')
    let clickable = await el.isClickable();
    console.log(clickable); // outputs: true or false

    // wait for element to be clickable
    await browser.waitUntil(() => el.isClickable())
});
```

</TabItem>
<TabItem value="sync">

```js title="isClickable.js"
it('should detect if an element is clickable', () => {
    const el = $('#el')
    let clickable = el.isClickable();
    console.log(clickable); // outputs: true or false

    // wait for element to be clickable
    browser.waitUntil(() => el.isClickable())
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

