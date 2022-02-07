---
id: saucelabs
title: Sauce Labs
custom_edit_url: https://github.com/webdriverio/webdriverio/edit/main/packages/wdio-protocols/protocols/saucelabs.json
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

All commands are only supported on Chrome using Sauce Labs
[Extended Debugging](https://wiki.saucelabs.com/pages/viewpage.action?pageId=70072943)
capabilities. You can enable these by setting the following Sauce options:


```js
{
    browserName: 'Chrome',
    browserVersion: 'latest',
    platformName: 'Windows 10',
    'sauce:options': {
        extendedDebugging: true
    }
}
```

---

## getPageLogs


Get webpage specific log information based on the last page load.<br /><br />Sauce Labs command. More details can be found in the [official protocol docs](https://wiki.saucelabs.com/display/DOCS/Custom+Sauce+Labs+WebDriver+Extensions+for+Network+and+Log+Commands#CustomSauceLabsWebDriverExtensionsforNetworkandLogCommands-ExtendedDebuggingTools).

##### Usage

```js
browser.getPageLogs(type)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>type</var></code> | string | log type (e.g. sauce:network&#39;, &#39;sauce:performance&#39;) |




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

```js
// Get Network Logs
console.log(browser.getPageLogs('sauce:network'));
/**
 * outputs:
 * [{
 *   "url": "https://app.saucelabs.com/dashboard",
 *   "statusCode": 200,
 *   "method": "GET",
 *   "requestHeaders": {
 *     ...
 *   },
 *   "responseHeaders": {
 *     ...
 *   },
 *   "timing": {
 *     ...
 *   }
 * }, {,
 *   ...
 * }]
 */
```

```js
// Get Performance Logs (needs capturePerformance capability see: https://wiki.saucelabs.com/display/DOCS/Measure+Page+Load+Performance+Using+Test+Automation#MeasurePageLoadPerformanceUsingTestAutomation-EnableYourScript)
console.log(browser.getPageLogs('sauce:performance'));
/**
 * outputs:
 * {
 *   "speedIndex": 1472.023,
 *   "timeToFirstInteractive": 1243.214,
 *   "firstMeaningfulPaint": 892.643,
 *   ...
 * }
 */
```

</TabItem>
<TabItem value="sync">

```js
// Get Network Logs
console.log(browser.getPageLogs('sauce:network'));
/**
 * outputs:
 * [{
 *   "url": "https://app.saucelabs.com/dashboard",
 *   "statusCode": 200,
 *   "method": "GET",
 *   "requestHeaders": {
 *     ...
 *   },
 *   "responseHeaders": {
 *     ...
 *   },
 *   "timing": {
 *     ...
 *   }
 * }, {,
 *   ...
 * }]
 */
```

```js
// Get Performance Logs (needs capturePerformance capability see: https://wiki.saucelabs.com/display/DOCS/Measure+Page+Load+Performance+Using+Test+Automation#MeasurePageLoadPerformanceUsingTestAutomation-EnableYourScript)
console.log(browser.getPageLogs('sauce:performance'));
/**
 * outputs:
 * {
 *   "speedIndex": 1472.023,
 *   "timeToFirstInteractive": 1243.214,
 *   "firstMeaningfulPaint": 892.643,
 *   ...
 * }
 */
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

- **&lt;object&gt; <code><var>log</var></code>:** log output of desired type (see example)






---

## throttleNetwork


With network conditioning you can test your site on a variety of network connections, including Edge, 3G, and even offline. You can throttle the data throughput, including the maximum download and upload throughput, and use latency manipulation to enforce a minimum delay in connection round-trip time (RTT).<br /><br />Sauce Labs command. More details can be found in the [official protocol docs](https://wiki.saucelabs.com/display/DOCS/Custom+Sauce+Labs+WebDriver+Extensions+for+Network+and+Log+Commands#CustomSauceLabsWebDriverExtensionsforNetworkandLogCommands-ThrottleNetworkCapabilities).

##### Usage

```js
browser.throttleNetwork(condition)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>condition</var></code> | string, object | network condition to set (e.g. &#39;online&#39;, &#39;offline&#39;, &#39;GPRS&#39;, &#39;Regular 2G&#39;, &#39;Good 2G&#39;, &#39;Regular 3G&#39;, &#39;Good 3G&#39;, &#39;Regular 4G&#39;, &#39;DSL&#39;, &#39;Wifi&#39;) |




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

```js
// predefined network condition
browser.throttleNetwork('offline')
```

```js
// custom network condition
browser.throttleNetwork({
  download: 1000,
  upload: 500,
  latency: 40'
})
```

</TabItem>
<TabItem value="sync">

```js
// predefined network condition
browser.throttleNetwork('offline')
```

```js
// custom network condition
browser.throttleNetwork({
  download: 1000,
  upload: 500,
  latency: 40'
})
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

## throttleCPU


You can throttle the CPU in DevTools to understand how your page performs under that constraint.<br /><br />Sauce Labs command. More details can be found in the [official protocol docs](https://wiki.saucelabs.com/display/DOCS/Custom+Sauce+Labs+WebDriver+Extensions+for+Network+and+Log+Commands#CustomSauceLabsWebDriverExtensionsforNetworkandLogCommands-ThrottleCPUCapabilities).

##### Usage

```js
browser.throttleCPU(rate)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>rate</var></code> | number | Rate on how much the CPU should get throttled. |




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

```js
// throttle CPU and make it run 4x slower
browser.throttleCPU(4)
```

```js
// reset CPU throttling
browser.throttleCPU(0)
```

</TabItem>
<TabItem value="sync">

```js
// throttle CPU and make it run 4x slower
browser.throttleCPU(4)
```

```js
// reset CPU throttling
browser.throttleCPU(0)
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

## interceptRequest


Allows modifying any request made by the browser. You can blacklist, modify, or redirect these as required for your tests.<br /><br />Sauce Labs command. More details can be found in the [official protocol docs](https://wiki.saucelabs.com/display/DOCS/Custom+Sauce+Labs+WebDriver+Extensions+for+Network+and+Log+Commands#CustomSauceLabsWebDriverExtensionsforNetworkandLogCommands-InterceptNetworkRequests).

##### Usage

```js
browser.interceptRequest(rule)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>rule</var></code> | object | A rule describing the request interception. |




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

```js
// redirect a request
browser.interceptRequest({
  url: 'https://saucelabs.com',
  redirect: 'https://google.com'
})
```

```js
// Blacklist requests to 3rd party vendors
browser.interceptRequest({
  url: 'https://api.segment.io/v1/p',
  error: 'Failed'
})
```

```js
// Modify requests to REST API (Mock REST API response)
browser.interceptRequest({
  url: 'http://sampleapp.appspot.com/api/todos',
  response: {
    headers: {
      'x-custom-headers': 'foobar'
    },
    body: [{
      title: 'My custom todo',
      order: 1,
      completed: false,
      url: 'http://todo-backend-express.herokuapp.com/15727'
    }]
  }
})
```

</TabItem>
<TabItem value="sync">

```js
// redirect a request
browser.interceptRequest({
  url: 'https://saucelabs.com',
  redirect: 'https://google.com'
})
```

```js
// Blacklist requests to 3rd party vendors
browser.interceptRequest({
  url: 'https://api.segment.io/v1/p',
  error: 'Failed'
})
```

```js
// Modify requests to REST API (Mock REST API response)
browser.interceptRequest({
  url: 'http://sampleapp.appspot.com/api/todos',
  response: {
    headers: {
      'x-custom-headers': 'foobar'
    },
    body: [{
      title: 'My custom todo',
      order: 1,
      completed: false,
      url: 'http://todo-backend-express.herokuapp.com/15727'
    }]
  }
})
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

## assertPerformance


Assert against the performance baseline of your app.<br /><br />Sauce Labs command. More details can be found in the [official protocol docs](https://wiki.saucelabs.com/display/DOCS/Custom+Sauce+Labs+WebDriver+Extensions+for+Network+and+Log+Commands).

##### Usage

```js
browser.assertPerformance(name, metrics)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>name</var></code> | string | Name of the job you created your baseline with. |
| <code><var>metrics</var></code><br /><span class="label labelWarning">optional</span> | string[] | Name of metrics you want to assert agains the baseline. |




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
// test performance for a page
browser.url('https://webdriver.io')
const hasRegression = browser.assertPerformance({
  name: 'my performance test', // make sure that the name is also set in the sauce options in your capabilities
  metrics: ['score', 'firstPaint']
})
```

</TabItem>
<TabItem value="sync">

```js
// test performance for a page
browser.url('https://webdriver.io')
const hasRegression = browser.assertPerformance({
  name: 'my performance test', // make sure that the name is also set in the sauce options in your capabilities
  metrics: ['score', 'firstPaint']
})
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

- **&lt;object&gt; <code><var>hasRegression</var></code>:** An object containing the result as well as metrics about the result.






---

## jankinessCheck


Perform a scroll test that evaluates the jankiness of the application.<br /><br />Sauce Labs command. More details can be found in the [official protocol docs](https://wiki.saucelabs.com/display/DOCS/Custom+Sauce+Labs+WebDriver+Extensions+for+Network+and+Log+Commands).

##### Usage

```js
browser.jankinessCheck()
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
// test performance for a page
browser.url('https://webdriver.io')
browser.jankinessCheck()
```

</TabItem>
<TabItem value="sync">

```js
// test performance for a page
browser.url('https://webdriver.io')
browser.jankinessCheck()
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

- **&lt;object&gt; <code><var>testResults</var></code>:** An object containing the score as well as metrics around how smooth the UX of the page was during the test.






---

## mockRequest


Mocks a network resource.<br /><br />Sauce Labs command. More details can be found in the [official protocol docs](https://wiki.saucelabs.com/display/DOCS/Custom+Sauce+Labs+WebDriver+Extensions+for+Network+and+Log+Commands).

##### Usage

```js
browser.mockRequest(url, filterOptions)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>url</var></code> | string | URL glob to match url to mock. |
| <code><var>filterOptions</var></code><br /><span class="label labelWarning">optional</span> | object | Additional filter options for url to mock (e.g. headers, method). |






##### Returns

- **&lt;object&gt; <code><var>mockId</var></code>:** An object containing the id of a mock resource.






---

## getMockCalls


Receive request information about requests that match the mocked resource.<br /><br />Sauce Labs command. More details can be found in the [official protocol docs](https://wiki.saucelabs.com/display/DOCS/Custom+Sauce+Labs+WebDriver+Extensions+for+Network+and+Log+Commands).

##### Usage

```js
browser.getMockCalls(mockId)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>mockId</var></code> | String | the id of a mock |






##### Returns

- **&lt;object&gt; <code><var>requests</var></code>:** A list of request information.






---

## clearMockCalls


Clear list of mock calls.<br /><br />Sauce Labs command. More details can be found in the [official protocol docs](https://wiki.saucelabs.com/display/DOCS/Custom+Sauce+Labs+WebDriver+Extensions+for+Network+and+Log+Commands).

##### Usage

```js
browser.clearMockCalls(mockId, restore)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>mockId</var></code> | String | the id of a mock |
| <code><var>restore</var></code><br /><span class="label labelWarning">optional</span> | boolean | Set to true if mock should be restored as well. |











---

## respondMock


Respond if mock matches a specific resource.<br /><br />Sauce Labs command. More details can be found in the [official protocol docs](https://wiki.saucelabs.com/display/DOCS/Custom+Sauce+Labs+WebDriver+Extensions+for+Network+and+Log+Commands).

##### Usage

```js
browser.respondMock(mockId, payload)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>mockId</var></code> | String | the id of a mock |
| <code><var>payload</var></code><br /><span class="label labelWarning">optional</span> | object | Information on mock response. |










