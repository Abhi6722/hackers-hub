---
id: getText
title: getText
custom_edit_url: https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/element/getText.ts
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get the text content from a DOM-element. Make sure the element
you want to request the text from [is interactable](http://www.w3.org/TR/webdriver/#interactable)
otherwise you will get an empty string as return value. If the element is disabled or not
visible and you still want to receive the text content use [getHTML](https://webdriver.io/docs/api/element/getHTML)
as a workaround.

##### Usage

```js
$(selector).getText()
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
<div id="elem">
    Lorem ipsum <strong>dolor</strong> sit amet,<br />
    consetetur sadipscing elitr
</div>
<span style="display: none">I am invisible</span>
```

```js title="getText.js"
it('should demonstrate the getText function', async () => {
    const elem = await $('#elem');
    console.log(await elem.getText());
    // outputs the following:
    // "Lorem ipsum dolor sit amet,consetetur sadipscing elitr"

    const span = await $('span');
    console.log(await span.getText());
    // outputs "" (empty string) since element is not interactable
});
it('get content from table cell', async () => {
    await browser.url('http://the-internet.herokuapp.com/tables');
    const rows = await $$('#table1 tr');
    const columns = await rows[1].$$('td'); // get columns of 2nd row
    console.log(await columns[2].getText()); // get text of 3rd column
});
```

</TabItem>
<TabItem value="sync">

```html title="index.html"
<div id="elem">
    Lorem ipsum <strong>dolor</strong> sit amet,<br />
    consetetur sadipscing elitr
</div>
<span style="display: none">I am invisible</span>
```

```js title="getText.js"
it('should demonstrate the getText function', () => {
    const elem = $('#elem');
    console.log(elem.getText());
    // outputs the following:
    // "Lorem ipsum dolor sit amet,consetetur sadipscing elitr"

    const span = $('span');
    console.log(span.getText());
    // outputs "" (empty string) since element is not interactable
});
it('get content from table cell', () => {
    browser.url('http://the-internet.herokuapp.com/tables');
    const rows = $$('#table1 tr');
    const columns = rows[1].$$('td'); // get columns of 2nd row
    console.log(columns[2].getText()); // get text of 3rd column
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

