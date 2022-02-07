---
id: moveTo
title: moveTo
custom_edit_url: https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/element/moveTo.ts
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Move the mouse by an offset of the specified element. If no element is specified,
the move is relative to the current mouse cursor. If an element is provided but
no offset, the mouse will be moved to the center of the element. If the element
is not visible, it will be scrolled into view.

##### Usage

```js
$(selector).moveTo({ xOffset, yOffset })
```

##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>options</var></code><br /><span class="label labelWarning">optional</span> | <code>MoveToOptions</code> | moveTo command options |
| <code><var>options.xOffset</var></code><br /><span class="label labelWarning">optional</span> | <code>Number</code> | X offset to move to, relative to the top-left corner of the element. If not specified, the mouse will move to the middle of the element. |
| <code><var>options.yOffset</var></code><br /><span class="label labelWarning">optional</span> | <code>Number</code> | Y offset to move to, relative to the top-left corner of the element. If not specified, the mouse will move to the middle of the element. |

