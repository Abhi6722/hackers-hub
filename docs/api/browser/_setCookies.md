---
id: setCookies
title: setCookies
custom_edit_url: https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/browser/setCookies.ts
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Sets one or more [cookies](https://w3c.github.io/webdriver/#cookies) for the current page. Make sure you are
on the page that should receive the cookie. You can't set a cookie for an arbitrary page without
being on that page.

##### Usage

```js
browser.setCookies({ name, value, path, domain, secure, httpOnly, expiry, sameSite })
```

##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>cookie</var></code> | <code>Array.&lt;WebDriver.Cookie&gt;</code>, <code>WebDriver.Cookie</code> | cookie object or object array. |
| <code><var>cookie.name</var></code><br /><span class="label labelWarning">optional</span> | <code>String</code> | The name of the cookie. |
| <code><var>cookie.value</var></code><br /><span class="label labelWarning">optional</span> | <code>String</code> | The cookie value. |
| <code><var>cookie.path</var></code><br /><span class="label labelWarning">optional</span> | <code>String</code> | The cookie path. Defaults to "/" if omitted when adding a cookie. |
| <code><var>cookie.domain</var></code><br /><span class="label labelWarning">optional</span> | <code>String</code> | The domain the cookie is visible to. Defaults to the current browsing context’s active document’s URL domain if omitted when adding a cookie. |
| <code><var>cookie.secure</var></code><br /><span class="label labelWarning">optional</span> | <code>Boolean</code> | Whether the cookie is a secure cookie. Defaults to false if omitted when adding a cookie. |
| <code><var>cookie.httpOnly</var></code><br /><span class="label labelWarning">optional</span> | <code>Boolean</code> | Whether the cookie is an HTTP only cookie. Defaults to false if omitted when adding a cookie. |
| <code><var>cookie.expiry</var></code><br /><span class="label labelWarning">optional</span> | <code>Number</code> | When the cookie expires, specified in seconds since Unix Epoch. Must not be set if omitted when adding a cookie. |
| <code><var>cookie.sameSite</var></code><br /><span class="label labelWarning">optional</span> | <code>String</code> | Whether the cookie applies to a SameSite policy. Defaults to None if omitted when adding a cookie. Can be set to either "Lax" or "Strict". |

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

```js title="setCookies.js"
it('should set a cookie for the page', async () => {
    await browser.url('/')

    // set a single cookie
    await browser.setCookies({
        name: 'test1',
        value: 'one'
        // The below options are optional
        // path: '/foo', // The cookie path. Defaults to "/"
        // domain: '.example.com', // The domain the cookie is visible to. Defaults to the current browsing context’s active document’s URL domain
        // secure: true, // Whether the cookie is a secure cookie. Defaults to false
        // httpOnly: true, // Whether the cookie is an HTTP only cookie. Defaults to false
        // expiry: 1551393875 // When the cookie expires, specified in seconds since Unix Epoch
    })

    // set multiple cookies
    await browser.setCookies([
        {name: 'test2', value: 'two'},
        {name: 'test3', value: 'three'}
    ])

    const cookies = await browser.getCookies()
    console.log(cookies);
    // outputs:
    // [
    //      {name: 'test1', value: 'one', domain: 'www.example.com'},
    //      {name: 'test2', value: 'two', domain: 'www.example.com'},
    //      {name: 'test3', value: 'three', domain: 'www.example.com'}
    // ]
});
```

</TabItem>
<TabItem value="sync">

```js title="setCookies.js"
it('should set a cookie for the page', () => {
    browser.url('/')

    // set a single cookie
    browser.setCookies({
        name: 'test1',
        value: 'one'
        // The below options are optional
        // path: '/foo', // The cookie path. Defaults to "/"
        // domain: '.example.com', // The domain the cookie is visible to. Defaults to the current browsing context’s active document’s URL domain
        // secure: true, // Whether the cookie is a secure cookie. Defaults to false
        // httpOnly: true, // Whether the cookie is an HTTP only cookie. Defaults to false
        // expiry: 1551393875 // When the cookie expires, specified in seconds since Unix Epoch
    })

    // set multiple cookies
    browser.setCookies([
        {name: 'test2', value: 'two'},
        {name: 'test3', value: 'three'}
    ])

    const cookies = browser.getCookies()
    console.log(cookies);
    // outputs:
    // [
    //      {name: 'test1', value: 'one', domain: 'www.example.com'},
    //      {name: 'test2', value: 'two', domain: 'www.example.com'},
    //      {name: 'test3', value: 'three', domain: 'www.example.com'}
    // ]
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

