---
id: isDisplayed
title: isDisplayed
custom_edit_url: https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/element/isDisplayed.ts
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Return true if the selected DOM-element is displayed.

:::info

As opposed to other element commands WebdriverIO will not wait for the element
to exist to execute this command.

:::

##### Usage

```js
$(selector).isDisplayed()
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

```js title="isDisplayed.js"
it('should detect if an element is displayed', async () => {
    let elem = await $('#notDisplayed');
    let isDisplayed = await elem.isDisplayed();
    console.log(isDisplayed); // outputs: false

    elem = await $('#notVisible');

    isDisplayed = await elem.isDisplayed();
    console.log(isDisplayed); // outputs: false

    elem = await $('#notExisting');
    isDisplayed = await elem.isDisplayed();
    console.log(isDisplayed); // outputs: false

    elem = await $('#notInViewport');
    isDisplayed = await elem.isDisplayed();
    console.log(isDisplayed); // outputs: true

    elem = await $('#zeroOpacity');
    isDisplayed = await elem.isDisplayed();
    console.log(isDisplayed); // outputs: true
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

```js title="isDisplayed.js"
it('should detect if an element is displayed', () => {
    let elem = $('#notDisplayed');
    let isDisplayed = elem.isDisplayed();
    console.log(isDisplayed); // outputs: false

    elem = $('#notVisible');

    isDisplayed = elem.isDisplayed();
    console.log(isDisplayed); // outputs: false

    elem = $('#notExisting');
    isDisplayed = elem.isDisplayed();
    console.log(isDisplayed); // outputs: false

    elem = $('#notInViewport');
    isDisplayed = elem.isDisplayed();
    console.log(isDisplayed); // outputs: true

    elem = $('#zeroOpacity');
    isDisplayed = elem.isDisplayed();
    console.log(isDisplayed); // outputs: true
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

