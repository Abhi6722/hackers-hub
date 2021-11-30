---
id: clearValue
title: clearValue
custom_edit_url: https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/element/clearValue.ts
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Clear a `<textarea>` or text `<input>` element’s value. Make sure you can interact with the
element before using this command. You can't clear an input element that is disabled or in
readonly mode.

##### Usage

```js
$(selector).clearValue()
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

```js title="clearValue.js"
it('should demonstrate the clearValue command', async () => {
    const elem = await $('.input')
    await elem.setValue('test123')

    const value = await elem.getValue()
    console.log(value) // returns 'test123'

    await elem.clearValue()
    value = await elem.getValue()
    assert(value === ''); // true
})
```

</TabItem>
<TabItem value="sync">

```js title="clearValue.js"
it('should demonstrate the clearValue command', () => {
    const elem = $('.input')
    elem.setValue('test123')

    const value = elem.getValue()
    console.log(value) // returns 'test123'

    elem.clearValue()
    value = elem.getValue()
    assert(value === ''); // true
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

