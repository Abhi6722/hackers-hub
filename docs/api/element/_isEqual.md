---
id: isEqual
title: isEqual
custom_edit_url: https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/element/isEqual.ts
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Return true if the selected element matches with the provided one.

##### Usage

```js
$(selector).isEqual(el)
```

##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>el</var></code> | <code>Element</code> | element to compare with |

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

```js title="isEqual.js"
it('should detect if an element is clickable', async () => {
    const el = await $('#el')
    const sameEl = await $('#el')
    const anotherEl = await $('#anotherEl')

    el.isEqual(sameEl) // outputs: true

    el.isEqual(anotherEl) // outputs: false
});
```

</TabItem>
<TabItem value="sync">

```js title="isEqual.js"
it('should detect if an element is clickable', () => {
    const el = $('#el')
    const sameEl = $('#el')
    const anotherEl = $('#anotherEl')

    el.isEqual(sameEl) // outputs: true

    el.isEqual(anotherEl) // outputs: false
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

