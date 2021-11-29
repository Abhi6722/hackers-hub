---
id: savePDF
title: savePDF
custom_edit_url: https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/browser/savePDF.ts
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Prints the page of the current browsing context to a PDF file on your OS.

##### Usage

```js
browser.savePDF(filepath, { orientation, scale, background, width, height, top, bottom, left, right, shrinkToFit, pageRanges })
```

##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>filepath</var></code> | <code>String</code> | path to the generated pdf (`.pdf` suffix is required) relative to the execution directory |
| <code><var>options</var></code><br /><span class="label labelWarning">optional</span> | <code>PDFPrintOptions</code> | Print PDF Options |
| <code><var>options.orientation</var></code><br /><span class="label labelWarning">optional</span> | <code>String</code> | Orientation of PDF page |
| <code><var>options.scale</var></code><br /><span class="label labelWarning">optional</span> | <code>number</code> | Scale of PDF page |
| <code><var>options.background</var></code><br /><span class="label labelWarning">optional</span> | <code>boolean</code> | Include background of PDF page |
| <code><var>options.width</var></code><br /><span class="label labelWarning">optional</span> | <code>number</code> | Width of PDF page |
| <code><var>options.height</var></code><br /><span class="label labelWarning">optional</span> | <code>number</code> | Height of PDF page |
| <code><var>options.top</var></code><br /><span class="label labelWarning">optional</span> | <code>number</code> | Top padding of PDF page |
| <code><var>options.bottom</var></code><br /><span class="label labelWarning">optional</span> | <code>number</code> | Bottom padding of PDF page |
| <code><var>options.left</var></code><br /><span class="label labelWarning">optional</span> | <code>number</code> | Left padding of PDF page |
| <code><var>options.right</var></code><br /><span class="label labelWarning">optional</span> | <code>number</code> | Right padding of PDF page |
| <code><var>options.shrinkToFit</var></code><br /><span class="label labelWarning">optional</span> | <code>boolean</code> | Shrink page to fit page |
| <code><var>options.pageRanges</var></code><br /><span class="label labelWarning">optional</span> | <code>Array.&lt;object&gt;</code> | Range of pages to include in PDF |

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

```js title="savePDF.js"
it('should save a PDF screenshot of the browser view', function () {
    await browser.savePDF('./some/path/screenshot.pdf');
});
```

</TabItem>
<TabItem value="sync">

```js title="savePDF.js"
it('should save a PDF screenshot of the browser view', function () {
    browser.savePDF('./some/path/screenshot.pdf');
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

