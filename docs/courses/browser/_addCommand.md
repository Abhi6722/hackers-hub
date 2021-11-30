---
id: addCommand
title: addCommand
custom_edit_url: https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/browser/addCommand.ts
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The browser method  `addCommand` helps you to write your own set of commands. You can write your command in a synchronous way or in an asynchronous way.

:::info

You can find more information on adding custom commands in the [custom command](/docs/customcommands#adding-custom-commands) guide.

:::

##### Usage

```js
browser.addCommand(name, callback, elementScope)
```

##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>name</var></code> | <code>String</code> | name of the custom command |
| <code><var>callback</var></code> | <code>Function</code> | function to be called |
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
await browser.addCommand('getUrlAndTitle', async function (customParam) {
    // `this` refers to the `browser` scope
    return {
        url: await this.getUrl(),
        title: await this.getTitle(),
        customParam: customParam
    }
})
//usage
it('should use my add command', async () => {
    await browser.url('https://webdriver.io')
    const result = await browser.getUrlAndTitle('foobar')

    assert.strictEqual(result.url, 'https://webdriver.io')
    assert.strictEqual(result.title, 'WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO')
    assert.strictEqual(result.customParam, 'foobar')
})
```

</TabItem>
<TabItem value="sync">

```js title="execute.js"
browser.addCommand('getUrlAndTitle', function (customParam) {
    // `this` refers to the `browser` scope
    return {
        url: this.getUrl(),
        title: this.getTitle(),
        customParam: customParam
    }
})
//usage
it('should use my add command', () => {
    browser.url('https://webdriver.io')
    const result = browser.getUrlAndTitle('foobar')

    assert.strictEqual(result.url, 'https://webdriver.io')
    assert.strictEqual(result.title, 'WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO')
    assert.strictEqual(result.customParam, 'foobar')
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

