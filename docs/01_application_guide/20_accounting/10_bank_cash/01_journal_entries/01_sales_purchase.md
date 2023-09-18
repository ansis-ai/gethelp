---
title: Sales & Purchase
summary: Accounting --> Bank & Cash --> Journal Entries --> Sales & Purchase
authors: Wilson Loh
date: 2022-01-18
---

## **Purpose**

This document will cover Invoices and Vendor Bills and how they create journal entries in the **Accounting** application of Odoo 15. 

## **Process**

To get started, navigate to the **Accounting** app.

![Odoo image and text block](https://hibou.io/web/image/75326/hibou15-accounting-app.jpg?access_token=e9d60a35-96cf-4cbc-a7a8-5ccb4838efd7)

### Invoices

When you open the Accounting app, you will land on the dashboard. On this page, you will see a kanban view of your journals. Find the **Customer Invoices** journal, and we'll go over the information displayed below.

![Odoo image and text block](https://hibou.io/web/image/75328/customer-invoice-accounting-dashboard-v15.png?access_token=f53123a3-1097-4083-9ad3-9f54ca48fe8d)

[NEW INVOICE](https://hibou.io/docs/accounting-3/invoices-vendor-bills-356/ver/13-0-7#): This is a shortcut to create a new invoice.

[UPLOAD INVOICES](https://hibou.io/docs/accounting-3/invoices-vendor-bills-356/ver/13-0-7#): To upload an invoice, go to  [](https://hibou.io/docs/accounting-3/sales-purchases-356#)\>  **[New](https://hibou.io/docs/accounting-3/sales-purchases-356#) > [Invoice](https://hibou.io/docs/accounting-3/sales-purchases-356#)**. This allows you to create a new invoice via document upload. Odoo can read the data on a PDF invoice and extract details into your Odoo database. This option requires the purchase of Odoo credits.

[\# Invoices to Validate](https://hibou.io/docs/accounting-3/sales-purchases-356#): This is a shortcut to invoices that have yet to be posted and/or sent to the customer.

[\# Unpaid Invoices](https://hibou.io/docs/accounting-3/sales-purchases-356#): This is a shortcut to invoices that have been posted but not paid.

[\# Late Invoices](https://hibou.io/docs/accounting-3/sales-purchases-356#): This is a shortcut to any invoices that are past their payment due date.

### Invoice Behavior

Customer invoices will create journal entries with the invoice partner's Account Receivable (AR) account on one side, and the offsetting accounts coming from the invoice lines themselves.

Here's an example of an invoice that's been created and posted. The [Invoice Lines](https://hibou.io/docs/accounting-3/sales-purchases-356#) tab shows the product being purchased as well as which income account is specified on its product template. You also see the breakdown of cost and taxes.

![](https://hibou.io/web/image/75329/invoice-lines-v15.png?access_token=209e4511-02d2-4a9e-a7b1-db5d0b733b67)  

Under the [Journal Items](https://hibou.io/docs/accounting-3/sales-purchases-356#) tab of the same invoice, there are two things happening:

**Sales & Sales Tax:** $517.50 is the sum of the product price and sales tax. This amount is being debited to the Account Receivable account and credited to the Product Sales account. 

![Odoo image and text block](https://hibou.io/web/image/75330/journal-tab-v15-accounting.png?access_token=c6e98ac7-31b9-44cb-8b76-3487e6d89ecd)

### Vendor Bills

#### A Vendor Bill is an invoice received for products or services that your company purchases.  

From the [dashboard](https://hibou.io/docs/accounting-3/invoices-vendor-bills-356/ver/13-0-7#), you will see a kanban view of your journals. Find the **Vendor Bills** card, and we'll go over the options below.

![Odoo image and text block](https://hibou.io/web/image/75333/vendor-bill-kanban-tile-v15.png?access_token=6f2458d3-fb31-408b-b4a4-b7f95b99ae55)

[UPLOAD](https://hibou.io/docs/accounting-3/journal-entries-invoices-vendor-bills-356/ver/14-0-21#): This allows you to create a new vendor bill via document upload. Odoo has the ability to read the data on a PDF invoice and extract details into your Odoo database. This option does require the purchase of Odoo credits.

[Create Manually](https://hibou.io/docs/accounting-3/sales-purchases-356#)**:** Use this option to create a standalone vendor bill without a purchase order. You can also create a manual bill through  [](https://hibou.io/docs/accounting-3/journal-entries-invoices-vendor-bills-356/ver/14-0-21#) \> [NEW](https://hibou.io/docs/accounting-3/journal-entries-invoices-vendor-bills-356/ver/14-0-21#) > [bill](https://hibou.io/docs/accounting-3/journal-entries-invoices-vendor-bills-356/ver/14-0-21#). 

[\# Bills to Validate](https://hibou.io/docs/accounting-3/sales-purchases-356#): This is a shortcut to vendor bills that have yet to be posted.

[\# Bills to Pay](https://hibou.io/docs/accounting-3/sales-purchases-356#): This is a shortcut to vendor bills that have been posted but not paid.

[\# To Check](https://hibou.io/docs/accounting-3/journal-entries-invoices-vendor-bills-356/ver/14-0-21#): This is a shortcut to vendor bills that need to be double-checked for accuracy at another employee's request.

[\# Expenses to process](https://hibou.io/docs/accounting-3/journal-entries-invoices-vendor-bills-356/ver/14-0-21#): This is a shortcut to expense reports that have not been paid.

#### Vendor Bill Behavior

Vendor Bill invoices will create journal entries with the invoice partner's Account Payable account on one side, and the offsetting accounts coming from the invoice lines themselves.  

Here's an example of a bill that's been created and posted. The [Invoice Lines](https://hibou.io/docs/accounting-3/sales-purchases-356#) tab shows the product being purchased, and which asset account is specified on its product template.

![](https://hibou.io/web/image/75331/invoice-lines-tab-v15.png?access_token=9dae2ed3-db14-44a6-ac94-365e4bc14a82)  

Under the [Journal Items](https://hibou.io/docs/accounting-3/sales-purchases-356#) tab of the same invoice there are two things happening:

**Purchase & Purchase Tax:** $143.75 is the sum of the product price and its related taxes.  

**Assets:** $143.75 reflects the value of goods being shifted from one location to another and does not affect the bill total. This amount is being debited to the Asset account.

![Odoo image and text block](https://hibou.io/web/image/75332/journal-items-tab-on-vendor-bills-v15.png?access_token=ab593c49-80cf-40d7-ac06-8f2fc6973eab)