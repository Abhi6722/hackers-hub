---
id: dragAndDrop
title: dragAndDrop
custom_edit_url: https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/element/dragAndDrop.ts
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Drag an item to a destination element or position.

:::info

The functionality of this command highly depends on the way drag and drop is
implemented in your app. If you experience issues please post your example
in [#4134](https://github.com/webdriverio/webdriverio/issues/4134).

:::

##### Usage

```js
$(selector).dragAndDrop(target, { duration })
```

##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>target</var></code> | <code>Element</code>, <code>DragAndDropCoordinate</code> | destination element or object with x and y properties |
| <code><var>options</var></code><br /><span class="label labelWarning">optional</span> | <code>DragAndDropOptions</code> | dragAndDrop command options |
| <code><var>options.duration</var></code><br /><span class="label labelWarning">optional</span> | <code>Number</code> | how long the drag should take place |

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

```js title="example.test.js"
it('should demonstrate the dragAndDrop command', async () => {
    const elem = await $('#someElem')
    const target = await $('#someTarget')

    // drag and drop to other element
    await elem.dragAndDrop(target)

    // drag and drop relative from current position
    await elem.dragAndDrop({ x: 100, y: 200 })
})
```

</TabItem>
<TabItem value="sync">

```js title="example.test.js"
it('should demonstrate the dragAndDrop command', () => {
    const elem = $('#someElem')
    const target = $('#someTarget')

    // drag and drop to other element
    elem.dragAndDrop(target)

    // drag and drop relative from current position
    elem.dragAndDrop({ x: 100, y: 200 })
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

