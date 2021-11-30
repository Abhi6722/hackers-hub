---
id: mock
title: mock
custom_edit_url: https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/browser/mock.ts
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Mock the response of a request. You can define a mock based on a matching
glob and corresponding header and status code. Calling the mock method
returns a stub object that you can use to modify the response of the
web resource.

With the stub object you can then either return a custom response or
have the request fail.

There are 3 ways to modify the response:
- return a custom JSON object (for stubbing API request)
- replace web resource with a local file (service a modified JavaScript file) or
- redirect resource to a different url

:::info

Note that using the `mock` command requires support for Chrome DevTools protocol and e.g.
can not be used when running automated tests in the cloud. Find out more in the
[Automation Protocols](/docs/automationProtocols) section.

:::

##### Usage

```js
browser.mock(url, { method, headers, responseHeaders, postData, statusCode })
```

##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>url</var></code> | <code>String</code>, <code>RegExp</code> | url to mock |
| <code><var>filterOptions</var></code><br /><span class="label labelWarning">optional</span> | <code>MockFilterOptions</code> | filter mock resource by additional options |
| <code><var>filterOptions.method</var></code><br /><span class="label labelWarning">optional</span> | <code>String</code>, <code>Function</code> | filter resource by HTTP method |
| <code><var>filterOptions.headers</var></code><br /><span class="label labelWarning">optional</span> | <code>Object</code>, <code>Function</code> | filter resource by specific request headers |
| <code><var>filterOptions.responseHeaders</var></code><br /><span class="label labelWarning">optional</span> | <code>Object</code>, <code>Function</code> | filter resource by specific response headers |
| <code><var>filterOptions.postData</var></code><br /><span class="label labelWarning">optional</span> | <code>String</code>, <code>Function</code> | filter resource by request postData |
| <code><var>filterOptions.statusCode</var></code><br /><span class="label labelWarning">optional</span> | <code>Number</code>, <code>Function</code> | filter resource by response statusCode |

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

```js title="mock.js"
it('should mock network resources', async () => {
    // via static string
    const userListMock = await browser.mock('**' + '/users/list')
    // or as regular expression
    const userListMock = await browser.mock(/https:\/\/(domainA|domainB)\.com\/.+/)
    // you can also specifying the mock even more by filtering resources
    // by request or response headers, status code, postData, e.g. mock only responses with specific
    // header set and statusCode
    const strictMock = await browser.mock('**', {
        // mock all json responses
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        responseHeaders: { 'Cache-Control': 'no-cache' },
        postData: 'foobar'
    })

    // comparator function
    const apiV1Mock = await browser.mock('**' + '/api/v1', {
        statusCode: (statusCode) => statusCode >= 200 && statusCode <= 203,
        headers: (headers) => headers['Authorization'] && headers['Authorization'].startsWith('Bearer '),
        responseHeaders: (headers) => headers['Impersonation'],
        postData: (data) => typeof data === 'string' && data.includes('foo')
    })
})

it('should modify API responses', async () => {
    // filter by method
    const todoMock = await browser.mock('**' + '/todos', {
        method: 'get'
    })

    // mock an endpoint with a fixed fixture
    mock.respond([{
        title: 'Injected Todo',
        order: null,
        completed: false,
        url: "http://todo-backend-express-knex.herokuapp.com/916"
    }])

    // respond with different status code or header
    mock.respond([{
        title: 'Injected Todo',
        order: null,
        completed: false,
        url: "http://todo-backend-express-knex.herokuapp.com/916"
    }], {
        statusCode: 404,
        headers: {
            'x-custom-header': 'foobar'
        }
    })
})

it('should modify text assets', async () => {
    const scriptMock = await browser.mock('**' + '/script.min.js')
    scriptMock.respond('./tests/fixtures/script.js')
})

it('should redirect web resources', async () => {
    const headerMock = await browser.mock('**' + '/header.png')
    headerMock.respond('https://media.giphy.com/media/F9hQLAVhWnL56/giphy.gif')

    const pageMock = await browser.mock('https://google.com/')
    pageMock.respond('https://webdriver.io')
    await browser.url('https://google.com')
    console.log(await browser.getTitle()) // returns "WebdriverIO · Next-gen browser and mobile automation test framework for Node.js"
})
```

</TabItem>
<TabItem value="sync">

```js title="mock.js"
it('should mock network resources', () => {
    // via static string
    const userListMock = browser.mock('**' + '/users/list')
    // or as regular expression
    const userListMock = browser.mock(/https:\/\/(domainA|domainB)\.com\/.+/)
    // you can also specifying the mock even more by filtering resources
    // by request or response headers, status code, postData, e.g. mock only responses with specific
    // header set and statusCode
    const strictMock = browser.mock('**', {
        // mock all json responses
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        responseHeaders: { 'Cache-Control': 'no-cache' },
        postData: 'foobar'
    })

    // comparator function
    const apiV1Mock = browser.mock('**' + '/api/v1', {
        statusCode: (statusCode) => statusCode >= 200 && statusCode <= 203,
        headers: (headers) => headers['Authorization'] && headers['Authorization'].startsWith('Bearer '),
        responseHeaders: (headers) => headers['Impersonation'],
        postData: (data) => typeof data === 'string' && data.includes('foo')
    })
})

it('should modify API responses', () => {
    // filter by method
    const todoMock = browser.mock('**' + '/todos', {
        method: 'get'
    })

    // mock an endpoint with a fixed fixture
    mock.respond([{
        title: 'Injected Todo',
        order: null,
        completed: false,
        url: "http://todo-backend-express-knex.herokuapp.com/916"
    }])

    // respond with different status code or header
    mock.respond([{
        title: 'Injected Todo',
        order: null,
        completed: false,
        url: "http://todo-backend-express-knex.herokuapp.com/916"
    }], {
        statusCode: 404,
        headers: {
            'x-custom-header': 'foobar'
        }
    })
})

it('should modify text assets', () => {
    const scriptMock = browser.mock('**' + '/script.min.js')
    scriptMock.respond('./tests/fixtures/script.js')
})

it('should redirect web resources', () => {
    const headerMock = browser.mock('**' + '/header.png')
    headerMock.respond('https://media.giphy.com/media/F9hQLAVhWnL56/giphy.gif')

    const pageMock = browser.mock('https://google.com/')
    pageMock.respond('https://webdriver.io')
    browser.url('https://google.com')
    console.log(browser.getTitle()) // returns "WebdriverIO · Next-gen browser and mobile automation test framework for Node.js"
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

