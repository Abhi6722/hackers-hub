---
id: getWindowSize
title: getWindowSize
custom_edit_url: https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/browser/getWindowSize.ts
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Returns browser window size.

##### Usage

```js
browser.getWindowSize()
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

```js title="getWindowSize.js"
it('should return browser window size', async () => {
    const windowSize = await browser.getWindowSize();
    console.log(windowSize);
    // outputs `{ width: 1280, height: 767 }`
});
```

</TabItem>
<TabItem value="sync">

```js title="getWindowSize.js"
it('should return browser window size', () => {
    const windowSize = browser.getWindowSize();
    console.log(windowSize);
    // outputs `{ width: 1280, height: 767 }`
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

