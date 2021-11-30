---
id: respond
title: respond
custom_edit_url: https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/mock/respond.ts
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Always respond with same overwrite.

##### Usage

```js
mock.respond(overwrites, { header, statusCode, fetchResponse })
```

##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>overwrites</var></code> | <code>MockOverwrite</code> | payload to overwrite the response |
| <code><var>params</var></code><br /><span class="label labelWarning">optional</span> | <code>MockResponseParams</code> | additional respond parameters to overwrite |
| <code><var>params.header</var></code><br /><span class="label labelWarning">optional</span> | <code>Object</code> | overwrite specific headers |
| <code><var>params.statusCode</var></code><br /><span class="label labelWarning">optional</span> | <code>Number</code> | overwrite response status code |
| <code><var>params.fetchResponse</var></code><br /><span class="label labelWarning">optional</span> | <code>Boolean</code> | fetch real response before responding with mocked data |

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

```js title="respond.js"
it('should demonstrate response overwrite with static data', async () => {
    const mock = await browser.mock('https://todo-backend-express-knex.herokuapp.com/', {
        method: 'get'
    })

    mock.respond([{
        title: 'Injected (non) completed Todo',
        order: null,
        completed: false
    }, {
        title: 'Injected completed Todo',
        order: null,
        completed: true
    }], {
        statusCode: 200,
        fetchResponse: true // default
    })

    await browser.url('https://todobackend.com/client/index.html?https://todo-backend-express-knex.herokuapp.com/')

    await $('#todo-list li').waitForExist()
    console.log(await $$('#todo-list li').map(el => el.getText()))
    // outputs: "[ 'Injected (non) completed Todo', 'Injected completed Todo' ]"
})

it('should demonstrate response overwrite with dynamic data', async () => {
    const mock = await browser.mock('https://todo-backend-express-knex.herokuapp.com/')

    mock.respond((request) => {
        if (request.body.username === 'test') {
            return { ...request.body, foo: 'bar' }
        }
        return request.body
    }, {
        statusCode: () => 200,
        headers: () => ({ foo: 'bar }),
        fetchResponse: false // do not fetch real response
    })
})
```

</TabItem>
<TabItem value="sync">

```js title="respond.js"
it('should demonstrate response overwrite with static data', () => {
    const mock = browser.mock('https://todo-backend-express-knex.herokuapp.com/', {
        method: 'get'
    })

    mock.respond([{
        title: 'Injected (non) completed Todo',
        order: null,
        completed: false
    }, {
        title: 'Injected completed Todo',
        order: null,
        completed: true
    }], {
        statusCode: 200,
        fetchResponse: true // default
    })

    browser.url('https://todobackend.com/client/index.html?https://todo-backend-express-knex.herokuapp.com/')

    $('#todo-list li').waitForExist()
    console.log($$('#todo-list li').map(el => el.getText()))
    // outputs: "[ 'Injected (non) completed Todo', 'Injected completed Todo' ]"
})

it('should demonstrate response overwrite with dynamic data', () => {
    const mock = browser.mock('https://todo-backend-express-knex.herokuapp.com/')

    mock.respond((request) => {
        if (request.body.username === 'test') {
            return { ...request.body, foo: 'bar' }
        }
        return request.body
    }, {
        statusCode: () => 200,
        headers: () => ({ foo: 'bar }),
        fetchResponse: false // do not fetch real response
    })
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

