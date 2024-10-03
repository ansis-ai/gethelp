---
title: Payment Acquirers
summary: Accounting --> Getting Started --> Configuration --> Payment Acquirers
authors: Wilson Loh
date: 2023-07-01
---

## **Purpose**

This document covers Payment Acquirers within the **Accounting** app of ANSIS 15. The integrated payment acquirers already within ANSIS allow customers the ability to pay on the customer portal or an eCommerce website. Customers may pay Sales Orders, Invoices, or Subscriptions with recurring payments using their preferred method, like a credit card.   

## Good to Know!

### PCI Compliance

ANSIS applications do not handle the sensitive information, meaning the certified payment acquirers take care of that so you do not have to concern yourself with PCI (Payment Card Industry) compliance. In short, all credit card numbers and/or credentials are not stored on ANSIS servers or databases. Alternatively, ANSIS uses a unique reference number to handle that sensitive data, which is safely stored in the payment acquirers system.

From an accounting perspective, there are two types of payment acquirers: payments that directly go to a bank account and follow normal reconciliation workflows, and then those that are a third-party service that requires you to follow a different accounting workflow. 

**Bank Payments**

-   **Wire Transfer:** When selected, ANSIS shows payment information with a payment reference. You must approve payments manually once they are received to your bank account. 
    
-   **SEPA Direct Debit:** _This is only used in the European Union._ Your customers are able to sign a SEPA (Single Euros Payment Area) Direct Debit mandate online to have their bank be directly debited. 
    

## **Process**

To get started, navigate to the **Accounting** app. 

![](https://hibou.io/web/image/75720/hibou15-accounting-app.jpg?access_token=aa632df5-3e4a-4ad7-bae8-41f2cd88ca1f)  

Once there, click [CONFIGURATION](https://hibou.io/docs/accounting-3/payment-acquirers-1558#) > [Payments](https://hibou.io/docs/accounting-3/payment-acquirers-1558#) > [PAYMENT ACQUIRERS](https://hibou.io/docs/accounting-3/payment-acquirers-1558#). Find your Payment Acquirer and click [ACTIVATE](https://hibou.io/docs/accounting-3/payment-acquirers-1558#).   

![](https://hibou.io/web/image/67828/Accountingv14-payment-acquirer-activate.png?access_token=94f0cee8-cf30-41bf-a9f1-e70a3f062b43)  

After clicking [ACTIVATE](https://hibou.io/docs/accounting-3/payment-acquirers-1558#), you are automatically in [EDIT](https://hibou.io/docs/accounting-3/payment-acquirers-1558#) mode.

**State**

-   **Disabled:** The payment method will not be available for use in ANSIS.
    
-   **Enabled:** The payment will be available throughout ANSIS and will process live transactions. This is intended for a production database.
    
-   **Test Mode:** It is recommended to use the Test Mode on a staging database if you're still in the testing phase. Test Mode is intended to be used with sandbox/test credentials, though ANSIS will still generate Sales Orders and Invoices as usual. It is not always possible to cancel invoices which could create issues with invoice numbering if you were to test payment acquirers on your production/main database.
    

-   **Company:** In a multi-company environment, you'll be required to select which company this payment method is configured for. This will default to the company you're working in. You can only select one company.
    
-   **Website:** In a multi-website configuration, you'll have the option to designate this payment method to one website, only. Leaving this field empty will permit all websites to use this payment method.
    

![](https://hibou.io/web/image/74112/paypal.jpg?access_token=700c7de9-00f7-4ad0-87a1-6ae9915bd80d)  

## Good to Know!

#### Configurations will Differ

The tabs you see on each Payment Acquirer integration will vary slightly. The tabs we outline below are some of the more common ones. If you need assistance configuring payment acquirerers, [send us an email](https://hibou.io/contact-us)!

Under the [Configuration](https://hibou.io/docs/accounting-3/payment-acquirers-1558#) tab:

![](https://hibou.io/web/image/74113/configuration.jpg?access_token=f407a92d-5943-44ef-9896-1f3d7fdaee72)  

**Payment Form**

-   **Displayed as:** Here you can change the display name for customers if desired.
    
-   **Supported Payment Icon**: Choose which payment card icons to appear on your website.   
    
-   **Allow Saving Payment Methods:** This controls whether customers can save their payment methods as payment tokens. A payment token is an anonymous link to the payment method details saved in the acquirer's database, allowing the customer to reuse it for the next purchase
    

**Payment Followup**

-   **Payment Journal**: Select a Journal for successful entries to be posted to. Be aware that ANSIS will automatically create a new Journal and Account when activating a new acquirer. Both are set by default out of the box, and it is heavily recommended that you ensure the fields are set correctly according to your accounting needs and preferences, configuring them if necessary. 
    

**Availability**

-   **Countries:** Select which countries this acquirer is applicable to. If this field is left empty, the acquirer is usable by all countries. 
    

Under the [MEssages](https://hibou.io/docs/accounting-3/payment-acquirers-1558#) tab, you can configure and personalize the shown messages to appear in their corresponding circumstances. 

![](https://hibou.io/web/image/67833/Accountingv14-payment-acquirers-messages.png?access_token=dafcac51-bc6f-4933-a4ec-131d0d49a8a2)