---
id: mockClearAll
title: mockClearAll
custom_edit_url: https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/browser/mockClearAll.ts
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Resets all information stored in all registered mocks of the session.

##### Usage

```js
browser.mockClearAll()
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

```js title="mockClearAll.js"
it('should clear all mocks', async () => {
    const docMock = await browser.mock('**', {
        headers: { 'Content-Type': 'text/html' }
    })
    const jsMock = await browser.mock('**', {
        headers: { 'Content-Type': 'application/javascript' }
    })

    await browser.url('http://guinea-pig.webdriver.io/')
    console.log(docMock.calls.length, jsMock.calls.length) // returns "1 4"

    await browser.url('http://guinea-pig.webdriver.io/')
    console.log(docMock.calls.length, jsMock.calls.length) // returns "2 4" (JavaScript comes from cache)

    await browser.mockClearAll()
    console.log(docMock.calls.length, jsMock.calls.length) // returns "0 0"
})
```

</TabItem>
<TabItem value="sync">

```js title="mockClearAll.js"
it('should clear all mocks', () => {
    const docMock = browser.mock('**', {
        headers: { 'Content-Type': 'text/html' }
    })
    const jsMock = browser.mock('**', {
        headers: { 'Content-Type': 'application/javascript' }
    })

    browser.url('http://guinea-pig.webdriver.io/')
    console.log(docMock.calls.length, jsMock.calls.length) // returns "1 4"

    browser.url('http://guinea-pig.webdriver.io/')
    console.log(docMock.calls.length, jsMock.calls.length) // returns "2 4" (JavaScript comes from cache)

    browser.mockClearAll()
    console.log(docMock.calls.length, jsMock.calls.length) // returns "0 0"
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

