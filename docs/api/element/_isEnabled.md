---
id: isEnabled
title: isEnabled
custom_edit_url: https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/element/isEnabled.ts
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Return true or false if the selected DOM-element is enabled.

##### Usage

```js
$(selector).isEnabled()
```

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

```html title="index.html"
<input type="text" name="inputField" class="input1">
<input type="text" name="inputField" class="input2" disabled>
<input type="text" name="inputField" class="input3" disabled="disabled">

```

```js title="isEnabled.js"
it('should detect if an element is enabled', async () => {
    let elem = await $('.input1')
    let isEnabled = await elem.isEnabled();
    console.log(isEnabled); // outputs: true

    elem = await $('.input2')
    isEnabled = await elem.isEnabled();
    console.log(isEnabled2); // outputs: false

    elem = await $('.input3')
    isEnabled = await elem.isEnabled();
    console.log(isEnabled3); // outputs: false
});
```

</TabItem>
<TabItem value="sync">

```html title="index.html"
<input type="text" name="inputField" class="input1">
<input type="text" name="inputField" class="input2" disabled>
<input type="text" name="inputField" class="input3" disabled="disabled">

```

```js title="isEnabled.js"
it('should detect if an element is enabled', () => {
    let elem = $('.input1')
    let isEnabled = elem.isEnabled();
    console.log(isEnabled); // outputs: true

    elem = $('.input2')
    isEnabled = elem.isEnabled();
    console.log(isEnabled2); // outputs: false

    elem = $('.input3')
    isEnabled = elem.isEnabled();
    console.log(isEnabled3); // outputs: false
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

