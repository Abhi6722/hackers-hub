---
id: custom$
title: custom$
custom_edit_url: https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/browser/custom$.ts
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The `custom$` allows you to use a custom strategy declared by using `browser.addLocatorStrategy`

##### Usage

```js
browser.custom$(strategyName, strategyArguments)
```

##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>strategyName</var></code> | <code>String</code> |  |
| <code><var>strategyArguments</var></code> | <code>Any</code> |  |

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

```js title="example.js"
it('should fetch the project title', async () => {
    await browser.url('https://webdriver.io')
    await browser.addLocatorStrategy('myStrat', (selector) => {
        return document.querySelectorAll(selector)
    })

    const projectTitle = await browser.custom$('myStrat', '.projectTitle')

    console.log(await projectTitle.getText()) // WEBDRIVER I/O
})
```

</TabItem>
<TabItem value="sync">

```js title="example.js"
it('should fetch the project title', () => {
    browser.url('https://webdriver.io')
    browser.addLocatorStrategy('myStrat', (selector) => {
        return document.querySelectorAll(selector)
    })

    const projectTitle = browser.custom$('myStrat', '.projectTitle')

    console.log(projectTitle.getText()) // WEBDRIVER I/O
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

