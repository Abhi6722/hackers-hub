---
id: wdio-eslinter-service
title: Auto-detect missing imports w/eslint Service
custom_edit_url: https://github.com/jamesmortensen/wdio-eslinter-service/edit/master//README.md
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> wdio-eslinter-service is a 3rd party package, for more information please see [GitHub](https://github.com/jamesmortensen/wdio-eslinter-service) | [npm](https://www.npmjs.com/package/wdio-eslinter-service)

Have you ever run your e2e tests, only to find out 10, 15, or 30 minutes later that there was a missing/misspelled import, which didn't appear until the middle of the test run?  When this happens, the test runner reports these tests as broken.

eslint is a great tool for catching different errors pre-runtime, and this service runs the eslint tool, prior to executing WebdriverIO tests, as an automated step instead of a manual one.

It's oftentimes better to fail faster so we can fix problems sooner rather than later.


## Installation

Install the wdio-eslinter-service:

```
$ npm i wdio-eslinter-service --save-dev 
```

If you don't already have eslint installed and configured, you'll need to install it and configure it in your project:

```
$ npm i eslint eslint-plugin-import
```

Put `.eslintrc.js` in the root of your Node.js project:

```
// .eslintrc.js
module.exports = {
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "plugins": [
        "import"
    ],
    "rules": {
        "import/no-unresolved": [
            2,
            {
                "commonjs": true,
                "amd": false,
                "caseSensitive": true
            }
        ]
    }
}
```

By default, this minimal configuration checks for unresolved require imports and throws an error if unresolved imports are found. The service then stops execution. You can customize .eslintrc.js to perform more checks, if desired. See [eslint](https://www.npmjs.com/package/eslint) for more details.

Inside your `package.json`, add this entry to your run scripts:

```json
{
    "scripts": {
        "eslint": "eslint ."
    }
}
```

**NOTE: Adding eslint to the package.json is required for the service to function.**


Lastly, add the `eslinter` service to the services array in `wdio.conf.js`:

```javascript
    services: ['eslinter']
```

Run `npm run eslint` to verify and check for errors.


## Using in WebdriverIO

Start WebdriverIO's test runner as normal. eslint will check the code. If errors are found, execution immediately ceases.

```bash
$ npx wdio
```


**Example:**

```bash
$ npx wdio --spec ./test/specs/example.e2e.js 

Execution of 1 spec files started at 2021-05-15T12:04:05.388Z

2021-05-15T12:04:05.793Z WARN wdio-eslinter-service: initialize wdio-eslint-service using npm runner.
Deleted files and directories:
 /Users/jem/Dev/wdio-example/allure-results

/Users/jem/Dev/wdio-example/test/specs/login.js
  1:22  error  Unable to resolve path to module '.../pageObjects/Auth.page'  import/no-unresolved

✖ 1 problem (1 error, 0 warnings)

2021-05-15T12:04:08.581Z ERROR wdio-eslinter-service: SEVERE: Code contains eslint errors or eslint not installed.
```

