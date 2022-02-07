---
id: isDisplayedInViewport
title: isDisplayedInViewport
custom_edit_url: https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/element/isDisplayedInViewport.ts
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Return true if the selected DOM-element found by given selector is partially visible and within the viewport.

##### Usage

```js
$(selector).isDisplayedInViewport()
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
it('should detect if an element is visible', async () => {
    let isDisplayedInViewport = await $('#notDisplayed').isDisplayedInViewport();
    console.log(isDisplayedInViewport); // outputs: false

    isDisplayedInViewport = await $('#notVisible').isDisplayedInViewport();
    console.log(isDisplayedInViewport); // outputs: false

    isDisplayedInViewport = await $('#notExisting').isDisplayedInViewport();
    console.log(isDisplayedInViewport); // outputs: false

    isDisplayedInViewport = await $('#notInViewport').isDisplayedInViewport();
    console.log(isDisplayedInViewport); // outputs: false

    isDisplayedInViewport = await $('#zeroOpacity').isDisplayedInViewport();
    console.log(isDisplayedInViewport); // outputs: false
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
it('should detect if an element is visible', () => {
    let isDisplayedInViewport = $('#notDisplayed').isDisplayedInViewport();
    console.log(isDisplayedInViewport); // outputs: false

    isDisplayedInViewport = $('#notVisible').isDisplayedInViewport();
    console.log(isDisplayedInViewport); // outputs: false

    isDisplayedInViewport = $('#notExisting').isDisplayedInViewport();
    console.log(isDisplayedInViewport); // outputs: false

    isDisplayedInViewport = $('#notInViewport').isDisplayedInViewport();
    console.log(isDisplayedInViewport); // outputs: false

    isDisplayedInViewport = $('#zeroOpacity').isDisplayedInViewport();
    console.log(isDisplayedInViewport); // outputs: false
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

