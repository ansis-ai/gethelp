---
title: Chart of Accounts
summary: Accounting --> Getting Started --> Configuration --> Chart of Accounts
authors: Wilson Loh
date: 2023-07-01
---


The Chart of Accounts is an essential component of financial management operations in a company. It is a list of all the financial accounts a business uses to keep track of its _income, expenses, assets, liabilities_, and _equity_. The Chart of Accounts typically includes asset accounts such as _cash, accounts receivable, inventory_, and _fixed assets_; liability accounts such as_ accounts payable_ and _loans_; and _equity_ accounts like sales and expenses accounts such as _cost of goods sold_ and _operating expenses_. 

!!! note "See More about Accounting Concepts"
    <br/>
    [Accounting Concepts](../01_accounting_concept/01_notes_accounting.md)

A Chart of accounts has a crucial role in accounting as it defines the structure of the accounts used in the financial reports. It is a key tool for tracking the financial health of a business and allows users to quickly assess their overall performances. It also helps to ensure that financial transactions are accurately and correctly reported. 
<br/><br/>
It will support the creation, edit and view of all financial accounts easily and also make it possible to customize and manage your financial statements and reports.The Chart of accounts is an important tool for financial reporting, as it helps to ensure that financial transactions are recorded in the correct accounts.
<br/><br/>
ANSIS’s Chart of accounts is a standard, double-entry bookkeeping system comprising balance sheets, income statements, and other accounts. It is customizable allowing you to create your own accounts and categories, as well as configure the system to meet your specific accounting requirements. The system will always make certain that the records of your financial operations remain excellent and able to use future requirements. The main and first thing that you initiate your accounting and financial management with the ANSIS accounting system is the configuration of the Chart of Accounts. It is just because all the future operations are determined based on it. ANSIS provides the provision to create a custom chart of accounts based upon the business needs and which will be a great support for having complete governance of the management of the financial operations.
<br/><br/>

### Configuration

It is very simple to define the chart of accounts in Odoo. you just need to select the Chart of Account menu in the Accounting section available under the Configuration tab of the ANSIS Accounting module as shown in the image below.
<br/><br/>

[![
ANSIS Community Edition Book](https://www.images.cybrosys.com/images/odoo-book-16/community/odoo-book-16-community-CRM-9.jpg)](https://www.images.cybrosys.com/images/odoo-book-16/community/odoo-book-16-community-CRM-9.jpg)
<br/><br/>

The **chart of accounts (COA)** is the list of all the accounts used to record financial transactions in the general ledger of an organization.

The accounts are usually listed in the order of appearance in the financial reports. Most of the time, they are listed as follows :

-   Balance Sheet accounts:
    
    -   Assets
        
    -   Liabilities
        
    -   Equity
        
-   Profit & Loss:
    
    -   Income
        
    -   Expense
        

When browsing your chart of accounts, you can filter the accounts by number, in the left column, and also group them by Account Type.

![Group the accounts by type in Odoo Accounting](https://www.odoo.com/documentation/15.0/_images/chart-of-accounts.png)

![Group the accounts by type in Odoo Accounting](https://www.odoo.com/documentation/15.0/_images/chart-of-accounts.png)

####  Fiscal Localization

The country you select at the creation of your database (or additional company on your database) determines which **fiscal localization package** is installed by default. This package includes a standard chart of accounts already configured according to the country’s regulations. You can use it directly or set it according to your company’s needs.

!!!Warning
    <br/>
    It is not possible to modify the **fiscal localization** of a company once a journal entry has been posted.

To create a new account, go to , click on Create, and fill out the form.

#### Code and name

Each account is identified by its **code** and **name**, which also indicates the account’s purpose.

### Type[](https://www.odoo.com/documentation/15.0/applications/finance/accounting/get_started/chart_of_accounts.html#type "Permalink to this headline")

Correctly configuring the **account type** is critical as it serves multiple purposes:

-   Information on the account’s purpose and behavior
    
-   Generate country-specific legal and financial reports
    
-   Set the rules to close a fiscal year
    
-   Generate opening entries
    

To configure an account type, open the Type field’s drop-down selector and select the right type among the following list:

| Report        | Category    | Account Types           |
| ------------- | ----------- | ----------------------- |
| Balance Sheet | Assets      | Receivables             |
|               |             | Bank and Cash           |
|               |             | Current Assets          |
|               |             | Non Current Assets      |
|               |             | Prepayments             |
|               |             | Fixed Assets            |
|               | Liabilities | Payable                 |
|               |             | Credit Card             |
|               |             | Current Liabilities     |
|               |             | Non Current Liabilities |
| Profit & Loss | Income      | Income                  |
|               |             | Other Income            |
|               | Expense     | Expense                 |
|               |             | Depreciation            |
|               |             | Cost of Revenue         |
| Other         | Other       | Off-Balance Sheet       |



#### Assets, deferred expenses, and deferred revenues automation[](https://www.odoo.com/documentation/15.0/applications/finance/accounting/get_started/chart_of_accounts.html#assets-deferred-expenses-and-deferred-revenues-automation "Permalink to this headline")

Some **account types** display a new field **to automate** the creation of [assets](https://www.odoo.com/documentation/15.0/applications/finance/accounting/vendor_bills/assets.html#assets-automation) entries, [deferred expenses](https://www.odoo.com/documentation/15.0/applications/finance/accounting/vendor_bills/deferred_expenses.html#deferred-expenses-automation) entries, and [deferred revenues](https://www.odoo.com/documentation/15.0/applications/finance/accounting/customer_invoices/deferred_revenues.html#deferred-revenues-automation) entries.

You have three choices for the Automation field:

1.  No: this is the default value. Nothing happens.
    
2.  Create in draft: whenever a transaction is posted on the account, a draft entry is created, but not validated. You must first fill out the corresponding form.
    
3.  Create and validate: you must also select a **model**. Whenever a transaction is posted on the account, an entry is created and immediately validated.
    

### Default taxes[](https://www.odoo.com/documentation/15.0/applications/finance/accounting/get_started/chart_of_accounts.html#default-taxes "Permalink to this headline")

Select a **default tax** that will be applied when this account is chosen for a product sale or purchase.

### Tags[](https://www.odoo.com/documentation/15.0/applications/finance/accounting/get_started/chart_of_accounts.html#tags "Permalink to this headline")

Some accounting reports require **tags** to be set on the relevant accounts. By default, you can choose among the tags that are used by the _Cash Flow Statement_.

### Account groups[](https://www.odoo.com/documentation/15.0/applications/finance/accounting/get_started/chart_of_accounts.html#account-groups "Permalink to this headline")

**Account groups** are useful to list multiple accounts as _sub-accounts_ of a bigger account and thus consolidate reports such as the **Trial Balance**. By default, groups are handled automatically based on the code of the group. For example, a new account `131200` is going to be part of the group `131000`.

### Create account groups manually[](https://www.odoo.com/documentation/15.0/applications/finance/accounting/get_started/chart_of_accounts.html#create-account-groups-manually "Permalink to this headline")

Note

Regular users should not need to create account groups manually. The following section is only intended for rare and advanced use cases.

To create a new account group, [developer mode](https://www.odoo.com/documentation/15.0/applications/general/developer_mode.html#developer-mode) and head to . Here, create a new group and enter the name, code prefix, and company to which that group account should be available. Note that you must enter the same code prefix in both From and to fields.

![Account groups creation.](https://www.odoo.com/documentation/15.0/_images/account-groups.png)

To display your **Trial Balance** report with your account groups, go to , then open the Options menu and select Hierarchy and Subtotals.

![Account Groups in the Trial Balance in Odoo Accounting](https://www.odoo.com/documentation/15.0/_images/trial-balance.png)

![Account groups creation.](https://www.odoo.com/documentation/15.0/_images/account-groups.png)

![Account Groups in the Trial Balance in Odoo Accounting](https://www.odoo.com/documentation/15.0/_images/trial-balance.png)

### Allow reconciliation[](https://www.odoo.com/documentation/15.0/applications/finance/accounting/get_started/chart_of_accounts.html#allow-reconciliation "Permalink to this headline")

Some accounts, such as accounts made to record the transactions of a payment method, can be used for the reconciliation of journal entries.

For example, an invoice paid with a credit card can be marked as paid if reconciled with its payment. Therefore, the account used to record credit card payments needs to be configured as **allowing reconciliation**.

To do so, check the Allow Reconciliation box in the account’s settings, and save.

### Deprecated[](https://www.odoo.com/documentation/15.0/applications/finance/accounting/get_started/chart_of_accounts.html#deprecated "Permalink to this headline")

It is not possible to delete an account once a transaction has been recorded on it. You can make them unusable by using the **Deprecated** feature.

To do so, check the Deprecated box in the account’s settings, and save.



## **Purpose**

This documentation outlines the processes associated with a Chart of Accounts in the **Accounting** application of ANSIS 15.

A Chart of Accounts is a listing of all accounts used in the general ledger of an organization. The Chart of Accounts should be tailored to reflect the actual operations of a company and an organization has the freedom to add or remove accounts, as needed, to better suit its needs.

**Process**

To get started, navigate to the **Accounting** app.

![ANSIS - Sample 1 for three columns](https://hibou.io/web/image/75721/hibou15-accounting-app.jpg?access_token=ac00e293-eaf7-4e67-a0ee-b53af31b3d75)

### Configuring the Chart of Accounts

## **Good to Know!**

#### Why Is My Chart of Accounts is Empty?

If you get to the **Chart of Accounts** page but see nothing listed, you'll need to go into [Configuration](https://hibou.io/docs/accounting-3/chart-of-accounts-82#) > [Settings](https://hibou.io/docs/accounting-3/chart-of-accounts-82#) and click Install More Packages. From there, install the default accounts for your country.

![](https://hibou.io/web/image/75726/install-fiscal-localization.png?access_token=110ba41b-5a06-4aa8-a2c3-c7566f8d5d51)  

When you're done, go back to the settings page and, under Fiscal Localization, set the **Package** to "Configurable Account Chart Template".

![](https://hibou.io/web/image/75727/add-package-fiscal-localization-v15.png?access_token=1b8417ad-ecab-45fc-bb8f-00899aa7fbf7)  

Click [Save](https://hibou.io/docs/accounting-3/chart-of-accounts-82#). You should now see accounts listed in your Chart of Accounts.

Down the left-hand side, you have the ability to view numerical ranges using the index marks. For example, clicking   [1](https://hibou.io/docs/accounting-3/chart-of-accounts-82#) will expand indexing to the next character (10, 11, 12, etc.) allowing you to filter directly to the range you need.

![ANSIS CMS - a big picture](https://hibou.io/web/image/75729/chart-or-accounts-v15.png?access_token=fe22d623-c4da-4ba2-858f-930fa23b511d)  

To simplify this view, click   [Group By](https://hibou.io/docs/accounting-3/chart-of-accounts-82#)  > **[Account Type](https://hibou.io/docs/accounting-3/chart-of-accounts-82#)**. This helps to narrow down to the specific accounts you're looking for.  

![ANSIS text and image block](https://hibou.io/web/image/75731/group-by-account-type-v15.png?access_token=b65ffa51-5004-4c11-b5b7-a467d08ec9f8)

### Working with Default Accounts

To give an idea of where you'll see these accounts used throughout ANSIS, click [configuration](https://hibou.io/docs/accounting-3/chart-of-accounts-82#) > [Management](https://hibou.io/docs/accounting-3/chart-of-accounts-82#) > [Product categories](https://hibou.io/docs/accounting-3/chart-of-accounts-82#) and select a category from the list.

![](https://hibou.io/web/image/75733/product-catagories-v15.png?access_token=ad83ac9d-e441-42fa-9fcd-fe1accbc92b5)  

At the bottom of this page, you'll see the **Account Properties**. The accounts listed in these fields are created and configured in the **Chart of Accounts,** and this category happens to use ANSIS's default settings from the configuration.

![](https://hibou.io/web/image/75734/expenses-account-properties-v15.png?access_token=b59a4941-7f38-4f3f-910d-f63328b3dc47)  

You can see the accounts under **Account Properties**, for example, are set to use generalized accounts: **Product Sales** & **Expenses**. These accounts have very basic settings that allow you to use ANSIS relatively quickly without having to go into every product category and select all of your custom accounts.

Because ANSIS has so many pre-configured accounts, it's best practice to determine the existing default account, then edit the account's number and/or name accordingly. 

For example, ANSIS's default **Product Sales** account is already mapped to all product categories and expense accounts within ANSIS. By deprecating (disabling) this account and creating a new account, you'll then need to update all related categories and accounts affected by the change. To avoid this extra work, you only need to map your existing accounts to ANSIS's default accounts.

In our example, we'll map the **400000 Product Sales** account from ANSIS with our own corresponding account, **400002 Retail Sales**.  

To get started, we'll click [Configuration](https://hibou.io/docs/accounting-3/chart-of-accounts-82#) > [Accounting](https://hibou.io/docs/accounting-3/chart-of-accounts-82#) >  [Chart of Accounts](https://hibou.io/docs/accounting-3/chart-of-accounts-82#), then click [SETUP](https://hibou.io/docs/accounting-3/chart-of-accounts-82#) to the right of  **Product Sales**.

![](https://hibou.io/web/image/75735/product-sales-mapping-v15.png?access_token=14502dea-9f20-4cb4-a7b6-826d6cdb9c71)  

Once there, click [EDIT](https://hibou.io/docs/accounting-3/chart-of-accounts-82/ver/13-0-7#) and change the settings to match your business's settings.

![](https://hibou.io/web/image/75736/change-account-info-v15.png?access_token=65f8a6b2-3ded-442d-9187-e0288834e4d5)  

When done, click [Save](https://hibou.io/docs/accounting-3/chart-of-accounts-82#).

Now, when we go look at the same product category we opened above, we'll see the changes we've made. We accomplished this by simply editing a default account, and now there's no need to re-configure each category manually. This is a huge time saver!

![](https://hibou.io/web/image/75738/updated-account-on-catagory-v15.png?access_token=04ec9e45-cf25-4c83-8aa6-68a01bf2c5dc)  

### Deleting an Account

## Important!

#### Delete vs. Deprecate

In a production environment with existing data, you **should not delete** an account. Instead, [Edit](https://hibou.io/docs/accounting-3/chart-of-accounts-82#) the account and,  select the **Deprecated** checkbox, then click [Save](https://hibou.io/docs/accounting-3/chart-of-accounts-82#).

Deprecated accounts will still show up in your list view of accounts unless you filter them out, but they can no longer be selected throughout ANSIS.

![](https://hibou.io/web/image/75739/deprecated-option-v15.png?access_token=0e1c383f-ace5-4e77-af93-364088d129c4)  

If you still wish to delete an account after reading the warning above, simply click the checkbox to the left of the account's code, in list view, then click    [Action](https://hibou.io/docs/accounting-3/chart-of-accounts-82#)   > [Delete](https://hibou.io/docs/accounting-3/chart-of-accounts-82#).

![ANSIS CMS - a big picture](https://hibou.io/web/image/75759/delete-account-in-chart-of-accounts-v15.png?access_token=0e8fae6d-c3b4-4ad1-88f2-ab7ab52d19d5)

You will see this message asking you to confirm your intention to delete.  You can click [OK](https://hibou.io/docs/accounting-3/chart-of-accounts-82#) to continue.

![](https://hibou.io/web/image/74116/confirm.jpg?access_token=8da0c708-d3c4-41bf-9b32-ca4a6b56922d)

If an account has recorded journal items, you'll see the following message.

![](https://hibou.io/web/image/74121/user.jpg?access_token=3d6f93d6-3da9-4d89-a72a-dc9a4c33a494)  

If an account is set as a default in the system, you'll see the following message.

![](https://hibou.io/web/image/74119/user%20error.jpg?access_token=fe156aa0-d483-43e6-a150-4ba332f07ffa)

You'll need to deprecate the account instead, which we covered in the **Important** section, above.

### Creating a New Account

From the list view of accounts, click [Create](https://hibou.io/docs/accounting-3/chart-of-accounts-82#). This opens a new line for you to add basic information:

-   **Code:** A unique number that helps in the identification of the account type and may also be coded with further information.  This is an alphanumeric fields that can also accommodate hyphens, decimals, and spaces.
    
-   **Account Name:** The name of the account.
    
-   **Type:** The type of account, which is detailed below in the 'Choosing an Account Type' section.
    
-   **Allow Reconciliation:** Check this box if this account allows invoices and payments matching of journal items. When enabled, it will display the  [RECONCILE](https://hibou.io/docs/accounting-3/chart-of-accounts-82/ver/14-0-21#) button.
    

When these fields are complete, click [Save](https://hibou.io/docs/accounting-3/chart-of-accounts-82#).

![](https://hibou.io/web/image/75760/save-new-account-v15.png?access_token=5f817569-f906-4b32-8ea7-218c0232340b)  

Once saved, click [SETUP](https://hibou.io/docs/accounting-3/chart-of-accounts-82#) to the far right of the new entry to open it in form view.

![](https://hibou.io/web/image/75761/setup-new-account.png?access_token=45083226-7c55-4b63-8065-56a136ff58f6)  

From within the account, click [EDIT](https://hibou.io/docs/accounting-3/chart-of-accounts-82/ver/14-0-21#) to add any additional information.

-   **Type:** This required field is used to define the financial reports on which the account will be included, and where the accounts will appear on those reports.  Also, the fields listed in this window will change based on the type selected. 
    
-   **Default Taxes:** If default taxes should apply to this account, select them here.  This will auto-populate based on your app configuration.
    
-   **Tags:** Optional keywords that assist in custom reporting.
    
-   **Allowed Journals:** Define which journal(s) this account can be used for. Leave it empty for all journals.
    
-   **Account Currency:** If your system is set for multiple currencies, select what is appropriate for this account here.
    
-   **Allow Reconciliation:** Checking the box here sets the account's entries as available to be reconciled (or matched) to other entries.  This is used in reconciling bank statements, matching vendor payments to vendor bills, cash receipts to customer invoices, etc.
    
-   **Deprecated**: Use this as an alternative to deletion to indicate the account is no longer in use.
    
-   **Group:** If your system has been set up to use **Account Groups**, then this field will indicate into which account group this account falls as set by its account number. **Account Groups** assist in the organization and filtering your accounts, and will also create subsections on your financial reports.  
    
-   **Company:** If you have multiple companies set up, set the company to which this account belongs.  
    

![ANSIS CMS - a big picture](https://hibou.io/web/image/75762/new-account-template-v15.png?access_token=64b8bdbb-24cc-408f-97b8-6a77c0ec86a0)  

When finished, click [SAVE](https://hibou.io/docs/accounting-3/chart-of-accounts-82/ver/14-0-21#).

## Choosing an Account Type

## Choosing the correct **Account Type** is extremely important as they affect your overall reporting.  

<table><tbody><tr><td colspan="2"><strong><span>Assets</span></strong><span>&nbsp;</span></td></tr><tr><td><strong><span>Receivable</span></strong></td><td><span>Record funds owed to you (Example: For products or services delivered)</span></td></tr><tr><td><strong><span>Bank and Cash</span></strong></td><td><span>Record bank and cash transfer transactions</span></td></tr><tr><td><strong><span>Current Assets</span></strong></td><td><span>All assets that can be reasonably expected to be converted into cash within one year</span></td></tr><tr><td><strong><span>Non-current Assets</span></strong></td><td><span>Long-term investments where the full value will not be realized within the accounting year</span></td></tr><tr><td><strong><span>Prepayments</span></strong></td><td><span>An asset account that stores partial payments from customers that still owe money</span></td></tr><tr><td><strong><span>Fixed Assets</span></strong></td><td><span>Record assets and property that cannot be easily converted into cash (These will not be used up, consumed, or sold within the current accounting year)</span></td></tr><tr><td colspan="2"><strong><span>Liabilities</span></strong></td></tr><tr><td><strong><span>Payable</span></strong></td><td><span>Record funds you owe (Example: Bills from suppliers)</span></td></tr><tr><td><strong><span>Credit Card</span></strong></td><td><span>A bank account that is considered to be a liability</span></td></tr><tr><td><strong><span>Current Liabilities</span></strong></td><td><span>Financial obligations that are payable within one year</span></td></tr><tr><td><strong><span>Non-current Liabilities</span></strong></td><td><span>Financial obligations that will not become due within the accounting year</span></td></tr><tr><td colspan="2"><strong><span>Equity</span></strong></td></tr><tr><td><strong><span>Equity</span></strong></td><td><span>Record capital gains and losses (To measure the net worth of your business)</span></td></tr><tr><td><strong><span>Current Year Earnings</span></strong></td><td><span>Record net income or loss for your company within the current year (The difference between all revenues and expenses on an income statement)</span></td></tr><tr><td colspan="2"><strong><span>Profit &amp; Loss Income</span></strong></td></tr><tr><td><strong><span>Income</span></strong></td><td><span>Record income that comes from your company's main business (Example: Sales Revenue)</span></td></tr><tr><td><strong><span>Other Income</span></strong></td><td><span>Record income that does not come from your company's main business (Example: Interest)</span></td></tr><tr><td colspan="2"><strong><span>Profit &amp; Loss Expense</span></strong></td></tr><tr><td><strong><span>Expense</span></strong></td><td><span>Record outflow of funds to pay for goods and services your business uses</span></td></tr><tr><td><strong><span>Depreciation</span></strong></td><td><span>An expense that comes from a Fixed Asset account</span></td></tr><tr><td><strong><span>Cost of Revenue</span></strong></td><td><span>Record total cost incurred to obtain a sale and the cost of the goods or services sold, often referred to as 'Direct Costs'</span><br><span>(Example: The cost of materials, equipment, or labor used in production)</span></td></tr><tr><td colspan="2"><strong><span>Other</span></strong></td></tr><tr><td><strong><span>Off-Balance Sheet</span></strong></td><td><span>&nbsp;Useful for annual reporting annexes</span></td></tr></tbody></table>

### View Journal Items for Each Account

Navigate back to [CONFIGURATION](https://hibou.io/docs/accounting-3/chart-of-accounts-82/ver/13-0-7#) > [Accounting](https://hibou.io/docs/accounting-3/chart-of-accounts-82#) > [CHART OF ACCOUNTS](https://hibou.io/docs/accounting-3/chart-of-accounts-82/ver/13-0-7#) and click [SETUP](https://hibou.io/docs/accounting-3/chart-of-accounts-82#) next to an entry from the list. 

![](https://hibou.io/web/image/75763/setup-to-view-journal-items-v15.png?access_token=a854dd3d-c1de-4351-bdc1-847aebd794ca)

From within the Account record, you have the option to view Unreconciled Entries and Journal Items by clicking the  **Balance** smart button.  Note that the current balance of this account is displayed on the smart button as well.

![ANSIS CMS - a big picture](https://hibou.io/web/image/75764/view-journal-items-v15.png?access_token=086d19ba-9eec-4aae-8824-ce02be94cdd4)

Once there you can use the  [Filters](https://hibou.io/docs/accounting-3/chart-of-accounts-82#) to narrow down your view. This helps when you want to see common results, such as Posted, UnPosted, Unreconciled items, etc.

## **Good to Know!**

#### Stock Interim Accounts

ANSIS has two preconfigured accounts that you may not recognize.

-   **Stock Interim (Received):** This account is to record goods received that are not yet billed.
    
-   **Stock Interim (Delivered):** This account is to record goods delivered that are not yet invoiced.
    

Because ANSIS uses double-entry accounting, these act as temporary accounts to track stock in either of these scenarios.