---
title: Deferred Revenues
summary: Accounting --> Management --> Deferred Revenues
authors: Wilson Loh
date: 2023-07-01
---

## **Purpose**

This document covers how to manage deferred revenues (payments received before being earned) via custom models in the **Accounting** application of Odoo 15.

## **Process**

To get started, navigate to the **Accounting** app.

![](https://hibou.io/web/image/75298/hibou15-accounting-app.jpg?access_token=8e7db041-c128-440b-a840-2b2928d75d1f)  

### Configuring a Deferred Revenue Account  

## Important!

#### Automating Deferred Revenues?

In the sections below, we'll go over Deferred Revenue Models, which provides for the automation of deferred revenue journal entries. If you plan to use the automated method, you'll need to create a separate account for each Deferred Revenue Model due to the unique configuration of each.

Go to [Configuration](https://hibou.io/docs/accounting-3/deferred-revenues-1566#) > [Accounting](https://hibou.io/docs/accounting-3/deferred-revenues-1566#) > [Chart of Accounts](https://hibou.io/docs/accounting-3/deferred-revenues-1566#). Click [create](https://hibou.io/docs/accounting-3/deferred-revenues-1566#) to open a new line. Enter the Code, Account Name, and Account Type (Current Liabilities). When you're done, click [save](https://hibou.io/docs/accounting-3/deferred-revenues-1566#).

![](https://hibou.io/web/image/75299/chart-of-accounts-v15.png?access_token=19ae4c52-3d15-4c82-9436-ad72c8ae8414)  

Once saved, click [Setup](https://hibou.io/docs/accounting-3/deferred-revenues-1566#) on the new account line.

From within the record, click [Edit](https://hibou.io/docs/accounting-3/deferred-revenues-1566#), or click on one of the fields in the record to set the record into 'edit' mode.

There are two sections to focus on in this account: **Type** and the **Automation** (tab).

On the [Accounting](https://hibou.io/docs/accounting-3/deferred-revenues-1566#) tab you will see:

**Type**: Because this is deferred revenue, the account should be set to **Current Liabilities** on the previous step.

**Default Taxes:** Set the default tax account.

**Tags**: Assign optional tags for custom reporting.

**Allowed Journals:** Journals in which this account can be used. If left blank, it can be used in all journals.

**Allow Reconciliation**: Check this box to allow invoices and payment matching of journal items.

**Deprecated**: Check this box if the account is no longer used.

**Group**: List any groups that are allowed to view this account. If field is left empty, all users can view it.

**Company**: This will auto-populate with the name of the company you are in.

![](https://hibou.io/web/image/75300/accounting-tab-deferred-expense-v15.png?access_token=2476f965-b362-47bb-8b3e-69f49e3d3d2a)  

**On the [Automation](https://hibou.io/docs/accounting-3/deferred-revenues-1566#) tab:**

**Automate Deferred Revenue:** This is what will automate the process for us. If you'd like to review the entries before posting them, select 'Create in draft'. If you'd like Odoo to post them directly, select 'Create and validate'.

**Deferred Revenue Model:** In order to automate this process, we need to give the account a model to use. If you haven't created that model yet, no worries, we'll come back to this!  (This field is shown when either 'Create' option is chosen.  It is required if the 'Create and validate' option is chosen.)

![](https://hibou.io/web/image/75301/automation-tab-deferred-expense-v15.png?access_token=d134bd12-4511-490a-936e-849fffadb058)  

When you're ready, click [Save](https://hibou.io/docs/accounting-3/deferred-revenues-1566#).

## Good to know!   
You can create a new Deferred Revenue Model from this screen by beginning to type the name of what you would like to call the model and click Create or Create and Edit.  
![](https://hibou.io/web/image/75306/create-model-from-account-v15.png?access_token=e240b921-1b81-4faa-9702-540f2bc05805)  

### Creating a Deferred Revenue Model  

These configurations are the means by which Odoo automates deferred revenues.

**Depreciation Method**

-   **Number of Recognitions:** Select the number of units and it's form of measure (e.g. months, years)
    
-   **Prorata Temporis:** Indicates that the first automated entry must be done from the purchase date instead of the first date of fiscal period.
    

**Accounting**

-   **Revenue Account:** Select the Revenue Account to which this income will be recorded.
    
-   **Deferred Revenue Account:** Select the Deferred Revenue Account to which this income will be recorded. For our example, we'll select the account we just created.  
    
-   **Journal:** Select the journal to which these transactions will be recorded.  Only journals with type set as 'Miscellaneous' can be selected.  You may create a new journal for these entries if you wish.  
    
-   **Analytic Account:** If applicable, select the Analytic Account to which these transactions will be recorded.  
    
-   **Analytic Tag:** If applicable, indicate the tag(s) to be added to transactions that use this model.  
    

![](https://hibou.io/web/image/75302/deferred-revenue-model-v15.png?access_token=10be4c1e-131c-40b4-8701-e5ea7e3617a4)  

![](https://hibou.io/web/image/75303/select-account-deferred-revenue-v15.png?access_token=3c0de2ae-cd00-4518-b8b7-e9a182bbfedb)  

In the [Automation](https://hibou.io/docs/accounting-3/deferred-revenues-1566#) tab, set the **Deferred Revenue Model** to the model we just created, then click [Save](https://hibou.io/docs/accounting-3/deferred-revenues-1566#).

![](https://hibou.io/web/image/75304/add-subscription-model-v15.png?access_token=e10c594e-6960-40af-853b-d0618174652d)  

### Configuring a Product for Deferred Revenue

Next, go to [Customers](https://hibou.io/docs/accounting-3/deferred-revenues-1566#) > [Products](https://hibou.io/docs/accounting-3/deferred-revenues-1566#) and either create or select a product to configure using the following example as a guideline.

We have a product called "1 Year Adventure Box" where we send the buyer one box every month for one year. We want to disperse the revenue over the course of 12 months to properly reflect what we're sending out each month.

Click on the [Accounting](https://hibou.io/docs/accounting-3/deferred-revenues-1566#) tab. Under the **Receivables** section, set the **Income Account** to the one you set to be deferred revenue.

![](https://hibou.io/web/image/75307/create-subscription-product-v15.png?access_token=01f1f5f6-fbe8-40f0-9a4a-1595fd88384a)  

When you're ready, click [Save](https://hibou.io/docs/accounting-3/deferred-revenues-1566#).

## Good to Know!

#### Multiple Deferred Revenue Products?

If you have several products that should create deferred revenue, consider creating a dedicated category for those products. Doing so allows you to set the category itself to deferred revenue, so all products within it will inherit that setting.

![](https://hibou.io/web/image/75309/subscription-catagory-v15.png?access_token=985a8a75-c6df-48f9-ae5e-2777291e78b6)  

### Watch it Work!

Let's sell this product and watch how it works based on the configuration, above.  (We will walk through the full process from Sales Order to Customer Invoice, but all you really need is the Customer Invoice to continue.)

Navigate to the **Sales** app. 

![](https://hibou.io/web/image/75310/hibou15-sales-app.jpg?access_token=2e23662b-bdc7-42c3-85d7-5a2acae718bd)  

Once there, we'll go to [ORDERS](https://hibou.io/docs/accounting-3/deferred-revenues-expenses-1566#) > [ORDERS](https://hibou.io/docs/accounting-3/deferred-revenues-expenses-1566#) and click [CREATE](https://hibou.io/docs/accounting-3/deferred-revenues-expenses-1566#). We'll select a customer and add the '1 Year Adventure Box' product under the [ORDER LINES](https://hibou.io/docs/accounting-3/deferred-revenues-expenses-1566#) tab. We'll then [confirm](https://hibou.io/docs/accounting-3/deferred-revenues-1566#) the order.

![](https://hibou.io/web/image/75311/confirm-sale-order-v15.png?access_token=b7c4c643-27d2-47fa-a9f5-d65d5cb2bf53)  

On the confirmed invoice, click [Create Invoice](https://hibou.io/docs/accounting-3/deferred-revenues-1566#),

![](https://hibou.io/web/image/75312/create-deferred-expense-sale-order-v15.png?access_token=73b5af2b-1aaa-430d-a5ee-0766e87540a0)  

...then [CREATE AND VIEW INVOICE](https://hibou.io/docs/accounting-3/deferred-revenues-1566/ver/15-0-28#).  

![](https://hibou.io/web/image/75313/create-and-view-invoice-v15.png?access_token=d6c206b9-9f6e-4109-abd8-ea11068a74d7)  

[Confirm](https://hibou.io/docs/accounting-3/deferred-revenues-1566#) the invoice.

![](https://hibou.io/web/image/75314/confirm-draft-invoice-v15.png?access_token=5647132e-d34c-473a-aef5-4681aadca985)  

Now, let's jump back to the **Accounting** app.

![](https://hibou.io/web/image/75315/Hibou-Accounting-15-Icon.png?access_token=d0ac7441-6658-4348-a0f3-f9733de07a70)  

Once there, we'll go to [Accounting](https://hibou.io/docs/accounting-3/deferred-revenues-1566#) > [Management](https://hibou.io/docs/accounting-3/deferred-revenues-1566#) > [Deferred Revenues](https://hibou.io/docs/accounting-3/deferred-revenues-1566#). Here we'll see our brand new entry in draft status. Click on it to open.

![](https://hibou.io/web/image/75317/management-deferred-revenues-v15.png?access_token=cac47470-a1db-46b4-8d75-cd453f3cf19d)  

From within this record, we can see the configuration of the deferred revenue model has been applied. To see the planned journal entries, we'll click [Compute Revenue](https://hibou.io/docs/accounting-3/deferred-revenues-1566#).

![](https://hibou.io/web/image/75318/compute-revenue-v15.png?access_token=60653320-4e59-4b06-b4fb-11f49a012587)  

You'll now see a new [Revenue Board](https://hibou.io/docs/accounting-3/deferred-revenues-1566#) tab with all of those planned entries.

![](https://hibou.io/web/image/75319/revenue-board-v15.png?access_token=68b4c05d-d5ff-4195-aff1-3ee347d294ba)  

If everything looks good, you can go ahead and click [confirm](https://hibou.io/docs/accounting-3/deferred-revenues-1566#). Odoo will now start posting journal entries according to the Revenue Board for the specific date on each line.

![](https://hibou.io/web/image/75320/confirm-deferred0revenue-adventure-box-v15.png?access_token=f48ba0e3-e74a-4f86-9e50-0ce6c47b871e)  

### Create a Manual Deferred Revenue

If you're not at the point of needing to automate Deferred Revenues, you can easily create an entry manually.

To do so, start in the **Accounting** app.

![](https://hibou.io/web/image/75315/Hibou-Accounting-15-Icon.png?access_token=d0ac7441-6658-4348-a0f3-f9733de07a70)  

Once there, we'll go to [ACCOUNTING](https://hibou.io/docs/accounting-3/deferred-revenues-expenses-1566#) > [MANAGEMENT](https://hibou.io/docs/accounting-3/deferred-revenues-expenses-1566#) > [DEFERRED REVENUES](https://hibou.io/docs/accounting-3/deferred-revenues-expenses-1566#) and click [Create](https://hibou.io/docs/accounting-3/deferred-revenues-1566#) to bring up the empty form.

**Deferred Revenue name:** Enter a name for this record.

**Asset Values:** Click [select the related purchases](https://hibou.io/docs/accounting-3/deferred-revenues-1566#).

![](https://hibou.io/web/image/75321/select-related-purchases-v15.png?access_token=3fdf8a5f-bb24-4236-a818-69325ec0cd28)  

This brings up a list of journal items. Here, locate and select the entry for the sale (use filters to help find the entry you are looking for), and click [Select](https://hibou.io/docs/accounting-3/deferred-revenues-1566#). In doing so, several fields on the page will populate for you.

![](https://hibou.io/web/image/75322/journal-items-v15.png?access_token=2039751d-2de4-40e3-b4b2-4fab8c611268)  

-   **Original Value:** This is a calculated field that pulls directly from the record(s) you selected in the previous step.
    
-   **Acquisition Date:** The date of revenue acquisition.
    

**Depreciation Method**

-   **Number of Recognitions:** Select the number of units and measure of units (e.g. months, years).
    
-   **Prorata Temporis:** Indicates that the first automated entry must be done from the purchase date instead of the first date of fiscal period.
    
-   **First Recognition Date:** Select the date for the first journal entry to be made.
    

**Current Values**

-   **Residual Amount to Recognize:** This is a calculated field that displays the amount left to defer.
    
-   **Deferred Revenue Amount:** This is a calculated field that displays the amount deferred up until the current date.
    

**Accounting**

-   **Revenue Account:** Select the account to recognize the revenue.
    
-   **Deferred Revenue Account:** Select the account to recognize the deferred revenue.
    
-   **Journal:** Select the journal to record enteries for this deferred revenue entry.
    
-   **Analytic Account + Analytic Tag:** If you're using analytic accounting, selec the account and tag(s) for these journal entries.
    

Under the [Related Sales](https://hibou.io/docs/accounting-3/deferred-revenues-1566#) tab, you'll see the Sale Order you selected in the first step. When you're ready, click [Compute Revenue](https://hibou.io/docs/accounting-3/deferred-revenues-1566#).

![](https://hibou.io/web/image/75323/compute-revenue-on-floral-sub-v15.png?access_token=f9aaff5a-8519-4724-a406-eb190f43b476)  

You'll now see a new [REVENUE BOARD](https://hibou.io/docs/accounting-3/deferred-revenues-expenses-1566#) tab with all of those planned entries.

![](https://hibou.io/web/image/75324/manual-revenue-board-v15.png?access_token=9be7e72b-8952-49b4-bb78-db1bc4cada43)

If everything looks good, you can go ahead and click [CONFIRM](https://hibou.io/docs/accounting-3/deferred-revenues-expenses-1566#). Odoo will now start posting journal entries according to the Revenue Board.  

## Good to Know!

#### Create a Deferred Revenue Model from a Manual Entry

If you've created a manual deferred revenue entry that you think will be useful in the future, go ahead and click [Save Model](https://hibou.io/docs/accounting-3/deferred-revenues-1566#) to save this configuration for future use!

![](https://hibou.io/web/image/75325/save-model-v15.png?access_token=80438154-db64-44d5-9342-74c8a0ff11ea)  

At that point you can follow the instructions for Creating a Deferred Revenue Model.