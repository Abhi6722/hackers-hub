---
id: mjsonwp
title: Mobile JSON Wire Protocol
custom_edit_url: https://github.com/webdriverio/webdriverio/edit/main/packages/wdio-protocols/protocols/mjsonwp.json
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## getContext


Mobile JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/mobile-spec/blob/master/spec-draft.md#webviews-and-other-contexts).

##### Usage

```js
driver.getContext()
```






##### Returns

- **&lt;string|null&gt; <code><var>context</var></code>:** a string representing the current context or null representing &#39;no context&#39;






---

## switchContext


Mobile JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/mobile-spec/blob/master/spec-draft.md#webviews-and-other-contexts).

##### Usage

```js
driver.switchContext(name)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>name</var></code> | string | a string representing an available context |











---

## getContexts


Mobile JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/mobile-spec/blob/master/spec-draft.md#webviews-and-other-contexts).

##### Usage

```js
driver.getContexts()
```






##### Returns

- **&lt;string[]&gt; <code><var>contexts</var></code>:** an array of strings representing available contexts, e.g. &#39;WEBVIEW&#39;, or &#39;NATIVE&#39;






---

## getPageIndex


Mobile JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/appium/appium-base-driver/blob/master/docs/mjsonwp/protocol-methods.md#mobile-json-wire-protocol-endpoints).

##### Usage

```js
driver.getPageIndex()
```






##### Returns

- **&lt;string&gt; <code><var>pageIndex</var></code>:** 






---

## getNetworkConnection


Mobile JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/mobile-spec/blob/master/spec-draft.md#device-modes).

##### Usage

```js
driver.getNetworkConnection()
```






##### Returns

- **&lt;number&gt; <code><var>connectionType</var></code>:** see http://appium.io/docs/en/writing-running-appium/other/network-connection/






---

## setNetworkConnection


Mobile JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/mobile-spec/blob/master/spec-draft.md#device-modes).

##### Usage

```js
driver.setNetworkConnection(type)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>type</var></code> | number | a bit mask that should be translated to an integer value when serialized |











---

## touchPerform


Mobile JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/mobile-spec/blob/master/spec-draft.md#touch-gestures).

##### Usage

```js
driver.touchPerform(actions)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>actions</var></code> | object[] | a list of objects, each of which represents an input source and its associated actions |











---

## multiTouchPerform


Mobile JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/mobile-spec/blob/master/spec-draft.md#touch-gestures).

##### Usage

```js
driver.multiTouchPerform(actions, elementId)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>actions</var></code> | object[] | a list of objects, each of which represents an input source and its associated actions |
| <code><var>elementId</var></code><br /><span class="label labelWarning">optional</span> | object[] | the id of an element returned in a previous call to Find Element(s) |











---

## receiveAsyncResponse


Mobile JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/appium/appium-base-driver/blob/master/docs/mjsonwp/protocol-methods.md#mobile-json-wire-protocol-endpoints).

##### Usage

```js
driver.receiveAsyncResponse(status, value)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>status</var></code> | string | the expected status of the response |
| <code><var>value</var></code> | string | the expected value of the response |










