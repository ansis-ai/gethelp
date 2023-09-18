---
title: Reconciliation
summary: Accounting --> Bank & Cash --> Reconciliation
authors: Wilson Loh
date: 2022-01-18
---

**Purpose**  

Reconciliation is an accounting process that links corresponding journal items together so that you have clear records as to why money was credited or debited on an account. 

Reconciliation also refers to ensuring that the items on your business's bank statement are reconciled (i.e. linked) to activities in your business. 

In this document, we'll review the different ways to reconcile or unreconcile payments in the Accounting application of Odoo 15 in the following sections:

-   [**Reconciling with Bank Statements**](https://hibou.io/docs/accounting-3/reconciliation-94#reconciling-with-bank-statements)
    
-   **[Using Payment Matching](https://hibou.io/docs/accounting-3/reconciliation-94#reconciling-by-payment-matching)**
    
-   **[Settling an Invoice on Partial Payment](https://hibou.io/docs/accounting-3/reconciliation-94#settling-an-invoice-on-partial-payment)**
    
-   **[Cancelling Reconciled Payments](https://hibou.io/docs/accounting-3/reconciliation-94#canceling-reconciled-payments)** 
    

## **Process**

To get started, navigate to the **Accounting** app.

![](https://hibou.io/web/image/75216/hibou15-accounting-app.jpg?access_token=7c7d4341-68e2-477b-82d5-7890472897d7)  

### Reconciling with Bank Statements

In order to reconcile your bank account with Odoo, you'll need to have unreconciled statements. If you manually enter or import your statements, be sure to do that first.

![](https://hibou.io/web/image/75217/bank-dashboard-v15.png?access_token=04fb2eeb-0edc-4f68-99d5-6b7a2ff5daa7)  

If your account is set to sync automatically, then depending on your synchronization frequency, you may choose to sync again before getting started, so you'll have the most updated transactions

![](https://hibou.io/web/image/64761/sync-bank-statements-odoo-14.png?access_token=d640d4fa-4657-404b-9bad-7e51cbd2ea7b)  

Then, from the journal card, use the  menu to navigate to [Statements](https://hibou.io/docs/accounting-3/reconciliation-94#).  

![](https://hibou.io/web/image/75218/view-bank-statement-v15.png?access_token=87713c55-1a72-4197-84f3-d50085a27ccd)  

Once you're on the bank statement page, you'll see all of the bank statements that have been added into Odoo either manually or through any automatic bank synchronization that you have set up. For more information on setting up your bank statements, please see the [**Setting up a Bank Account**](https://hibou.io/docs/accounting-3/setting-up-a-new-bank-account-86/ver/15-0-28) document. 

Select the bank statement that you would like to reconcile. 

![Odoo CMS - a big picture](https://hibou.io/web/image/75219/select-bank-statement.png?access_token=c2b689c0-fa79-4ff2-901e-060b625af58a)

On the statement, you'll see all of your bank transactions in a form view. Review the information on this page, then click [Post](https://hibou.io/docs/accounting-3/reconciliation-94#).

![](https://hibou.io/web/image/75220/post-bank-statement-v15.png?access_token=0fef36d3-fa0e-4d5c-a807-ffb6dab68bfa)  

Next, click [reconcile](https://hibou.io/docs/accounting-3/reconciliation-94#) to begin the reconciliation process. 

![](https://hibou.io/web/image/75221/reconcile-v15.png?access_token=4a3d7e42-620d-4251-b8b5-57bd9b320bd0)

### Odoo Match Suggestions

On the reconciliation page, Odoo will make suggestions for transactions that match. The line in blue is the match that Odoo is suggesting.

You can then confirm the match by clicking [Validate](https://hibou.io/docs/accounting-3/reconciliation-94#).

![](https://hibou.io/web/image/75222/validate-reconciliation-v15.png?access_token=a8e3a043-d08e-4520-b2e6-d8f923b9a759)  

Continue through the list until all of your transactions have been matched. When you're done, Odoo will give you a big kudos in the form of Rainbow Guy.

If you're done reconciling the entire statement, click [Go to Bank Statements](https://hibou.io/docs/accounting-3/reconciliation-94#).

![](https://hibou.io/web/image/65367/rainbow-guy-odoo-14.png?access_token=23191b72-ffe0-4f78-a0b2-ed22bcb5e4db)  

Use the breadcrumbs to go back to bank statements.

![](https://hibou.io/web/image/75224/bank-statement-breadcrumb-v15.png?access_token=cb6b0429-477a-448d-8433-eabacec4a95f)  

Then click [Validate](https://hibou.io/docs/accounting-3/reconciliation-94#).

![](https://hibou.io/web/image/75225/validate-reconciliation-v15.png?access_token=d9239840-2e96-4084-bd36-e85b7977db8a)  

Your statement is now fully reconciled.

### Using Payment Matching

You should always attempt to record a payment directly from the invoice, or record a vendor payment directly from the bill. This is how it works in a perfect world; however, there will be times when you'll have transactions entered independently of their counterparts. That's where Payment Matching comes in.

**It's important to note that Payment Matching is unrelated to your bank statement reconciliation, and simply lets you link transactions together.**

In our example, Superstar Inc came in with a check. They didn't know which invoice they were paying,  only that they owed $690. We wanted to quickly get thim a receipt, so we [**received the payment into Odoo**](https://hibou.io/docs/accounting-3/customer-payments-357/ver/15-0-28) while they waited, but didn't link it to an invoice because we were short on time. We've since received and imported our bank statement including this transaction, now we need to match them up!

From [Customers](https://hibou.io/docs/accounting-3/reconciliation-94#) > [Payments](https://hibou.io/docs/accounting-3/reconciliation-94#), let's find the payment received from Superstar Inc.

![](https://hibou.io/web/image/75226/superstar-matching-v15.png?access_token=c400969f-cdd5-4527-afbd-760c105ccc91)  

From within this payment record, click the  **Payment Matching** smart button.

![](https://hibou.io/web/image/75228/reconcile-payment-v15.png?access_token=62d90c80-c377-4632-b8c4-b077fcbf6e8a)  

## Good to Know!

We'll occasionally refer to a T Sheet when talking about reconciliation. A T sheet is a form used in double-entry accounting. As in the example shown, there's a "T" on the page with the account is listed on the top (whether asset or liability). Then, the debit entries are in the left column and the credit entries in the right column.  The goal is for both columns to balance.

Here, of the reconcilable lines for this partner are displayed on a T sheet. 

Click [validate](https://hibou.io/docs/accounting-3/reconciliation-94#) when the columns are balanced and the correct transactions are matched.

![](https://hibou.io/web/image/75229/validate-reconciliation-in-v15.png?access_token=26278f38-4489-4bd7-8c4d-4b62c1ddb503)  

## Good to Know! 

You can use a Reconciliation Model to manually reconcile bank statement lines to the correct account without needing to select it from the Accounts drop-down menu. 

See our [**documentation on Reconciliation Models**](https://hibou.io/docs/accounting-3/reconciliation-models-625/ver/15-0-28) for more information and details.

### Settling an Invoice on Partial Payment

There may be times when a partial payment will be sufficient to settle an invoice. This may be based on things like specific payment terms, or a verbal agreement. It's important to first understand **[Reconciliation Models](https://hibou.io/docs/accounting-3/reconciliation-models-625/ver/15-0-28).** Creating a "Write-Off" model will provide a button under the [Manual Operations](https://hibou.io/docs/accounting-3/reconciliation-94#) tab allowing you to quickly write off the balance of an invoice and maintain control over where those funds are recorded.

In this example, we've agreed to settle the full bill of a customer if they pay today. From their payment record, we opened Payment Matching and added the total due ($948.75) and the payment ($900) to the T Sheet.

![](https://hibou.io/web/image/75837/payment-matching-t-sheet-v15.png?access_token=1b21af59-6f49-465e-b011-da8be305e588)  

Once we do this, Odoo assumes it's a partial payment and adjusts the invoice to match. Since we're writing the balance off, we'll need to set that back to the original amount by clicking the  icon.

![](https://hibou.io/web/image/75838/correct-amount-v15.png?access_token=7dc67c7b-2a22-4804-b982-916ef2cfc80b)  

Next, click the line that was added for "Open Balance".

![](https://hibou.io/web/image/75839/open-balance-v15.png?access_token=ad8b8b8f-f793-4f72-89df-e76c243a75c3)  

For the remaining balance (-$48.75), we'll click [Write Off](https://hibou.io/docs/accounting-3/reconciliation-94#), which is a [**Reconciliation Model**](https://hibou.io/docs/accounting-3/reconciliation-models-625/ver/15-0-28) we've created just for this purpose.

![](https://hibou.io/web/image/75840/write-off-amount.png?access_token=c5487817-ab80-4ccf-a6e1-6bcda904511b)  

This will populate the appropriate fields with the settings from the **Write Off Reconciliation Model**, and add the $23.51 offset to the T sheet.  We can then click [validate](https://hibou.io/docs/accounting-3/reconciliation-94#).

![](https://hibou.io/web/image/75841/write-off-validate-v15.png?access_token=dd29a579-581a-475f-98d3-8b64f5ebf3ed)  

The original invoices will now show as paid in full. 

![](https://hibou.io/web/image/75852/invoice-paid-banner-v15.png?access_token=63563b38-e6dd-4938-9ba8-af5008ab362f)  

And, the written off total has been added to the journal that records such things.

![](https://hibou.io/web/image/75842/journal-items-for-write-off-v15.png?access_token=75a25aa3-12a8-420d-a49e-e3a3274e62c1)  

### Canceling Reconciled Payments 

#### From the Bank Statement

To reverse reconciliation on any reconciled bank statement line, you'll first need to [reset to processing](https://hibou.io/docs/accounting-3/reconciliation-94#).

 ![](https://hibou.io/web/image/75849/reset-to-processing-v15.png?access_token=881463ec-0de4-4d8c-9a91-2535cf22a024)

Then, click [edit](https://hibou.io/docs/accounting-3/reconciliation-94#) followed by   [Revert Reconciliation](https://hibou.io/docs/accounting-3/reconciliation-94#) to the far-right of each transaction you'd like to unreconcile. This will set the transaction to unreconciled and allow you to re-reconcile that line to the appropriate no journal item.   

![](https://hibou.io/web/image/75850/revert-reconciliation-v15.png?access_token=dd7eaa7e-d026-4cce-a661-f01bfadbc59e)

#### From a Paid Invoice

Open the paid invoice from [Customers](https://hibou.io/docs/accounting-3/reconciliation-94#) > [Invoices](https://hibou.io/docs/accounting-3/reconciliation-94#), then scroll to the totals area. Click the  information icon and you'll have the option to [unreconcile](https://hibou.io/docs/accounting-3/reconciliation-94#).

![](https://hibou.io/web/image/75851/unreconcile-on-invoice-v15.png?access_token=56e91d17-0771-4a71-9372-4a9124cfcec1)