---
title: Payment Process
summary:  Accounting --> Account Receivable --> Customer Payment --> Payment Process
authors: Wilson Loh
date: 2022-01-18
---
## **Purpose**

This document outlines the different processes to register payments in the **Accounting** application of Odoo 15. We'll go over registering full payments and partial payments. We'll also cover payment matching when applying a manual payment to several invoices.

## **Processes**

To get started, navigate to the **Accounting** app.

![Odoo - Sample 1 for three columns](https://hibou.io/web/image/75080/hibou15-accounting-app.jpg?access_token=ee7d42ca-6916-40a3-90c3-3aee25f2e66f)

### Registering Full Payments on a Customer Invoice

Click [customers](https://hibou.io/docs/accounting-3/register-a-customer-payment-83#) > [invoices](https://hibou.io/docs/accounting-3/register-a-customer-payment-83#). Once there, filter for  **Posted** +  **Unpaid** to find an invoice in the payable state. Select an invoice from the list.

![](https://hibou.io/web/image/75081/filter-posted-unpaid-invoices-v15.png?access_token=21d5fbc0-48be-4218-afb0-9bf2a0b1d8c0)  

From within the invoice, click [Register Payment](https://hibou.io/docs/accounting-3/register-a-customer-payment-83#).

![](https://hibou.io/web/image/75082/register-payment-on-unpaid-invoice-v15.png?access_token=465d4db9-25d8-4554-b429-715f61cc7671)

A pop-up modal to register payment will appear. Enter the following information:

-   **Journal:** The journal to which the payment should be registered.  
    
-   **Payment Method**
    
-   -   **Manual:** Select this to get paid by cash, check or any other method outside of Odoo.
        
    -   **Batch Deposit:** Select this to encase several customer checks at once by generating a batch deposit to submit to your bank.
        
    -   **SEPA Direct Deposit**: Select this to allow a creditor to collect funds from your bank account provided that you have a signed mandate and it has been granted by you the customer.
        
-   **Recipient Bank Account:** The field label is misleading; this represents the customer's account that funds are being drawn from and is an optional field.
    
-   **Amount/Currency:** This is set to the full amount by default, so we'll leave it as-is for this example. The currency will auto-populate with the set default currency, though it can be changed.
    
-   **Payment Date:** The date on which the payment was made.
    
-   **Memo:** This is set to the Invoice number by default, but can be changed. A common use case for this field is the check number for the check by which payment was made.
    

![](https://hibou.io/web/image/75083/create-payment-on-unpaid-invoice-v15.png?access_token=ddaefafa-ef16-47ee-8ca1-e66ef6625a0f)  

When finished, click [create payment](https://hibou.io/docs/odoo-11-accounting-3/manually-registering-payments-83#). 

Once the payment is validated, you'll see the **IN PAYMENT** banner on the top-right of the invoice.

![](https://hibou.io/web/image/75084/in-payment-on-paid-invoice-v15.png?access_token=bf4a51f0-34b1-4b6e-b1f8-e62736675873)  

Once the payment has been confirmed by the bank, the banner will change to **PAID**. 

The **Amount Due** at the bottom of the invoice will also be updated and the payment will be logged with a date.   

![](https://hibou.io/web/image/75085/payment-info-on-paid-invoice-v15.png?access_token=c63d3671-91cb-4ec1-8bad-32b5b3e24511)  

You can click the small  info button to the left of the payment line to see the payment details. To view more details, click [VIEW](https://hibou.io/docs/accounting-3/registering-payments-83/ver/14-0-21#). To remove this payment from the invoice, click [UNRECONCILE](https://hibou.io/docs/accounting-3/registering-payments-83/ver/14-0-21#).

![](https://hibou.io/web/image/75086/view-payment-info-v15.png?access_token=44720590-66fe-4dce-8dba-45bcd6289cc5)

### Registering Partial Payments on a Customer Invoice

Click [CUSTOMERS](https://hibou.io/docs/accounting-3/registering-payments-83/ver/14-0-21#) > [INVOICES](https://hibou.io/docs/accounting-3/registering-payments-83/ver/14-0-21#). Once there, filter for  **Posted** +  **Unpaid** to find an invoice in the payable state. Select an invoice from the list.  

![](https://hibou.io/web/image/75087/select-an-invoice-v15.png?access_token=0ef0fd9b-62c2-4139-8a40-6fbcc5536aab)  

From within the invoice, click [Register Payment](https://hibou.io/docs/accounting-3/register-a-customer-payment-83#).

![](https://hibou.io/web/image/75088/register-partial-payment-v15.png?access_token=8afa882a-d412-41ac-ab07-5f109e453d1b)

 A pop-up modal to register payment will appear. Enter the following information:

-   **Journal**: The journal to which the payment should be registered.  
    
-   **Payment****Method**
    
    -   **Manual**: Select this to get paid by cash, check, or any other method outside of Odoo.
        
    -   **Batch****Deposit**: Select this to encase several customer checks at once by generating a batch deposit to submit to your bank.
        
    -   SEPA Direct Deposit: Select this to allow a creditor to collect funds from your bank account provided that you have a signed mandate and it has been granted by you the customer.  
        
-   **Recipient Bank Account**: The field label is misleading; this represents the customer's account that funds are being drawn from and is an optional field.
    
-   **Amount/Currency**: This is set to the full amount by default. **Adjust it to the partial payment amount being made.** The currency will auto-populate based on your default currency.
    
-   **Payment** **Date**: The date on which the payment was made.
    
-   **Memo**: This is set to the Invoice number by default, but can be changed. A common use case for this field is the check number for the check by which payment was made.
    
-   **Payment** **Difference**: When you enter a partial payment, Odoo will ask what you want to do with the remaining balance. You'll have two options:  
    
    -   **Keep** **open**: Select this option for this example as we expect to collect the balance due at a later date.   
        
    -   **Mark** **invoice** **as fully paid**: We'd select this option if we want to consider this invoice settled and will write off the balance. When doing so, you'll be required to select the account to post the difference, as well as add a label/reason for the difference.  
        

![](https://hibou.io/web/image/75089/create-partial-payment-v15.png?access_token=4291175a-3138-4979-8472-4f2e2ec009c9)  

When finished, click [create payment](https://hibou.io/docs/odoo-11-accounting-3/manually-registering-payments-83#) . 

Once the payment is validated, you'll see the **[PARTIAL](https://hibou.io/docs/accounting-3/register-a-customer-payment-83#)** banner added. Notice that you still have the option to [register payment](https://hibou.io/docs/accounting-3/register-a-customer-payment-83#) on the invoice. You'd use this option to add another full or partial payment.

![](https://hibou.io/web/image/74329/partial-payment.png?access_token=9b66a3da-6a6b-4c1f-b184-149d4edad282)  

The **Amount Due** at the bottom of the invoice will also be updated and the payment will be logged with a date. Click the small  info button to the left of the payment line to see the payment details. To view more details, click [VIEW](https://hibou.io/docs/accounting-3/registering-payments-83/ver/14-0-21#). To remove this payment from the invoice, click [UNRECONCILE](https://hibou.io/docs/accounting-3/registering-payments-83/ver/14-0-21#).

![](https://hibou.io/web/image/75090/partial-payment-info-v15.png?access_token=329e82e2-783b-4c96-9deb-062877d21246)  

### Manual Invoice Payments + Payment Matching

As a rule, you should always make a payment directly from the invoice; however, there may be times when the payment is made manually. For example, a customer may write a check to pay off the entire balance of several different invoices. We need to register that payment manually, then distribute it across each invoice.

From [Customers](https://hibou.io/docs/accounting-3/register-a-customer-payment-83#) > [Invoices](https://hibou.io/docs/accounting-3/register-a-customer-payment-83#), we then filtered for invoices that were "unpaid" for this customer.

From our results, we see that our customer, Superstar, still has outstanding invoices in the amount of $690, and they have sent a bulk payment for this amount.

![](https://hibou.io/web/image/75092/superstar-filter-v15.png?access_token=f8162d33-ee80-4a87-8645-5235745b07c8)  

Let's register the payment. To do so, go to [Customers](https://hibou.io/docs/accounting-3/register-a-customer-payment-83#) > [Payments](https://hibou.io/docs/accounting-3/register-a-customer-payment-83#), then click [create](https://hibou.io/docs/accounting-3/register-a-customer-payment-83#). On the modal window, we'll enter the following details:

 Internal Transfer: This is to be used when funds are being transferred from account to account; it's unlikely you'll be using this to record a customer payment.

**Payment Type**: Select "Receive Money".

Customer: Select the customer making the payment.  

Amount: The amount of the payment.

Date: The date when the payment was received.

Memo: You can enter the invoice numbers as a reference to what this payment will apply to; however, this is for reference purposes only. It does not link the payment to any invoice(s).

Journal: Select the Journal where this transaction will be recorded.

Payment Method: Select "Manual" unless this payment is being made with several types of payment methods.

Customer Bank Account: The field label is misleading; this represents the customer's account that funds are being drawn from and is an optional field.

![](https://hibou.io/web/image/75093/confirm-batch-payment-v15.png?access_token=5e7b4275-398c-4d0e-9361-94c4cf716a5f)  

When ready, click [CONFIRM](https://hibou.io/docs/accounting-3/registering-payments-83/ver/14-0-21#). 

After confirming, you'll be in the validated payment record. Click the  **Payment Matching** smart button.

![](https://hibou.io/web/image/75094/payment-matching-v15.png?access_token=2f333723-5518-40c6-8b0e-e52c69e660af)  

From here you'll see the payment we just recorded listed. Click the payment entry to add it to the T Sheet.

![](https://hibou.io/web/image/75095/payment-matching-t-sheet-v15.png?access_token=704e1688-6d90-4c7b-87e1-d59da2758992)  

Next, click each related invoice to add them to the T Sheet. You can use the search field to narrow down what's displayed in this list.

![](https://hibou.io/web/image/75096/search-field-t-sheet-v15.png?access_token=277c2a69-f64c-4237-b01e-c805d129ec6c)  

When both columns balance, click [Reconcile](https://hibou.io/docs/accounting-3/register-a-customer-payment-83#). Note that this button turns solid when the columns balance. If you reconcile items that don't balance, you'll need to account for the difference.

![](https://hibou.io/web/image/75097/reconcile-t-sheet-v15.png?access_token=00b8a5a6-0bcf-4ab0-a5d6-8477d93d648a)  

This payment hs now been applied to all selected invoices, and we can confirm this by navigating back to the invoice using the breadcrumbs.

![](https://hibou.io/web/image/75098/breadcrumb-to-batch-payment-v15.png?access_token=a9f0396f-7dbf-47b8-a94b-64fbea714b24)  

Then, click the  **Invoices** smart button to see invoices associated with this payment.

![](https://hibou.io/web/image/75099/view-batch-payment-invoices.png?access_token=b7c05727-3b9f-432d-bdcc-2bd5d1b9c6df)  

Here we see all of the invoices that this payment applied to. Notice the Payment Status shows **In Payment**. This will update as soon as the payment is confirmed with the bank.

![](https://hibou.io/web/image/75100/paid-batch-invoices-v15.png?access_token=afdd8882-e422-4b33-ae61-766e379f8f15)  

## Good to Know!

#### Register Payment on Multiple Invoices

If you know which invoices a manual payment is being registered on, you can do it directly from the Invoice listing page. Select the invoices to apply the payment to, then click [Register Payment](https://hibou.io/docs/accounting-3/register-a-customer-payment-83#). 

![](https://hibou.io/web/image/75101/good-to-know-manual-payment-v15.png?access_token=650dbd00-7b36-4b2d-9d01-94d3f493af31)  

This brings up a modal window with minimal, pre-populated fields. Click [Create Payment](https://hibou.io/docs/accounting-3/register-a-customer-payment-83#).

![](https://hibou.io/web/image/75102/create-manual-batch-payment.png?access_token=60097e8e-77b0-4591-bd5d-7da75e586589)  

All selected invoices will then be marked **In Payment** until the payments are verified by the bank, then they will be marked as **Paid**.

### Batch Payments

As a rule, you should always make a payment directly from the invoice; however, there may be times when the payment is made manually. For example, our customer, Deco Addict, has written a check to pay off the entire balance of several different invoices. We just need to register that payment manually, then distribute it across each invoice. This follows the same workflow as above for manual payments.

From [Customers](https://hibou.io/docs/accounting-3/register-a-customer-payment-83#) > [Invoices](https://hibou.io/docs/accounting-3/register-a-customer-payment-83#), we then filtered for invoices that were "unpaid"  for this customer.

From our results, we see that our customer, Deco Addict, still has several outstanding invoices, and they have sent a bulk payment for the total amount.

![](https://hibou.io/web/image/75103/make-batch-payment-v15.png?access_token=cf224914-d6ba-4fcc-82ed-f3b1cff901df)  

Let's register the payment. To do so, go to [Customers](https://hibou.io/docs/accounting-3/register-a-customer-payment-83#) > [Payments](https://hibou.io/docs/accounting-3/register-a-customer-payment-83#), then click [create](https://hibou.io/docs/accounting-3/register-a-customer-payment-83#). On the modal window, we'll enter the following details:

Internal Transfer: This is to be used when funds are being transferred from account to account; it's unlikely you'll be using this to record a customer payment.

**Payment Type**: Select "Receive Money".

**Customer**: Select the customer making the payment.

.**Amount**: The amount of the payment.

**Date**: The date when the payment was received.

**Memo**: You _can_ enter the invoice numbers as a reference to what this payment will apply to; however, this is for reference purposes only. It does not link the payment to any invoice(s).

**Journal**: Select the Journal where this transaction will be recorded.

**Payment Method**: Select "Manual" unless this payment is being made with several types of payment methods**.**

**Customer Bank Account:** This is the customer's bank account that funds are being drawn from and is an optional field.

![](https://hibou.io/web/image/75104/confirm-bath-payment-again-v15.png?access_token=86e7994f-3214-424b-a649-b48d8ad2b435)  

When ready, click [CONFIRM](https://hibou.io/docs/accounting-3/registering-payments-83/ver/14-0-21#). 

After confirming, you'll be in the validated payment record. Click the  **Payment Matching** smart button.

![](https://hibou.io/web/image/75105/payment-matching-bath-payment-v15.png?access_token=77692e69-038b-4e23-85ed-deeb6dd271b5)  

From here you'll see the payment we just recorded listed. Click the payment entry to add it to the T Sheet.

![](https://hibou.io/web/image/75106/select-batch-payment-again-v15.png?access_token=649d3168-b7e8-441c-93d9-5dcdc4ae8279)  

Next, click each related invoice to add them to the T Sheet.

When both columns balance, click [Reconcile](https://hibou.io/docs/accounting-3/register-a-customer-payment-83#). Note that this button turns solid when the columns balance. If you reconcile items that don't balance, you'll need to account for the difference.

![](https://hibou.io/web/image/75107/reconcile-batch-payment-t-sheet-v15.png?access_token=3c9d29c5-9e16-4fac-9157-b2e8a5680876)  

This payment has now been applied to all selected invoices, and we can confirm this by navigating back to the invoice using the breadcrumbs.

![](https://hibou.io/web/image/75108/breadcrumb-to-batch-payments-v15.png?access_token=24b969a7-f708-4246-831a-0b025e827ecf)  

Then, click the  **Invoices** smart button to see invoices associated with this payment.

![](https://hibou.io/web/image/75109/invoices-from-batch-payments-v15.png?access_token=3167a797-0e9d-4d70-9d08-5a4918bc61db)  

Here we see all of the invoices that this payment applied to. Notice the Payment Status shows **In Payment**. This will update as soon as the payment is confirmed with the bank.

![](https://hibou.io/web/image/75110/paid-invoices-from-batch-payments-v15.png?access_token=105fc874-d5fb-4c95-a133-44e3f4ac6f17)