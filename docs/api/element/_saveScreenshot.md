---
id: saveScreenshot
title: saveScreenshot
custom_edit_url: https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/element/saveScreenshot.ts
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Save a screenshot of an element to a PNG file on your OS.

##### Usage

```js
$(selector).saveScreenshot(filename)
```

##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>filename</var></code> | <code>String</code> | path to the generated image (`.png` suffix is required) relative to the execution directory |

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

```js title="saveScreenshot.js"
it('should save a screenshot of the browser view', async () => {
    const elem = await $('#someElem');
    await elem.saveScreenshot('./some/path/elemScreenshot.png');
});
```

</TabItem>
<TabItem value="sync">

```js title="saveScreenshot.js"
it('should save a screenshot of the browser view', () => {
    const elem = $('#someElem');
    elem.saveScreenshot('./some/path/elemScreenshot.png');
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

