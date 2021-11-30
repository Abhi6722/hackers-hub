---
id: shadow$$
title: shadow$$
custom_edit_url: https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/element/shadow$$.ts
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Access elements inside a given element's shadowRoot. If you are working
with lots of nested shadow roots, an alternative approach to `shadow$$`
is to use the [deep selector](https://webdriver.io/docs/selectors#deep-selectors).

##### Usage

```js
$(selector).shadow$$(selector)
```

##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>selector</var></code> | <code>String</code>, <code>Function</code> | selector or JS Function to fetch a certain element |

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

```js title="shadow$$.js"
it('should return elements inside a shadowRoot', async () => {
    const innerEl = await $('.input').shadow$$('#innerEl');
    console.log(await innerEl.getValue()); // outputs: 'test123'
});
```

</TabItem>
<TabItem value="sync">

```js title="shadow$$.js"
it('should return elements inside a shadowRoot', () => {
    const innerEl = $('.input').shadow$$('#innerEl');
    console.log(innerEl.getValue()); // outputs: 'test123'
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

