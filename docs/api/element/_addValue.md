---
id: addValue
title: addValue
custom_edit_url: https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/element/addValue.ts
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Add a value to an object found by given selector. You can also use unicode
characters like Left arrow or Back space. WebdriverIO will take care of
translating them into unicode characters. You’ll find all supported characters
[here](https://w3c.github.io/webdriver/webdriver-spec.html#keyboard-actions).
To do that, the value has to correspond to a key from the table. It can be disabled
by setting `translateToUnicode` optional parameter to false.

##### Usage

```js
$(selector).addValue(value, { translateToUnicode })
```

##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>value</var></code> | <code>string</code>, <code>number</code>, <code>Array.&lt;string, number&gt;</code> | value to be added |
| <code><var>options</var></code><br /><span class="label labelWarning">optional</span> | <code>CommandOptions</code> | command options (optional) |
| <code><var>options.translateToUnicode</var></code> | <code>boolean</code> | enable translation string to unicode value automatically |

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

```js title="addValue.js"
it('should demonstrate the addValue command', async () => {
    let input = await $('.input')
    await input.addValue('test')
    await input.addValue(123)

    value = await input.getValue()
    assert(value === 'test123') // true
})
```

</TabItem>
<TabItem value="sync">

```js title="addValue.js"
it('should demonstrate the addValue command', () => {
    let input = $('.input')
    input.addValue('test')
    input.addValue(123)

    value = input.getValue()
    assert(value === 'test123') // true
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

