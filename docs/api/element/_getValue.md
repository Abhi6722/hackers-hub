---
id: getValue
title: getValue
custom_edit_url: https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/element/getValue.ts
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get the value of a `<textarea>`, `<select>` or text `<input>` found by given selector.
If multiple elements are found via the given selector, an array of values is returned instead.
For input with checkbox or radio type use isSelected.

##### Usage

```js
$(selector).getValue()
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
<input type="text" value="John Doe" id="username">
```

```js title="getValue.js"
it('should demonstrate the getValue command', async () => {
    const inputUser = await $('#username');
    const value = await inputUser.getValue();
    console.log(value); // outputs: "John Doe"
});
```

</TabItem>
<TabItem value="sync">

```html title="index.html"
<input type="text" value="John Doe" id="username">
```

```js title="getValue.js"
it('should demonstrate the getValue command', () => {
    const inputUser = $('#username');
    const value = inputUser.getValue();
    console.log(value); // outputs: "John Doe"
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

