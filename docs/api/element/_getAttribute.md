---
id: getAttribute
title: getAttribute
custom_edit_url: https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/element/getAttribute.ts
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get an attribute from a DOM-element based on the attribute name.

##### Usage

```js
$(selector).getAttribute(attributeName)
```

##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>attributeName</var></code> | <code>String</code> | requested attribute |

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
<form action="/submit" method="post" class="loginForm">
    <input type="text" name="name" placeholder="username"></input>
    <input type="text" name="password" placeholder="password"></input>
    <input type="submit" name="submit" value="submit"></input>
</form>
```

```js title="getAttribute.js"
it('should demonstrate the getAttribute command', async () => {
    const form = await $('form')
    const attr = await form.getAttribute('method')
    console.log(attr) // outputs: "post"
})
```

</TabItem>
<TabItem value="sync">

```html title="index.html"
<form action="/submit" method="post" class="loginForm">
    <input type="text" name="name" placeholder="username"></input>
    <input type="text" name="password" placeholder="password"></input>
    <input type="submit" name="submit" value="submit"></input>
</form>
```

```js title="getAttribute.js"
it('should demonstrate the getAttribute command', () => {
    const form = $('form')
    const attr = form.getAttribute('method')
    console.log(attr) // outputs: "post"
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

