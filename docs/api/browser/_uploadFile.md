---
id: uploadFile
title: uploadFile
custom_edit_url: https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/browser/uploadFile.ts
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Uploads a file to the Selenium Standalone server or other browser driver
(e.g. Chromedriver) by using the [`file`](https://webdriver.io/docs/api/selenium#file) command.
_Note:_ that this command is only supported if you use a Selenium Hub or
Chromedriver directly.

__Note:__ this command uses an un-offical protocol feature that is currently
only supported in Chrome and when running a [Selenium Grid](https://www.selenium.dev/documentation/en/grid/).

##### Usage

```js
browser.uploadFile(localPath)
```

##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>localPath</var></code> | <code>String</code> | local path to file |

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

```js title="uploadFile.js"
const path = require('path');

it('should upload a file', async () => {
    await browser.url('https://the-internet.herokuapp.com/upload')

    const filePath = '/path/to/some/file.png'
    const remoteFilePath = await browser.uploadFile(filePath)

    await $('#file-upload').setValue(remoteFilePath)
    await $('#file-submit').click()
});
```

</TabItem>
<TabItem value="sync">

```js title="uploadFile.js"
const path = require('path');

it('should upload a file', () => {
    browser.url('https://the-internet.herokuapp.com/upload')

    const filePath = '/path/to/some/file.png'
    const remoteFilePath = browser.uploadFile(filePath)

    $('#file-upload').setValue(remoteFilePath)
    $('#file-submit').click()
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

