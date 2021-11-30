---
id: isFocused
title: isFocused
custom_edit_url: https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/element/isFocused.ts
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Return true or false if the selected DOM-element currently has focus. If the selector matches
multiple elements, it will return true if one of the elements has focus.

##### Usage

```js
$(selector).isFocused()
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
<input name="login" autofocus="" />
```

```js title="hasFocus.js"
it('should detect the focus of an element', async () => {
    await browser.url('/');
    const loginInput = await $('[name="login"]');
    console.log(await loginInput.isFocused()); // outputs: false

    await loginInput.click();
    console.log(await loginInput.isFocused()); // outputs: true
})
```

</TabItem>
<TabItem value="sync">

```html title="index.html"
<input name="login" autofocus="" />
```

```js title="hasFocus.js"
it('should detect the focus of an element', () => {
    browser.url('/');
    const loginInput = $('[name="login"]');
    console.log(loginInput.isFocused()); // outputs: false

    loginInput.click();
    console.log(loginInput.isFocused()); // outputs: true
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

