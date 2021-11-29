---
id: jsonwp
title: JSON Wire Protocol
custom_edit_url: https://github.com/webdriverio/webdriverio/edit/main/packages/wdio-protocols/protocols/jsonwp.json
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::caution depcrecated

The JSONWireProtocol is decrecated and replaced by the [WebDriver](/docs/api/webdriver)
protocol.

:::

---

## status


Query the server's current status. The server should respond with a general "HTTP 200 OK" response if it is alive and accepting commands. The response body should be a JSON object describing the state of the server. All server implementations should return two basic objects describing the server's current platform and when the server was built. All fields are optional; if omitted, the client should assume the value is unknown. Furthermore, server implementations may include additional fields not listed here.<br /><br />JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#status).

##### Usage

```js
browser.status()
```






##### Returns

- **&lt;Object&gt; <code><var>status</var></code>:** An object describing the general status of the server.






---

## newSession


Create a new session. The server should attempt to create a session that most closely matches the desired and required capabilities. Required capabilities have higher priority than desired capabilities and must be set for the session to be created.<br /><br />JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#session-1).

##### Usage

```js
browser.newSession(desiredCapabilities, requiredCapabilities)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>desiredCapabilities</var></code> | object | An object describing the session&#39;s desired capabilities. |
| <code><var>requiredCapabilities</var></code><br /><span class="label labelWarning">optional</span> | object | An object describing the session&#39;s required capabilities (Optional). |






##### Returns

- **&lt;Object&gt; <code><var>capabilities</var></code>:** An object describing the session&#39;s capabilities.






---

## getSessions


Returns a list of the currently active sessions. Each session will be returned as a list of JSON objects containing `id` and `capabilities`.<br /><br />JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessions).

##### Usage

```js
browser.getSessions()
```






##### Returns

- **&lt;Object[]&gt; <code><var>capabilities</var></code>:** A list of the currently active sessions.






---

## getSession


Retrieve the capabilities of the specified session.<br /><br />JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#get-sessionsessionid).

##### Usage

```js
browser.getSession()
```






##### Returns

- **&lt;Object&gt; <code><var>capabilities</var></code>:** An object describing the session&#39;s capabilities.






---

## deleteSession


Delete the session.<br /><br />JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#delete-sessionsessionid).

##### Usage

```js
browser.deleteSession()
```











---

## setTimeouts


Configure the amount of time that a particular type of operation can execute for before they are aborted and a |Timeout| error is returned to the client.<br /><br />JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidtimeouts).

##### Usage

```js
browser.setTimeouts(type, ms)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>type</var></code> | string | The type of operation to set the timeout for. Valid values are: &#34;script&#34; for script timeouts, &#34;implicit&#34; for modifying the implicit wait timeout and &#34;page load&#34; for setting a page load timeout. |
| <code><var>ms</var></code> | number | The amount of time, in milliseconds, that time-limited commands are permitted to run |











---

## setAsyncTimeout


Set the amount of time, in milliseconds, that asynchronous scripts executed by `/session/:sessionId/execute_async` are permitted to run before they are aborted and a `Timeout` error is returned to the client.<br /><br />JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidtimeoutsasync_script).

##### Usage

```js
browser.setAsyncTimeout(ms)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>ms</var></code> | number | The amount of time, in milliseconds, that time-limited commands are permitted to run |











---

## setImplicitTimeout


Set the amount of time the driver should wait when searching for elements. When searching for a single element, the driver should poll the page until an element is found or the timeout expires, whichever occurs first. When searching for multiple elements, the driver should poll the page until at least one element is found or the timeout expires, at which point it should return an empty list. If this command is never sent, the driver should default to an implicit wait of 0ms.<br /><br />JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidtimeoutsimplicit_wait).

##### Usage

```js
browser.setImplicitTimeout(ms)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>ms</var></code> | number | The amount of time, in milliseconds, to wait on an element. |











---

## getUrl


Retrieve the URL of the current page.<br /><br />JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#get-sessionsessionidurl).

##### Usage

```js
browser.getUrl()
```






##### Returns

- **&lt;String&gt; <code><var>url</var></code>:** The current URL.






---

## navigateTo


Navigate to a new URL.<br /><br />JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#post-sessionsessionidurl).

##### Usage

```js
browser.navigateTo(url)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>url</var></code> | string | The URL to navigate to. |











---

## back


Navigate backwards in the browser history, if possible.<br /><br />JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidback).

##### Usage

```js
browser.back()
```











---

## forward


Navigate forwards in the browser history, if possible.<br /><br />JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidforward).

##### Usage

```js
browser.forward()
```











---

## refresh


Refresh the current page.<br /><br />JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidrefresh).

##### Usage

```js
browser.refresh()
```











---

## getTitle


Get the current page title.<br /><br />JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidtitle).

##### Usage

```js
browser.getTitle()
```






##### Returns

- **&lt;String&gt; <code><var>title</var></code>:** The current page title.






---

## getWindowHandle


Retrieve the current window handle.<br /><br />JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidwindow_handle).

##### Usage

```js
browser.getWindowHandle()
```






##### Returns

- **&lt;String&gt; <code><var>windowHandle</var></code>:** The current window handle.






---

## getWindowHandles


Retrieve the list of all window handles available to the session.<br /><br />JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidwindow_handles).

##### Usage

```js
browser.getWindowHandles()
```






##### Returns

- **&lt;String[]&gt; <code><var>windowHandles</var></code>:** A list of window handles.






---

## closeWindow


Close the current window.<br /><br />JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#delete-sessionsessionidwindow).

##### Usage

```js
browser.closeWindow()
```











---

## switchToWindow


Change focus to another window. The window to change focus to may be specified by its server assigned window handle, or by the value of its `name` attribute.<br /><br />JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#post-sessionsessionidwindow).

##### Usage

```js
browser.switchToWindow(name)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>name</var></code> | string | The window to change focus to |











---

## switchToFrame


Change focus to another frame on the page. If the frame `id` is `null`, the server should switch to the page's default content.<br /><br />JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidframe).

##### Usage

```js
browser.switchToFrame(id)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>id</var></code> | string, number, object, null | Identifier for the frame to change focus to |











---

## switchToParentFrame


Change focus to the parent context. If the current context is the top level browsing context, the context remains unchanged.<br /><br />JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidframeparent).

##### Usage

```js
browser.switchToParentFrame()
```











---

## getWindowPosition


Get the position of the current focussed window.<br /><br />JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#get-sessionsessionidwindowwindowhandleposition).

##### Usage

```js
browser.getWindowPosition()
```






##### Returns

- **&lt;Object&gt; <code><var>positon</var></code>:** The X and Y coordinates for the window, relative to the upper left corner of the screen.






---

## setWindowPosition


Change the position of the current focussed window.<br /><br />JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#post-sessionsessionidwindowwindowhandleposition).

##### Usage

```js
browser.setWindowPosition(x, y)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>x</var></code> | number | The X coordinate to position the window at, relative to the upper left corner of the screen. |
| <code><var>y</var></code> | number | The Y coordinate to position the window at, relative to the upper left corner of the screen. |






##### Returns

- **&lt;Object&gt; <code><var>positon</var></code>:** The X and Y coordinates for the window, relative to the upper left corner of the screen.






---

## _getWindowSize


Get the size of the current focused window.<br /><br />JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#get-sessionsessionidwindowwindowhandlesize).

##### Usage

```js
browser._getWindowSize()
```






##### Returns

- **&lt;Object&gt; <code><var>size</var></code>:** The size of the window.






---

## _setWindowSize


Change the size of the current focused window.<br /><br />JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#post-sessionsessionidwindowwindowhandlesize).

##### Usage

```js
browser._setWindowSize(width, height)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>width</var></code> | number | the new window width |
| <code><var>height</var></code> | number | the new window height |











---

## maximizeWindow


Maximize the current focused window if not already maximized.<br /><br />JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidwindowwindowhandlemaximize).

##### Usage

```js
browser.maximizeWindow()
```











---

## findElement


Search for an element on the page, starting from the document root. The located element will be returned as a WebElement JSON object. The table below lists the locator strategies that each server should support. Each locator must return the first matching element located in the DOM.<br /><br />JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidelement).

##### Usage

```js
browser.findElement(using, value)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>using</var></code> | string | the locator strategy to use |
| <code><var>value</var></code> | string | the search target |






##### Returns

- **&lt;object&gt; <code><var>ELEMENT</var></code>:** A WebElement JSON object for the located element.






---

## findElements


Search for multiple elements on the page, starting from the document root. The located elements will be returned as a WebElement JSON objects. The table below lists the locator strategies that each server should support. Elements should be returned in the order located in the DOM.<br /><br />JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidelements).

##### Usage

```js
browser.findElements(using, value)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>using</var></code> | string | the locator strategy to use |
| <code><var>value</var></code> | string | the search target |






##### Returns

- **&lt;object[]&gt; <code><var>ELEMENTS</var></code>:** A list of WebElement JSON objects for the located elements.






---

## findElementFromElement


Search for an element on the page, starting from the identified element. The located element will be returned as a WebElement JSON object. The table below lists the locator strategies that each server should support. Each locator must return the first matching element located in the DOM.<br /><br />JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidelementidelement).

##### Usage

```js
browser.findElementFromElement(elementId, using, value)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>elementId</var></code> | String | ID of the element to route the command to |
| <code><var>using</var></code> | string | the locator strategy to use |
| <code><var>value</var></code> | string | the search target |






##### Returns

- **&lt;object&gt; <code><var>ELEMENT</var></code>:** A WebElement JSON object for the located element.






---

## findElementsFromElement


Search for multiple elements on the page, starting from the identified element. The located elements will be returned as a WebElement JSON objects. The table below lists the locator strategies that each server should support. Elements should be returned in the order located in the DOM.<br /><br />JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidelementidelements).

##### Usage

```js
browser.findElementsFromElement(elementId, using, value)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>elementId</var></code> | String | ID of the element to route the command to |
| <code><var>using</var></code> | string | the locator strategy to use |
| <code><var>value</var></code> | string | the search target |






##### Returns

- **&lt;object[]&gt; <code><var>ELEMENTS</var></code>:** A list of WebElement JSON objects for the located elements.






---

## getActiveElement


Get the element on the page that currently has focus. The element will be returned as a WebElement JSON object.<br /><br />JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidelementactive).

##### Usage

```js
browser.getActiveElement()
```






##### Returns

- **&lt;String&gt; <code><var>ELEMENT</var></code>:** A WebElement JSON object for the active element.






---

## isElementSelected


Determine if an `OPTION` element, or an `INPUT` element of type `checkbox` or `radiobutton` is currently selected.<br /><br />JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidelementidselected).

##### Usage

```js
browser.isElementSelected(elementId)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>elementId</var></code> | String | ID of the element to route the command to |






##### Returns

- **&lt;Boolean&gt; <code><var>isSelected</var></code>:** Whether the element is selected.






---

## isElementDisplayed


Determine if an element is currently displayed.<br /><br />JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidelementiddisplayed).

##### Usage

```js
browser.isElementDisplayed(elementId)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>elementId</var></code> | String | ID of the element to route the command to |






##### Returns

- **&lt;Boolean&gt; <code><var>isDisplayed</var></code>:** Whether the element is displayed.






---

## getElementAttribute


Get the value of an element's attribute.<br /><br />JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidelementidattributename).

##### Usage

```js
browser.getElementAttribute(elementId, name)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>elementId</var></code> | String | ID of the element to route the command to |
| <code><var>name</var></code> | String | name of the attribute value to retrieve |






##### Returns

- **&lt;String|Null&gt; <code><var>attribute</var></code>:** The value of the attribute, or null if it is not set on the element.






---

## getElementCSSValue


Query the value of an element's computed CSS property. The CSS property to query should be specified using the CSS property name, __not__ the JavaScript property name (e.g. `background-color` instead of `backgroundColor`).<br /><br />JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidelementidcsspropertyname).

##### Usage

```js
browser.getElementCSSValue(elementId, propertyName)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>elementId</var></code> | String | ID of the element to route the command to |
| <code><var>propertyName</var></code> | String | name of the CSS property to retrieve |






##### Returns

- **&lt;String&gt; <code><var>propertyName</var></code>:** The value of the specified CSS property.






---

## getElementText


Returns the visible text for the element.<br /><br />JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidelementidtext).

##### Usage

```js
browser.getElementText(elementId)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>elementId</var></code> | String | ID of the element to route the command to |






##### Returns

- **&lt;String&gt; <code><var>text</var></code>:** The visible text of the element.






---

## getElementTagName


Query for an element's tag name.<br /><br />JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidelementidname).

##### Usage

```js
browser.getElementTagName(elementId)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>elementId</var></code> | String | ID of the element to route the command to |






##### Returns

- **&lt;String&gt; <code><var>tagName</var></code>:** The element&#39;s tag name, as a lowercase string.






---

## getElementLocation


Determine an element's location on the page. The point `(0, 0)` refers to the upper-left corner of the page. The element's coordinates are returned as a JSON object with `x` and `y` properties.<br /><br />JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidelementidlocation).

##### Usage

```js
browser.getElementLocation(elementId)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>elementId</var></code> | String | ID of the element to route the command to |






##### Returns

- **&lt;Object&gt; <code><var>location</var></code>:** The X and Y coordinates for the element on the page.






---

## getElementLocationInView


Determine an element's location on the screen once it has been scrolled into view.<br /><br />__Note:__ This is considered an internal command and should only be used to determine an element's location for correctly generating native events.<br /><br />JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidelementidlocation_in_view).

##### Usage

```js
browser.getElementLocationInView(elementId)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>elementId</var></code> | String | ID of the element to route the command to |






##### Returns

- **&lt;Object&gt; <code><var>location</var></code>:** The X and Y coordinates for the element on the page.






---

## getElementSize


Determine an element's size in pixels. The size will be returned as a JSON object with `width` and `height` properties.<br /><br />JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidelementidsize).

##### Usage

```js
browser.getElementSize(elementId)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>elementId</var></code> | String | ID of the element to route the command to |






##### Returns

- **&lt;Object&gt; <code><var>size</var></code>:** The width and height of the element, in pixels.






---

## isElementEnabled


Determine if an element is currently enabled.<br /><br />JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidelementidenabled).

##### Usage

```js
browser.isElementEnabled(elementId)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>elementId</var></code> | String | ID of the element to route the command to |






##### Returns

- **&lt;Boolean&gt; <code><var>isEnabled</var></code>:** Whether the element is enabled.






---

## elementClick


Click any mouse button (at the coordinates set by the last moveto command). Note that calling this command after calling buttondown and before calling button up (or any out-of-order interactions sequence) will yield undefined behaviour).<br /><br />JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidelementidclick).

##### Usage

```js
browser.elementClick(elementId)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>elementId</var></code> | String | ID of the element to route the command to |











---

## elementEquals


Compare elements with each other.<br /><br />JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidelementidequalsother).

##### Usage

```js
browser.elementEquals(elementId, otherElementId)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>elementId</var></code> | String | ID of the element to route the command to |
| <code><var>otherElementId</var></code> | String | ID of the element to compare against |






##### Returns

- **&lt;Boolean&gt; <code><var>isEqual</var></code>:** Whether the two IDs refer to the same element.






---

## elementSubmit


JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidelementidsubmit).

##### Usage

```js
browser.elementSubmit(elementId)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>elementId</var></code> | String | ID of the form element to be submitted |











---

## elementClear


JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidelementidclear).

##### Usage

```js
browser.elementClear(elementId)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>elementId</var></code> | String | ID of the element to route the command to |











---

## elementSendKeys


JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidelementidvalue).

##### Usage

```js
browser.elementSendKeys(elementId, value)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>elementId</var></code> | String | ID of the element to route the command to |
| <code><var>value</var></code> | string[] | The sequence of keys to type. An array must be provided. |











---

## sendKeys


JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidkeys).

##### Usage

```js
browser.sendKeys(value)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>value</var></code> | string[] | The sequence of keys to type. An array must be provided. |











---

## getPageSource


JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidsource).

##### Usage

```js
browser.getPageSource()
```






##### Returns

- **&lt;String&gt; <code><var>source</var></code>:** The current page source.






---

## executeScript


JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidexecute).

##### Usage

```js
browser.executeScript(script, args)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>script</var></code> | string | the script to execute |
| <code><var>args</var></code><br /><span class="label labelWarning">optional</span> | string, object, number, boolean, undefined[] | the script arguments |






##### Returns

- **&lt;*&gt; <code><var>result</var></code>:** The script result.






---

## executeAsyncScript


JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidexecute_async).

##### Usage

```js
browser.executeAsyncScript(script, args)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>script</var></code> | string | the script to execute |
| <code><var>args</var></code> | string, object, number, boolean, undefined[] | the script arguments |






##### Returns

- **&lt;*&gt; <code><var>result</var></code>:** The script result.






---

## getAllCookies


JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#get-sessionsessionidcookie).

##### Usage

```js
browser.getAllCookies()
```






##### Returns

- **&lt;Object[]&gt; <code><var>cookies</var></code>:** A list of cookies.






---

## addCookie


JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#post-sessionsessionidcookie).

##### Usage

```js
browser.addCookie(cookie)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>cookie</var></code> | object | A JSON object representing a cookie. It must have at least the name and value fields and could have more, including expiry-time and so on |











---

## deleteAllCookies


JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#delete-sessionsessionidcookie).

##### Usage

```js
browser.deleteAllCookies()
```











---

## deleteCookie


JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#delete-sessionsessionidcookiename).

##### Usage

```js
browser.deleteCookie(name)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>name</var></code> | String | name of the cookie to retrieve |











---

## dismissAlert


JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessioniddismiss_alert).

##### Usage

```js
browser.dismissAlert()
```











---

## acceptAlert


JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidaccept_alert).

##### Usage

```js
browser.acceptAlert()
```











---

## getAlertText


JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#get-sessionsessionidalert_text).

##### Usage

```js
browser.getAlertText()
```






##### Returns

- **&lt;String&gt; <code><var>alertText</var></code>:** The text of the currently displayed alert.






---

## sendAlertText


JSON Wire Protocol command. More details can be found in the [official protocol docs](https://w3c.github.io/webdriver/webdriver-spec.html#dfn-send-alert-text).

##### Usage

```js
browser.sendAlertText(text)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>text</var></code> | string | keystrokes to send to the prompt() dialog |











---

## takeScreenshot


JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidscreenshot).

##### Usage

```js
browser.takeScreenshot()
```






##### Returns

- **&lt;String&gt; <code><var>screenshot</var></code>:** screenshot as a base64 encoded PNG






---

## getAvailableEngines


JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidimeavailable_engines).

##### Usage

```js
browser.getAvailableEngines()
```






##### Returns

- **&lt;String[]&gt; <code><var>engines</var></code>:** A list of available engines






---

## getActiveEngine


JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidimeactive_engine).

##### Usage

```js
browser.getActiveEngine()
```






##### Returns

- **&lt;String&gt; <code><var>engine</var></code>:** The name of the active IME engine






---

## isIMEActivated


JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidimeactivated).

##### Usage

```js
browser.isIMEActivated()
```






##### Returns

- **&lt;Boolean&gt; <code><var>isActive</var></code>:** true if IME input is available and currently active, false otherwise






---

## deactivateIME


JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidimedeactivate).

##### Usage

```js
browser.deactivateIME()
```











---

## activateIME


JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidimeactivate).

##### Usage

```js
browser.activateIME(engine)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>engine</var></code> | string | name of the engine to activate |











---

## getOrientation


JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#get-sessionsessionidorientation).

##### Usage

```js
browser.getOrientation()
```






##### Returns

- **&lt;String&gt; <code><var>orientation</var></code>:** The current browser orientation corresponding to a value defined in ScreenOrientation: {LANDSCAPE|PORTRAIT}.






---

## setOrientation


JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#post-sessionsessionidorientation).

##### Usage

```js
browser.setOrientation(orientation)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>orientation</var></code> | string | the new browser orientation as defined in ScreenOrientation: {LANDSCAPE|PORTRAIT} |











---

## moveToElement


JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidmoveto).

##### Usage

```js
browser.moveToElement(element, xoffset, yoffset)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>element</var></code><br /><span class="label labelWarning">optional</span> | string, null | opaque ID assigned to the element to move to, as described in the WebElement JSON Object, if not specified or is null, the offset is relative to current position of the mouse |
| <code><var>xoffset</var></code><br /><span class="label labelWarning">optional</span> | number | x offset to move to, relative to the top-left corner of the element, if not specified, the mouse will move to the middle of the element |
| <code><var>yoffset</var></code><br /><span class="label labelWarning">optional</span> | number | y offset to move to, relative to the top-left corner of the element, if not specified, the mouse will move to the middle of the element |











---

## buttonDown


Click and hold the left mouse button (at the coordinates set by the last moveto command). Note that the next mouse-related command that should follow is buttonup . Any other mouse command (such as click or another call to buttondown) will yield undefined behaviour.<br /><br />JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidbuttondown).

##### Usage

```js
browser.buttonDown(button)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>button</var></code><br /><span class="label labelWarning">optional</span> | number | which button, enum: LEFT = 0, MIDDLE = 1 , RIGHT = 2, defaults to the left mouse button if not specified |











---

## buttonUp


Releases the mouse button previously held (where the mouse is currently at). Must be called once for every buttondown command issued. See the note in click and buttondown about implications of out-of-order commands.<br /><br />JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidbuttonup).

##### Usage

```js
browser.buttonUp(button)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>button</var></code><br /><span class="label labelWarning">optional</span> | number | which button, enum: LEFT = 0, MIDDLE = 1 , RIGHT = 2, defaults to the left mouse button if not specified |











---

## positionClick


Clicks at the current mouse coordinates (set by moveto).<br /><br />JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidclick).

##### Usage

```js
browser.positionClick(button)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>button</var></code><br /><span class="label labelWarning">optional</span> | number | which button, enum: LEFT = 0, RIGHT = 2, defaults to the left mouse button if not specified |











---

## positionDoubleClick


Double-clicks at the current mouse coordinates (set by moveto).<br /><br />JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessioniddoubleclick).

##### Usage

```js
browser.positionDoubleClick()
```











---

## touchClick


Single tap on the touch enabled device.<br /><br />JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidtouchclick).

##### Usage

```js
browser.touchClick(element)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>element</var></code> | string | ID of the element to single tap on. |











---

## touchDown


Finger down on the screen.<br /><br />JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidtouchdown).

##### Usage

```js
browser.touchDown(x, y)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>x</var></code> | number | x coordinate on the screen |
| <code><var>y</var></code> | number | y coordinate on the screen |











---

## touchUp


Finger up on the screen.<br /><br />JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidtouchup).

##### Usage

```js
browser.touchUp(x, y)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>x</var></code> | number | x coordinate on the screen |
| <code><var>y</var></code> | number | y coordinate on the screen |











---

## touchMove


Finger move on the screen.<br /><br />JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidtouchmove).

##### Usage

```js
browser.touchMove(x, y)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>x</var></code> | number | x coordinate on the screen |
| <code><var>y</var></code> | number | y coordinate on the screen |











---

## touchScroll


Finger move on the screen.<br /><br />JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidtouchscroll).

##### Usage

```js
browser.touchScroll(xoffset, yoffset, element)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>xoffset</var></code> | number | the x offset in pixels to scroll by |
| <code><var>yoffset</var></code> | number | the y offset in pixels to scroll by |
| <code><var>element</var></code><br /><span class="label labelWarning">optional</span> | string | ID of the element where the scroll starts |











---

## touchDoubleClick


Double tap on the touch screen using finger motion events.<br /><br />JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidtouchdoubleclick).

##### Usage

```js
browser.touchDoubleClick(element)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>element</var></code> | string | ID of the element to double tap on |











---

## touchLongClick


Long press on the touch screen using finger motion events.<br /><br />JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidtouchlongclick).

##### Usage

```js
browser.touchLongClick(element)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>element</var></code> | string | ID of the element to long press on |











---

## touchFlick


Flick on the touch screen using finger motion events. This flickcommand starts at a particulat screen location.<br /><br />JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidtouchflick).

##### Usage

```js
browser.touchFlick(xoffset, yoffset, element, speed, xspeed, yspeed)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>xoffset</var></code><br /><span class="label labelWarning">optional</span> | number | the x offset in pixels to flick by |
| <code><var>yoffset</var></code><br /><span class="label labelWarning">optional</span> | number | the y offset in pixels to flick by |
| <code><var>element</var></code><br /><span class="label labelWarning">optional</span> | string | ID of the element where the flick starts |
| <code><var>speed</var></code><br /><span class="label labelWarning">optional</span> | number | the speed in pixels per seconds |
| <code><var>xspeed</var></code><br /><span class="label labelWarning">optional</span> | number | the x speed in pixels per second |
| <code><var>yspeed</var></code><br /><span class="label labelWarning">optional</span> | number | the y speed in pixels per second |











---

## getGeoLocation


Get the current geo location.<br /><br />JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#get-sessionsessionidlocation).

##### Usage

```js
browser.getGeoLocation()
```






##### Returns

- **&lt;Object&gt; <code><var>location</var></code>:** The current geo location.






---

## setGeoLocation


Set the current geo location.<br /><br />JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#post-sessionsessionidlocation).

##### Usage

```js
browser.setGeoLocation(location)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>location</var></code> | object | the new location (`{latitude: number, longitude: number, altitude: number}`) |











---

## getLocalStorage


Get all keys of the storage.<br /><br />JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#get-sessionsessionidlocal_storage).

##### Usage

```js
browser.getLocalStorage()
```






##### Returns

- **&lt;String[]&gt; <code><var>keys</var></code>:** The list of keys.






---

## setLocalStorage


Set the storage item for the given key.<br /><br />JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#post-sessionsessionidlocal_storage).

##### Usage

```js
browser.setLocalStorage(key, value)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>key</var></code> | string | the key to set |
| <code><var>value</var></code> | string | the value to set |











---

## clearLocalStorage


Clear the storage.<br /><br />JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#get-sessionsessionidlocal_storage).

##### Usage

```js
browser.clearLocalStorage()
```











---

## getLocalStorageItem


Get the storage item for the given key.<br /><br />JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#get-sessionsessionidlocal_storagekeykey).

##### Usage

```js
browser.getLocalStorageItem(key)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>key</var></code> | String | the key to get |






##### Returns

- **&lt;String&gt; <code><var>item</var></code>:** The storage item of given key.






---

## deleteLocalStorageItem


JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#delete-sessionsessionidlocal_storagekeykey).

##### Usage

```js
browser.deleteLocalStorageItem(key)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>key</var></code> | String | the key to remove |











---

## getLocalStorageSize


Get the number of items in the storage.<br /><br />JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidlocal_storagesize).

##### Usage

```js
browser.getLocalStorageSize()
```






##### Returns

- **&lt;Number&gt; <code><var>itemCnt</var></code>:** The number of items in the storage.






---

## getSessionStorage


Get all keys of the storage.<br /><br />JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#get-sessionsessionidsession_storage).

##### Usage

```js
browser.getSessionStorage()
```






##### Returns

- **&lt;String[]&gt; <code><var>keys</var></code>:** The list of keys.






---

## setSessionStorage


Set the storage item for the given key.<br /><br />JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#post-sessionsessionidsession_storage).

##### Usage

```js
browser.setSessionStorage(key, value)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>key</var></code> | string | the key to set |
| <code><var>value</var></code> | string | the value to set |











---

## clearSessionStorage


Clear the storage.<br /><br />JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#delete-sessionsessionidsession_storage).

##### Usage

```js
browser.clearSessionStorage()
```











---

## getSessionStorageItem


Get the storage item for the given key.<br /><br />JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#get-sessionsessionidsession_storagekeykey).

##### Usage

```js
browser.getSessionStorageItem(key)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>key</var></code> | String | the key to get |






##### Returns

- **&lt;String&gt; <code><var>item</var></code>:** The storage item of given key.






---

## deleteSessionStorageItem


Remove the storage item for the given key.<br /><br />JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#delete-sessionsessionidsession_storagekeykey).

##### Usage

```js
browser.deleteSessionStorageItem(key)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>key</var></code> | String | the key to remove |











---

## getSessionStorageSize


Get the number of items in the storage.<br /><br />JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidsession_storagesize).

##### Usage

```js
browser.getSessionStorageSize()
```






##### Returns

- **&lt;Number&gt; <code><var>itemCnt</var></code>:** The number of items in the storage.






---

## getLogs


Get the log for a given log type. Log buffer is reset after each request.<br /><br />JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidlog).

##### Usage

```js
browser.getLogs(type)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>type</var></code> | string | the log type |






##### Returns

- **&lt;Object[]&gt; <code><var>logs</var></code>:** The list of log entries.






---

## getLogTypes


Get available log types.<br /><br />JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidlogtypes).

##### Usage

```js
browser.getLogTypes()
```






##### Returns

- **&lt;String[]&gt; <code><var>logTypes</var></code>:** The list of available log types.






---

## getApplicationCacheStatus


Get the status of the html5 application cache.<br /><br />JSON Wire Protocol command. More details can be found in the [official protocol docs](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidapplication_cachestatus).

##### Usage

```js
browser.getApplicationCacheStatus()
```






##### Returns

- **&lt;Number&gt; <code><var>statusCode</var></code>:** Status code for application cache: `{UNCACHED = 0, IDLE = 1, CHECKING = 2, DOWNLOADING = 3, UPDATE_READY = 4, OBSOLETE = 5}`





