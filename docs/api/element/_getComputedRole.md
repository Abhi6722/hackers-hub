---
id: getComputedRole
title: getComputedRole
custom_edit_url: https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/element/getComputedRole.ts
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get the computed WAI-ARIA label of an element.

##### Usage

```js
$(selector).getComputedRole()
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

```js title="getComputedRole.js"
it('should demonstrate the getComputedRole command', async () => {
    await browser.url('https://www.google.com/ncr')
    const elem = await $('*[name="q"]');
    console.log(await elem.getComputedRole()); // outputs: "combobox"
})
```

</TabItem>
<TabItem value="sync">

```js title="getComputedRole.js"
it('should demonstrate the getComputedRole command', () => {
    browser.url('https://www.google.com/ncr')
    const elem = $('*[name="q"]');
    console.log(elem.getComputedRole()); // outputs: "combobox"
})
```

:::caution
Synchronous Mode will depcrecated with Node.js v16. With an update to the
underlying Chromium version it became technically impossible to provide the
same synchronous behavior. We recommend to start transition to asynchronous
command execution. For more information, see our <a href="https://github.com/webdriverio/webdriverio/discussions/6702">RFC</a>.
:::
</TabItem>
</Tabs>

