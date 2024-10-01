---
title: Anglo-Saxon Accounting
summary: Accounting --> Getting Started --> Accounting Concept --> Anglo-Saxon Accounting
authors: Wilson Loh
date: 2023-07-02
---

The Anglo -Saxon Accounting is suitable for small localities such as the countries in the United States, United Kingdom, Ireland, Canada, Australia, and many other countries. 
<br/><br/>
The Anglo-Saxon Accounting have noted many differences as compare to [Continental Accounting](04_continental_accounting.md). In Continental Accounting, we discussed that the expense account is affected by a purchase. But in Anglo-Saxon Accounting, the expense account gets affected after processing a sale order.
<br/><br/>
If you want to get the full feature of Anglo Saxon accounting, you need to activate the feature from the PerfectWORK Accounting Configuration Settings. One more significant feature of the Anglo-Saxon Accounting is the cost distinctions between Account and Stock account properties when the inventory valuation is automated. The price difference account is applied to record the difference in price between the vendor bill and the purchase order.

### Transactions in Anglo-Saxon Accounting

In some scenarios, the expense will not record when it is purchased. The purchases may be bulk purchases and will be consumed for a long period of time. Therefore, adding those as an expense to financial entries will create a greater impact on the profit and loss of the company. As a result, in order to handle those situations, it is a standard practice to record purchased items as assets and expenses at the time of consumption. The expense of consumed assets is recorded in ledgers.
<br/><br/>
We will begin with the purchase of a product.

#### Purchase Order:

Creating purchase orders generates only a valid document for receiving goods or services from the vendor, which will not affect any accounting ledgers.

#### Receipt:

Once the receipt of goods is acknowledged, the incoming assets have to be recorded in stock. Thus stock accounts get affected, both stock input accounts and stock valuation accounts.

| Accounts | Nature | Increasing/Decreasing | Debit/Credit |
| --- | --- | --- | --- |
| Stock valuation account | Asset | Increasing | Debit |
| Stock Input account | Asset | Decreasing | Credit |

Here the incoming value or stock recorded in the ‘Stock input account’, this will be considered as assets and if it is not sold out or consumed, thus it becomes a liability. So it can be either Liability or Assets. [ Liability = -Assets, as liability increases or asset decreases ]

#### Return:

In some cases, there will be a chance of returning the purchased product due to quality issues or product damage. Thus the stock move is just the opposite of the incoming, and stock accounts are reversed.

| Accounts | Nature | Increasing/Decreasing | Debit/Credit |
| --- | --- | --- | --- |
| Stock valuation account | Asset | Decreasing | Credit |
| Stock Input account | Asset | Increasing | Debit |

#### Purchase Bill:

Once the purchase receipt is done, the next step is to post its purchase bill.

| Accounts | Nature | Increasing/Decreasing | Debit/Credit |
| --- | --- | --- | --- |
| Account Payable | Liability | Increasing | Credit |
| Tax Account | Asset | Increasing | Debit |
| Stock Input account | Asset | Increasing | Debit |

In Anglo-Saxon, as mentioned above, the direct expense will not be recorded at the time of purchase; instead, it will be recorded as an asset. Thus here, ‘Account Payable’ and ‘Stock interim accounts’ are affected once a bill is generated. 
<br/><br/>
Account Payable records the amount to pay for the vendor. Thus on bill generation the payable amount to the vendor increases, which increases the liability of the company and the Account Payable credited.

#### Register Payment:

Registering payment makes payment or sends money to the vendor. During this process, ‘Account Payable’ and ‘Outstanding Payment Accounts’ get affected.

| Accounts | Nature | Increasing/Decreasing | Debit/Credit |
| --- | --- | --- | --- |
| Account Payable | Liability | Decreasing | Debit |
| Outstanding Payments | Liability | Increasing | Credit |

As the company makes payment to the vendor, the liability of the company decreases. Account payable records the payable liabilities of the company. Thus Account Payable, whose nature is a liability, and as liability decreases, it gets debited.
<br/><br/>
The Outstanding Payment account is the intermediary account that is used along with cash and bank journals that keeps unreconciled outgoing payments. And these outstanding payment accounts are used to reconcile with the bank statement rather than the Account payable. Thus here on registering payment ‘Outstanding Payments’ account gets credited as liability increases.

#### Reconciliation:

As the next level bank statement has to be matched with vendor payment. So on reconciliation, the ‘Outstanding Payment’ and ‘Bank’ accounts are affected.

| Accounts | Nature | Increasing/Decreasing | Debit/Credit |
| --- | --- | --- | --- |
| Outstanding Payments | Liability | Decreasing | Debit |
| Bank Account | Asset | Decreasing | Credit |

In this process, it will record the payment is finally sent to the vendor from the bank account. Thus asset in ‘Bank’ decreases, and hence bank is credited and liability in ‘Outstanding Payment’ decreases, and thus it is debited.
<br/><br/>
The overall journal entries of the purchase process are shown in the table below.

<table style="width: 100%; display: inline-table;"><thead><tr><th>Operation </th><th>Accounts Affected </th><th>Debit </th><th>Credit </th></tr></thead><tbody><tr><td><b>Purchase order</b></td><td>No Accounts Affected </td><td></td><td></td></tr><tr><td><b>Material Receipt</b></td><td class="p-0"><table class="w-100"><tbody><tr><td style="border-top: 1px solid #fff; border-right: 1px solid #fff; border-left: 1px solid #fff;">Stock Valuation Account </td></tr><tr><td style="border-bottom: 1px solid #fff; border-right: 1px solid #fff; border-left: 1px solid #fff;">Stock Input Accountt </td></tr></tbody></table></td><td style="padding: 0px;"><table class="w-100"><tbody><tr><td style="border-top: 1px solid #fff; border-right: 1px solid #fff; border-left: 1px solid #fff;">XX </td></tr><tr><td style="border-bottom: 1px solid #fff; border-right: 1px solid #fff; border-left: 1px solid #fff; visibility: hidden;">.. </td></tr></tbody></table></td><td style="padding: 0px;"><table class="w-100"><tbody><tr><td style="border-top: 1px solid #fff; border-right: 1px solid #fff; border-left: 1px solid #fff; visibility: hidden;">.. </td></tr><tr><td style="border-bottom: 1px solid #fff; border-right: 1px solid #fff; border-left: 1px solid #fff;">XX </td></tr></tbody></table></td></tr><tr><td><b>Purchase Bill</b></td><td class="p-0"><table class="w-100"><tbody><tr><td style="border-top: 1px solid #fff; border-right: 1px solid #fff; border-left: 1px solid #fff;">Stock Input Account </td></tr><tr><td style="border-top: 1px solid #fff; border-right: 1px solid #fff; border-left: 1px solid #fff;">Account Payable </td></tr><tr><td style="border-bottom: 1px solid #fff; border-top: 1px solid #175393; border-right: 1px solid #fff; border-left: 1px solid #fff; height: ; border: ;">Tax Account </td></tr></tbody></table></td><td style="padding: 0px;"><table class="w-100"><tbody><tr><td style="border-top: 1px solid #fff; border-right: 1px solid #fff; border-left: 1px solid #fff;">XX </td></tr><tr><td style="border-top: 1px solid #fff; border-right: 1px solid #fff; border-left: 1px solid #fff; visibility: hidden;">.. </td></tr><tr><td style="border-bottom: 1px solid #fff; border-right: 1px solid #fff; border-left: 1px solid #fff;">XX </td></tr></tbody></table></td><td style="padding: 0px;"><table class="w-100"><tbody><tr><td style="border-top: 1px solid #fff; border-right: 1px solid #fff; border-left: 1px solid #fff; visibility: hidden;">.. </td></tr><tr><td style="border-top: 1px solid #fff; border-right: 1px solid #fff; border-left: 1px solid #fff; ">XX </td></tr></tbody></table><table class="w-100"><tbody><tr><td style="border-top: 1px solid #fff; border-right: 1px solid #fff; border-left: 1px solid #fff; border-bottom: 1px solid #fff; visibility: hidden;">.. </td></tr></tbody></table></td></tr><tr><td><b>Registering Payment</b></td><td class="p-0"><table class="w-100"><tbody><tr><td style="border-top: 1px solid #fff; border-right: 1px solid #fff; border-left: 1px solid #fff;">Account Payable </td></tr><tr><td style="border-bottom: 1px solid #fff; border-right: 1px solid #fff; border-left: 1px solid #fff;">Outstanding Payments </td></tr></tbody></table></td><td style="padding: 0px;"><table class="w-100"><tbody><tr><td style="border-top: 1px solid #fff; border-right: 1px solid #fff; border-left: 1px solid #fff;">XX </td></tr><tr><td style="border-bottom: 1px solid #fff; border-right: 1px solid #fff; border-left: 1px solid #fff; visibility: hidden;">.. </td></tr></tbody></table></td><td style="padding: 0px;"><table class="w-100"><tbody><tr><td style="border-top: 1px solid #fff; border-right: 1px solid #fff; border-left: 1px solid #fff; visibility: hidden;">.. </td></tr><tr><td style="border-bottom: 1px solid #fff; border-right: 1px solid #fff; border-left: 1px solid #fff;">XX </td></tr></tbody></table></td></tr><tr><td><b>Reconciling</b></td><td>Outstanding Payments </td><td>XX </td><td></td></tr><tr><td style="visibility: hidden;"><b>...</b></td><td>Bank Account </td><td></td><td>XX </td></tr></tbody></table>

Now let's look at the **Sales Process.**
<br/><br/>
The sales transaction involves different operations, including order creation, processing delivery of the product to the customer, invoice generation, and its payment and reconciliation.

#### Sales Order:

The creation of a sales order makes a valid document for customers, including the products and services they require, quantity and confirmed price, etc. It does not affect any accounts.

#### Delivery Note:

As an order is confirmed, the next step is to deliver the items to the customer. Once delivery is validated, stock account properties will be affected. The ‘Stock Output Account’ records the stock delivered to the customer. 
<br/><br/>
The nature of a ‘Stock Output Account’ is Asset, and here, the asset value increases and is debited. And the total stock value or asset value from the warehouse decreases, which is kept in the ‘Stock Valuation Account.’ Thus the Stock Valuation Account is credited.

| Accounts | Nature | Increasing/Decreasing | Debit/Credit |
| --- | --- | --- | --- |
| Stock valuation account | Asset | Decreasing | Credit |
| Stock Output account | Asset | Increasing | Debit |

#### Return Operation:

Consider the return of product from the customer due to any reason. Thus the stock is also reversed as follows.

| Accounts | Nature | Increasing/Decreasing | Debit/Credit |
| --- | --- | --- | --- |
| Stock valuation account | Asset | Increasing | Debit |
| Stock Output account | Asset | Decreasing | Credit |

#### Sales Invoice:

While creating a sales invoice for a customer, the _Income Account_ and _Account Receivable_ gets affected. The nature of _Income Account_ is income, and _Account Receivable_ is assets. Thus on creating income increases, thus _Income Account_ is credited, and asset increases, therefore _Account Receivable_ is debited. 
<br/><br/>
Along with this, two more ledgers are affected, the _‘Stock Output Account’_ and the _‘Expense’_ Account, since, in Anglo-Saxon Accounting, the expense is affected once the purchased product is consumed or sold out.

| Accounts | Nature | Increasing/Decreasing | Debit/Credit |
| --- | --- | --- | --- |
| Income Account | Income | Increasing | Credit |
| Account Receivable | Asset | Increasing | Debit |
| Tax Account | Liability | Increasing | Credit |
| Stock Output Account | Asset | Decreasing | Credit |
| Expense Account | Expenses | Increasing | Debit |

#### Payment Registering:

Once payment is received from the customer and when it is registered in PerfectWORK, ‘Account Receivable’ and ‘Outstanding Receipts’ accounts are affected.

| Accounts | Nature | Increasing/Decreasing | Debit/Credit |
| --- | --- | --- | --- |
| Accounts Receivable | Asset | Decreasing | Credit |
| Outstanding Receipts | Asset | Increasing | Debit |

#### Payment Registering:

Once payment is received from the customer and when it is registered in PerfectWORK, ‘Account Receivable’ and ‘Outstanding Receipts’ accounts are affected.

| Accounts | Nature | Increasing/Decreasing | Debit/Credit |
| --- | --- | --- | --- |
| Accounts Receivable | Asset | Decreasing | Credit |
| Outstanding Receipts | Asset | Increasing | Debit |

The receivable accounts record the amount that has to be received from the customer. The nature of _Account receivable_ is Asset. As the customer makes payment, assets decrease and are credited. 
<br/><br/>
The incoming payments were then temporarily kept in the _Outstanding Receipts_ account and reconciled with the _Bank_. The nature of the Outstanding Receipts account is Assets, and as the asset increases, it is debited.

#### Reconciliation:

Once payment is reconciled with a bank statement, the asset in the bank increases and thus the bank is debited. And the counterpart outstanding receipts account, where assets decrease and thus are credited.

| Accounts | Nature | Increasing/Decreasing | Debit/Credit |
| --- | --- | --- | --- |
| Outstanding Receipts | Asset | Decreasing | Credit |
| Bank account | Asset | Increasing | Debit |

#### Sales Return:

The return of products affects stock and if the invoice is paid, refund has to be registered with a credit note.
<br/><br/>
The overall journal entry is as follows.
<br/><br/>

<table style="width: 90%; display: inline-table;"><thead><tr><th>Operation </th><th>Accounts Affected </th><th>Debit </th><th>Credit </th></tr></thead><tbody><tr><td><b>Sales order</b></td><td style="padding: 0;"><table class="w-100"><tbody><tr><td style="border-top: 1px solid #fff; border-right: 1px solid #fff; border-left: 1px solid #fff;">No Accounts affected</td></tr><tr><td style="border-bottom: 1px solid #fff; border-right: 1px solid #fff; border-left: 1px solid #fff;">Stock valuation account</td></tr></tbody></table></td><td style="padding: 0;"><table class="w-100"><tbody><tr><td style="border-top: 1px solid #fff; border-right: 1px solid #fff; border-left: 1px solid #fff;">NA</td></tr><tr><td style="border-bottom: 1px solid #fff; border-right: 1px solid #fff; border-left: 1px solid #fff;visibility: hidden;">..</td></tr></tbody></table></td><td style="padding: 0px;"><table class="w-100"><tbody><tr><td style="border-top: 1px solid #fff; border-right: 1px solid #fff; border-left: 1px solid #fff;">NA</td></tr><tr><td style="border-bottom: 1px solid #fff; border-right: 1px solid #fff; border-left: 1px solid #fff;">XX </td></tr></tbody></table></td></tr><tr><td><b>Delivery Note</b></td><td class="p-0"><table class="w-100"><tbody><tr><td style="border-top: 1px solid #fff; border-right: 1px solid #fff; border-left: 1px solid #fff;border-bottom: 1px solid #fff;">Stock Output account</td></tr></tbody></table></td><td style="padding: 0px;"><table class="w-100"><tbody><tr><td style="border-bottom: 1px solid #fff; border-right: 1px solid #fff; border-left: 1px solid #fff;border-top: 1px solid #fff;">XX </td></tr></tbody></table></td><td style="padding: 0px;"><table class="w-100"><tbody><tr><td style="border-bottom: 1px solid #fff; border-right: 1px solid #fff; border-left: 1px solid #fff;visibility: hidden;border-top: 1px solid #fff;">.. </td></tr></tbody></table></td></tr><tr><td><b>Customer Invoice</b></td><td class="p-0"><table class="w-100"><tbody><tr><td style="border-top: 1px solid #fff; border-right: 1px solid #fff; border-left: 1px solid #fff;">Income Account</td></tr><tr><td style="border-top: 1px solid #fff; border-right: 1px solid #fff; border-left: 1px solid #fff;">Account Receivable</td></tr><tr><td style="border-bottom: 1px solid #175393; border-top: 1px solid #175393; border-right: 1px solid #fff; border-left: 1px solid #fff; height: ; border: ;">Tax Account </td></tr><tr><td style="border-bottom: 1px solid #175393; border-right: 1px solid #fff; border-left: 1px solid #fff;border-top: 1px solid #fff;">Stock Output Account</td></tr><tr><td style="border-bottom: 1px solid #fff; border-top: 1.5px solid #175393; border-right: 1px solid #fff; border-left: 1px solid #fff; height: ; border: ;">Expense Account</td></tr></tbody></table></td><td style="padding: 0px;"><table class="w-100"><tbody><tr><td style="border-top: 1px solid #fff; border-right: 1px solid #fff; border-left: 1px solid #fff;visibility: hidden;">.. </td></tr><tr><td style="border-top: 1px solid #fff; border-right: 1px solid #fff; border-left: 1px solid #fff;">XX </td></tr><tr><td style="border-top: 1px solid #fff; border-right: 1px solid #fff; border-left: 1px solid #fff; visibility: hidden;">.. </td></tr><tr><td style="border-bottom: 1px solid #175393; border-right: 1px solid #fff; border-left: 1px solid #fff;visibility: hidden;">XX </td></tr><tr><td style="border-bottom: 1px solid #fff; border-right: 1px solid #fff; border-left: 1px solid #fff;">XX </td></tr></tbody></table></td><td style="padding: 0px;"><table class="w-100"><tbody><tr><td style="border-top: 1px solid #fff; border-right: 1px solid #fff; border-left: 1px solid #fff; ">XX </td></tr><tr><td style="border-top: 1px solid #fff; border-right: 1px solid #fff; border-left: 1px solid #fff; visibility: hidden;">XX </td></tr><tr><td style="border-top: 1px solid #fff; border-right: 1px solid #fff; border-left: 1px solid #fff; ">XX </td></tr><tr><td style="border-top: 1px solid #fff; border-right: 1px solid #fff; border-left: 1px solid #fff; ">XX </td></tr></tbody></table><table class="w-100"><tbody><tr><td style="border-top: 1px solid #fff; border-right: 1px solid #fff; border-left: 1px solid #fff; border-bottom: 1px solid #fff; visibility: hidden;">.. </td></tr></tbody></table></td></tr><tr><td><b>Registering Payment</b></td><td class="p-0"><table class="w-100"><tbody><tr><td style="border-top: 1px solid #fff; border-right: 1px solid #fff; border-left: 1px solid #fff;">Accounts Receivable</td></tr><tr><td style="border-bottom: 1px solid #fff; border-right: 1px solid #fff; border-left: 1px solid #fff;">Outstanding Receipts</td></tr></tbody></table></td><td style="padding: 0px;"><table class="w-100"><tbody><tr><td style="border-top: 1px solid #fff;border-right: 1px solid #fff;border-left: 1px solid #fff;visibility: hidden;">..</td></tr><tr><td style=" border-bottom: 1px solid #fff; border-right: 1px solid #fff; border-left: 1px solid #fff; ">XX</td></tr></tbody></table></td><td style="padding: 0px;"><table class="w-100"><tbody><tr><td style=" border-top: 1px solid #fff; border-right: 1px solid #fff; border-left: 1px solid #fff; ">XX</td></tr><tr><td style="border-bottom: 1px solid #fff;border-right: 1px solid #fff;border-left: 1px solid #fff;visibility: hidden;">..</td></tr></tbody></table></td></tr><tr><td><b>Reconciling</b></td><td>Outstanding Receipts</td><td style=" visibility: hidden;
">XX </td><td>XX </td></tr><tr><td style="visibility: hidden;"><b>...</b></td><td>Bank Account </td><td>XX </td><td style=" visibility: hidden;
">..</td></tr></tbody></table>