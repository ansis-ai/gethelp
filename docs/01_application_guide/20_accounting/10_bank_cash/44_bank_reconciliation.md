---
title: Bank Reconciliation
summary: Accounting --> Bank & Cash --> Bank Reconciliation
authors: Wilson Loh
date: 2022-01-18
---

## Overview[¶](https://www.odoo.com/documentation/16.0/applications/finance/accounting/bank/reconciliation.html#overview "Permalink to this headline")

Matching your bank statements with your accounting records can be a tedious task. You need to find the corresponding invoices, compare the amounts and partners’ details with those in the bank statement. These steps can take a lot of time. Luckily, with Odoo you can very easily match your invoices or any other payment document with your bank statements.

Two options of the reconciliation process exist in Odoo.

1.  We can directly specify the payment on the invoice
    
2.  We can reconcile open invoices with bank statements
    

## Configuration[¶](https://www.odoo.com/documentation/16.0/applications/finance/accounting/bank/reconciliation.html#configuration "Permalink to this headline")

No special configuration is necessary to record invoices. All we need to do is to install the accounting app.

![../../../../_images/use01.png](https://www.odoo.com/documentation/16.0/_images/use01.png)


## Use cases[¶](https://www.odoo.com/documentation/16.0/applications/finance/accounting/bank/reconciliation.html#use-cases "Permalink to this headline")

### Case 1: Payments registration[¶](https://www.odoo.com/documentation/16.0/applications/finance/accounting/bank/reconciliation.html#case-1-payments-registration "Permalink to this headline")

We received the proof of payment of our invoice in the amount of 2100 euros issued to Smith & Co.

We start at our issued Invoice of 2100 euros for Smith & Co. Because the sold product is a service we demand an immediate payment. Our accountant only handles bank statements at the end of week, so we have to mark this invoice as paid immediately in order to indicate that we can start rendering services to our customer.

Our customer send us a payment confirmation. We can thus register a payment and mark the invoice as paid.

![../../../../_images/use02.png](https://www.odoo.com/documentation/16.0/_images/use02.png)

By clicking on **register payment,** we are telling Odoo that our customer has paid the Invoice. We thus have to specify the amount and the payment method.

![../../../../_images/use03.png](https://www.odoo.com/documentation/16.0/_images/use03.png)

Now we can always find the payment details in the Invoice by clicking on the .

![../../../../_images/use04.png](https://www.odoo.com/documentation/16.0/_images/use04.png)

The invoice has been paid and **the reconciliation has been done automatically.**

![../../../../_images/use02.png](https://www.odoo.com/documentation/16.0/_images/use02.png)

![../../../../_images/use03.png](https://www.odoo.com/documentation/16.0/_images/use03.png)

![../../../../_images/use04.png](https://www.odoo.com/documentation/16.0/_images/use04.png)

### Case 2: Bank statements reconciliations[¶](https://www.odoo.com/documentation/16.0/applications/finance/accounting/bank/reconciliation.html#case-2-bank-statements-reconciliations "Permalink to this headline")

We start at our issued Invoice of 3000 euros for Smith & Co. Let’s also assume that other Invoices are open for different customers.

![../../../../_images/use05.png](https://www.odoo.com/documentation/16.0/_images/use05.png)

We receive our bank statement and find that not only the invoice issued to Smith & Co has been paid, but the one to Buzz of 92 euros as well.

**Import** or **Create** the bank statements. Please refer to the documents from the Bank Feeds section.

![../../../../_images/use06.png](https://www.odoo.com/documentation/16.0/_images/use06.png)

On the dashboard, click on **Reconcile # Items**

![../../../../_images/use07.png](https://www.odoo.com/documentation/16.0/_images/use07.png)

If everything was right (correct partner name, right amount) odoo will do the reconciliations **automatically**.

![../../../../_images/use08.png](https://www.odoo.com/documentation/16.0/_images/use08.png)

If some issues are found, you will need to take **manual actions**.

For example, if the partner is missing from your bank statement, just fill it in :

![../../../../_images/use09.png](https://www.odoo.com/documentation/16.0/_images/use09.png)

If the payment is done with a down payment, just check if it is all right and validate all related payments :

![../../../../_images/use10.png](https://www.odoo.com/documentation/16.0/_images/use10.png)

![../../../../_images/use05.png](https://www.odoo.com/documentation/16.0/_images/use05.png)

![../../../../_images/use06.png](https://www.odoo.com/documentation/16.0/_images/use06.png)

![../../../../_images/use07.png](https://www.odoo.com/documentation/16.0/_images/use07.png)

![../../../../_images/use08.png](https://www.odoo.com/documentation/16.0/_images/use08.png)

![../../../../_images/use09.png](https://www.odoo.com/documentation/16.0/_images/use09.png)

![../../../../_images/use10.png](https://www.odoo.com/documentation/16.0/_images/use10.png)

[Edit on GitHub](https://github.com/odoo/documentation/edit/16.0/content/applications/finance/accounting/bank/reconciliation.rst)