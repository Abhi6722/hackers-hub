---
id: deleteCookies
title: deleteCookies
custom_edit_url: https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/browser/deleteCookies.ts
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Delete cookies visible to the current page. By providing a cookie name it just removes the single cookie or more when multiple names are passed.

##### Usage

```js
browser.deleteCookies(names)
```

##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>names</var></code><br /><span class="label labelWarning">optional</span> | <code>String</code>, <code>Array.&lt;String&gt;</code> | names of cookies to be deleted |

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

```js title="deleteCookie.js"
it('should delete cookies', async () => {
    await browser.setCookies([
        {name: 'test', value: '123'},
        {name: 'test2', value: '456'},
        {name: 'test3', value: '789'}
    ])

    let cookies = await browser.getCookies()
    console.log(cookies)
    // outputs:
    // [
    //     { name: 'test', value: '123' },
    //     { name: 'test2', value: '456' }
    //     { name: 'test3', value: '789' }
    // ]

    await browser.deleteCookies(['test3'])
    cookies = await browser.getCookies()
    console.log(cookies)
    // outputs:
    // [
    //     { name: 'test', value: '123' },
    //     { name: 'test2', value: '456' }
    // ]

    await browser.deleteCookies()
    cookies = await browser.getCookies()
    console.log(cookies) // outputs: []
})
```

</TabItem>
<TabItem value="sync">

```js title="deleteCookie.js"
it('should delete cookies', () => {
    browser.setCookies([
        {name: 'test', value: '123'},
        {name: 'test2', value: '456'},
        {name: 'test3', value: '789'}
    ])

    let cookies = browser.getCookies()
    console.log(cookies)
    // outputs:
    // [
    //     { name: 'test', value: '123' },
    //     { name: 'test2', value: '456' }
    //     { name: 'test3', value: '789' }
    // ]

    browser.deleteCookies(['test3'])
    cookies = browser.getCookies()
    console.log(cookies)
    // outputs:
    // [
    //     { name: 'test', value: '123' },
    //     { name: 'test2', value: '456' }
    // ]

    browser.deleteCookies()
    cookies = browser.getCookies()
    console.log(cookies) // outputs: []
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

