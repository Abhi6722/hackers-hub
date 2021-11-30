---
id: isExisting
title: isExisting
custom_edit_url: https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/element/isExisting.ts
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Returns true if element exists in the DOM.

:::info

As opposed to other element commands WebdriverIO will not wait for the element
to exist to execute this command.

:::

##### Usage

```js
$(selector).isExisting()
```

##### Examples
<Tabs
defaultValue="async"
className="runtime"
values={[
{label: 'Asynchronous Mode', value: 'async'},
{label: 'Synchronous Mode', value: 'sync'}
]
}>
<TabItem value="async">

```html title="index.html"
<div id="notDisplayed" style="display: none"></div>
<div id="notVisible" style="visibility: hidden"></div>
<div id="notInViewport" style="position:absolute; left: 9999999"></div>
<div id="zeroOpacity" style="opacity: 0"></div>
```

```js title="isExisting.js"
it('should detect if elements are existing', async () => {
    let elem = await $('#someRandomNonExistingElement')
    let isExisting = await elem.isExisting()
    console.log(isExisting); // outputs: false

    elem = await $('#notDisplayed')
    isExisting = await elem.isExisting()
    console.log(isExisting); // outputs: true

    elem = await $('#notVisible')
    isExisting = await elem.isExisting()
    console.log(isExisting); // outputs: true

    elem = await $('#notInViewport')
    isExisting = await elem.isExisting()
    console.log(isExisting); // outputs: true

    elem = await $('#zeroOpacity')
    isExisting = await elem.isExisting()
    console.log(isExisting); // outputs: true
});
```

</TabItem>
<TabItem value="sync">

```html title="index.html"
<div id="notDisplayed" style="display: none"></div>
<div id="notVisible" style="visibility: hidden"></div>
<div id="notInViewport" style="position:absolute; left: 9999999"></div>
<div id="zeroOpacity" style="opacity: 0"></div>
```

```js title="isExisting.js"
it('should detect if elements are existing', () => {
    let elem = $('#someRandomNonExistingElement')
    let isExisting = elem.isExisting()
    console.log(isExisting); // outputs: false

    elem = $('#notDisplayed')
    isExisting = elem.isExisting()
    console.log(isExisting); // outputs: true

    elem = $('#notVisible')
    isExisting = elem.isExisting()
    console.log(isExisting); // outputs: true

    elem = $('#notInViewport')
    isExisting = elem.isExisting()
    console.log(isExisting); // outputs: true

    elem = $('#zeroOpacity')
    isExisting = elem.isExisting()
    console.log(isExisting); // outputs: true
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

