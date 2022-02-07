---
id: getLocation
title: getLocation
custom_edit_url: https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/element/getLocation.ts
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Determine an element’s location on the page. The point (0, 0) refers to
the upper-left corner of the page.

##### Usage

```js
$(selector).getLocation(prop)
```

##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>prop</var></code> | <code>String</code> | can be "x" or "y" to get a result value directly for easier assertions |

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

```js title="getLocation.js"
it('should demonstrate the getLocation function', async () => {
    await browser.url('http://github.com');
    const logo = await $('.octicon-mark-github')
    const location = await logo.getLocation();
    console.log(location); // outputs: { x: 150, y: 20 }

    const xLocation = await logo.getLocation('x')
    console.log(xLocation); // outputs: 150

    const yLocation = await logo.getLocation('y')
    console.log(yLocation); // outputs: 20
});
```

</TabItem>
<TabItem value="sync">

```js title="getLocation.js"
it('should demonstrate the getLocation function', () => {
    browser.url('http://github.com');
    const logo = $('.octicon-mark-github')
    const location = logo.getLocation();
    console.log(location); // outputs: { x: 150, y: 20 }

    const xLocation = logo.getLocation('x')
    console.log(xLocation); // outputs: 150

    const yLocation = logo.getLocation('y')
    console.log(yLocation); // outputs: 20
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

