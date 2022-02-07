---
id: throttle
title: throttle
custom_edit_url: https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/browser/throttle.ts
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Throttle the network capabilities of the browser. This can help to
emulate certain scenarios where a user loses their internet connection
and your app needs to address that.

There are many presets available with default configurations for ease of use.
They are `offline`, `GPRS`, `Regular2G`, `Good2G`, `Regular3G`, `Good3G`,
`Regular4G`, `DSL`, `WiFi`, `online`.

You can see the values for these presets [in the source code](https://github.com/webdriverio/webdriverio/blob/6824e4eb118a8d20685f12f4bc42f13fd56f8a25/packages/webdriverio/src/commands/browser/throttle.js#L29).

:::info

Note that using the `throttle` command requires support for Chrome DevTools protocol and e.g.
can not be used when running automated tests in the cloud. Find out more in the
[Automation Protocols](/docs/automationProtocols) section.

:::

##### Usage

```js
browser.throttle({ offline, latency, downloadThroughput, uploadThroughput })
```

##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>params</var></code> | <code>ThrottleOptions</code> | parameters for throttling |
| <code><var>params.offline</var></code> | <code>Boolean</code> | True to emulate internet disconnection. |
| <code><var>params.latency</var></code> | <code>Number</code> | Minimum latency from request sent to response headers received (ms). |
| <code><var>params.downloadThroughput</var></code> | <code>Number</code> | Maximal aggregated download throughput (bytes/sec). -1 disables download throttling. |
| <code><var>params.uploadThroughput</var></code> | <code>Number</code> | Maximal aggregated upload throughput (bytes/sec). -1 disables upload throttling. |

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

```js title="throttle.js"
it('should throttle the network', async () => {
    // via static string preset
    await browser.throttle('Regular 3G')

    // via custom values
    await browser.throttle({
        offline: false,
        downloadThroughput: 200 * 1024 / 8,
        uploadThroughput: 200 * 1024 / 8,
        latency: 20
    })
});
```

</TabItem>
<TabItem value="sync">

```js title="throttle.js"
it('should throttle the network', () => {
    // via static string preset
    browser.throttle('Regular 3G')

    // via custom values
    browser.throttle({
        offline: false,
        downloadThroughput: 200 * 1024 / 8,
        uploadThroughput: 200 * 1024 / 8,
        latency: 20
    })
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

