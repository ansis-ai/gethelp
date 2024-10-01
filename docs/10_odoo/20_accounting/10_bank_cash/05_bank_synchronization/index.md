---
title: Bank Synchronization
summary: Accounting --> Bank & Cash --> Bank Synchronization
authors: Wilson Loh
date: 2022-01-18
---

Odoo can synchronize directly with your bank institution to get all bank statements imported automatically into your database.

To check if your bank is compatible with Odoo, go to [Odoo Accounting Features](https://www.odoo.com/page/accounting-features), and click on See list of supported institutions.

Odoo supports more than 25,000 institutions around the world.

To connect to the banks, Odoo uses multiple web-services:

-   **Plaid**: United States of America and Canada
    
-   **Yodlee**: Worldwide
    
-   [Salt Edge](https://www.odoo.com/documentation/16.0/applications/finance/accounting/bank/bank_synchronization/saltedge.html): Worldwide
    
-   [Ponto](https://www.odoo.com/documentation/16.0/applications/finance/accounting/bank/bank_synchronization/ponto.html): Europe
    
-   [Enable Banking](https://www.odoo.com/documentation/16.0/applications/finance/accounting/bank/bank_synchronization/enablebanking.html): Scandinavian countries
    

## Configuration[](https://www.odoo.com/documentation/16.0/applications/finance/accounting/bank/bank_synchronization.html#configuration "Permalink to this headline")

### On-Premise users[](https://www.odoo.com/documentation/16.0/applications/finance/accounting/bank/bank_synchronization.html#on-premise-users "Permalink to this headline")

To be able to use this service, you need to have a valid Odoo Enterprise subscription. So make sure that your database is registered with your Odoo Enterprise contract. We also use a proxy between your database and the third party provider so, in case of a connection error, please check that you don’t have a firewall or a proxy blocking the following address:

-   [https://production.odoofin.com/](https://production.odoofin.com/)
    

### First synchronization[](https://www.odoo.com/documentation/16.0/applications/finance/accounting/bank/bank_synchronization.html#first-synchronization "Permalink to this headline")

You can start synchronization either by going to the Accounting app and .

Now you can search for your bank institution. Select it and follow the steps to synchronize with it.

Note

If you have any issues during your first synchronization, please verify that your web browser doesn’t block pop-ups and that your ad-blocker is disabled.

Important

When choosing the date for the first bank statement synchronization, pick the date when you start recording accounting transaction on your Odoo accounting database. For example, if you import your closing balance in Odoo on the 31/12/2022 and you start recording accounting transactions on the 01/01/2023, your synchronization date should be 01/01/2023.

You must provide a phone number during your first synchronization to secure your account. We ask for such information because we don’t want your data falling into the wrong hands. Therefore, if we detect suspicious activities on your account, we block all requests coming from your account, and you need to reactivate it using that phone number.

The third-party provider may request more information in order to connect with your bank institution. This information is not stored on Odoo’s servers.

By default, transactions fetched from an online source are grouped inside the same statement, and one bank statement is created per month. You can change the bank statement creation periodicity in your journal settings.

You can find all your synchronizations by going to .

### Synchronize manually[](https://www.odoo.com/documentation/16.0/applications/finance/accounting/bank/bank_synchronization.html#synchronize-manually "Permalink to this headline")

After your first synchronization, the created journals are synchronized by default every 12 hours. If you wish, you can synchronize manually by clicking on the Synchronize Now button on the dashboard.

Or you can go to , select your institution and then click on the fetch transactions button.

Important

Some institutions do not allow transactions to be fetched automatically. For such institutions, during the automatic synchronization of the account, you receive an error message asking you to disable the automatic synchronization. This message can be found in the chatter of your online synchronizations. In this case, make sure to perform manual synchronizations.

## Issues[](https://www.odoo.com/documentation/16.0/applications/finance/accounting/bank/bank_synchronization.html#issues "Permalink to this headline")

### Synchronization in error[](https://www.odoo.com/documentation/16.0/applications/finance/accounting/bank/bank_synchronization.html#synchronization-in-error "Permalink to this headline")

To report a connection error to the [Odoo support](https://www.odoo.com/help), go to , select the connection that failed, and copy the error description and the reference.

### Synchronization disconnected[](https://www.odoo.com/documentation/16.0/applications/finance/accounting/bank/bank_synchronization.html#synchronization-disconnected "Permalink to this headline")

If your connection with the proxy is disconnected, you can reconnect with the proxy using the Fetch Account button.

Note

This disconnection can be caused by the Odoo support. In this case, please contact the [support](https://www.odoo.com/help) directly with your client id or the reference of the error listed in the chatter.

## Migration process for users having installed Odoo before December 2020[](https://www.odoo.com/documentation/16.0/applications/finance/accounting/bank/bank_synchronization.html#migration-process-for-users-having-installed-odoo-before-december-2020 "Permalink to this headline")

If you are on-premise, please first make sure that your source is up-to-date with the latest version of Odoo.

Users who have created a database before December 2020 need to install the new module manually to use the new functionalities.

To do so, go to , remove the default filter in the search bar and type `account_online_synchronization`. You can then click on Install. Finally, make sure all your users refresh their Odoo page by pressing CTRL+F5.

Note

-   All previous synchronizations are disconnected during the installation and won’t work anymore.
    
-   You can find them directly in the synchronization menu (). It is not possible to resynchronize these connections; you have to make new ones.
    
-   Do not uninstall `account_online_sync`, which is the previous module for online synchronization. The new one overrides it.
    
-   By default, `account_online_synchronization` is installed automatically with Accounting.
    

## FAQ[](https://www.odoo.com/documentation/16.0/applications/finance/accounting/bank/bank_synchronization.html#faq "Permalink to this headline")

### The synchronization is not working in real-time. Is that normal?[](https://www.odoo.com/documentation/16.0/applications/finance/accounting/bank/bank_synchronization.html#the-synchronization-is-not-working-in-real-time-is-that-normal "Permalink to this headline")

The process is not intended to work in real-time as third party providers synchronize your accounts at different intervals. To force the synchronization and fetch the statements, go to your Accounting Dashboard, and click on the Synchronize Now button. You can also synchronize and fetch transactions through . Some providers only allow one refresh per day, so it is possible that clicking on Synchronize Now does not get your latest transactions if you already performed such action earlier in the day.

A transaction can be visible on your bank account but not be fetched if it has the status Pending. Only transactions with the Posted status will be retrieved. If the transaction is not **Posted** yet, you will have to wait until the status changes.

### Is the Online Bank Synchronization feature included in my contract?[](https://www.odoo.com/documentation/16.0/applications/finance/accounting/bank/bank_synchronization.html#is-the-online-bank-synchronization-feature-included-in-my-contract "Permalink to this headline")

-   **Community Version**: No, this feature is not included in the Community Version.
    
-   **Online Version**: Yes, even if you benefit from the One App Free contract.
    
-   **Enterprise Version**: Yes, if you have a valid enterprise contract linked to your database.
    

### Some banks have a status “Beta.” What does this mean?[](https://www.odoo.com/documentation/16.0/applications/finance/accounting/bank/bank_synchronization.html#some-banks-have-a-status-beta-what-does-this-mean "Permalink to this headline")

This means that banking institutions are not yet fully supported by our Third Party Provider. Bugs or other problems may arise. Odoo does not support technical problems that occur with banks in the Beta phase, but the user may still choose to connect. Connecting with these banks contributes to the development process since the Provider will have real data and feedback from the connection.

### Why do my transactions only synchronize when I refresh manually?[](https://www.odoo.com/documentation/16.0/applications/finance/accounting/bank/bank_synchronization.html#why-do-my-transactions-only-synchronize-when-i-refresh-manually "Permalink to this headline")

Some banks have additional security measures and require extra steps, such as an SMS/email authentication code or another type of MFA. Because of this, the integrator cannot pull transactions until the security code is provided.

### Not all of my past transactions are in Odoo, why?[](https://www.odoo.com/documentation/16.0/applications/finance/accounting/bank/bank_synchronization.html#not-all-of-my-past-transactions-are-in-odoo-why "Permalink to this headline")

For some institutions, transactions can only be fetched up to 3 months in the past.

### Why don’t I see any transactions?[](https://www.odoo.com/documentation/16.0/applications/finance/accounting/bank/bank_synchronization.html#why-don-t-i-see-any-transactions "Permalink to this headline")

During your first synchronization, you selected the bank accounts you decided to synchronize with Odoo. If you didn’t synchronize any of your accounts, you can go to to click on the Fetch Account button on the connection.

There may also be no new transactions.

If your bank account is properly linked to a journal and posted transactions are not visible in your database, please [submit a support ticket](https://www.odoo.com/help).

### How can I update my bank credentials?[](https://www.odoo.com/documentation/16.0/applications/finance/accounting/bank/bank_synchronization.html#how-can-i-update-my-bank-credentials "Permalink to this headline")

You can update your credentials by going to ,open the connection you want to update your credentials and click on the Update Credentials button.