---
id: restore
title: restore
custom_edit_url: https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/mock/restore.ts
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Does everything that `mock.clear()` does, and also removes any mocked return values or implementations.

##### Usage

```js
mock.restore()
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

```js title="addValue.js"
it('should demonstrate the addValue command', async () => {
    const mock = await browser.mock('**\/googlelogo_color_272x92dp.png')
    mock.respond('https://webdriver.io/img/webdriverio.png')
    await browser.url('https://google.com') // shows WebdriverIO logo instead of Google

    mock.restore()
    await browser.url('https://google.com') // shows normal Google logo again
})
```

</TabItem>
<TabItem value="sync">

```js title="addValue.js"
it('should demonstrate the addValue command', () => {
    const mock = browser.mock('**\/googlelogo_color_272x92dp.png')
    mock.respond('https://webdriver.io/img/webdriverio.png')
    browser.url('https://google.com') // shows WebdriverIO logo instead of Google

    mock.restore()
    browser.url('https://google.com') // shows normal Google logo again
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

