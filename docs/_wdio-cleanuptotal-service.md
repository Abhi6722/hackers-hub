---
id: wdio-cleanuptotal-service
title: CleanupTotal Service
custom_edit_url: https://github.com/tzurp/cleanup-total/edit/master//README.md
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> wdio-cleanuptotal-service is a 3rd party package, for more information please see [GitHub](https://github.com/tzurp/cleanup-total) | [npm](https://www.npmjs.com/package/wdio-cleanuptotal-service)

With this plugin for [webdriver.io](https://webdriver.io/) it is easy to properly cleanup after each test.
Cleanup after test might get complicated. For example: Lets say you are creating a bank account and then adding an investment plan and depositing there some money. If you try to delete the account you'd probably get a refusion because the account is not empty. <b>cleanup-total</b> helps you to do it systematically by 'marking' each entity you create for deletion right after its creation. When the test is finished, <b>cleanup-total</b> would delete the investment plan, the deposit and the account in the right order.

<h2>Installation</h2>
The easiest way to install this module as a (dev-)dependency is by using the following command:

```
npm install wdio-cleanuptotal-service --save-dev
```

<h2>Usage</h2>

Add wdio-cleanuptotal-service to your `wdio.conf.js`:

```
exports.config = {
  // ...
  services: ['cleanuptotal']
  // ...
};
```
or with the service options:

```
exports.config = {
  // ...
  services: [
      ['cleanuptotal',
        {
          // TODO: you can put here any logger function
            customLoggerMethod: allureReporter.addStep
        }]
      ]
  // ...
};
```

<h2>Usage in test</h2>

Just import <b>cleanuptotal</b> where you need it, whether it be your test file or any other class:

```
import { cleanuptotal } from "wdio-cleanuptotal-service";

it("should keep things tidy", () => {
            // ...

            const accountId = createAccount("John Blow");
            
            cleanupTotal.addCleanup(async () => { await deleteAccount(accountId) }); // TODO: mark for deletion * 

            addInvestmentPlan(accountId, "ModRisk");

            cleanupTotal.addCleanup(async () => { await removeInvestmentPlan(accountId) }); // TODO: mark for deletion *
            
            deposit(accountId, 1000000);

            cleanupTotal.addCleanup(async () => { await removeDeposit(accountId) }); // TODO: mark for deletion *

            //...
        });

        // TODO: * Please note that the actual execution of the cleanup code would take palce AFTER test completion.
```

<h2>Typescript support</h2>

Typescript is supported for this plugin.