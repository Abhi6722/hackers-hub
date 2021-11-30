---
id: overwriteCommand
title: overwriteCommand
custom_edit_url: https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/browser/overwriteCommand.ts
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The browser method `overwriteCommand` helps you to overwrite the browser's and element's native commands like `pause` and `click`.

:::info

You can view more information on this in the [custom command](/docs/customcommands#overwriting-native-commands) section.

:::

##### Usage

```js
browser.overwriteCommand(name, callback, elementScope)
```

##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>name</var></code> | <code>String</code> | name of the original command |
| <code><var>callback</var></code> | <code>Function</code> | pass original function |
| <code><var>elementScope</var></code><br /><span class="label labelWarning">optional</span> | <code>Boolean</code> | extend the Element object instead of the Browser object |

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

```js title="execute.js"
// print milliseconds before pause and return its value.
await browser.overwriteCommand('pause', function (origPauseFunction, ms) {
    console.log(`Sleeping for ${ms}`)
    origPauseFunction(ms)
    return ms
})

// usage
it('should use my overwrite command', async () => {
    await browser.url('https://webdriver.io')
    await browser.pause(1000) // outputs "Sleeping for 1000"
})
```

</TabItem>
<TabItem value="sync">

```js title="execute.js"
// print milliseconds before pause and return its value.
browser.overwriteCommand('pause', function (origPauseFunction, ms) {
    console.log(`Sleeping for ${ms}`)
    origPauseFunction(ms)
    return ms
})

// usage
it('should use my overwrite command', () => {
    browser.url('https://webdriver.io')
    browser.pause(1000) // outputs "Sleeping for 1000"
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

