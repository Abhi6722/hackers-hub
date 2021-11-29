---
id: executeAsync
title: executeAsync
custom_edit_url: https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/browser/executeAsync.ts
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Inject a snippet of JavaScript into the page for execution in the context of the currently selected
frame. The executed script is assumed to be asynchronous and must signal that is done by invoking
the provided callback, which is always provided as the final argument to the function. The value
to this callback will be returned to the client.

Asynchronous script commands may not span page loads. If an unload event is fired while waiting
for a script result, an error should be returned to the client.

The script argument defines the script to execute in the form of a function body. The function will
be invoked with the provided args array and the values may be accessed via the arguments object
in the order specified. The final argument will always be a callback function that must be invoked
to signal that the script has finished.

Arguments may be any JSON-primitive, array, or JSON object. JSON objects that define a WebElement
reference will be converted to the corresponding DOM element. Likewise, any WebElements in the script
result will be returned to the client as WebElement JSON objects.

##### Usage

```js
browser.executeAsync(script, arguments)
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

```js title="executeAsync.js"
it('should execute async JavaScript on the page', async () => {
    await browser.setTimeout({ script: 5000 })
    const result = await browser.executeAsync(function(a, b, c, d, done) {
        // browser context - you may not access client or console
        setTimeout(() => {
            done(a + b + c + d)
        }, 3000);
    }, 1, 2, 3, 4)
    // node.js context - client and console are available
    console.log(result) // outputs: 10
});
```

</TabItem>
<TabItem value="sync">

```js title="executeAsync.js"
it('should execute JavaScript on the page', () => {
    browser.setTimeout({ script: 5000 })
    const result = browser.executeAsync(function(a, b, c, d, done) {
        // browser context - you may not access client or console
        setTimeout(() => {
            done(a + b + c + d)
        }, 3000);
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

