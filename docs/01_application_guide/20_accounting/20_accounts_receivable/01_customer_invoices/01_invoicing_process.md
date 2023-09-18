---
title: Invoicing Process
summary: Accounting --> Account Receivable --> Customer Invoice --> Invoicing Process
authors: Wilson Loh
date: 2022-01-18
---

## **Purpose**

This document will cover the general workflow of creating an Invoice, registering a payment for it, and dividing a lump sum payment across several invoices within the Odoo 15 **Accounting** application. 

## **Process**

To get started, navigate to the **Accounting** app.

![Odoo image and text block](https://hibou.io/web/image/75068/hibou15-accounting-app.jpg?access_token=b22d8410-e0ef-4be9-b8dd-05b8a7f1cd5e)

From the Accounting [Overview](https://hibou.io/docs/accounting-3/customer-invoices-359#), you will see a kanban view of your journals. Customer Invoices will have smart buttons for Invoices that need to be validated/sent to the customer, unpaid invoices, and quick totals of each. You will also have the option to create a new invoice manually or by import.

![Odoo image and text block](https://hibou.io/web/image/75069/customer-invoice-dash-v15.png?access_token=ab1e774c-f55e-44b4-aba7-9d1021e4ca81)

Click [CUSTOMERS](https://hibou.io/docs/accounting-3/workflow-invoicing-359#) > [INVOICES](https://hibou.io/docs/accounting-3/workflow-invoicing-359#) for a list of all invoices, as well as the option to create and upload new records. 

## Important!

#### Start with a Sale Order 

Odoo has an automated checks-and-balances approach with most applications. For this reason, you should always aim to create invoices and payments from the original sales order. Doing so will keep the records linked so Odoo can apply payments, credits, stock moves, etc. all within the same realm of that original transaction.

Creating manual invoices and payments for existing records can cause more work in the future because those original orders would then need to be updated manually.

### Creating Invoices

#### Creating a Manual Invoice

To create an invoice manually, click [Customers](https://hibou.io/docs/accounting-3/customer-invoices-359#) > [Invoices](https://hibou.io/docs/accounting-3/customer-invoices-359#), then click [Create](https://hibou.io/docs/accounting-3/customer-invoices-359#). On the **New Invoice** form, fill out the fields as follows.

**Customer:** Select the customer to be invoiced.

**Delivery Address:** This field should auto-populate with the customer's delivery location.

**Reference:** Enter the reference number(s) for the sales order(s) being invoiced against.

**Invoice Date:** Enter the date the invoice was created.

**Due Date or Terms:** Determine the due date for the invoice or select predefined terms (e.g. 15 days, 30 days) from the drop-down menu.

**Journal**: The Journal where entries for this invoice are recorded. The second drop down menu on this line is to define the currency which will auto-populate with the default currency for your company.

Under the [Invoice Lines](https://hibou.io/docs/accounting-3/customer-invoices-359#) tab, you can add a specific item by clicking [Add a Line](https://hibou.io/docs/accounting-3/customer-invoices-359#), then enter the items or services that you'll be invoicing, as well as the quantity and price for each. Notice that you're not required to select a product, but it does make it easier to match invoices to sale orders if you decide to go this route. 

If you don't select a product, you'll need to provide a label for the invoice line, as shown below.

Under the [journal items](https://hibou.io/docs/accounting-3/customer-invoices-359#) tab, the fields will be pre-populated with the accounts on the product template; however, you can modify or [Add a Line](https://hibou.io/docs/accounting-3/customer-invoices-359#) if necessary.

Under the [Other Info](https://hibou.io/docs/accounting-3/customer-invoices-359#) tab:

**Invoice**

**Customer Reference:** This field will auto-populate a reference to be used when registering payments through the invoice record, with the Register payment function

-   **Salesperson:** Select the employee responsible for this invoice.
    

-   **Sales Team:** Select the Sales Team this invoice is assigned to.
    

-   **Recipient Bank**: The bank account number to which the invoice will be paid.
    
-   **Referrer**: The person who you can refer to regarding the invoice  
    

**Accounting**

-   **Company**: This will auto-populate with the company
    
-   **Incoterm:** Pre-defined commercial terms used in international transactions.
    
-   **Fiscal Position:** Define the taxes that should be applied for this customer, IE state-specific tax rules.
    
-   **Intrastat Country:** System for collecting information and producing statistics on dispatches and arrivals of goods between countries.
    
-   **Post Automatically:** If checked, this invoice will post on its date.
    
-   **To Check:** If checked, it indicates the user was not sure about the information entered and is requesting an admin to review before confirming.
    

![Odoo image and text block](https://hibou.io/web/image/75070/invoice-other-info-tab-v15.png?access_token=3b574b6a-a6bc-4656-871c-efdd18e93381)

When you're done, click [Save](https://hibou.io/docs/accounting-3/customer-invoices-359#) to keep the invoice in draft status. Click [confirm](https://hibou.io/docs/accounting-3/customer-invoices-359#) to confirm that it's ready for payment.

You can click [SEND & PRINT](https://hibou.io/docs/accounting-3/workflow-invoicing-359#) so your customer will have access to the invoice, and the ability to make payments. Move to the next section to register a payment on an invoice!  

#### Creating an Invoice from a Sales Order

When creating invoices, this is the recommended method because it keeps your documents in sync. To get started, navigate to the **Sales** app.

![](https://hibou.io/web/image/75071/hibou15-sales-app.jpg?access_token=c1ef3a43-e448-415b-967a-61205947512e)  

Under the [To Invoice](https://hibou.io/docs/accounting-3/customer-invoices-359#) > [ORDERS TO INVOICE](https://hibou.io/docs/accounting-3/workflow-invoicing-359#). This will take you to an overview of sales orders that need to be validated and billed in order to receive payment. 

Click the order you wish to invoice.

![Odoo image and text block](https://hibou.io/web/image/75072/sale-orders-to-invoice-v15.png?access_token=517ed63c-8709-4c63-87b1-5a55785aad7b)

## **Good to Know!**

#### Pro-Forma Invoice

If enabled, you can [Send Pro-Forma Invoice](https://hibou.io/docs/accounting-3/customer-invoices-359#) instead. A Pro-forma invoice is an estimate provided in advance of the delivery of goods. They are commonly used as quotations and are not a demand for payment.  

This will bring up a modal window where you'll have three options before creating the invoice.

![](https://hibou.io/web/image/75074/create-and-view-invoice-v15.png?access_token=1d7d347e-cabe-4e93-9d79-5afa52cddd69) 

-   **Regular Invoice:** This will include all un-invoiced lines on the order.
    
-   **Down Payment (percentage):** Invoices a percentage of the total on order, leaving the remainder to be invoiced at a later date. 
    
-   **Down Payment (fixed amount):** Invoices the down payment line alone to take an initial payment.
    
-   **Timesheet Period**: Timesheets not yet invoiced from this period will be invoiced. If these fields are left blank, all timesheets not yet invoiced will be invoiced without distinction.
    

Click [Create and View Invoice](https://hibou.io/docs/accounting-3/customer-invoices-359#) to immediately review the invoice.   

## Good to Know!

#### 'Create Invoice' Button

The [Create Invoice](https://hibou.io/docs/accounting-3/customer-invoices-359#) button on this modal window will create the invoice and redirect you back to the list view. This is a time-saving feature for batch work!

![](https://hibou.io/web/image/74279/create-invoice-button.png?access_token=4bd770e9-736e-4a2e-99a6-793201ccec6c)  

Click [confirm](https://hibou.io/docs/accounting-3/customer-invoices-359#) to confirm the invoice and make it eligible for payment. 

### Combining Invoices

Often customers will ask for one combined invoice, which is very easily accomplished. First, navigate to the **Sales** app.

![](https://hibou.io/web/image/75077/create-group-invoices.png?access_token=088e90e4-b3f5-4077-b6f2-ad0da1867959) 

Here you'll see a modal window that displays the total number of invoices being combined. Click [Create and View Invoice](https://hibou.io/docs/accounting-3/customer-invoices-359#).

![](https://hibou.io/web/image/75078/create-and-view-group-invoices-v15.png?access_token=5cc19f9b-32a3-4cdc-81a4-61340ac871b1) 

This brings you to a view of each of the individual invoices lines from each invoice you just created. Click [confirm](https://hibou.io/docs/accounting-3/customer-invoices-359#) to post it. At that point, you'll be able to register payments against the amount due.