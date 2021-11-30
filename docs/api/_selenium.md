---
id: selenium
title: Selenium Standalone
custom_edit_url: https://github.com/webdriverio/webdriverio/edit/main/packages/wdio-protocols/protocols/selenium.json
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## file


Upload a file to remote machine on which the browser is running.<br /><br />Selenium Standalone command. More details can be found in the [official protocol docs](https://www.seleniumhq.org/).

##### Usage

```js
browser.file(file)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>file</var></code> | string | Base64-encoded zip archive containing __single__ file which to upload. In case base64-encoded data does not represent a zip archive or archive contains more than one file it will throw an unknown error. |






##### Returns

- **&lt;String&gt; <code><var>path</var></code>:** Absolute path of uploaded file on remote machine.






---

## getHubConfig


Receive hub config remotely.<br /><br />Selenium Standalone command. More details can be found in the [official protocol docs](https://github.com/nicegraham/selenium-grid2-api#gridapihub).

##### Usage

```js
browser.getHubConfig()
```






##### Returns

- **&lt;Object&gt; <code><var>config</var></code>:** Returns the hub config with slotCount, timeouts and other information.






---

## gridTestSession


Get the details of the Selenium Grid node running a session.<br /><br />Selenium Standalone command. More details can be found in the [official protocol docs](https://github.com/nicegraham/selenium-grid2-api#gridapitestsession).

##### Usage

```js
browser.gridTestSession(session)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>session</var></code> | String | The id of the session to receive hub details for. |






##### Returns

- **&lt;Object&gt; <code><var>details</var></code>:** Object containing information about session details.






---

## gridProxyDetails


Get proxy details.<br /><br />Selenium Standalone command. More details can be found in the [official protocol docs](https://github.com/nicegraham/selenium-grid2-api#gridapiproxy).

##### Usage

```js
browser.gridProxyDetails(id)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>id</var></code> | string | the id of the proxy (can be received using gridTestSession command). |






##### Returns

- **&lt;Object&gt; <code><var>details</var></code>:** Object containing information about proxy.






---

## manageSeleniumHubLifecycle


Manage lifecycle of hub node.<br /><br />Selenium Standalone command. More details can be found in the [official protocol docs](https://github.com/nicegraham/selenium-grid2-api#lifecycle-manager).

##### Usage

```js
browser.manageSeleniumHubLifecycle(action)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>action</var></code> | String | Command to call on Selenium Hub. The only implemented action is to &#39;shutdown&#39; the hub. |











---

## queryGrid


Send GraphQL queries to the Selenium (hub or node) server to fetch data. (Only supported with Selenium v4 Server)<br /><br />Selenium Standalone command. More details can be found in the [official protocol docs](https://www.selenium.dev/documentation/grid/advanced_features/graphql_support/).

##### Usage

```js
browser.queryGrid(query)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>query</var></code> | string | A GraphQL query to be send to the server. |




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
const result = await browser.queryGrid('{ nodesInfo { nodes { status, uri } } }');
console.log(JSON.stringify(result, null, 4))
/**
 * outputs:
 * {
 *   "data": {
 *     "nodesInfo": {
 *       "nodes": [{
 *         "status": "UP",
 *         "uri": "http://192.168.0.39:4444"
 *       }]
 *     }
 *   }
 * }
 */
```

</TabItem>
<TabItem value="sync">

```js
const result = browser.queryGrid('{ nodesInfo { nodes { status, uri } } }');
console.log(JSON.stringify(result, null, 4))
/**
 * outputs:
 * {
 *   "data": {
 *     "nodesInfo": {
 *       "nodes": [{
 *         "status": "UP",
 *         "uri": "http://192.168.0.39:4444"
 *       }]
 *     }
 *   }
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

- **&lt;Object&gt; <code><var>data</var></code>:** Result of the GraphQL query.





