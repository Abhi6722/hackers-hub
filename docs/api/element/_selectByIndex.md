---
id: selectByIndex
title: selectByIndex
custom_edit_url: https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/element/selectByIndex.ts
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Select option with a specific index.

##### Usage

```js
$(selector).selectByIndex(index)
```

##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>index</var></code> | <code>Number</code> | option index |

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

```html title="example.html"
<select id="selectbox">
    <option value="someValue0">uno</option>
    <option value="someValue1">dos</option>
    <option value="someValue2">tres</option>
    <option value="someValue3">cuatro</option>
    <option value="someValue4">cinco</option>
    <option value="someValue5">seis</option>
</select>
```

```js title="selectByIndex.js"
it('Should demonstrate the selectByIndex command', async () => {
    const selectBox = await $('#selectbox');
    console.log(await selectBox.getValue()); // returns "someValue0"
    await selectBox.selectByIndex(4);
    console.log(await selectBox.getValue()); // returns "someValue4"
});
```

</TabItem>
<TabItem value="sync">

```html title="example.html"
<select id="selectbox">
    <option value="someValue0">uno</option>
    <option value="someValue1">dos</option>
    <option value="someValue2">tres</option>
    <option value="someValue3">cuatro</option>
    <option value="someValue4">cinco</option>
    <option value="someValue5">seis</option>
</select>
```

```js title="selectByIndex.js"
it('Should demonstrate the selectByIndex command', () => {
    const selectBox = $('#selectbox');
    console.log(selectBox.getValue()); // returns "someValue0"
    selectBox.selectByIndex(4);
    console.log(selectBox.getValue()); // returns "someValue4"
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

