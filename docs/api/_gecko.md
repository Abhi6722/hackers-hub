---
id: gecko
title: Firefox
custom_edit_url: https://github.com/webdriverio/webdriverio/edit/main/packages/wdio-protocols/protocols/gecko.json
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## fullPageScreenshot


Captures a screenshot of the entire page.<br /><br />Firefox command. More details can be found in the [official protocol docs](https://phabricator.services.mozilla.com/source/mozilla-central/browse/default/testing/geckodriver/src/command.rs$43-46).

##### Usage

```js
browser.fullPageScreenshot()
```






##### Returns

- **&lt;String&gt; <code><var>screenshot</var></code>:** The base64-encoded PNG image data comprising the screenshot of the full page.






---

## getMozContext


Get the context that is currently in effect, e.g. `CHROME` or `CONTENT`.<br /><br />Firefox command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/blob/586affe0cf675b1d5c8abc756defa4a46d95391b/javascript/node/selenium-webdriver/firefox.js#L615-L622).

##### Usage

```js
browser.getMozContext()
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

```js
console.log(await browser.getMozContext()); // outputs: 'CHROME'
```

</TabItem>
<TabItem value="sync">

```js
console.log(browser.getMozContext()); // outputs: 'CHROME'
```


:::caution
    Synchronous Mode will depcrecated with Node.js v16. With an update to the
    underlying Chromium version it became technically impossible to provide the
    same synchronous behavior. We recommend to start transition to asynchronous
    command execution. For more information, see our <a href="https://github.com/webdriverio/webdriverio/discussions/6702">RFC</a>.
:::
</TabItem>
</Tabs>




##### Returns

- **&lt;String&gt; <code><var>Context</var></code>:** The browser context, either `CHROME` or `CONTENT`






---

## setMozContext


Changes target context for commands between chrome- and content.<br /><br />Changing the current context has a stateful impact on all subsequent commands. The `CONTENT` context has normal web platform document permissions, as if you would evaluate arbitrary JavaScript. The `CHROME` context gets elevated permissions that lets you manipulate the browser chrome itself, with full access to the XUL toolkit.<br /><br />Firefox command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/blob/586affe0cf675b1d5c8abc756defa4a46d95391b/javascript/node/selenium-webdriver/firefox.js#L615-L645).

##### Usage

```js
browser.setMozContext(context)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>context</var></code> | string | The browser context, either `CHROME` or `CONTENT` |




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

```js
console.log(await browser.getMozContext()); // outputs: 'CHROME'
browser.setMozContext('CONTENT');
console.log(await browser.getMozContext()); // outputs: 'CONTENT'
```

</TabItem>
<TabItem value="sync">

```js
console.log(browser.getMozContext()); // outputs: 'CHROME'
browser.setMozContext('CONTENT');
console.log(browser.getMozContext()); // outputs: 'CONTENT'
```


:::caution
    Synchronous Mode will depcrecated with Node.js v16. With an update to the
    underlying Chromium version it became technically impossible to provide the
    same synchronous behavior. We recommend to start transition to asynchronous
    command execution. For more information, see our <a href="https://github.com/webdriverio/webdriverio/discussions/6702">RFC</a>.
:::
</TabItem>
</Tabs>









---

## installAddOn


Installs a new addon with the current session. This function will return an ID that may later be used to uninstall the addon using `uninstallAddon`.<br /><br />Firefox command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/blob/586affe0cf675b1d5c8abc756defa4a46d95391b/javascript/node/selenium-webdriver/firefox.js#L647-L668).

##### Usage

```js
browser.installAddOn(addon, temporary)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>addon</var></code> | string | base64 string of the add on file |
| <code><var>temporary</var></code> | boolean | temporary Flag indicating whether the extension should be installed temporarily - gets removed on restart |




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

```js
// Create a buffer of the add on .zip file
const extension = await fs.promises.readFile('/path/to/extension.zip')
// Load extension in Firefox
const id = await browser.installAddOn(extension.toString('base64'), false);
```

</TabItem>
<TabItem value="sync">

```js
// Create a buffer of the add on .zip file
const extension = fs.promises.readFile('/path/to/extension.zip')
// Load extension in Firefox
const id = browser.installAddOn(extension.toString('base64'), false);
```


:::caution
    Synchronous Mode will depcrecated with Node.js v16. With an update to the
    underlying Chromium version it became technically impossible to provide the
    same synchronous behavior. We recommend to start transition to asynchronous
    command execution. For more information, see our <a href="https://github.com/webdriverio/webdriverio/discussions/6702">RFC</a>.
:::
</TabItem>
</Tabs>




##### Returns

- **&lt;String&gt; <code><var>id</var></code>:** A promise that will resolve to an ID for the newly installed addon.






---

## uninstallAddOn


Uninstalls an addon from the current browser session's profile.<br /><br />Firefox command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/blob/586affe0cf675b1d5c8abc756defa4a46d95391b/javascript/node/selenium-webdriver/firefox.js#L670-L687).

##### Usage

```js
browser.uninstallAddOn(id)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>id</var></code> | string | id ID of the addon to uninstall. |




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

```js
// Create a buffer of the add on .zip file
const extension = await fs.promises.readFile('/path/to/extension.zip')
// Load extension in Firefox
const id = await browser.installAddOn(extension.toString('base64'), false);
// ...
await browser.uninstallAddOn(id)
```

</TabItem>
<TabItem value="sync">

```js
// Create a buffer of the add on .zip file
const extension = fs.promises.readFile('/path/to/extension.zip')
// Load extension in Firefox
const id = browser.installAddOn(extension.toString('base64'), false);
// ...
browser.uninstallAddOn(id)
```


:::caution
    Synchronous Mode will depcrecated with Node.js v16. With an update to the
    underlying Chromium version it became technically impossible to provide the
    same synchronous behavior. We recommend to start transition to asynchronous
    command execution. For more information, see our <a href="https://github.com/webdriverio/webdriverio/discussions/6702">RFC</a>.
:::
</TabItem>
</Tabs>








