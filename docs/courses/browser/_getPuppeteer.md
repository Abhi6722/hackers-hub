---
id: getPuppeteer
title: getPuppeteer
custom_edit_url: https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/browser/getPuppeteer.ts
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get the [Puppeteer Browser instance](https://pptr.dev/#?product=Puppeteer&version=v5.1.0&show=api-class-browser)
to run commands with Puppeteer. Note that all Puppeteer commands are
asynchronous by default so in order to interchange between sync and async
execution make sure to wrap your Puppeteer calls within a `browser.call`
commands as shown in the example.

:::info

Note that using Puppeteer requires support for Chrome DevTools protocol and e.g.
can not be used when running automated tests in the cloud. Find out more in the
[Automation Protocols](/docs/automationProtocols) section.

:::

##### Usage

```js
browser.getPuppeteer()
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

```js title="getPuppeteer.test.js"
it('should allow me to use Puppeteer', async () => {
    // WebDriver command
    await browser.url('https://webdriver.io')

    const puppeteerBrowser = await browser.getPuppeteer()
    // switch to Puppeteer
    const metrics = await browser.call(async () => {
        const pages = await puppeteerBrowser.pages()
        pages[0].setGeolocation({ latitude: 59.95, longitude: 30.31667 })
        return pages[0].metrics()
    })

    console.log(metrics.LayoutCount) // returns LayoutCount value
})
```

</TabItem>
<TabItem value="sync">

```js title="getPuppeteer.test.js"
it('should allow me to use Puppeteer', () => {
    // WebDriver command
    browser.url('https://webdriver.io')

    const puppeteerBrowser = browser.getPuppeteer()
    // switch to Puppeteer
    const metrics = browser.call(async () => {
        const pages = puppeteerBrowser.pages()
        pages[0].setGeolocation({ latitude: 59.95, longitude: 30.31667 })
        return pages[0].metrics()
    })

    console.log(metrics.LayoutCount) // returns LayoutCount value
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

