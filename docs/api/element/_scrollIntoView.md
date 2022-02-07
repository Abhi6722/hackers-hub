---
id: scrollIntoView
title: scrollIntoView
custom_edit_url: https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/element/scrollIntoView.ts
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Scroll element into viewport ([MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)).

##### Usage

```js
$(selector).scrollIntoView(scrollIntoViewOptions)
```

##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>scrollIntoViewOptions</var></code><br /><span class="label labelWarning">optional</span> | <code>object</code>, <code>boolean</code> | options for `Element.scrollIntoView()` (default: `true`) |

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

```js title="scrollIntoView.js"
it('should demonstrate the scrollIntoView command', async () => {
    const elem = await $('#myElement');
    // scroll to specific element
    await elem.scrollIntoView();
});
```

</TabItem>
<TabItem value="sync">

```js title="scrollIntoView.js"
it('should demonstrate the scrollIntoView command', () => {
    const elem = $('#myElement');
    // scroll to specific element
    elem.scrollIntoView();
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

