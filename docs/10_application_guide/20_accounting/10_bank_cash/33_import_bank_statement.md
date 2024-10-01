---
title: Import Bank Statement
summary: Accounting --> Bank & Cash --> Import Bank Statement
authors: Wilson Loh
date: 2022-01-18
---

## **Purpose**

This document covers importing your Bank Statements within the **Accounting** application of Odoo 15. Importing your bank statements allows you to keep track of financial movements that take place on your accounts and allows the reconciliation of them with the transactions recorded within your accounting. For higher efficiency, we recommend using the [**Bank Synchronization**](https://hibou.io/docs/accounting-3/setting-up-a-new-bank-account-86/ver/15-0-28) feature; however, if your bank is not a supported institution or you don't want to use synchronization, Odoo still gives you a couple of options.   

## **Process**

To get started, navigate to the **Accounting** app.

![](https://hibou.io/web/image/75563/hibou15-accounting-app.jpg?access_token=f4ffc88a-16dd-4dc3-9a15-b9c3293a4b62)  

### Importing Bank Statements

> The first option is simply importing the statements supplied to you by your bank. Odoo supports several file formats to import your statements:

-   **SEPA recommended Cash Management format (CAMT .053)**
    
-   **Comma-separated Values (.CSV)**
    
-   **Open Financial Exchange (.OFX)**
    

From the Accounting Overview, click either the [Import](https://hibou.io/docs/accounting-3/importing-bank-statements-1565#) link, or the   vertical ellipsis and select [New](https://hibou.io/docs/accounting-3/importing-bank-statements-1565#) > [Import Statement](https://hibou.io/docs/accounting-3/importing-bank-statements-1565#). 

![](https://hibou.io/web/image/75564/import-bank-statement-v15.png?access_token=2cf92883-056b-4016-936c-695d382b7e6d)

The following modal will open, allowing you to select your file. Use the  **SELECT FILES** and then click

[UPLOAD](https://hibou.io/docs/accounting-3/importing-bank-statements-1565#) when ready. 

![](https://hibou.io/web/image/75568/upload-statement-v15.png?access_token=6393d38e-388d-4e8a-8ef1-8d64f187b92f)

Any line that displays

To import, select a field... must have a field selected that corresponds the File Column name from your importing document to a field within Odoo. You can start typing in the search field to find a suitable field, or simply scroll through the options. Once configured to your preference, click [IMPORT](https://hibou.io/docs/accounting-3/importing-bank-statements-1565#). 

![Odoo • Text and Image](https://hibou.io/web/image/75569/import-bank-statement-import-v15.png?access_token=d1d95569-ffbd-4de3-b46e-cf03172628e7)

### Creating Bank Statements

The second option to get your bank statement information into Odoo is to create them. Like Importing above, click either the [CREATE](https://hibou.io/docs/accounting-3/importing-bank-statements-1565#) link, or the    vertical ellipsis and then [New](https://hibou.io/docs/accounting-3/importing-bank-statements-1565#) > **[Statement](https://hibou.io/docs/accounting-3/importing-bank-statements-1565#).**

![](https://hibou.io/web/image/75573/create-new-statement-v15.png?access_token=7392501e-1e02-4084-84e8-f98f98cf9935)  

The following fields appear:

**Reference:** Enter a reference name for your Statement. 

**Journal:** The assigned Journal for this Bank.

**Date:** Assign a date to the Bank Statement

**Company:** If in a single company environment, this will be set by default. 

**Starting Balance:** Beginning balance of journal before transactions are input. 

**Ending Balance:** Balance after transactions are calculated. The ending balance and the Computed Balance should be the same. 

Use the [ADD A LINE](https://hibou.io/docs/accounting-3/importing-bank-statements-1565/ver/15-0-28#) to manually enter each entry from the original bank statement.  

Tip: To ease the reconciliation process, select an entry in the Partner field, if you have it. It is also recommended to write payment references in the Label field. 

Click [SAVE](https://hibou.io/docs/accounting-3/importing-bank-statements-1565#) when complete. Then click [POST](https://hibou.io/docs/accounting-3/importing-bank-statements-1565#).    
![](https://hibou.io/web/image/75575/save-post-created-bank-statement.png?access_token=20717230-3543-4b11-856c-77cc69b6b044)

Once you have posted, you will have the opportunity to [RECONCILE](https://hibou.io/docs/accounting-3/importing-bank-statements-1565#). For guidance, refer to our [**Reconciliation documentation**](https://hibou.io/docs/accounting-3/reconciliation-94/ver/15-0-28). 

![](https://hibou.io/web/image/75576/reconcile-bank-statement-v15.png?access_token=7575c12a-2868-4155-9c21-02b830afda11)  

Now you can click [validate](https://hibou.io/docs/accounting-3/importing-bank-statements-1565#) to finalize the process. 

![](https://hibou.io/web/image/75577/validate-bank-statement-v15.png?access_token=0c9ca14e-dec6-4aa1-b1c5-76a93e26d26f)  

Once the entries have been validated, the **PROCESSING** status will be replaced by one that reads **VALIDATED**, and you can now click the   **Journal Entries** smart button to see the entries made on the bank statement.   

![](https://hibou.io/web/image/75578/validated-bank-statement-v15.png?access_token=b766d618-cd87-4a07-a256-04ca44bb682d)