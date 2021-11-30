---
id: call
title: call
custom_edit_url: https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/browser/call.ts
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

You can use `call` to execute any async action within your test spec. The command itself
is treated like a synchronous function. It accepts promises and stops the execution until
the promise has resolved.

This command helps to run asynchronous code within a synchronous context. With
WebdriverIO depcrecating synchronous usage (see [RFC](https://github.com/webdriverio/webdriverio/discussions/6702))
this command is not very useful anymore.

##### Usage

```js
browser.call(callback)
```

##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>callback</var></code> | <code>Function</code> | function to be called |

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

```js title="call.js"
it('some testing here', async () => {
    await browser.url('http://google.com')
    // make an asynchronous call using any 3rd party library supporting promises
    // e.g. call to backend or db to inject fixture data
    await browser.call(() => {
        return somePromiseLibrary.someMethod().then(() => {
            // ...
        })
    })

    // example for async call to 3rd party library that doesn't support promises
    const result = await browser.call(() => {
        return new Promise((resolve, reject) => {
            someOtherNodeLibrary.someMethod(param1, (err, res) => {
                if (err) {
                    return reject(err)
                }
                resolve(res)
            })
        })
    })
});
```

</TabItem>
<TabItem value="sync">

```js title="call.js"
it('some testing here', () => {
    browser.url('http://google.com')
    // make an asynchronous call using any 3rd party library supporting promises
    // e.g. call to backend or db to inject fixture data
    browser.call(() => {
        return somePromiseLibrary.someMethod().then(() => {
            // ...
        })
    })

    // example for call to 3rd party library that doesn't support promises
    const result = browser.call(() => {
        return new Promise((resolve, reject) => {
            someOtherNodeLibrary.someMethod(param1, (err, res) => {
                if (err) {
                    return reject(err)
                }
                resolve(res)
            })
        })
    })
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

