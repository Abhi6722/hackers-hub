---
id: touchAction
title: touchAction
custom_edit_url: https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/element/touchAction.ts
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The Touch Action API provides the basis of all gestures that can be automated in Appium.
It is currently only available to native apps and can not be used to interact with webapps.
At its core is the ability to chain together _ad hoc_ individual actions, which will then be
applied to an element in the application on the device. The basic actions that can be used are:

- press (pass element or (x,y) or both)
- longPress (pass element or (x,y) or both)
- tap (pass element or (x,y) or both)
- moveTo (pass absolute x,y coordinates)
- wait (pass ms (as milliseconds))
- release (no arguments)

##### Usage

```js
$(selector).touchAction(action)
```

##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>action</var></code> | <code>TouchActions</code> | action to execute |

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

```js title="touchAction.js"
it('should do a touch gesture', async () => {
    const screen = await $('//UITextbox');

    // simple touch action on element
    await screen.touchAction('tap');

    // simple touch action using selector and x y variables
    // tap location is 30px right and 20px down relative from the center of the element
    await screen.touchAction({
        action: 'tap', x: 30, y:20
    })

    // multi action on an element (drag&drop)
    await screen.touchAction([
        'press',
        { action: 'moveTo', x: 200, y: 300 },
        'release'
    ])

    // drag&drop to element
    const otherElement = await $('//UIAApplication[1]/UIAElement[2]')
    await screen.touchAction([
        'press',
        { action: 'moveTo', element: otherElement },
        'release'
    ])
});
```

</TabItem>
<TabItem value="sync">

```js title="touchAction.js"
it('should do a touch gesture', () => {
    const screen = $('//UITextbox');

    // simple touch action on element
    screen.touchAction('tap');

    // simple touch action using selector and x y variables
    // tap location is 30px right and 20px down relative from the center of the element
    screen.touchAction({
        action: 'tap', x: 30, y:20
    })

    // multi action on an element (drag&drop)
    screen.touchAction([
        'press',
        { action: 'moveTo', x: 200, y: 300 },
        'release'
    ])

    // drag&drop to element
    const otherElement = $('//UIAApplication[1]/UIAElement[2]')
    screen.touchAction([
        'press',
        { action: 'moveTo', element: otherElement },
        'release'
    ])
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

