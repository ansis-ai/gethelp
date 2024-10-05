---
title: Cash Rounding
summary: Cash Rounding
authors: Wilson Loh
date: 2022-01-18
---

Cash rounding is required when the lowest physical denomination of currency, or the smallest coin, is higher than the minimum unit of account.

For example, some countries require their companies to round up or down the total amount of an invoice to the nearest five cents, when the payment is made in cash.

## Configuration
Go to **Accounting ‣ Configuration ‣ Settings** and enable *Cash Rounding*, then click on *Save*.

![](2022-01-18-17-58-36.png)

Go to **Accounting ‣ Configuration ‣ Cash Roundings**, and click on *Create*.

Define here your Rounding Precision, Rounding Strategy, and Rounding Method.

ANSIS supports two **rounding strategies**:

- **Add a rounding line**: a rounding line is added on the invoice. You have to define which account records the cash roundings.
- **Modify tax amount**: the rounding is applied in the taxes section.

### Apply roundings
When editing a draft invoice, open the Other Info tab, go to the Accounting Information section, and select the appropriate Cash Rounding Method.

## **Process**

To get started, navigate to the **Accounting** app.

![](https://hibou.io/web/image/75662/hibou15-accounting-app.jpg?access_token=bf7aa8d2-f22e-4f7f-8714-0175b86cf354)  

You will find the option to use Cash Rounding under [CONFIGURATION](https://hibou.io/docs/accounting-3/cash-roundings-1628#) > [SETTINGS](https://hibou.io/docs/accounting-3/cash-roundings-1628#). Then, scroll down to the section labeled **Customer Invoices**, check the box to enable the use of **Cash Rounding,** then [Save](https://hibou.io/docs/accounting-3/cash-roundings-1628#)**.** Once this finishes saving, click on  [Cash Roundings](https://hibou.io/docs/accounting-3/cash-roundings-1628#).

![](https://hibou.io/web/image/75663/customer_invoices.jpg?access_token=20a7aaa0-5269-42cf-a007-944635779aae)  

Once enabled, Cash Roundings can also be created or configured under [CONFIGURATION](https://hibou.io/docs/accounting-3/cash-roundings-1628#) > [Management](https://hibou.io/docs/accounting-3/cash-roundings-1628#) >[CASH ROUNDINGS](https://hibou.io/docs/accounting-3/cash-roundings-1628#).

Both of these methods will bring you to an overview of any existing Cash Roundings, as well as allowing you to [CREATE](https://hibou.io/docs/accounting-3/cash-roundings-1628#) a new one. 

![](https://hibou.io/web/image/75664/create_cash_rounding.jpg?access_token=79089f63-7966-40b6-b017-f6d83cc4bf78)  

Odoo supports two rounding strategies:

-   **Add a rounding line**: This requires you to set a profit and loss account
    
-   **Modify tax amount**: This will only require you to select a rounding method.
    

### Add a Rounding Line

> **Name:** Give your rounding method a name.

> **Rounding Precision:** Enter a non-zero amount to denote the smallest acceptable coinage.

> **Rounding Strategy:** Select to "Add a rounding line".

> **Profit Account:** Select an account to record profits from the rounding method.

> **Loss Account:** Select an account to record losses from the rounding method.

> **Rounding Method:** Select UP to round up, DOWN to round down, and HALF-UP.   

-   **UP:** Will round up to the next increment using the set rounding precision. If precision is set to .05, and a total ends in .02, rounding up will adjust the total to .05, resulting in a profit of 3 cents.
    
-   **DOWN:** Will round down to the next decrement using the set rounding precision. If precision is set to .05 and a total ends in .02, rounding will adjust the total to .00, resulting in a loss of 2 cents.
    
-   **HALF-UP:** This will round the total up or down to the nearest increment set as the rounding precision. If precision is set to .10, and a total ends in .05 through .09, rounding will adjust the total to .10, but if a total ends in .01 through .04, then it will round down and give .00 as the result.  Your profit/loss would be the difference between the original amount and the result.
    

Click [SAVE](https://hibou.io/docs/accounting-3/cash-roundings-1628/ver/15-0-28#) when ready.  

![](https://hibou.io/web/image/74685/Round%20-%20New.png?access_token=280952c8-b78b-4206-90e5-cffaf3867146)  

**How it works**: Once you have your Cash Rounding method created, you can add it to a draft invoice on the [OTHER INFO](https://hibou.io/docs/accounting-3/cash-roundings-1628/ver/15-0-28#) tab.

![](https://hibou.io/web/image/75665/PO_cash_rounding_method.jpg?access_token=da5c0ed9-8ebb-4341-84f1-5aeb0ad8f92d)  

When you enter a invoice line, the amount is compared to the rounding rules that are set.  In the following examples, the 'HALF-UP' method applies, so the system adds a line to round up (profit) or down (loss) as required by the applied rounding rule.

![](https://hibou.io/web/image/75671/total.jpg?access_token=331fea36-32bd-44de-9514-5f5ec1d218b2)  

![](https://hibou.io/web/image/75666/halfdown.jpg?access_token=0ee2162e-4ab2-45b7-94cd-347fbd97b06b)  

Modify Tax Amount

> Navigate back to the list of Cash Roundings in [CONFIGURATION](https://hibou.io/docs/accounting-3/cash-roundings-1628/ver/15-0-28#) \> [MANAGEMENT](https://hibou.io/docs/accounting-3/cash-roundings-1628/ver/15-0-28#) \>[CASH ROUNDINGS](https://hibou.io/docs/accounting-3/cash-roundings-1628/ver/15-0-28#), then click [Create](https://hibou.io/docs/accounting-3/cash-roundings-1628#).  
> **Name:** Give your rounding method a name.

> **Rounding Precision:** Enter a non-zero amount to denote the smallest acceptable coinage.

> **Rounding Strategy:** Select "Modify tax amount". This will use the set rounding method to add or subtract to the tax amount.

> **Rounding Method:** 
> 
> -   **UP:** Will round up to the next increment using the set rounding precision. If precision is set to .05, and a total ends in .02, rounding up will adjust the total to .05.
>     
> -   **DOWN:** Will round down to the next decrement using the set rounding precision. If precision is set to .05 and a total ends in .02, rounding will adjust the total to .00.
>     
> -   **HALF-UP:** This will round the total up or down to the nearest increment set as the rounding precision. If precision is set to .10, and a total ends in .05 through .09, rounding will adjust the total to .10, but if a total ends in .01 through .04, then it will round down and give .00 as the result.  Your profit/loss would be the difference between the original amount and the result.  
>     
> 
> ![](https://hibou.io/web/image/74691/Round%20-%20New%20Tax.png?access_token=f265a98d-e23d-4012-9e2a-b668898c1927)  
> 
> Click [SAVE](https://hibou.io/docs/accounting-3/cash-roundings-1628#) when ready.

**How it works**: Once you have your Cash Rounding method created, you can add it to a draft invoice on the [OTHER INFO](https://hibou.io/docs/accounting-3/cash-roundings-1628#) tab.

![](https://hibou.io/web/image/75668/halfup_rountind.jpg?access_token=42a2b532-5c5b-4017-bf0c-b7daa65f09dd)  

When you enter lines with tax amounts, the taxes get adjusted so that the invoice total is rounded according to the rounding rule that is set.  In the two following images, you'll see that the invoice totals are the same, but, due to the rounding rules, more tax is applied to the invoice with the lesser 'Untaxed Amount'.

![](https://hibou.io/web/image/75669/haldup_tax.jpg?access_token=c0bf0a4f-13c4-45ea-9cfa-1a9d652ff237)  

![](https://hibou.io/web/image/75670/tax_down.jpg?access_token=1f81d0d4-48a0-43c9-a1de-31a45085846c)