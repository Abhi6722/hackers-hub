---
id: getSize
title: getSize
custom_edit_url: https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/element/getSize.ts
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get the width and height for an DOM-element.

##### Usage

```js
$(selector).getSize(prop)
```

##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>prop</var></code><br /><span class="label labelWarning">optional</span> | <code>String</code> | size to receive [optional] ("width" or "height") |

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

```js title="getSize.js"
it('should demonstrate the getSize command', async () => {
    await browser.url('http://github.com')
    const logo = await $('.octicon-mark-github')

    const size = await logo.getSize()
    console.log(size) // outputs: { width: 32, height: 32 }

    const width = await logo.getSize('width')
    console.log(width) // outputs: 32

    const height = await logo.getSize('height')
    console.log(height) // outputs: 32
})
```

</TabItem>
<TabItem value="sync">

```js title="getSize.js"
it('should demonstrate the getSize command', () => {
    browser.url('http://github.com')
    const logo = $('.octicon-mark-github')

    const size = logo.getSize()
    console.log(size) // outputs: { width: 32, height: 32 }

    const width = logo.getSize('width')
    console.log(width) // outputs: 32

    const height = logo.getSize('height')
    console.log(height) // outputs: 32
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

