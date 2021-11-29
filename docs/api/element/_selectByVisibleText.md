---
id: selectByVisibleText
title: selectByVisibleText
custom_edit_url: https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/element/selectByVisibleText.ts
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Select option with displayed text matching the argument.

##### Usage

```js
$(selector).selectByVisibleText(text)
```

##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>text</var></code> | <code>String</code>, <code>Number</code> | text of option element to get selected |

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

```js title="selectByVisibleText.js"
it('demonstrate the selectByVisibleText command', async () => {
    const selectBox = await $('#selectbox');
    console.log(await selectBox.getText('option:checked')); // returns "uno"
    await selectBox.selectByVisibleText('cuatro');
    console.log(await selectBox.getText('option:checked')); // returns "cuatro"
})
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

```js title="selectByVisibleText.js"
it('demonstrate the selectByVisibleText command', () => {
    const selectBox = $('#selectbox');
    console.log(selectBox.getText('option:checked')); // returns "uno"
    selectBox.selectByVisibleText('cuatro');
    console.log(selectBox.getText('option:checked')); // returns "cuatro"
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

