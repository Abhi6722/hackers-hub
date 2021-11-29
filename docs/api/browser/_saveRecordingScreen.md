---
id: saveRecordingScreen
title: saveRecordingScreen
custom_edit_url: https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/browser/saveRecordingScreen.ts
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Save a video started by [`startRecordingScreen`](/docs/api/appium#startrecordingscreen) command to file.

:::info

This command is only supported for mobile sessions running on [Appium](http://appium.io/docs/en/commands/device/recording-screen/start-recording-screen/).

:::

##### Usage

```js
browser.saveRecordingScreen(filepath)
```

##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>filepath</var></code> | <code>String</code> | full or relative to the execution directory path to the generated video |

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

```js title="saveRecordingScreen.js"
it('should save a video', async () => {
    await browser.startRecordingScreen();
    await $('~BUTTON').click();
    await browser.saveRecordingScreen('./some/path/video.mp4');
});
```

</TabItem>
<TabItem value="sync">

```js title="saveRecordingScreen.js"
it('should save a video', () => {
    browser.startRecordingScreen();
    $('~BUTTON').click();
    browser.saveRecordingScreen('./some/path/video.mp4');
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

