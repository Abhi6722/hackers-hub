---
id: getCookies
title: getCookies
custom_edit_url: https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/browser/getCookies.ts
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Retrieve a [cookie](https://w3c.github.io/webdriver/webdriver-spec.html#cookies)
visible to the current page. You can query a specific cookie by providing the cookie name or
retrieve all.

##### Usage

```js
browser.getCookies(names)
```

##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>names</var></code><br /><span class="label labelWarning">optional</span> | <code>Array.&lt;String&gt;</code>, <code>String</code> | names of requested cookies (if omitted, all cookies will be returned) |

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

```js title="getCookies.js"
it('should return a cookie for me', async () => {
    await browser.setCookies([
        {name: 'test', value: '123'},
        {name: 'test2', value: '456'}
    ])
    const testCookie = await browser.getCookies(['test'])
    console.log(testCookie); // outputs: [{ name: 'test', value: '123' }]

    const allCookies = await browser.getCookies()
    console.log(allCookies);
    // outputs:
    // [
    //    { name: 'test', value: '123' },
    //    { name: 'test2', value: '456' }
    // ]
})
```

</TabItem>
<TabItem value="sync">

```js title="getCookies.js"
it('should return a cookie for me', () => {
    browser.setCookies([
        {name: 'test', value: '123'},
        {name: 'test2', value: '456'}
    ])
    const testCookie = browser.getCookies(['test'])
    console.log(testCookie); // outputs: [{ name: 'test', value: '123' }]

    const allCookies = browser.getCookies()
    console.log(allCookies);
    // outputs:
    // [
    //    { name: 'test', value: '123' },
    //    { name: 'test2', value: '456' }
    // ]
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

