---
id: url
title: url
custom_edit_url: https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/browser/url.ts
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Protocol binding to load the URL of the browser. If a baseUrl is
specified in the config, it will be prepended to the url parameter using
node's url.resolve() method. Calling `browser.url('...')` with the same url as last
time will trigger a page reload.

##### Usage

```js
browser.url(url)
```

##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>url</var></code><br /><span class="label labelWarning">optional</span> | <code>String</code> | the URL to navigate to |

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

```js title="url.js"
// navigate to a new URL
await browser.url('https://webdriver.io');
// receive url
console.log(await browser.getUrl()); // outputs: "https://webdriver.io"

```

```js title="baseUrlResolutions.js"
// With a base URL of http://example.com/site, the following url parameters resolve as such:
// When providing a scheme:
// https://webdriver.io
await browser.url('https://webdriver.io');

// When not starting with a slash, the URL resolves relative to the baseUrl
// http://example.com/site/relative
await browser.url('relative');

// When starting with a slash, the URL resolves relative to the root path of the baseUrl
// http://example.com/rootRelative
await browser.url('/rootRelative');
```

</TabItem>
<TabItem value="sync">

```js title="url.js"
// navigate to a new URL
browser.url('https://webdriver.io');
// receive url
console.log(browser.getUrl()); // outputs: "https://webdriver.io"

```

```js title="baseUrlResolutions.js"
// With a base URL of http://example.com/site, the following url parameters resolve as such:
// When providing a scheme:
// https://webdriver.io
browser.url('https://webdriver.io');

// When not starting with a slash, the URL resolves relative to the baseUrl
// http://example.com/site/relative
browser.url('relative');

// When starting with a slash, the URL resolves relative to the root path of the baseUrl
// http://example.com/rootRelative
browser.url('/rootRelative');
```

:::caution
Synchronous Mode will depcrecated with Node.js v16. With an update to the
underlying Chromium version it became technically impossible to provide the
same synchronous behavior. We recommend to start transition to asynchronous
command execution. For more information, see our <a href="https://github.com/webdriverio/webdriverio/discussions/6702">RFC</a>.
:::
</TabItem>
</Tabs>

