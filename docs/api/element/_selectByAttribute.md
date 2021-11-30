---
id: selectByAttribute
title: selectByAttribute
custom_edit_url: https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/element/selectByAttribute.ts
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Select option with a specific value.

##### Usage

```js
$(selector).selectByAttribute(attribute, value)
```

##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>attribute</var></code> | <code>String</code> | attribute of option element to get selected |
| <code><var>value</var></code> | <code>String</code>, <code>Number</code> | value of option element to get selected |

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
    <option name="someName5" value="someValue5">seis</option>
</select>
```

```js title="selectByAttribute.js"
it('Should demonstrate the selectByAttribute command', async () => {
    const selectBox = await $('#selectbox');
    const value = await selectBox.getValue();
    console.log(value); // returns "someValue0"

    await selectBox.selectByAttribute('value', 'someValue3');
    console.log(await selectBox.getValue()); // returns "someValue3"

    await selectBox.selectByAttribute('name', 'someName5');
    console.log(await selectBox.getValue()); // returns "someValue5"
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
    <option name="someName5" value="someValue5">seis</option>
</select>
```

```js title="selectByAttribute.js"
it('Should demonstrate the selectByAttribute command', () => {
    const selectBox = $('#selectbox');
    const value = selectBox.getValue();
    console.log(value); // returns "someValue0"

    selectBox.selectByAttribute('value', 'someValue3');
    console.log(selectBox.getValue()); // returns "someValue3"

    selectBox.selectByAttribute('name', 'someName5');
    console.log(selectBox.getValue()); // returns "someValue5"
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

