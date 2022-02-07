---
id: mockRestoreAll
title: mockRestoreAll
custom_edit_url: https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/browser/mockRestoreAll.ts
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Restores all mock information and behavior stored in all registered
mocks of the session.

##### Usage

```js
browser.mockRestoreAll()
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

```js title="mockRestoreAll.js"
it('should restore all mocks', async () => {
    const googleMock = await browser.mock('https://google.com/')
    googleMock.respond('https://webdriver.io')
    const wdioMock = await browser.mock('https://webdriver.io')
    wdioMock.respond('http://json.org')

    await browser.url('https://google.com/')
    console.log(await browser.getTitle()) // JSON

    await browser.mockRestoreAll()

    await browser.url('https://google.com/')
    console.log(await browser.getTitle()) // Google
})
```

</TabItem>
<TabItem value="sync">

```js title="mockRestoreAll.js"
it('should restore all mocks', () => {
    const googleMock = browser.mock('https://google.com/')
    googleMock.respond('https://webdriver.io')
    const wdioMock = browser.mock('https://webdriver.io')
    wdioMock.respond('http://json.org')

    browser.url('https://google.com/')
    console.log(browser.getTitle()) // JSON

    browser.mockRestoreAll()

    browser.url('https://google.com/')
    console.log(browser.getTitle()) // Google
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

