---
id: getProperty
title: getProperty
custom_edit_url: https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/element/getProperty.ts
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The Get Element Property command will return the result of getting a property of an element.

##### Usage

```js
$(selector).getProperty(property)
```

##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>property</var></code> | <code>String</code> | name of the element property |

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

```js title="getProperty.js"
it('should demonstrate the getProperty command', async () => {
    var elem = await $('body')
    var tag = await elem.getProperty('tagName')
    console.log(tag) // outputs: "BODY"
})
```

</TabItem>
<TabItem value="sync">

```js title="getProperty.js"
it('should demonstrate the getProperty command', () => {
    var elem = $('body')
    var tag = elem.getProperty('tagName')
    console.log(tag) // outputs: "BODY"
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

