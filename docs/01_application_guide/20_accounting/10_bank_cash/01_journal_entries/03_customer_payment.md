---
title: Customer Payments
summary: Accounting --> Bank & Cash --> Journal Entries --> Customer Payments
authors: Wilson Loh
date: 2022-01-18
---

## **Purpose**

This document will walk you through how payment journal entries are created in the **Accounting** application of Odoo 15, and how to set the accounts that those payment journal entries will impact. We will show examples of both sending payment to a vendor and receiving payment from a customer as well as how to create payments manually. 

## **Process**

To get started, navigate to the **Accounting** app. 

![Odoo image and text block](https://hibou.io/web/image/75191/hibou15-accounting-app.jpg?access_token=62528fe1-1e50-4d91-94b2-4af8eb4325a2)

### Journals and Accounts 

The accounts that will be impacted by registering payments will always be taken from the journal's default debit/default credit accounts and the partner's Accounts Receivable/Accounts Payable (AR/AP) accounts listed on their contact. 

We will look at the journal's accounts first. Navigate to the journal that you want to post your payment to by clicking [Configuration](https://hibou.io/docs/accounting-3/customer-payments-357#) > [Accounting](https://hibou.io/docs/accounting-3/customer-payments-357#) > [Journals](https://hibou.io/docs/accounting-3/customer-payments-357#). 

In this example, we will post a payment to our 'Old Bank' journal. 

![Odoo image and text block](https://hibou.io/web/image/75192/journals-and-accounts-v15.png?access_token=7870ecf9-1d10-4ce6-a852-6eb0bb58928f)

On the [Journal Entries](https://hibou.io/docs/accounting-3/customer-payments-357#) tab. For this journal, the **Bank Account** is set to "Bank" and the **Suspense Account** is set to "Bank Suspense Account".

**Suspense Account**: Bank statement transactions are posted to the suspense account until reconciled with a corresponding payment on a vendor bill or customer invoice. This allows the accountant to easily track discrepancies and further separate remaining reconciliation tasks by the journal.

![Odoo image and text block](https://hibou.io/web/image/75194/journal-entries-tab-suspense-account-v15.png?access_token=473d626f-542e-475c-9874-fa3720082c20)

First, let's look at [Incoming Payments](https://hibou.io/docs/accounting-3/customer-payments-357#) tab. Like all journal entries, the account used on a transaction's incoming payments will be when a payment is being received.Click Add a line to enter a payment method.

**Payment Method /Name:**

-   Manual: Get paid by any method outside of Odoo.
    
-   **Payment Aquiriers**: Each payment acquirer has its own Payment Method. Request a transaction on/to a card thanks to a payment token saved by the partner when buying or purchasing online.
    
-   **Batch Deposit:** Collect several customer checks at once generating and submitting a batch deposit to your bank. Module account\_batch\_payment is necessary.
    
-   **SEPA Direct Debit**: Get paid in the SEPA zone thanks to a mandate your partner will have granted to you. Module account\_sepa\_ is necessary.
    

![](https://hibou.io/web/image/75195/incoming-payments-tab.png?access_token=eea0d535-3e70-4223-8a43-953cef5ca367)  

On the [outgoing PAYMENTS](https://hibou.io/docs/accounting-3/customer-payments-357/ver/15-0-28#) tab, like all journal entries, the account used on a transaction will be when a payment is being sent. Click Add a line to enter a payment method.

Payment Method /Name:  

-   Manual: Get paid by any method outside of Odoo.
    
-   Payment Aquiriers: Each payment acquirer has its own Payment Method. Request a transaction on/to a card thanks to a payment token saved by the partner when buying or purchasing online.
    
-   Batch Deposit: Collect several customer checks at once generating and submitting a batch deposit to your bank. **Module account\_batch\_payment is necessary.**
    
-   SEPA Direct Debit: Get paid in the SEPA zone thanks to a mandate your partner will have granted to you. Module account\_sepa\_ is necessary.
    

**NACHA configuration:** This is an ACH network, which will electronically move money.  

-   Immediate Destination: This will be provided by your bank**.**
    
-   **Immediate Origin:** This will be provided by your bank.  
    
-   **Company Identification:**  This will be provided by your bank.
    
-   **Origination Dfi Identification:** This will be provided by your bank.  
    

 **Check Printing**

Manual Number: Check this box if your pre-printed checks are not numbered. 

![](https://hibou.io/web/image/75196/outgoing-payments-tab-v15.png?access_token=9f5a6d34-973c-4175-b9c9-0a9942e765ed)  

The other half of the journal entry will be determined by the accounts listed on the partner's AR/AP found on their contact record.

### Accessing Contacts

To access your vendors, navigate to [Vendors](https://hibou.io/docs/accounting-3/customer-payments-357#) > [Vendors](https://hibou.io/docs/accounting-3/customer-payments-357#). To access your customers, navigate to [Customers](https://hibou.io/docs/accounting-3/customer-payments-357#) > [customers](https://hibou.io/docs/accounting-3/customer-payments-357#).

In this view, you will see that when selecting a Vendor, Odoo filters to  **Vendor Bills**. Choose the partner that you want to associate with your payment.

![Odoo image and text block](https://hibou.io/web/image/75197/vendor-contact-v15.png?access_token=1bee8c33-fdaa-41a8-9432-3b66b24d64ac)

Navigate to the accounting tab for the partner and click the [Accounting](https://hibou.io/docs/accounting-3/customer-payments-357#) tab. The accounts listed as their **Account Receivable** and **Account Payable** will be used for payments associated with this partner. 

If you see the message "Accounting-related settings are managed on **the parent company**", click the parent company link displayed. These fields can only be viewed/changed on a parent contact.

![](https://hibou.io/web/image/65657/the-parent-company-link-odoo-14.png?access_token=d8037264-ea47-4604-a498-b2d9b93e0aff)  

Incoming customer-type payments use the partner's **Account Receivable**. Outgoing vendor-type payments use the partner's **Account Payable**.

![Odoo image and text block](https://hibou.io/web/image/65329/partner-ac.png?access_token=6abcb5d0-1088-4ded-895e-13dd481e58c5)

### Manually Create a Vendor Payment (Outgoing)

It's best practice to create a payment directly from the vendor bill; however, Odoo does allow you to create  vendor payments. To do so, click [Vendors](https://hibou.io/docs/accounting-3/customer-payments-357#) > [Payments](https://hibou.io/docs/accounting-3/customer-payments-357#), then click [create](https://hibou.io/docs/accounting-3/customer-payments-357#).   
![](https://hibou.io/web/image/75198/create-vendor-bill-v15.png?access_token=40cbe029-3bb5-4573-88c8-3fb7cb7e144d)  

This will bring you to a form with the following fields.

Internal Transfer: This field is to be used for moving funds from one internal account to another. It is not applicable when paying a vendor bill.

**Payment Type: Send** will already be selected because you accessed this form through the Vendors menu.

**Vendor:** Enter the name of the vendor.

Amount: Input the payment amount and currency.   

Date: Select the date that the payment should be recorded.   

**Memo:**  Input a reference for the payment, we recommend using the vendor bill number associated with this payment.

Journal: Select the Journal that the payment will be posted to. 

Payment Method

-   Manual: This means that the payment was sent or received by a method outside of Odoo like a credit card payment or PayPal receipt. 
    
-   **NACHA**: Select this to pay by ACH (ACH and NACHA are essentially the same)-Electronic system that moves e-payments from one bank account to another).
    
-   Check: This means that a check was used to make or receive this payment and can be recorded within Odoo. If you use check printing within Odoo, you can have Odoo print the check for this payment. When selected, the following fields display in the previous section. 
    

**Vendor Bank Account** This field will only appear when the Payment Method is set to "Manual". If the vendor you've selected has one or more bank accounts on file, you'll have the option to select their account here.  
![](https://hibou.io/web/image/75200/create-vendor-bill-template-v15.png?access_token=bc88c22a-8c05-4eda-a21a-6127ef381367)  

When you're done, click [SAVE](https://hibou.io/docs/accounting-3/customer-payments-357#) to keep this record as a draft, or click [CONFIRM](https://hibou.io/docs/accounting-3/customer-payments-357#). Once confirmed, you can then click [reset to draft](https://hibou.io/docs/accounting-3/customer-payments-357#), or [Mark as Sent](https://hibou.io/docs/accounting-3/customer-payments-357#) to record that the manual payment has been sent.  

### Journal Entry Sent Payment 

Once your payment is confirmed, we can review the journal entry that was created by clicking on the   **Journal Entry** smart button.

![Odoo image and text block](https://hibou.io/web/image/75201/journal-entry-smart-button-v15.png?access_token=91a94d27-38f9-4e2e-ae6c-78a04da5499a)

Here you can see that we credited $100.00 from the account that was listed as the **Outstanding Payments** account on our "Bank" journal and we debited the account that was listed as the default **Accounts Payable** account on the vendor's accounting tab. 

![Odoo image and text block](https://hibou.io/web/image/75202/journal-items-tab-vendor-payment-v15.png?access_token=88442d9c-0f81-4d8b-80a5-b6e64e4e8181)

### Manually Create a Customer Payment (Incoming)

Click [CUSTOMERS](https://hibou.io/docs/accounting-3/customer-payments-357#) > [Payments](https://hibou.io/docs/accounting-3/customer-payments-357#), then click [create](https://hibou.io/docs/accounting-3/customer-payments-357#). 

![](https://hibou.io/web/image/75203/create-customer-payment-v15.png?access_token=198e4a86-27f9-4288-9aad-8761357e0fdf)  

This will bring you a form with the following fields.  

 Internal Transfer: This field is to be used for moving funds from one internal account to another. It is not applicable when paying an invoice.

**Payment Type: "**Receive Money" will already be selected because you accessed this form through the Customers menu.

**Customer:** Select the customer the payment is coming from

Amount: Input the payment amount and currency. 

Date: Select the date that the payment should be recorded. 

Memo: Input a reference for the payment, we recommend using the vendor bill number associated with this payment.

Journal: Select the Journal that the payment will be posted to. 

Payment Method

-   Manual: This means that the payment was sent or received by a method outside of Odoo like a credit card payment or PayPal receipt. 
    

Customer Bank Account: This field will only appear when the Payment Method is set to "Manual". If the customer you've selected has one or more bank accounts on file, you'll have the option to select their account here.![](https://hibou.io/web/image/75204/customer-payment-template-v15.png?access_token=7340f564-3407-4149-9711-a68e3f8485e7)  

When you're done, you have the option to click [Save](https://hibou.io/docs/accounting-3/customer-payments-357#) to save this record as a draft; however, for this example, click [Confirm](https://hibou.io/docs/accounting-3/customer-payments-357#) to indicate the payment was received.

### Journal Entry Received Payment 

Once your payment is confirmed, we can review the journal entry that was created by clicking on the   Journal Entry smart button.  

![Odoo image and text block](https://hibou.io/web/image/75205/journal-entry-smart-button2-v15.png?access_token=f017629d-2993-4e3d-8d8f-a471fe8e6189)

Here you can see that we credited $948.75 from the account that was listed as the **Account Receivable** on the customer's accounting tab and we debited the account that was listed as the Outstanding Receipts Account on the 'Bank' journal.

![Odoo image and text block](https://hibou.io/web/image/75206/journal-items-for-posted-payment-v15.png?access_token=c371ccb9-0c9e-4fc0-862a-c2b7d5f649a1)