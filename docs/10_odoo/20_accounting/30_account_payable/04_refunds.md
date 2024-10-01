---
title: Vendor Refunds
summary: Accounting --> Account Payable --> Vendor Refunds
authors: Wilson Loh
date: 2022-01-18
---

## **Process**

To get started, navigate to the **Accounting** app.

![](https://hibou.io/web/image/75005/hibou15-accounting-app.jpg?access_token=dc9cb4ab-e1fe-44e6-9ef9-c00f4a656f22)  

We handle vendor refunds the same way as customer invoice **[credit notes](https://hibou.io/docs/accounting-3/credit-notes-1507/ver/15-0-28).** In fact, we recommend you read that document first. 

While we can manually record a refund through [Vendors](https://hibou.io/docs/accounting-3/refunds-1508#) > [Refunds](https://hibou.io/docs/accounting-3/refunds-1508#), we recommend recording a refund directly from the posted, paid bill. To do so, go to [VENDORS](https://hibou.io/docs/accounting-3/refunds-1508#) > [BILLS](https://hibou.io/docs/accounting-3/refunds-1508#). Once there, select the bill to record a refund for. 

![](https://hibou.io/web/image/75006/pay-vendor-bill.png?access_token=bdcffac5-db67-41c2-a57c-3a5a8ebef220)  

Click [ADD CREDIT NOTE](https://hibou.io/docs/accounting-3/refunds-1508#). 

![](https://hibou.io/web/image/73746/accountingv15-vendor-bills-add-credit-note.png?access_token=49e69383-99c4-40c4-9877-a1f825e4be34)  

This will open a modal to create the Credit Note.

**Credit Method**

-   **Partial Refund:** The credit note will be created in draft and can be edited before issuing.
    
-   **Full Refund:** The credit note is validated automatically and reconciled with the invoice.
    
-   **Full Refund with New Draft Invoice:** The credit note is validated automatically and reconciled with the invoice. The original invoice is duplicated as a new draft.
    

**Reason:** Enter a reason for the refund.

**Reversal Date:**  Choose to either enter a specific date or to use the journal entry date. 

**Use Specific Journal:** To record the refund to a journal different from what the payment was recorded to, select that journal here.

**Refund Date:** This field only displays if you choose "Specific" as the reversal date. It will default to today's date.

When ready, click [REVERSE](https://hibou.io/docs/accounting-3/refunds-1508#). 

![](https://hibou.io/web/image/75007/reverse-credit-note.png?access_token=6065871a-e7e9-41cb-9fdf-4f0b847495be)  

This will create a Draft invoice that needs to be confirmed to complete the workflow, click [CONFIRM](https://hibou.io/docs/accounting-3/refunds-1508#) to move the invoice from a Draft to a Posted state. 

![](https://hibou.io/web/image/75008/confirm-credit-note.png?access_token=8031bceb-553c-49d8-8a59-381200ddcbb7)  

An added benefit to creating a credit note from within a bill is that Odoo will automatically create a reverse entry on the journal that zeroes or balances out the items made by the original bill. By clicking on the Journal Items tab, we will see just that in the Credit column to balance out the Debit. 

![](https://hibou.io/web/image/75009/journal-items-tab-on-credit-note.png?access_token=44d5eaa3-d580-4a97-aa25-40c6ca2913f8)