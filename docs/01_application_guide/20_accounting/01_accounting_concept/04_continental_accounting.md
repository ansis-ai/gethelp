---
title: Continental Accounting
summary: Accounting --> Getting Started --> Accounting Concept --> Continental Accounting
authors: Wilson Loh
date: 2023-07-02
---

PerfectWORK mainly focuses on two types of accounting. One is **‘Continental Accounting,’** and the other is **[Anglo-Saxon accounting](06_anglo_saxon_accounting.md)**
<br/>
<br/>
With the advent of PerfectWORK, PerfectWORK introduced **Storno Accounting,** which uses negative credit/debit values for reverse entries.

### Transactions in Continental Accounting
The most commonly used accounting, continental accounting, and the PerfectWORK system greatly support continental accounting principles. This accounting will impact the expense account when accomplishing a purchase operation. So the cost of an item is considered as soon as the product is reached in the stock. The PerfectWORK platform applies continental accounting as by default. In addition, the stock can be validated manually or automatically. 
<br/><br/>
If it is done manually, the stock is not affected, and the details have to be posted manually at the end of a month or at the end of a year. 
<br/><br/>
If the stock valuations need to be recorded as the stock in and out, then opt for the inventory valuation method ‘Automated.’ The well-established accounting, Continental accounting, has many useful impacts on your business accounting. So we can analyze how the ledgers affect different transactions or operations in continental accounting.
<br/><br/>
Accounting transactions are the monetary activity that directly affects a business’s financial status and financial statements. Basically, we can consider any type of exchange of money under this category. Different organizations or businesses handle these transactions in different ways. So we can have a look at some of the basic accounting transactions.

### Purchase

Purchases are said to be the financial transactions that necessitate the business to acquire the products or services required for creating sales. In the PerfectWORK platform, all the transactions associated with the purchase are called ‘ Purchase Journals”. 
<br/><br/>
All these purchase-related transactions are kept in the purchase voucher. It is the transaction processed by the vendor of a product or service purchased, and it can even be a product, purchase, service, or any other asset purchase. A purchase entails a whole set of transactions such as Purchase order, Material Receipt, Rejection Out, Purchase Invoice, and Purchase Return.

#### Purchase Order:

A purchase order can be defined as an official document presented by a buyer consigning to pay the seller for the sale of a particular product or service to be issued in the future. Creating a purchase order for any goods or services from a vendor is possible for a necessary amount. The initiation of purchase orders does not have a direct impact on both the stock or account ledgers.

#### Material Receipt:

The next procedure is Material receipt, which refers to information like product quantities and lot numbers in relation to the products that are intended for the on sight work performed by the employees. If the supplier sends the product, the inventory item must be received, and it must be moved to the inventory. And the quantities will be updated in the inventory. So in the case of Material Receipt, only the stock accounts get affected.
<br/><br/>
When receiving the product, the ‘Stock Valuation Account’ and ‘Stock Input Account’ get affected in the PerfectWORK platform.

| Accounts                | Nature  | Increasing/Decreasing | Debit/Credit |
| ----------------------- | ------- | --------------------- | ------------ |
| Stock valuation account | Asset   | Increasing            | Debit        |
| Stock Input account     | Expense | Decreasing            | Credit       |

#### Rejection Out:

There are many situations where the organization returns the purchased items even before meeting the payment. It can be for any reason. When the product gets damaged, the product will be rejected. Likewise, there will be a lot of reasons behind the rejection. As a result, the stock will be reversed. In this case, the stock will be affected, and there will be no impact on the accounts. In addition, the stock value will also decrease.

| Accounts                | Nature  | Increasing/Decreasing | Debit/Credit |
| ----------------------- | ------- | --------------------- | ------------ |
| Stock valuation account | Asset   | Decreasing            | Credit       |
| Stock Input account     | Expense | Increasing            | Debit        |

#### Purchase invoice:

If you are creating an invoice for the purchase order, it will affect the payable account and the expense account. The payable account will get credited because the nature of the payable account is ‘Liability’. On the other hand, the expense account gets debited because the nature of the expense account is “expense.”

| Accounts        | Nature    | Increasing/Decreasing | Debit/Credit |
| --------------- | --------- | --------------------- | ------------ |
| Account Payable | Liability | Increasing            | Credit       |
| Expense Account | Expense   | Increasing            | Debit        |

When you create a payment, the payable account and the outstanding receipt account are also impacted. If the payment has been given, the liability will decrease. Consequently, the payable account will be debited. 
<br/><br/>
From PerfectWORK 4.0 onwards for keeping the unreconciled entries, a temporary account - outstanding payments is used in bank and cash journals. The outstanding payment’s nature is “Asset.” So when the assets decrease, the outstanding payment account is credited.

| Accounts             | Nature    | Increasing/Decreasing | Debit/Credit |
| -------------------- | --------- | --------------------- | ------------ |
| Account Payable      | Liability | Decreasing            | Debit        |
| Outstanding Payments | Liability | Increasing            | Credit       |

Once it is reconciled with the bank statement, the amount will be transferred to the bank account. As a result, the outstanding payments account becomes debited, and the bank is credited.

| Accounts             | Nature    | Increasing/Decreasing | Debit/Credit |
| -------------------- | --------- | --------------------- | ------------ |
| Outstanding Payments | Liability | Decreasing            | Debit        |
| Bank Account         | Asset     | Decreasing            | Credit       |

#### Purchase Return:

Purchase Return means if a purchaser returns their purchased product to the seller in favor of refund, store credit, or any other reason based upon the seller’s obligation. Purchase returns also will occur occasionally. Like if the purchaser is not satisfied with the product, if they incorrectly purchased the product, or when the seller sends them the wrong product or even bought more items than they actually require. 
<br/><br/>
In the Purchase return, it happens after the invoice, hence reducing the stock and the paid amount wants to be refunded. So the purchase return will affect both the stock accounts and the accounts. For compensating this, suitable reverse journal entries want to be generated.
<br/><br/>
The journal entries for every purchase transaction are described in the table below.

<table style="width:90%; display:inline-table;">
                                <thead>
                                    <tr><th>Operation</th>
                                    <th>Accounts Affected</th>
                                    <th>Debit</th>
                                    <th>Credit</th>
                                </tr></thead>
                                <tbody>
                                    <tr>
                                        <td> <b>Purchase order</b> </td>
                                        <td>No Accounts Affected</td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td><b>Material Receipt</b></td>
                                        <td class="p-0">
                                            <table class="w-100">
                                                <tbody>
                                                    <tr>
                                                        <td style="border-top:1px solid #fff;border-right:1px solid #fff;border-left:1px solid #fff;">
                                                            Stock Valuation Account</td>
                                                    </tr>
                                                    <tr>
                                                        <td style="border-bottom:1px solid #fff;border-right:1px solid #fff;border-left:1px solid #fff;" "="">Stock Interim Account</td>
                        </tr>
                        </tbody>
                        </table>
                         </td>
                         <td style=" padding:0px;">
                                                            <table class="w-100">
                                                                <tbody>
                                                                    <tr>
                                                                        <td style="border-top:1px solid #fff;border-right:1px solid #fff;border-left:1px solid #fff;">
                                                                            XX</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td style="border-bottom:1px solid #fff;border-right:1px solid #fff;border-left:1px solid #fff; visibility:hidden;">
                                                                            ..</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                        <td style="padding:0px;">
                                                            <table class="w-100">
                                                                <tbody>
                                                                    <tr>
                                                                        <td style="border-top:1px solid #fff;border-right:1px solid #fff;border-left:1px solid #fff; visibility:hidden;">
                                                                            ..</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td style="border-bottom:1px solid #fff;border-right:1px solid #fff;border-left:1px solid #fff;">
                                                                            XX</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><b>Purchase Bill</b></td>
                                                        <td class="p-0">
                                                            <table class="w-100">
                                                                <tbody>
                                                                    <tr>
                                                                        <td style="border-top:1px solid #fff;border-right:1px solid #fff;border-left:1px solid #fff;">
                                                                            Expense Account</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td style="border-bottom:1px solid #fff;border-right:1px solid #fff;border-left:1px solid #fff;">
                                                                            Account Payable</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                        <td style="padding:0px;">
                                                            <table class="w-100">
                                                                <tbody>
                                                                    <tr>
                                                                        <td style="border-top:1px solid #fff;border-right:1px solid #fff;border-left:1px solid #fff;">
                                                                            XX</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td style="border-bottom:1px solid #fff;border-right:1px solid #fff;border-left:1px solid #fff; visibility:hidden;">
                                                                            ..</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                        <td style="padding:0px;">
                                                            <table class="w-100">
                                                                <tbody>
                                                                    <tr>
                                                                        <td style="border-top:1px solid #fff;border-right:1px solid #fff;border-left:1px solid #fff; visibility:hidden;">
                                                                            ..</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td style="border-bottom:1px solid #fff;border-right:1px solid #fff;border-left:1px solid #fff;">
                                                                            XX</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><b>Registering Payment</b></td>
                                                        <td class="p-0">
                                                            <table class="w-100">
                                                                <tbody>
                                                                    <tr>
                                                                        <td style="border-top:1px solid #fff;border-right:1px solid #fff;border-left:1px solid #fff;">
                                                                            Account Payable</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td style="border-bottom:1px solid #fff;border-right:1px solid #fff;border-left:1px solid #fff;">
                                                                            Outstanding Payments</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                        <td style="padding:0px;">
                                                            <table class="w-100">
                                                                <tbody>
                                                                    <tr>
                                                                        <td style="border-top:1px solid #fff;border-right:1px solid #fff;border-left:1px solid #fff;">
                                                                            XX</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td style="border-bottom:1px solid #fff;border-right:1px solid #fff;border-left:1px solid #fff; visibility:hidden;">
                                                                            ..</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                        <td style="padding:0px;">
                                                            <table class="w-100">
                                                                <tbody>
                                                                    <tr>
                                                                        <td style="border-top:1px solid #fff;border-right:1px solid #fff;border-left:1px solid #fff; visibility:hidden;">
                                                                            ..</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td style="border-bottom:1px solid #fff;border-right:1px solid #fff;border-left:1px solid #fff;">
                                                                            XX</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><b>Reconciling</b></td>
                                                        <td>Outstanding Payments</td>
                                                        <td>XX</td>
                                                        <td></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                            

| Operation | Accounts Affected | Debit | Credit |
| --------- | ----------------- | ----- | ------ |
|           | Bank Account      |       | XX     |

  

### Sales

Sales transactions are the disposition of products, services, or any other items, including tangible and intangible, or a sale, contract, or other transfers. Here we can discuss how the PerfectWORK platform helps you to manage sales transactions and their associated operations and how the journal entries are impacted. 
<br/><br/>
The sales transaction includes operations such as Sales Orders, Delivery Notes, Rejection IN, Sales Invoices, and Sales Returns. First, we can look at the Sales Order.

#### Sales Order:

A Sale Order is merely a document generated by the vendor for determining the information about the product or service requested by the customer. The Sales order includes every detail, such as product-service details along with the price, quantity, terms and conditions, and many more aspects. So the sale order is meant for only creating an order, as it never impacts stock or accounts.

#### Delivery Note:

A Delivery Note is an aspect associated with the shipment or the delivery of products. This will consist of the information about the product, quantity, and price of products included in the delivery. The Delivery Note can also be called a ‘Dispatch Note’ or ‘Goods Received Note.’ As a confirmed order is delivered to the customer from the Inventory, the stock value decreases. Delivering products to customers affects two accounts, the ‘Stock Valuation Account’ and ‘Stock Output account’.

| Accounts                | Nature  | Increasing/Decreasing | Debit/Credit |
| ----------------------- | ------- | --------------------- | ------------ |
| Stock valuation account | Asset   | Decreasing            | Credit       |
| Stock Output account    | Expense | Increasing            | Debit        |

#### Rejection IN:

A Rejection IN is a very useful aspect for keeping records of rejected and returned products by the customer. On conditions where the products are returned before invoicing, it will affect only the stock, and the accounts are not affected. Also, when the product returns to the inventory, the stock value also increases.

| Accounts                | Nature  | Increasing/Decreasing | Debit/Credit |
| ----------------------- | ------- | --------------------- | ------------ |
| Stock valuation account | Asset   | Increasing            | Debit        |
| Stock Output account    | Expense | Decreasing            | Credit       |

#### Sales Invoice:

A Sales Invoice is a kind of accounting document forwarded by a seller of goods or services to a purchaser. All the details, such as service rendered, product supplied, and even the amount that needs to be paid by the customer, the method for making payment and everything will be described. It is a legally binding agreement between the organization and buyers and is essential for larger purchases.
<br/><br/>
In this case, both the Account Receivable and Income Account will be made affected. When we analyze the nature of these accounts, the Account Receivable is marked as ‘Asset,’ and the Income Account is marked as ‘Income”. In this case, the asset is decreasing, and the income is increasing. As a result, the Account Receivable is credited, and the Income Account is debited.

| Accounts           | Nature | Increasing/Decreasing | Debit/Credit |
| ------------------ | ------ | --------------------- | ------------ |
| Income Account     | Income | Increasing            | Credit       |
| Account Receivable | Asset  | Increasing            | Debit        |

A temporary account, Outstanding Receipts, is applied to manage the unreconciled entries on payment registration. Therefore, a journal entry is created upon Account Receivable and Outstanding Receipts.

| Accounts             | Nature | Increasing/Decreasing | Debit/Credit |
| -------------------- | ------ | --------------------- | ------------ |
| Accounts Receivable  | Asset  | Decreasing            | Credit       |
| Outstanding Receipts | Asset  | Increasing            | Debit        |

Once it is reconciled with the bank statement, the amount will be transferred to the bank account. As a result, the outstanding receipts account becomes credited, and the bank is debited.

| Accounts             | Nature | Increasing/Decreasing | Debit/Credit |
| -------------------- | ------ | --------------------- | ------------ |
| Outstanding Receipts | Asset  | Decreasing            | Credit       |
| Bank account         | Asset  | Increasing            | Debit        |

#### Sales Return:

There are many occasions where customers reverse the product even after invoicing. This kind of sales return makes adjustments in both stock and accounts. Also, reverse journal entries will be generated for them. When you look at the table below, you will get an insight into the journal entries for the entire Sales transactions.

<table style="width:90%; display:inline-table;"><thead><tr><th>Operation</th><th>Accounts Affected</th><th>Debit</th><th>Credit</th></tr></thead><tbody><tr><td><b>Sales order</b></td><td>No Accounts Affected</td><td>NA</td><td>NA</td></tr><tr><td><b>Delivery Note</b></td><td class="p-0"><table class="w-100"><tbody><tr><td style="border-top:1px solid #fff;border-right:1px solid #fff;border-left:1px solid #fff;">Stock valuation account</td></tr><tr><td style="border-bottom:1px solid #fff;border-right:1px solid #fff;border-left:1px solid #fff;">Stock Output account</td></tr></tbody></table></td><td style="padding:0px;"><table class="w-100"><tbody><tr><td style="border-top:1px solid #fff;border-right:1px solid #fff;border-left:1px solid #fff; visibility: hidden;">..</td></tr><tr><td style="border-bottom:1px solid #fff;border-right:1px solid #fff;border-left:1px solid #fff;">XX</td></tr></tbody></table></td><td style="padding:0px;"><table class="w-100"><tbody><tr><td style="border-top:1px solid #fff;border-right:1px solid #fff;border-left:1px solid #fff; ">XX</td></tr><tr><td style="border-bottom:1px solid #fff;border-right:1px solid #fff;border-left:1px solid #fff;visibility: hidden;">XX</td></tr></tbody></table></td></tr><tr><td><b>Customer Invoice</b></td><td class="p-0"><table class="w-100"><tbody><tr><td style="border-top:1px solid #fff;border-right:1px solid #fff;border-left:1px solid #fff;">Income Account</td></tr><tr><td style="border-bottom:1px solid #fff;border-right:1px solid #fff;border-left:1px solid #fff;">Account Receivable</td></tr></tbody></table></td><td style="padding:0px;"><table class="w-100"><tbody><tr><td style="border-top:1px solid #fff;border-right:1px solid #fff;border-left:1px solid #fff; visibility:hidden;">..</td></tr><tr><td style="border-bottom:1px solid #fff;border-right:1px solid #fff;border-left:1px solid #fff;">XX</td></tr></tbody></table></td><td style="padding:0px;"><table class="w-100"><tbody><tr><td style="border-top:1px solid #fff;border-right:1px solid #fff;border-left:1px solid #fff;">XX</td></tr><tr><td style="border-bottom:1px solid #fff;border-right:1px solid #fff;border-left:1px solid #fff; visibility:hidden;">..</td></tr></tbody></table></td></tr><tr><td><b>Registering Payment</b></td><td class="p-0"><table class="w-100"><tbody><tr><td style="border-top:1px solid #fff;border-right:1px solid #fff;border-left:1px solid #fff;">Accounts Receivable</td></tr><tr><td style="border-bottom:1px solid #fff;border-right:1px solid #fff;border-left:1px solid #fff;">Outstanding Receipts</td></tr></tbody></table></td><td style="padding:0px;"><table class="w-100"><tbody><tr><td style="border-top:1px solid #fff;border-right:1px solid #fff;border-left:1px solid #fff; visibility:hidden;">..</td></tr><tr><td style="border-bottom:1px solid #fff;border-right:1px solid #fff;border-left:1px solid #fff;">XX</td></tr></tbody></table></td><td style="padding:0px;"><table class="w-100"><tbody><tr><td style="border-top:1px solid #fff;border-right:1px solid #fff;border-left:1px solid #fff; ">XX</td></tr><tr><td style="border-bottom:1px solid #fff;border-right:1px solid #fff;border-left:1px solid #fff;visibility:hidden;">..</td></tr></tbody></table></td></tr><tr><td><b>Reconciling</b></td><td class="p-0"><table class="w-100"><tbody><tr><td style="border-top:1px solid #fff;border-right:1px solid #fff;border-left:1px solid #fff;">Outstanding Receipts</td></tr><tr><td style="border-bottom:1px solid #fff;border-right:1px solid #fff;border-left:1px solid #fff;">Bank Account</td></tr></tbody></table></td><td style="padding:0px;"><table class="w-100"><tbody><tr><td style="border-top:1px solid #fff;border-right:1px solid #fff;border-left:1px solid #fff; visibility:hidden;">..</td></tr><tr><td style="border-bottom:1px solid #fff;border-right:1px solid #fff;border-left:1px solid #fff;">XX</td></tr></tbody></table></td><td style="padding:0px;"><table class="w-100"><tbody><tr><td style="border-top:1px solid #fff;border-right:1px solid #fff;border-left:1px solid #fff; ">XX</td></tr><tr><td style="border-bottom:1px solid #fff;border-right:1px solid #fff;border-left:1px solid #fff;visibility:hidden;">..</td></tr></tbody></table></td></tr></tbody></table>
So finally, the sum of credits will equal the sum of debit based upon the double-entry bookkeeping system.