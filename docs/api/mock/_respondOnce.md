---
id: respondOnce
title: respondOnce
custom_edit_url: https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/mock/respondOnce.ts
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Only respond once with given overwrite. You can call `respondOnce` multiple
consecutive times and it will start with the respond you defined last. If you
only use `respondOnce` and the resource is called more times a mock has been
defined than it defaults back to the original resource.

##### Usage

```js
mock.respondOnce(overwrites, { header, statusCode, fetchResponse })
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

```js title="respondOnce.js"
async function getToDos () {
    await $('#todo-list li').waitForExist()
    return $$('#todo-list li').map(el => el.getText())
}

it('should demonstrate the respondOnce command', async () => {
    const mock = await browser.mock('https://todo-backend-express-knex.herokuapp.com/', {
        method: 'get'
    })

    mock.respondOnce([{
        title: '3'
    }, {
        title: '2'
    }, {
        title: '1'
    }])

    mock.respondOnce([{
        title: '2'
    }, {
        title: '1'
    }])

    mock.respondOnce([{
        title: '1'
    }])

    await browser.url('https://todobackend.com/client/index.html?https://todo-backend-express-knex.herokuapp.com/')
    console.log(await getToDos()) // outputs [ '3', '2', '1' ]
    await browser.url('https://todobackend.com/client/index.html?https://todo-backend-express-knex.herokuapp.com/')
    console.log(await getToDos()) // outputs [ '2', '1' ]
    await browser.url('https://todobackend.com/client/index.html?https://todo-backend-express-knex.herokuapp.com/')
    console.log(await getToDos()) // outputs [ '1' ]
    await browser.url('https://todobackend.com/client/index.html?https://todo-backend-express-knex.herokuapp.com/')
    console.log(await getToDos()) // outputs actual resource response
})
```

</TabItem>
<TabItem value="sync">

```js title="respondOnce.js"
async function getToDos () {
    $('#todo-list li').waitForExist()
    return $$('#todo-list li').map(el => el.getText())
}

it('should demonstrate the respondOnce command', () => {
    const mock = browser.mock('https://todo-backend-express-knex.herokuapp.com/', {
        method: 'get'
    })

    mock.respondOnce([{
        title: '3'
    }, {
        title: '2'
    }, {
        title: '1'
    }])

    mock.respondOnce([{
        title: '2'
    }, {
        title: '1'
    }])

    mock.respondOnce([{
        title: '1'
    }])

    browser.url('https://todobackend.com/client/index.html?https://todo-backend-express-knex.herokuapp.com/')
    console.log(getToDos()) // outputs [ '3', '2', '1' ]
    browser.url('https://todobackend.com/client/index.html?https://todo-backend-express-knex.herokuapp.com/')
    console.log(getToDos()) // outputs [ '2', '1' ]
    browser.url('https://todobackend.com/client/index.html?https://todo-backend-express-knex.herokuapp.com/')
    console.log(getToDos()) // outputs [ '1' ]
    browser.url('https://todobackend.com/client/index.html?https://todo-backend-express-knex.herokuapp.com/')
    console.log(getToDos()) // outputs actual resource response
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

