---
id: parentElement
title: parentElement
custom_edit_url: https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/element/parentElement.ts
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Returns the parent element of the selected DOM-element.

##### Usage

```js
$(selector).parentElement()
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
<div class="parent">
    <p>Sibling One</p>
    <p>Sibling Two</p>
    <p>Sibling Three</p>
</div>
```

```js title="parentElement.js"
it('should get class from parent element', async () => {
    const elem = await $$('p');
    const parent = await elem[2].parentElement()
    console.log(await parent.getAttribute('class')); // outputs: "parent"
});
```

</TabItem>
<TabItem value="sync">

```html title="index.html"
<div class="parent">
    <p>Sibling One</p>
    <p>Sibling Two</p>
    <p>Sibling Three</p>
</div>
```

```js title="parentElement.js"
it('should get class from parent element', () => {
    const elem = $$('p');
    const parent = elem[2].parentElement()
    console.log(parent.getAttribute('class')); // outputs: "parent"
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

