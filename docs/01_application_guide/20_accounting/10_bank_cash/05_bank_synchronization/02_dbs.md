---
title: DBS Bank
summary: Accounting --> Bank & Cash --> Bank Synchronization --> DBS Bank
authors: Wilson Loh
date: 2022-01-18
---

**Salt Edge** is a third-party provider that aggregates banking information from your bank accounts. It supports ~5000 institutions in more than 50 countries.

![Salt Edge Logo](https://www.odoo.com/documentation/16.0/_images/saltedge-logo.png)

Odoo can synchronize directly with your bank to get all bank statements imported automatically into your database.


## Configuration[](https://www.odoo.com/documentation/16.0/applications/finance/accounting/bank/bank_synchronization/saltedge.html#configuration "Permalink to this headline")

### Link your bank accounts with Odoo[](https://www.odoo.com/documentation/16.0/applications/finance/accounting/bank/bank_synchronization/saltedge.html#link-your-bank-accounts-with-odoo "Permalink to this headline")

1.  Start synchronization by clicking on .
    
2.  Select the institution you want to synchronize. You can see if Salt Edge is the third party provider of the institution by selecting it.
    
3.  After giving your phone number, you are asked for an email address. This email address is used to create your Salt Edge account. Please make sure you enter a valid email address, as otherwise, you will not be able to access your Salt Edge account.
    
    ![Email address to provide to Salt Edge for the creation of your account.](https://www.odoo.com/documentation/16.0/_images/saltedge-contact-email.png)
    
4.  After entering your email address, you are redirected to Salt Edge to continue the synchronization process.
    
    ![Salt Edge Login page.](https://www.odoo.com/documentation/16.0/_images/saltedge-login-page.png)
    
    
5.  Make sure you give your consent by checking the consent checkbox.
    
    ![Salt Edge give consent page.](https://www.odoo.com/documentation/16.0/_images/saltedge-give-consent.png)
    
    
6.  Complete the synchronization by following the steps.
    

### Update your credentials[](https://www.odoo.com/documentation/16.0/applications/finance/accounting/bank/bank_synchronization/saltedge.html#update-your-credentials "Permalink to this headline")

You might have to update your Salt Edge credentials or modify the synchronization settings.

To do so, go to and select the institution you want to update credentials. Click on the _Update Credentials_ button to start the flow and follow the steps.

Don’t forget to check the consent checkbox. Otherwise, Odoo may not be able to access your information.

### Fetch new accounts[](https://www.odoo.com/documentation/16.0/applications/finance/accounting/bank/bank_synchronization/saltedge.html#fetch-new-accounts "Permalink to this headline")

You might want to add new online accounts to your connection.

To do so, go to and select the institution to fetch the new accounts. Click on the _Fetch Accounts_ button to start the flow and follow the steps.

Don’t forget to check the consent checkbox. Otherwise, Odoo may not be able to access your information.

## FAQ[](https://www.odoo.com/documentation/16.0/applications/finance/accounting/bank/bank_synchronization/saltedge.html#faq "Permalink to this headline")

### I have an error when I try to delete my synchronization within Odoo[](https://www.odoo.com/documentation/16.0/applications/finance/accounting/bank/bank_synchronization/saltedge.html#i-have-an-error-when-i-try-to-delete-my-synchronization-within-odoo "Permalink to this headline")

Odoo can’t permanently delete the connection you have created with the banking institution. However, it can revoke the consent you gave so that Odoo won’t be able to access your account anymore. The error you are seeing is probably a message telling you that the consent was revoked, but the record could not be deleted as it still exists within Salt edge. If you want to remove the connection completely, please connect to your [Salt Edge account](https://www.saltedge.com/dashboard) and manually delete your synchronization. Once this is done, you can go back to Odoo to delete the record.

### I have an error saying that I have already synchronized this account[](https://www.odoo.com/documentation/16.0/applications/finance/accounting/bank/bank_synchronization/saltedge.html#i-have-an-error-saying-that-i-have-already-synchronized-this-account "Permalink to this headline")

You have probably already synchronized your bank account with Salt Edge, please check on your [dashboard](https://www.saltedge.com/dashboard) that you don’t already have a connection with the same credentials.

In case you already have a synchronization with the same credentials present on your Salt Edge dashboard and this synchronization has not been created with Odoo, please delete it and create it from your Odoo database.

In case you already have a connection with the same credentials present on your Salt Edge dashboard and this synchronization was created with Odoo, you will normally be able to find it by going to . Please make sure to do an _Update Credentials_ to reactivate the connection.

[Edit on GitHub](https://github.com/odoo/documentation/edit/16.0/content/applications/finance/accounting/bank/bank_synchronization/saltedge.rst)