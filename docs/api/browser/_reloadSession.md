---
id: reloadSession
title: reloadSession
custom_edit_url: https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/browser/reloadSession.ts
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates a new Selenium session with your current capabilities. This is useful if you
test highly stateful application where you need to clean the browser session between
the tests in your spec file to avoid creating hundreds of single test files with WDIO.
Be careful though, this command affects your test time tremendously since spawning
new Selenium sessions is very time consuming especially when using cloud services.

##### Usage

```js
browser.reloadSession()
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

```js title="reloadSync.js"
it('should reload my session with current capabilities', async () => {
    console.log(browser.sessionId) // outputs: e042b3f3cd5a479da4e171825e96e655
    await browser.reloadSession()
    console.log(browser.sessionId) // outputs: 9a0d9bf9d4864160aa982c50cf18a573
})
```

</TabItem>
<TabItem value="sync">

```js title="reloadSync.js"
it('should reload my session with current capabilities', () => {
    console.log(browser.sessionId) // outputs: e042b3f3cd5a479da4e171825e96e655
    browser.reloadSession()
    console.log(browser.sessionId) // outputs: 9a0d9bf9d4864160aa982c50cf18a573
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

