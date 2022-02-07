---
id: appium
title: Appium
custom_edit_url: https://github.com/webdriverio/webdriverio/edit/main/packages/wdio-protocols/protocols/appium.json
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## shake


Perform a shake action on the device.<br /><br />Appium command. More details can be found in the [official protocol docs](http://appium.io/docs/en/commands/device/interactions/shake/).

##### Usage

```js
driver.shake()
```










##### Support

![Support for XCUITest (9.3+), UIAutomation (8.0 to 9.3)](/img/icons/ios.svg)



---

## lock


Lock the device.<br /><br />Appium command. More details can be found in the [official protocol docs](http://appium.io/docs/en/commands/device/interactions/lock/).

##### Usage

```js
driver.lock(seconds)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>seconds</var></code><br /><span class="label labelWarning">optional</span> | number | how long to lock the screen (iOS only) |










##### Support

![Support for UIAutomation (8.0 to 9.3)](/img/icons/ios.svg)
![Support for UiAutomator (4.2+)](/img/icons/android.svg)
![Support for Windows (10+)](/img/icons/windows.svg)



---

## unlock


Unlock the device.<br /><br />Appium command. More details can be found in the [official protocol docs](http://appium.io/docs/en/commands/device/interactions/unlock/).

##### Usage

```js
driver.unlock()
```










##### Support

![Support for UiAutomator (4.2+)](/img/icons/android.svg)
![Support for Windows (10+)](/img/icons/windows.svg)



---

## isLocked


Check whether the device is locked or not.<br /><br />Appium command. More details can be found in the [official protocol docs](http://appium.io/docs/en/commands/device/interactions/is-locked/).

##### Usage

```js
driver.isLocked()
```






##### Returns

- **&lt;boolean&gt; <code><var>isLocked</var></code>:** True if the device is locked, false if not





##### Support

![Support for UiAutomator (4.2+)](/img/icons/android.svg)
![Support for Windows (10+)](/img/icons/windows.svg)



---

## startRecordingScreen


Start recording the screen.<br /><br />Appium command. More details can be found in the [official protocol docs](http://appium.io/docs/en/commands/device/recording-screen/start-recording-screen/).

##### Usage

```js
driver.startRecordingScreen(options)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>options</var></code><br /><span class="label labelWarning">optional</span> | object | command parameters that can contain keys like: remotePath, username, password, method, forceRestart, timeLimit, videoType, videoQuality, videoFps, bitRate, videoSize, bugReport (see more description in Appium docs) |










##### Support

![Support for XCUITest (9.3+)](/img/icons/ios.svg)
![Support for UiAutomator (4.2+)](/img/icons/android.svg)



---

## stopRecordingScreen


Stop recording screen<br /><br />Appium command. More details can be found in the [official protocol docs](http://appium.io/docs/en/commands/device/recording-screen/stop-recording-screen/).

##### Usage

```js
driver.stopRecordingScreen(remotePath, username, password, method)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>remotePath</var></code><br /><span class="label labelWarning">optional</span> | string | The path to the remote location, where the resulting video should be uploaded. The following protocols are supported http/https, ftp. This option only has an effect if there is screen recording process in progreess and forceRestart parameter is not set to true. Null or empty string value (the default setting) means the content of resulting file should be encoded as Base64. |
| <code><var>username</var></code><br /><span class="label labelWarning">optional</span> | string | The name of the user for the remote authentication. |
| <code><var>password</var></code><br /><span class="label labelWarning">optional</span> | string | The password for the remote authentication. |
| <code><var>method</var></code><br /><span class="label labelWarning">optional</span> | string | The http multipart upload method name. The &#39;PUT&#39; one is used by default. |






##### Returns

- **&lt;string&gt; <code><var>response</var></code>:** Base64 encoded string. If remote_path is set, the response is empty string





##### Support

![Support for XCUITest (9.3+)](/img/icons/ios.svg)
![Support for UiAutomator (4.2+)](/img/icons/android.svg)



---

## getPerformanceDataTypes


Returns the information types of the system state which is supported to read as like cpu, memory, network traffic, and battery.<br /><br />Appium command. More details can be found in the [official protocol docs](http://appium.io/docs/en/commands/device/performance-data/performance-data-types/).

##### Usage

```js
driver.getPerformanceDataTypes()
```






##### Returns

- **&lt;string[]&gt; <code><var>performanceTypes</var></code>:** The available performance data types (cpuinfo|batteryinfo|networkinfo|memoryinfo)





##### Support

![Support for UiAutomator (4.2+)](/img/icons/android.svg)



---

## getPerformanceData


Returns the information of the system state which is supported to read as like cpu, memory, network traffic, and battery.<br /><br />Appium command. More details can be found in the [official protocol docs](http://appium.io/docs/en/commands/device/performance-data/get-performance-data/).

##### Usage

```js
driver.getPerformanceData(packageName, dataType, dataReadTimeout)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>packageName</var></code> | string | the package name of the application |
| <code><var>dataType</var></code> | string | the type of system state which wants to read. It should be one of the supported performance data types |
| <code><var>dataReadTimeout</var></code><br /><span class="label labelWarning">optional</span> | number | the number of attempts to read |






##### Returns

- **&lt;string[]&gt; <code><var>performanceData</var></code>:** The information type of the system state which is supported to read as like cpu, memory, network traffic, and battery





##### Support

![Support for UiAutomator (4.2+)](/img/icons/android.svg)



---

## pressKeyCode


Press a particular key on the device.<br /><br />Appium command. More details can be found in the [official protocol docs](http://appium.io/docs/en/commands/device/keys/press-keycode/).

##### Usage

```js
driver.pressKeyCode(keycode, metastate, flags)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>keycode</var></code> | number | keycode to press |
| <code><var>metastate</var></code><br /><span class="label labelWarning">optional</span> | number | meta state to press the keycode with |
| <code><var>flags</var></code><br /><span class="label labelWarning">optional</span> | number | flags for the keypress |










##### Support

![Support for UiAutomator (4.2+)](/img/icons/android.svg)



---

## longPressKeyCode


Press and hold a particular key code on the device.<br /><br />Appium command. More details can be found in the [official protocol docs](http://appium.io/docs/en/commands/device/keys/long-press-keycode/).

##### Usage

```js
driver.longPressKeyCode(keycode, metastate, flags)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>keycode</var></code> | number | keycode to press on the device |
| <code><var>metastate</var></code><br /><span class="label labelWarning">optional</span> | number | metastate for the keypress |
| <code><var>flags</var></code><br /><span class="label labelWarning">optional</span> | number | flags for the keypress |










##### Support

![Support for UiAutomator (4.2+)](/img/icons/android.svg)



---

## sendKeyEvent


Send a key code to the device.<br /><br />Appium command. More details can be found in the [official protocol docs](https://github.com/appium/appium-base-driver/blob/master/docs/mjsonwp/protocol-methods.md#appium-extension-endpoints).

##### Usage

```js
driver.sendKeyEvent(keycode, metastate)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>keycode</var></code> | string | keycode to press |
| <code><var>metastate</var></code><br /><span class="label labelWarning">optional</span> | string | meta state to press the keycode with |











---

## rotateDevice


Rotate the device in three dimensions.<br /><br />Appium command. More details can be found in the [official protocol docs](http://appium.io/docs/en/commands/device/interactions/rotate/).

##### Usage

```js
driver.rotateDevice(x, y, radius, rotation, touchCount, duration, element)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>x</var></code> | number | x offset to use for the center of the rotate gesture |
| <code><var>y</var></code> | number | y offset to use for the center of the rotate gesture |
| <code><var>radius</var></code> | number | the distance in points from the center to the edge of the circular path |
| <code><var>rotation</var></code> | number | the length of rotation in radians |
| <code><var>touchCount</var></code> | number | the number of touches to use in the specified gesture |
| <code><var>duration</var></code> | number | the length of hold time for the specified gesture, in seconds |
| <code><var>element</var></code><br /><span class="label labelWarning">optional</span> | string | the id of an element returned in a previous call to execute the rotation on |










##### Support

![Support for UIAutomation (8.0 to 9.3)](/img/icons/ios.svg)



---

## getCurrentActivity


Get the name of the current Android activity.<br /><br />Appium command. More details can be found in the [official protocol docs](http://appium.io/docs/en/commands/device/activity/current-activity/).

##### Usage

```js
driver.getCurrentActivity()
```






##### Returns

- **&lt;string&gt; <code><var>activity</var></code>:** Name of the current activity





##### Support

![Support for UiAutomator (4.2+)](/img/icons/android.svg)



---

## getCurrentPackage


Get the name of the current Android package.<br /><br />Appium command. More details can be found in the [official protocol docs](http://appium.io/docs/en/commands/device/activity/current-package/).

##### Usage

```js
driver.getCurrentPackage()
```






##### Returns

- **&lt;string&gt; <code><var>package</var></code>:** Name of the current package





##### Support

![Support for UiAutomator (4.2+)](/img/icons/android.svg)



---

## installApp


Install the given app onto the device.<br /><br />Appium command. More details can be found in the [official protocol docs](http://appium.io/docs/en/commands/device/app/install-app/).

##### Usage

```js
driver.installApp(appPath)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>appPath</var></code> | string | path to application .apk file |










##### Support

![Support for XCUITest (9.3+), UIAutomation (8.0 to 9.3)](/img/icons/ios.svg)
![Support for UiAutomator (4.2+)](/img/icons/android.svg)



---

## activateApp


Activate the given app onto the device<br /><br />Appium command. More details can be found in the [official protocol docs](http://appium.io/docs/en/commands/device/app/activate-app/).

##### Usage

```js
driver.activateApp(appId)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>appId</var></code> | string | App ID (package ID for Android, bundle ID for iOS) |










##### Support

![Support for XCUITest (9.3+)](/img/icons/ios.svg)
![Support for UiAutomator (4.2+)](/img/icons/android.svg)



---

## removeApp


Remove an app from the device.<br /><br />Appium command. More details can be found in the [official protocol docs](http://appium.io/docs/en/commands/device/app/remove-app/).

##### Usage

```js
driver.removeApp(appId)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>appId</var></code> | string | App ID (package ID for Android, bundle ID for iOS) |










##### Support

![Support for XCUITest (9.3+), UIAutomation (8.0 to 9.3)](/img/icons/ios.svg)
![Support for UiAutomator (4.2+)](/img/icons/android.svg)



---

## terminateApp


Terminate the given app on the device<br /><br />Appium command. More details can be found in the [official protocol docs](http://appium.io/docs/en/commands/device/app/terminate-app/).

##### Usage

```js
driver.terminateApp(appId)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>appId</var></code> | string | App ID (package ID for Android, bundle ID for iOS) |










##### Support

![Support for XCUITest (9.3+)](/img/icons/ios.svg)
![Support for UiAutomator (4.2+)](/img/icons/android.svg)



---

## isAppInstalled


Check whether the specified app is installed on the device.<br /><br />Appium command. More details can be found in the [official protocol docs](http://appium.io/docs/en/commands/device/app/is-app-installed/).

##### Usage

```js
driver.isAppInstalled(appId)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>appId</var></code> | string | App ID (package ID for Android, bundle ID for iOS) |






##### Returns

- **&lt;boolean&gt; <code><var>isAppInstalled</var></code>:** Return true if installed, false if not





##### Support

![Support for XCUITest (9.3+), UIAutomation (8.0 to 9.3)](/img/icons/ios.svg)
![Support for UiAutomator (4.2+)](/img/icons/android.svg)



---

## queryAppState


Get the given app status on the device<br /><br />Appium command. More details can be found in the [official protocol docs](http://appium.io/docs/en/commands/device/app/app-state/).

##### Usage

```js
driver.queryAppState(appId)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>appId</var></code> | string | App ID (package ID for Android, bundle ID for iOS) |






##### Returns

- **&lt;number&gt; <code><var>appStatus</var></code>:** 0 is not installed. 1 is not running. 2 is running in background or suspended. 3 is running in background. 4 is running in foreground





##### Support

![Support for XCUITest (9.3+)](/img/icons/ios.svg)
![Support for UiAutomator (4.2+)](/img/icons/android.svg)



---

## hideKeyboard


Hide soft keyboard.<br /><br />Appium command. More details can be found in the [official protocol docs](http://appium.io/docs/en/commands/device/keys/hide-keyboard/).

##### Usage

```js
driver.hideKeyboard(strategy, key, keyCode, keyName)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>strategy</var></code><br /><span class="label labelWarning">optional</span> | string | hide keyboard strategy (UIAutomation only), available strategies - &#39;press&#39;, &#39;pressKey&#39;, &#39;swipeDown&#39;, &#39;tapOut&#39;, &#39;tapOutside&#39;, &#39;default&#39; |
| <code><var>key</var></code><br /><span class="label labelWarning">optional</span> | string | key value if strategy is &#39;pressKey&#39; |
| <code><var>keyCode</var></code><br /><span class="label labelWarning">optional</span> | string | key code if strategy is &#39;pressKey&#39; |
| <code><var>keyName</var></code><br /><span class="label labelWarning">optional</span> | string | key name if strategy is &#39;pressKey&#39; |










##### Support

![Support for XCUITest (9.3+), UIAutomation (8.0 to 9.3)](/img/icons/ios.svg)
![Support for UiAutomator (4.2+)](/img/icons/android.svg)
![Support for Windows (10+)](/img/icons/windows.svg)



---

## isKeyboardShown


Whether or not the soft keyboard is shown.<br /><br />Appium command. More details can be found in the [official protocol docs](http://appium.io/docs/en/commands/device/keys/is-keyboard-shown/).

##### Usage

```js
driver.isKeyboardShown()
```






##### Returns

- **&lt;boolean&gt; <code><var>isKeyboardShown</var></code>:** True if the keyboard is shown





##### Support

![Support for XCUITest (9.3+), UIAutomation (8.0 to 9.3)](/img/icons/ios.svg)
![Support for UiAutomator (4.2+)](/img/icons/android.svg)
![Support for Windows (10+)](/img/icons/windows.svg)



---

## pushFile


Place a file onto the device in a particular place.<br /><br />Appium command. More details can be found in the [official protocol docs](http://appium.io/docs/en/commands/device/files/push-file/).

##### Usage

```js
driver.pushFile(path, data)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>path</var></code> | string | path to install the data to |
| <code><var>data</var></code> | string | contents of file in base64 |










##### Support

![Support for XCUITest (9.3+), UIAutomation (8.0 to 9.3)](/img/icons/ios.svg)
![Support for UiAutomator (4.2+)](/img/icons/android.svg)



---

## pullFile


Retrieve a file from the device's file system.<br /><br />Appium command. More details can be found in the [official protocol docs](http://appium.io/docs/en/commands/device/files/pull-file/).

##### Usage

```js
driver.pullFile(path)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>path</var></code> | string | path on the device to pull file from |






##### Returns

- **&lt;string&gt; <code><var>response</var></code>:** Contents of file in base64





##### Support

![Support for XCUITest (9.3+), UIAutomation (8.0 to 9.3)](/img/icons/ios.svg)
![Support for UiAutomator (4.2+)](/img/icons/android.svg)



---

## pullFolder


Retrieve a folder from the device's file system.<br /><br />Appium command. More details can be found in the [official protocol docs](http://appium.io/docs/en/commands/device/files/pull-folder/).

##### Usage

```js
driver.pullFolder(path)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>path</var></code> | string | path to an entire folder on the device |










##### Support

![Support for XCUITest (9.3+), UIAutomation (8.0 to 9.3)](/img/icons/ios.svg)
![Support for UiAutomator (4.2+)](/img/icons/android.svg)



---

## toggleAirplaneMode


Toggle airplane mode on device.<br /><br />Appium command. More details can be found in the [official protocol docs](http://appium.io/docs/en/commands/device/network/toggle-airplane-mode/).

##### Usage

```js
driver.toggleAirplaneMode()
```










##### Support

![Support for UiAutomator (4.2+)](/img/icons/android.svg)



---

## toggleData


Switch the state of data service.<br /><br />Appium command. More details can be found in the [official protocol docs](http://appium.io/docs/en/commands/device/network/toggle-data/).

##### Usage

```js
driver.toggleData()
```










##### Support

![Support for UiAutomator (4.2+)](/img/icons/android.svg)



---

## toggleWiFi


Switch the state of the wifi service.<br /><br />Appium command. More details can be found in the [official protocol docs](http://appium.io/docs/en/commands/device/network/toggle-wifi/).

##### Usage

```js
driver.toggleWiFi()
```










##### Support

![Support for UiAutomator (4.2+)](/img/icons/android.svg)



---

## toggleLocationServices


Switch the state of the location service.<br /><br />Appium command. More details can be found in the [official protocol docs](http://appium.io/docs/en/commands/device/network/toggle-location-services/).

##### Usage

```js
driver.toggleLocationServices()
```










##### Support

![Support for UiAutomator (4.2+)](/img/icons/android.svg)



---

## toggleNetworkSpeed


Set network speed (Emulator only)<br /><br />Appium command. More details can be found in the [official protocol docs](http://appium.io/docs/en/commands/device/network/network-speed/).

##### Usage

```js
driver.toggleNetworkSpeed()
```










##### Support

![Support for UiAutomator (4.2+)](/img/icons/android.svg)



---

## openNotifications


Open Android notifications (Emulator only).<br /><br />Appium command. More details can be found in the [official protocol docs](http://appium.io/docs/en/commands/device/system/open-notifications/).

##### Usage

```js
driver.openNotifications()
```










##### Support

![Support for UiAutomator (4.2+)](/img/icons/android.svg)



---

## startActivity


Start an Android activity by providing package name and activity name.<br /><br />Appium command. More details can be found in the [official protocol docs](http://appium.io/docs/en/commands/device/activity/start-activity/).

##### Usage

```js
driver.startActivity(appPackage, appActivity, appWaitPackage, appWaitActivity, intentAction, intentCategory, intentFlags, optionalIntentArguments, dontStopAppOnReset)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>appPackage</var></code> | string | name of app |
| <code><var>appActivity</var></code> | string | name of activity |
| <code><var>appWaitPackage</var></code><br /><span class="label labelWarning">optional</span> | string | name of app to wait for |
| <code><var>appWaitActivity</var></code><br /><span class="label labelWarning">optional</span> | string | name of activity to wait for |
| <code><var>intentAction</var></code><br /><span class="label labelWarning">optional</span> | string | intent action which will be used to start activity |
| <code><var>intentCategory</var></code><br /><span class="label labelWarning">optional</span> | string | intent category which will be used to start activity |
| <code><var>intentFlags</var></code><br /><span class="label labelWarning">optional</span> | string | flags that will be used to start activity |
| <code><var>optionalIntentArguments</var></code><br /><span class="label labelWarning">optional</span> | string | additional intent arguments that will be used to start activity |
| <code><var>dontStopAppOnReset</var></code><br /><span class="label labelWarning">optional</span> | string | doesn’t stop the process of the app under test, before starting the app using adb |










##### Support

![Support for UiAutomator (4.2+)](/img/icons/android.svg)



---

## getSystemBars


Retrieve visibility and bounds information of the status and navigation bars.<br /><br />Appium command. More details can be found in the [official protocol docs](http://appium.io/docs/en/commands/device/system/system-bars/).

##### Usage

```js
driver.getSystemBars()
```






##### Returns

- **&lt;object[]&gt; <code><var>systemBars</var></code>:** Information about visibility and bounds of status and navigation bar





##### Support

![Support for UiAutomator (4.2+)](/img/icons/android.svg)



---

## getDeviceTime


Get the time on the device.<br /><br />Appium command. More details can be found in the [official protocol docs](http://appium.io/docs/en/commands/device/system/system-time/).

##### Usage

```js
driver.getDeviceTime()
```






##### Returns

- **&lt;string&gt; <code><var>time</var></code>:** Time on the device





##### Support

![Support for XCUITest (9.3+), UIAutomation (8.0 to 9.3)](/img/icons/ios.svg)
![Support for UiAutomator (4.2+)](/img/icons/android.svg)



---

## getDisplayDensity


Get display density from device.<br /><br />Appium command. More details can be found in the [official protocol docs](https://github.com/appium/appium-base-driver/blob/master/docs/mjsonwp/protocol-methods.md#appium-extension-endpoints).

##### Usage

```js
driver.getDisplayDensity()
```






##### Returns

- **&lt;*&gt; <code><var>displayDensity</var></code>:** 





##### Support

![Support for UiAutomator (4.2+)](/img/icons/android.svg)



---

## touchId


Simulate a [touch id](https://support.apple.com/en-ca/ht201371) event (iOS Simulator only). To enable this feature, the `allowTouchIdEnroll` desired capability must be set to true and the Simulator must be [enrolled](https://support.apple.com/en-ca/ht201371). When you set allowTouchIdEnroll to true, it will set the Simulator to be enrolled by default. The enrollment state can be [toggled](http://appium.io/docs/en/commands/device/simulator/toggle-touch-id-enrollment/index.html). This call will only work if Appium process or its parent application (e.g. Terminal.app or Appium.app) has access to Mac OS accessibility in System Preferences > Security & Privacy > Privacy > Accessibility list.<br /><br />Appium command. More details can be found in the [official protocol docs](http://appium.io/docs/en/commands/device/simulator/touch-id/).

##### Usage

```js
driver.touchId(match)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>match</var></code> | boolean | are we simulating a successful touch (true) or a failed touch (false) |










##### Support

![Support for XCUITest (9.3+)](/img/icons/ios.svg)



---

## toggleEnrollTouchId


Toggle the simulator being [enrolled](https://support.apple.com/en-ca/ht201371) to accept touchId (iOS Simulator only). To enable this feature, the `allowTouchIdEnroll` desired capability must be set to true. When `allowTouchIdEnroll` is set to true the Simulator will be enrolled by default, and the 'Toggle Touch ID Enrollment' changes the enrollment state. This call will only work if the Appium process or its parent application (e.g., Terminal.app or Appium.app) has access to Mac OS accessibility in System Preferences > Security & Privacy > Privacy > Accessibility list.<br /><br />Appium command. More details can be found in the [official protocol docs](http://appium.io/docs/en/commands/device/simulator/toggle-touch-id-enrollment/).

##### Usage

```js
driver.toggleEnrollTouchId(enabled)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>enabled</var></code><br /><span class="label labelWarning">optional</span> | boolean | equals to true if TouchID enrollment should be enabled |










##### Support

![Support for XCUITest (9.3+)](/img/icons/ios.svg)



---

## launchApp


Launch an app on device. iOS tests with XCUITest can also use the `mobile: launchApp` method. See detailed [documentation](http://appium.io/docs/en/writing-running-appium/ios/ios-xctest-mobile-apps-management/index.html#mobile-launchapp).<br /><br />Appium command. More details can be found in the [official protocol docs](http://appium.io/docs/en/commands/device/app/launch-app/).

##### Usage

```js
driver.launchApp()
```










##### Support

![Support for XCUITest (9.3+), UIAutomation (8.0 to 9.3)](/img/icons/ios.svg)
![Support for UiAutomator (4.2+)](/img/icons/android.svg)



---

## closeApp


Close an app on device.<br /><br />Appium command. More details can be found in the [official protocol docs](http://appium.io/docs/en/commands/device/app/close-app/).

##### Usage

```js
driver.closeApp()
```










##### Support

![Support for XCUITest (9.3+), UIAutomation (8.0 to 9.3)](/img/icons/ios.svg)
![Support for UiAutomator (4.2+)](/img/icons/android.svg)



---

## reset


<b>Deprecated</b> use 'resetApp' instead. This command will be removed with the upcoming major version release.<br /><br />Appium command. More details can be found in the [official protocol docs](http://appium.io/docs/en/commands/device/app/reset-app/).

##### Usage

```js
driver.reset()
```










##### Support

![Support for XCUITest (9.3+), UIAutomation (8.0 to 9.3)](/img/icons/ios.svg)
![Support for UiAutomator (4.2+)](/img/icons/android.svg)



---

## resetApp


Reset the currently running app for this session.<br /><br />Appium command. More details can be found in the [official protocol docs](http://appium.io/docs/en/commands/device/app/reset-app/).

##### Usage

```js
driver.resetApp()
```










##### Support

![Support for XCUITest (9.3+), UIAutomation (8.0 to 9.3)](/img/icons/ios.svg)
![Support for UiAutomator (4.2+)](/img/icons/android.svg)



---

## background


Send the currently running app for this session to the background. iOS tests with XCUITest can also use the `mobile: terminateApp` method to terminate the current app (see detailed [documentation](http://appium.io/docs/en/writing-running-appium/ios/ios-xctest-mobile-apps-management/index.html#mobile-terminateapp)), and the `mobile: activateApp` to activate an existing application on the device under test and moves it to the foreground (see detailed [documentation](http://appium.io/docs/en/writing-running-appium/ios/ios-xctest-mobile-apps-management/index.html#mobile-activateapp)).<br /><br />Appium command. More details can be found in the [official protocol docs](http://appium.io/docs/en/commands/device/app/background-app/).

##### Usage

```js
driver.background(seconds)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>seconds</var></code> | number, null | timeout to restore app, if &#39;null&#39; app won&#39;t be restored |










##### Support

![Support for XCUITest (9.3+), UIAutomation (8.0 to 9.3)](/img/icons/ios.svg)
![Support for UiAutomator (4.2+)](/img/icons/android.svg)



---

## endCoverage


Get test coverage data.<br /><br />Appium command. More details can be found in the [official protocol docs](http://appium.io/docs/en/commands/device/app/end-test-coverage/).

##### Usage

```js
driver.endCoverage(intent, path)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>intent</var></code> | string | intent to broadcast |
| <code><var>path</var></code> | string | path to .ec file |










##### Support

![Support for UiAutomator (4.2+)](/img/icons/android.svg)



---

## getStrings


Get app strings.<br /><br />Appium command. More details can be found in the [official protocol docs](http://appium.io/docs/en/commands/device/app/get-app-strings/).

##### Usage

```js
driver.getStrings(language, stringFile)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>language</var></code><br /><span class="label labelWarning">optional</span> | string | language code |
| <code><var>stringFile</var></code><br /><span class="label labelWarning">optional</span> | string | path to the string file |






##### Returns

- **&lt;object&gt; <code><var>appStrings</var></code>:** all defined Strings from an app for the specified language and strings filename





##### Support

![Support for XCUITest (9.3+), UIAutomation (8.0 to 9.3)](/img/icons/ios.svg)
![Support for UiAutomator (4.2+)](/img/icons/android.svg)



---

## setValueImmediate


Appium command. More details can be found in the [official protocol docs](https://github.com/appium/appium-base-driver/blob/master/docs/mjsonwp/protocol-methods.md#appium-extension-endpoints).

##### Usage

```js
driver.setValueImmediate(elementId, value)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>elementId</var></code> | String | the id of an element returned in a previous call to Find Element(s) |
| <code><var>value</var></code> | string | value to set on element |










##### Support

![Support for XCUITest (9.3+)](/img/icons/ios.svg)



---

## replaceValue


Replace the value to element directly.<br /><br />Appium command. More details can be found in the [official protocol docs](https://github.com/appium/appium-base-driver/blob/master/docs/mjsonwp/protocol-methods.md#appium-extension-endpoints).

##### Usage

```js
driver.replaceValue(elementId, value)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>elementId</var></code> | String | the id of an element returned in a previous call to Find Element(s) |
| <code><var>value</var></code> | string | value to replace on element |










##### Support

![Support for XCUITest (9.3+), UIAutomation (8.0 to 9.3)](/img/icons/ios.svg)
![Support for UiAutomator (4.2+)](/img/icons/android.svg)



---

## getSettings


Retrieve the current settings on the device.<br /><br />Appium command. More details can be found in the [official protocol docs](http://appium.io/docs/en/commands/session/settings/get-settings/).

##### Usage

```js
driver.getSettings()
```






##### Returns

- **&lt;object&gt; <code><var>settings</var></code>:** JSON hash of all the currently specified settings, see Settings API





##### Support

![Support for XCUITest (9.3+), UIAutomation (8.0 to 9.3)](/img/icons/ios.svg)
![Support for UiAutomator (4.2+)](/img/icons/android.svg)
![Support for Windows (10+)](/img/icons/windows.svg)



---

## updateSettings


Update the current setting on the device.<br /><br />Appium command. More details can be found in the [official protocol docs](http://appium.io/docs/en/commands/session/settings/update-settings/).

##### Usage

```js
driver.updateSettings(settings)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>settings</var></code> | object | key/value object with settings to update |










##### Support

![Support for XCUITest (9.3+), UIAutomation (8.0 to 9.3)](/img/icons/ios.svg)
![Support for UiAutomator (4.2+)](/img/icons/android.svg)
![Support for Windows (10+)](/img/icons/windows.svg)



---

## receiveAsyncResponse


Callback url for asynchronous execution of JavaScript.<br /><br />Appium command. More details can be found in the [official protocol docs](https://github.com/appium/appium-base-driver/blob/master/docs/mjsonwp/protocol-methods.md#appium-extension-endpoints).

##### Usage

```js
driver.receiveAsyncResponse(response)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>response</var></code> | object | response to receive on device |











---

## gsmCall


Make GSM call (Emulator only).<br /><br />Appium command. More details can be found in the [official protocol docs](http://appium.io/docs/en/commands/device/network/gsm-call/).

##### Usage

```js
driver.gsmCall(phoneNumber, action)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>phoneNumber</var></code> | string | the phone number to call to |
| <code><var>action</var></code> | string | The action - &#39;call&#39;, &#39;accept&#39;, &#39;cancel&#39;, &#39;hold&#39; |










##### Support

![Support for UiAutomator (4.2+)](/img/icons/android.svg)



---

## gsmSignal


Set GSM signal strength (Emulator only).<br /><br />Appium command. More details can be found in the [official protocol docs](http://appium.io/docs/en/commands/device/network/gsm-signal/).

##### Usage

```js
driver.gsmSignal(signalStrength, signalStrengh)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>signalStrength</var></code> | string | signal strength in the range [0, 4] |
| <code><var>signalStrengh</var></code><br /><span class="label labelWarning">optional</span> | string | signal strength in the range [0, 4]. Please also set this parameter with the same value if you use Appium v1.11.0 or lower (see https://github.com/appium/appium/issues/12234). |










##### Support

![Support for UiAutomator (4.2+)](/img/icons/android.svg)



---

## powerCapacity


Set the battery percentage (Emulator only).<br /><br />Appium command. More details can be found in the [official protocol docs](http://appium.io/docs/en/commands/device/emulator/power_capacity/).

##### Usage

```js
driver.powerCapacity(percent)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>percent</var></code> | number | percentage value in range [0, 100] |










##### Support

![Support for UiAutomator (4.2+)](/img/icons/android.svg)



---

## powerAC


Set the state of the battery charger to connected or not (Emulator only).<br /><br />Appium command. More details can be found in the [official protocol docs](http://appium.io/docs/en/commands/device/emulator/power_ac/).

##### Usage

```js
driver.powerAC(state)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>state</var></code> | string | set the state. on or off |










##### Support

![Support for UiAutomator (4.2+)](/img/icons/android.svg)



---

## gsmVoice


Set GSM voice state (Emulator only).<br /><br />Appium command. More details can be found in the [official protocol docs](http://appium.io/docs/en/commands/device/network/gsm-voice/).

##### Usage

```js
driver.gsmVoice(state)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>state</var></code> | string | state of GSM voice - &#39;unregistered&#39;, &#39;home&#39;, &#39;roaming&#39;, &#39;searching&#39;, &#39;denied&#39;, &#39;off&#39;, &#39;on&#39; |










##### Support

![Support for UiAutomator (4.2+)](/img/icons/android.svg)



---

## sendSms


Simulate an SMS message (Emulator only).<br /><br />Appium command. More details can be found in the [official protocol docs](http://appium.io/docs/en/commands/device/network/send-sms/).

##### Usage

```js
driver.sendSms(phoneNumber, message)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>phoneNumber</var></code> | string | the phone number to send the SMS too |
| <code><var>message</var></code> | string | the SMS message |










##### Support

![Support for UiAutomator (4.2+)](/img/icons/android.svg)



---

## fingerPrint


Authenticate users by using their finger print scans on supported emulators.<br /><br />Appium command. More details can be found in the [official protocol docs](http://appium.io/docs/en/commands/device/authentication/finger-print/).

##### Usage

```js
driver.fingerPrint(fingerprintId)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>fingerprintId</var></code> | number | finger prints stored in Android Keystore system (from 1 to 10) |










##### Support

![Support for UiAutomator (4.2+)](/img/icons/android.svg)



---

## setClipboard


Set the content of the system clipboard<br /><br />Appium command. More details can be found in the [official protocol docs](http://appium.io/docs/en/commands/device/clipboard/set-clipboard/).

##### Usage

```js
driver.setClipboard(content, contentType, label)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>content</var></code> | string | The actual base64 encoded clipboard content |
| <code><var>contentType</var></code><br /><span class="label labelWarning">optional</span> | string | The type of the content to get. Plaintext, Image, URL. Android supports only plaintext |
| <code><var>label</var></code><br /><span class="label labelWarning">optional</span> | string | Clipboard data label for Android |






##### Returns

- **&lt;string&gt; <code><var>response</var></code>:** Response from Appium server






---

## getClipboard


Get the content of the system clipboard<br /><br />Appium command. More details can be found in the [official protocol docs](http://appium.io/docs/en/commands/device/clipboard/get-clipboard/).

##### Usage

```js
driver.getClipboard(contentType)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>contentType</var></code><br /><span class="label labelWarning">optional</span> | string | The type of the content to get. Plaintext, Image, URL. Android supports only plaintext |






##### Returns

- **&lt;string&gt; <code><var>response</var></code>:** Clipboard content as base64-encoded string or an empty string if the clipboard is empty






---

## touchPerform


This functionality is only available from within a native context. 'Touch Perform' works similarly to the other singular touch interactions, except that this allows you to chain together more than one touch action as one command. This is useful because Appium commands are sent over the network and there's latency between commands. This latency can make certain touch interactions impossible because some interactions need to be performed in one sequence. Vertical, for example, requires pressing down, moving to a different y coordinate, and then releasing. For it to work, there can't be a delay between the interactions.<br /><br />Appium command. More details can be found in the [official protocol docs](http://appium.io/docs/en/commands/interactions/touch/touch-perform/).

##### Usage

```js
driver.touchPerform(actions)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>actions</var></code> | object[] | The type of action to perform (e.g. moveTo, release, press, tap, wait) |




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
// do a horizontal swipe by percentage
const startPercentage = 10;
const endPercentage = 90;
const anchorPercentage = 50;

const { width, height } = driver.getWindowSize();
const anchor = height * anchorPercentage / 100;
const startPoint = width * startPercentage / 100;
const endPoint = width * endPercentage / 100;
driver.touchPerform([
  {
    action: 'press',
    options: {
      x: startPoint,
      y: anchor,
    },
  },
  {
    action: 'wait',
    options: {
      ms: 100,
    },
  },
  {
    action: 'moveTo',
    options: {
      x: endPoint,
      y: anchor,
    },
  },
  {
    action: 'release',
    options: {},
  },
]);
```

</TabItem>
<TabItem value="sync">

```js
// do a horizontal swipe by percentage
const startPercentage = 10;
const endPercentage = 90;
const anchorPercentage = 50;

const { width, height } = driver.getWindowSize();
const anchor = height * anchorPercentage / 100;
const startPoint = width * startPercentage / 100;
const endPoint = width * endPercentage / 100;
driver.touchPerform([
  {
    action: 'press',
    options: {
      x: startPoint,
      y: anchor,
    },
  },
  {
    action: 'wait',
    options: {
      ms: 100,
    },
  },
  {
    action: 'moveTo',
    options: {
      x: endPoint,
      y: anchor,
    },
  },
  {
    action: 'release',
    options: {},
  },
]);
```


:::caution
    Synchronous Mode will depcrecated with Node.js v16. With an update to the
    underlying Chromium version it became technically impossible to provide the
    same synchronous behavior. We recommend to start transition to asynchronous
    command execution. For more information, see our <a href="https://github.com/webdriverio/webdriverio/discussions/6702">RFC</a>.
:::
</TabItem>
</Tabs>








##### Support

![Support for UiAutomator (4.2+)](/img/icons/android.svg)
![Support for XCUITest (9.3+), UIAutomation (8.0 to 9.3)](/img/icons/ios.svg)
![Support for Windows (10+)](/img/icons/windows.svg)



---

## multiTouchPerform


This functionality is only available from within a native context. Perform a multi touch action sequence.<br /><br />Appium command. More details can be found in the [official protocol docs](http://appium.io/docs/en/commands/interactions/touch/multi-touch-perform/).

##### Usage

```js
driver.multiTouchPerform(actions)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>actions</var></code> | object[] | The type of action to perform (e.g. moveTo, release, press, tap, wait) |










##### Support

![Support for UiAutomator (4.2+)](/img/icons/android.svg)
![Support for XCUITest (9.3+), UIAutomation (8.0 to 9.3)](/img/icons/ios.svg)
![Support for Windows (10+)](/img/icons/windows.svg)



---

## driverScript


This command allows you to define a webdriverio script in a string and send it to the Appium server to be executed locally to the server itself, thus reducing latency that might otherwise occur along with each command.<br /><br />Appium command. More details can be found in the [official protocol docs](https://github.com/appium/appium/blob/master/docs/en/commands/session/execute-driver.md).

##### Usage

```js
driver.driverScript(script, type, timeout)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>script</var></code> | string | The script to execute. It has access to a &#39;driver&#39; object which represents a webdriverio session attached to the current server. |
| <code><var>type</var></code><br /><span class="label labelWarning">optional</span> | string | The language/framework used in the script. Currently, only &#39;webdriverio&#39; is supported and is the default. |
| <code><var>timeout</var></code><br /><span class="label labelWarning">optional</span> | number | The number of milliseconds the script should be allowed to run before being killed by the Appium server. Defaults to the equivalent of 1 hour. |






##### Returns

- **&lt;object&gt; <code><var>result</var></code>:** An object containing two fields: &#39;result&#39;, which is the return value of the script itself, and &#39;logs&#39;, which contains 3 inner fields, &#39;log&#39;, &#39;warn&#39;, and &#39;error&#39;, which hold an array of strings logged by console.log, console.warn, and console.error in the script&#39;s execution.






---

## getEvents


Get events stored in appium server.<br /><br />Appium command. More details can be found in the [official protocol docs](https://github.com/appium/appium/blob/master/docs/en/commands/session/events/get-events.md).

##### Usage

```js
driver.getEvents(type)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>type</var></code> | string[] | Get events which are filtered with the type if the type is provided. |






##### Returns

- **&lt;object&gt; <code><var>result</var></code>:** A JSON hash of events like `{&#39;commands&#39; =&gt; [{&#39;cmd&#39; =&gt; 123455, ....}], &#39;startTime&#39; =&gt; 1572954894127, }`.






---

## logEvent


Store a custom event.<br /><br />Appium command. More details can be found in the [official protocol docs](https://github.com/appium/appium/blob/master/docs/en/commands/session/events/log-event.md).

##### Usage

```js
driver.logEvent(vendor, event)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>vendor</var></code> | string | The name of vendor. It will be `vendor` in `vendor:event`. |
| <code><var>event</var></code> | string | The name of event. It will be `event` in `vendor:event`. |











---

## compareImages


Performs images comparison using OpenCV framework features. It is expected that both OpenCV framework and opencv4nodejs module are installed on the machine where Appium server is running.<br /><br />Appium command. More details can be found in the [official protocol docs](http://appium.io/docs/en/writing-running-appium/image-comparison/).

##### Usage

```js
driver.compareImages(mode, firstImage, secondImage, options)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>mode</var></code> | string | One of possible comparison modes: &#39;matchFeatures&#39;, &#39;getSimilarity&#39;, &#39;matchTemplate&#39;. &#39;matchFeatures&#39; is by default. |
| <code><var>firstImage</var></code> | string | An image data. All image formats, that OpenCV library itself accepts, are supported. |
| <code><var>secondImage</var></code> | string | An image data. All image formats, that OpenCV library itself accepts, are supported. |
| <code><var>options</var></code> | object | The content of this dictionary depends on the actual `mode` value. See the documentation on `appium-support` module for more details.  |






##### Returns

- **&lt;object&gt; <code><var>result</var></code>:** The content of the resulting dictionary depends on the actual `mode` and `options` values. See the documentation on `appium-support` module for more details.





