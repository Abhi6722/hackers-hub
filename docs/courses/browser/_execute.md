---
id: execute
title: execute
custom_edit_url: https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/browser/execute.ts
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Inject a snippet of JavaScript into the page for execution in the context of the currently selected frame.
The executed script is assumed to be synchronous and the result of evaluating the script is returned to
the client.

The script argument defines the script to execute in the form of a function body. The value returned by
that function will be returned to the client. The function will be invoked with the provided args array
and the values may be accessed via the arguments object in the order specified.

Arguments may be any JSON-primitive, array, or JSON object. JSON objects that define a WebElement
reference will be converted to the corresponding DOM element. Likewise, any WebElements in the script
result will be returned to the client as WebElement JSON objects.

##### Usage

```js
browser.execute(script, arguments)
```

##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>script</var></code> | <code>String</code>, <code>Function</code> | The script to execute. |
| <code><var>arguments</var></code><br /><span class="label labelWarning">optional</span> |  | script arguments |

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
it('should inject javascript on the page', async () => {
    const result = await browser.execute((a, b, c, d) => {
        // browser context - you may not access client or console
        return a + b + c + d
    }, 1, 2, 3, 4)
    // node.js context - client and console are available
    console.log(result) // outputs: 10
});
```

</TabItem>
<TabItem value="sync">

```js title="execute.js"
it('should inject javascript on the page', () => {
    const result = browser.execute((a, b, c, d) => {
        // browser context - you may not access client or console
        return a + b + c + d
    }, 1, 2, 3, 4)
    // node.js context - client and console are available
    console.log(result) // outputs: 10
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

