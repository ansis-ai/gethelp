---
title: Vendor Payment
summary: Accounting --> Account Payable --> Vendor Payment
authors: Wilson Loh
date: 2022-01-18
---

## **Purpose**

This document covers how to register payments to Vendor Bills in the **Accounting** application of Odoo 15. We'll cover full payments, partial payments, and bulk payments. See our [**Vendor Bills**](https://hibou.io/docs/accounting-3/vendor-bills-1464/ver/15-0-28) documentation for information on creating bills.  

## **Process**

To get started, navigate to the **Accounting** app.

![](https://hibou.io/web/image/75885/hibou15-accounting-app.jpg?access_token=5e28be18-1952-403b-8470-b578d58f56a9)  

### Paying a Vendor Bill in Full

Once there, go to [Vendors](https://hibou.io/docs/accounting-3/register-a-vendor-payment-1465#) > [Bills](https://hibou.io/docs/accounting-3/register-a-vendor-payment-1465#). Filter for **Unpaid** and select a bill from the list.   

![](https://hibou.io/web/image/75886/unpaid-vendor-bill-v15.png?access_token=12ab508a-bc5e-4787-be00-d082f65dc274)  

When you're ready to add a payment for this vendor bill, click [Register Payment](https://hibou.io/docs/accounting-3/register-a-vendor-payment-1465#).

![](https://hibou.io/web/image/75887/register-vendor-bill-payment-v15.png?access_token=d46988bf-6fba-4707-a565-218f9cbb53a5)  

A pop-up modal to register payment will appear. Enter the following information:

-   **Journal:** The journal to which the payment should be registered.  
    
-   **Payment Method**
    
-   -   **Manual:** Select this to pay be cash, check, or any other method outside of Odoo.
        
    -   **Checks:** Select this to print a check in Odoo.
        
    -   **NACHA**: Select this to pay by ACH (ACH and NACHA are essentially the same thing)-Electronic system that moves e-payments from one bank account to another). 
        
-   **Recipient Bank Account:** This label is misleading; this field represents the account you're paying the vendor from.
    
-   **Amount:** The payment amount which is set to the full amount by default. If you are in a database with multiple currencies available, a field will display to specify the currency but will auto-populate with the default currency.
    
-   **Payment Date:** The date on which the payment was made.
    
-   **Memo:** This is for reference only; however, a common use case for this field is the invoice ID or reference number issued from the vendor.
    

![](https://hibou.io/web/image/75888/create-payment-vendor-bill-v15.png?access_token=db780894-695f-40c1-b396-fb1f8b9b53f6)  

When you're ready, click [Create Payment](https://hibou.io/docs/accounting-3/register-a-vendor-payment-1465#).

The bill will be marked [In Payment](https://hibou.io/docs/accounting-3/register-a-vendor-payment-1465#) until it has been confirmed by the bank, at which point it will be marked as **[PAID](https://hibou.io/docs/accounting-3/register-a-vendor-payment-1465#)**.

![](https://hibou.io/web/image/75889/in-payment-ribbon-v15.png?access_token=d70ee744-a5dd-454e-bce2-3ab00df941bf)  

The totals section will reflect the full payment and date. You can click the small  info button to the left of the payment line to see the payment details. To view more details, click [VIEW](https://hibou.io/docs/accounting-3/registering-payments-83/ver/14-0-21#). To remove this payment from the bill, click [UNRECONCILE](https://hibou.io/docs/accounting-3/registering-payments-83/ver/14-0-21#).  

![](https://hibou.io/web/image/75890/unreconcile-payment-in-v15.png?access_token=fc4eac64-b243-4e17-85d2-732ceb5b067e)  

### Partial Payment on a Vendor Bill

To make a partial payment on a vendor bill, go to [Vendors](https://hibou.io/docs/accounting-3/register-a-vendor-payment-1465#) > [Bills](https://hibou.io/docs/accounting-3/register-a-vendor-payment-1465#). Filter for **Unpaid** and select a bill from the list.   

![](https://hibou.io/web/image/75886/unpaid-vendor-bill-v15.png?access_token=12ab508a-bc5e-4787-be00-d082f65dc274)  

When you're ready to add a payment, click [register payment](https://hibou.io/docs/accounting-3/register-a-vendor-payment-1465#).

![](https://hibou.io/web/image/75891/register-partial-payment-v15.png?access_token=0d9e7116-819b-45bb-a836-1cf5bd451a4c)  

A pop-up modal to register payment will appear. Enter the following information:

-   **Journal:** The journal to which the payment should be registered.  
    
-   [](https://hibou.io/docs/accounting-3/register-a-vendor-payment-1465#)**Payment Method**
    
-   -   **Manual:** Select this to pay be cash, check, or any other method outside of Odoo.
        
    -   **Checks:** Select this to print a check in Odoo.
        
    -   NACHA: Select this to pay by ACH (ACH and NACHA are essentially the same thing)-Electronic system that moves e-payments from one bank account to another.   
        
-   **Recipient Bank Account**: This label is misleading; this field represents the account you're paying the vendor from.
    
-   **Amount:** Enter the partial payment you're making to the vendor.
    
-   **Currency**: This will auto-populate with your set default currency but is editable.
    
-   **Payment Date:** The date on which the payment was made.
    
-   **Memo:**  This is for reference only; however, a common use case for this field is the invoice ID or reference number issued from the vendor.
    

Once you enter an amount different from the amount due, you'll see a **Payment Difference** section. Select the appropriate option:

-   **Keep open:** Select this option if you intend to pay the balance in the future.
    
-   **Mark as fully paid:** Select this option if you do not intend to pay the balance. In doing so, you'll need to also indicate which account to report the difference, as well as a reason for it.
    

![](https://hibou.io/web/image/75892/create-partial-payment-v15.png?access_token=63fd5004-f8cb-4672-bea6-b53c822bec2d)  

When you're ready, click [Create Payment](https://hibou.io/docs/accounting-3/register-a-vendor-payment-1465#). The bill will be then be marked [partial](https://hibou.io/docs/accounting-3/register-a-vendor-payment-1465#). The payment and remaining balance will be reflected in the totals section. 

![](https://hibou.io/web/image/75893/partial-payment-paid-on-info-v15.png?access_token=5cdccea7-2673-4a8f-ba6e-aeadfc984a1f)  

You can click the small  info button to the left of the payment line to see the payment details. To view more details, click [VIEW](https://hibou.io/docs/accounting-3/registering-payments-83/ver/14-0-21#). To remove this payment from the bill, click [UNRECONCILE](https://hibou.io/docs/accounting-3/registering-payments-83/ver/14-0-21#).  

![](https://hibou.io/web/image/75894/unreconcile-partial-payment-v15.png?access_token=bc43d8ea-346a-4197-8801-97a99c7c2808)  

### Paying Multiple Vendor Bills (Batch Payments)

To pay multiple vendor bills, go to [Vendors](https://hibou.io/docs/accounting-3/register-a-vendor-payment-1465#) > [Bills](https://hibou.io/docs/accounting-3/register-a-vendor-payment-1465#). Filter for **Not Paid** and select a bill from the list.   

From the list, select all bills you wish to register payment for in bulk, then click [Register Payment](https://hibou.io/docs/accounting-3/register-a-vendor-payment-1465#). In our example, we've selected bills from the same vendor.

![](https://hibou.io/web/image/75895/batch-payments-v15.png?access_token=31a00997-ce44-4956-9f54-afa9c9081ec6)  

A pop-up modal form will appear with a pared-down version of the Register Payment form.  Enter the following information:

-   **Journal:** The journal to which the payment should be registered.  
    
-   [](https://hibou.io/docs/accounting-3/register-a-vendor-payment-1465#)**Payment Method**
    
    -   **Manual:** Select this to pay be cash, check, or any other method outside of Odoo.
        
    -   **Checks:** Select this to print a check in Odoo.
        
    -   **N****ACHA**: Select this to pay by ACH (ACH and NACHA are essentially the same thing)-Electronic system that moves e-payments from one bank account to another.   
        
-   **Payment Date:** The date on which the payment was made.
    

Notice there isn't a field to add the payment amount. This is because it's pulling directly from the selected vendor bills and there's no need to change the amount(s).

![](https://hibou.io/web/image/75897/batch-paid-v15.png?access_token=d6c81481-ff23-4778-b1f2-d62a396d1d09)  

When you're ready, click [Create Payment](https://hibou.io/docs/accounting-3/register-a-vendor-payment-1465#). This bring you to a list of payments made. You can click into each payment and print checks, or process them as a group.