---
id: react$$
title: react$$
custom_edit_url: https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/element/react$$.ts
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The `react$$` command is a useful command to query multiple React Components
by their actual name and filter them by props and state.

:::info

The command only works with applications using React v16.x. Read more about React
selectors in the [Selectors](/docs/selectors#react-selectors) guide.

:::

##### Usage

```js
$(selector).react$$(selector, { props, state })
```

##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>selector</var></code> | <code>String</code> | of React component |
| <code><var>options</var></code><br /><span class="label labelWarning">optional</span> | <code>ReactSelectorOptions</code> | React selector options |
| <code><var>options.props</var></code><br /><span class="label labelWarning">optional</span> | <code>Object</code> | React props the element should contain |
| <code><var>options.state</var></code><br /><span class="label labelWarning">optional</span> | <code>Array.&lt;any&gt;</code>, <code>number</code>, <code>string</code>, <code>object</code>, <code>boolean</code> | React state the element should be in |

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

```js title="pause.js"
it('should calculate 7 * 6', async () => {
    await browser.url('https://ahfarmer.github.io/calculator/');

    const orangeButtons = await browser.react$$('t', {
        props: { orange: true }
    })
    console.log(await orangeButtons.map((btn) => btn.getText()));
    // prints "[ '÷', 'x', '-', '+', '=' ]"
});
```

</TabItem>
<TabItem value="sync">

```js title="pause.js"
it('should calculate 7 * 6', () => {
    browser.url('https://ahfarmer.github.io/calculator/');

    const orangeButtons = browser.react$$('t', {
        props: { orange: true }
    })
    console.log(orangeButtons.map((btn) => btn.getText()));
    // prints "[ '÷', 'x', '-', '+', '=' ]"
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

