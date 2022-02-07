---
id: debug
title: debug
custom_edit_url: https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/browser/debug.ts
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This command helps you to debug your integration tests. It stops the running browser and gives
you time to jump into it and check the state of your application (e.g. using dev tools).
Your terminal transforms into a [REPL](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop)
interface that will allow you to try out certain commands, find elements and test actions on
them.

[![WebdriverIO REPL](https://webdriver.io/img/repl.gif)](https://webdriver.io/img/repl.gif)

If you run the WDIO testrunner make sure you increase the timeout property of the test framework
you are using (e.g. Mocha or Jasmine) in order to prevent test termination due to a test timeout.
Also avoid executing the command with multiple capabilities running at the same time.

<iframe width="560" height="315" src="https://www.youtube.com/embed/xWwP-3B_YyE" frameborder="0" allowFullScreen></iframe>

##### Usage

```js
browser.debug()
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

```js title="debug.js"
it('should demonstrate the debug command', async () => {
    await $('#input').setValue('FOO')
    await browser.debug() // jumping into the browser and change value of #input to 'BAR'
    const value = await $('#input').getValue()
    console.log(value) // outputs: "BAR"
})
```

</TabItem>
<TabItem value="sync">

```js title="debug.js"
it('should demonstrate the debug command', () => {
    $('#input').setValue('FOO')
    browser.debug() // jumping into the browser and change value of #input to 'BAR'
    const value = $('#input').getValue()
    console.log(value) // outputs: "BAR"
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

