---
title: Deferred Expenses
summary: Accounting --> Management --> Deferred Expenses
authors: Wilson Loh
date: 2023-07-01
---

## **Purpose**

This document covers how deferred expenses via custom models work in the **Accounting** application of Odoo 15.

## **Process**

To get started, navigate to the **Accounting** app.

![](https://hibou.io/web/image/75457/hibou15-accounting-app.jpg?access_token=1b8e6c00-d416-41f2-a86a-9a73c39d59c7)  

### Configuring a Deferred Expense Account  

## Important!

#### Automating Deferred Expenses?

In the sections below, we'll go over Deferred Expense Models, which provides for the automation of deferred expense journal entries. You may notice that Odoo has a 'Prepayments' account already set up, but if you plan to use the automated method, you'll need to create a separate account for each Deferred Expense Model due to the unique configuration of each.

Go to [Configuration](https://hibou.io/docs/accounting-3/deferred-expenses-1573#) > [Accounting](https://hibou.io/docs/accounting-3/deferred-expenses-1573#) > [Chart of Accounts](https://hibou.io/docs/accounting-3/deferred-expenses-1573#). Click [create](https://hibou.io/docs/accounting-3/deferred-expenses-1573#) to open a new line. Enter the Code, Account Name, and Account Type.  (Note: In the examples below we will be assigning the account type 'Prepayments', but 'Current Assets' or 'Non-current Assets' types will work just as well.)  

When you're done, click [SAVE](https://hibou.io/docs/accounting-3/deferred-expenses-1573/ver/15-0-28#).  

Once saved, click [Setup](https://hibou.io/docs/accounting-3/deferred-expenses-1573#) on the new account line.

![](https://hibou.io/web/image/75458/setup-expense-account-v15.png?access_token=8dbac1cf-0a46-49e5-a857-32ff81e4eca3)  

From within the record, click [Edit](https://hibou.io/docs/accounting-3/deferred-expenses-1573#).

There are two sections to focus on in this account: The **Type** field on the [ACCOUNTING](https://hibou.io/docs/accounting-3/deferred-expenses-1573#) tab and the **[Automation](https://hibou.io/docs/accounting-3/deferred-expenses-1573#)** tab.

**Type**: Because this is deferred expense, the account should be set to Prepayments, Current Assets, or Non-current Assets, as we mentioned in a previous step.

**Automation** (tab): This is what will automate the process for us. If you'd like to review the entries before posting them, select 'Create in draft'. If you'd like Odoo to post them directly, select 'Create and validate'.

**Deferred Expense Model**: In order to automate this process, we need to give the account a model to use. If you haven't created that model yet, no worries, we'll come back to this!  (This field is shown when either 'Create' option is chosen.  It is required if the 'Create and validate' option is chosen.)

![](https://hibou.io/web/image/75460/automation-tab-deferred-expense-v15.png?access_token=cbae1649-8a4c-42c1-a2e8-7114d521ac7d)  

When you're ready, click [Save](https://hibou.io/docs/accounting-3/deferred-expenses-1573#).

### Creating a Deferred Expense Model  

These configurations are the means by which Odoo automates deferred expenses.

To create a Deferred Expense Model, go to [CONFIGURATION](https://hibou.io/docs/accounting-3/deferred-expenses-1573#) > [MANAGEMENT](https://hibou.io/docs/accounting-3/deferred-expenses-1573#) > [DEFERRED Expense MODELS](https://hibou.io/docs/accounting-3/deferred-expenses-1573#). Once there, click [CREATE](https://hibou.io/docs/accounting-3/deferred-expenses-1573#) to bring up the following form.

**Deferred Expense Model name**: Enter a name for this configuration.

**Depreciation Method**

-   **Number of Recognitions**: Select the unit and number of units (e.g. months, years)
    
-   **Prorata Temporis**: Indicates that the first automated entry must be done from the purchase date instead of the first date of fiscal period.
    

**Accounting**

-   **Deferred Expense Account**: Select the Deferred Expense Account to which this income will be recorded. For our example, we'll select the account we just created.  
    
-   **Expense Account**: Select the Expense Account to which this expense will be recorded.
    
-   **Journa**l: Select the journal to which these transactions will be recorded.  Only journals with type set as 'Miscellaneous' can be selected.  You may create a new journal for these entries if you wish.  
    
-   **Analytic Account**: If applicable, select the Analytic Account to which these transactions will be recorded.  
    
-   **Analytic Tag**: If applicable, indicate the tag(s) to be added to transactions that use this model.
    

![](https://hibou.io/web/image/75461/expense-account-v15.png?access_token=6b07ad4a-841c-43c2-8d1c-e1eda15a6f88)

When you're ready, click [Save](https://hibou.io/docs/accounting-3/deferred-expenses-1573#).  

Now that we've created that model, let's go back to [CONFIGURATION](https://hibou.io/docs/accounting-3/deferred-expenses-1573#) \> [ACCOUNTING](https://hibou.io/docs/accounting-3/deferred-expenses-1573#) \> [CHART OF ACCOUNTS](https://hibou.io/docs/accounting-3/deferred-expenses-1573#) and click [Setup](https://hibou.io/docs/accounting-3/deferred-expenses-1573#) on the account we created in the first step.

![](https://hibou.io/web/image/75458/setup-expense-account-v15.png?access_token=8dbac1cf-0a46-49e5-a857-32ff81e4eca3)  

Under the **Deferred Expense Options** section, set the **Deferred Expense Model** to the model we just created, then click [Save](https://hibou.io/docs/accounting-3/deferred-expenses-1573#).

![](https://hibou.io/web/image/75462/save-deferred-expense-v15.png?access_token=6af9806b-519e-4fbf-877b-c0c64f577ec0)  

### Configuring a Product for Deferred Expense

Go to [Vendors](https://hibou.io/docs/accounting-3/deferred-expenses-1573#) > [Products](https://hibou.io/docs/accounting-3/deferred-expenses-1573#) and either create or select an existing product to configure, referring to the following example.

We have a product called "1 Year Insurance" where we send the vendor a one time payment for a one year insurance plan. We want to disperse the expense over the course of 12 months to properly reflect what we're sending out each month.

This product looks like any other service product, with one important distinction. We're going to [edit](https://hibou.io/docs/accounting-3/deferred-expenses-1573#) this product, then head over to the [Accounting](https://hibou.io/docs/accounting-3/deferred-expenses-1573#) tab. Under the **Payables** section, set the **Expense Account** to the one you set to be used for deferred expenses. Make sure that the **Control Policy** for this product is set to **On ordered quantities** under the **[Purchase](https://hibou.io/docs/accounting-3/deferred-expenses-1573#)** tab.

![](https://hibou.io/web/image/75466/insurance-product-expense-v15.png?access_token=299d9da2-8eef-4cf8-a27a-04f2a79a6f9b)  

When you're ready, click [Save](https://hibou.io/docs/accounting-3/deferred-expenses-1573#).

## Good to Know!

#### Multiple Deferred Expense Products?

If you have several products that should create deferred expense, consider creating a dedicated category for those products. Doing so allows you to set the category itself to deferred expense, so all products within it will inherit that setting.

![](https://hibou.io/web/image/75468/insurance-category-v15.png?access_token=ebd8d3e1-6510-41a2-ad5b-906ea16e3679)  

### Watch it Work!

Let's sell this product and watch how it works based on the configuration, above.  (We will walk through the full process from Purchase Order to Vendor Bill, but all you really need is the Vendor Bill to continue.)

Navigate to the **Purchase** app. 

![](https://hibou.io/web/image/75469/hibou15-purchase-app.jpg?access_token=6da087a2-e700-4a99-b794-3c4546ff000f)  

Once there, we'll go to [ORDERS](https://hibou.io/docs/accounting-3/deferred-revenues-expenses-1566#) > [Purchase OrdERS](https://hibou.io/docs/accounting-3/deferred-revenues-expenses-1566#) and click [CREATE](https://hibou.io/docs/accounting-3/deferred-revenues-expenses-1566#). We'll select a Vendor and add the '1 Year Insurance' product under the [ORDER LINES](https://hibou.io/docs/accounting-3/deferred-revenues-expenses-1566#) tab. We'll then [confirm](https://hibou.io/docs/accounting-3/deferred-expenses-1573#) the order.

![](https://hibou.io/web/image/75470/confirm-purchase-insurance-expense-v15.png?access_token=83f24bc5-5e4b-43c1-8ddd-4bd21de7f44a)  

On the confirmed invoice, click [Create bill](https://hibou.io/docs/accounting-3/deferred-expenses-1573#) 

![](https://hibou.io/web/image/75471/create-bill-expense-product-v15.png?access_token=537c0ed0-2d03-4221-9dba-ac852a85e911)  

...and finally, [Confirm](https://hibou.io/docs/accounting-3/deferred-expenses-1573#) the draft bill.

![](https://hibou.io/web/image/75472/confirm-purchase-draft-v15.png?access_token=784bc293-6940-4ac3-b4d1-147f62ddc7bc)  

Now, let's jump back to the **Accounting** app.

![](https://hibou.io/web/image/75473/hibou15-accounting-app.jpg?access_token=3d639651-2743-4bf3-83b5-3c5af74faa22)  

Once there, we'll go to [Accounting](https://hibou.io/docs/accounting-3/deferred-expenses-1573#) > [Management](https://hibou.io/docs/accounting-3/deferred-expenses-1573#) > [Deferred expenses](https://hibou.io/docs/accounting-3/deferred-expenses-1573#). Here we'll see our brand new entry in draft status, based on the configuration above. Let's open it up!

![](https://hibou.io/web/image/76149/deferred-expense-product-v15.png?access_token=86fbdb61-edb3-4e16-8db9-9008207f8be7)  

From within this record, we can see the configuration of the deferred expense model has been applied. To see the planned journal entries, we'll click [Compute expense](https://hibou.io/docs/accounting-3/deferred-expenses-1573#).

![](https://hibou.io/web/image/76150/compute-expense-deferred-expense-v15.png?access_token=c9e753d0-4838-463d-b681-0dcca0074b01)  

You'll now see a new [expense Board](https://hibou.io/docs/accounting-3/deferred-expenses-1573#) tab with all of those planned entries.

![](https://hibou.io/web/image/76151/expense-board-tab-v15.png?access_token=8262d09c-c049-4178-bed6-c061178aa987)  

If everything looks good, you can go ahead and click [confirm](https://hibou.io/docs/accounting-3/deferred-expenses-1573#). Odoo will now start posting journal entries according to the Expense Board. This will move the expense from [DRAFT](https://hibou.io/docs/accounting-3/deferred-expenses-1573#) to [RUNNING](https://hibou.io/docs/accounting-3/deferred-expenses-1573#) state.

![](https://hibou.io/web/image/76152/confirm-deferred-expense-button-v15.png?access_token=1d9ad5e7-1ad4-40af-a1b2-5937f64c0974)  

### Create a Manual Deferred Expense

If you're not at the point of needing to automate Deferred Expenses, that's no problem! You can easily create an entry manually.

We are about to renew our insurance plan and our vendor, has offered us a preferable deal. We have already created the purchase order and after creating and confirming our bill, let's go ahead and create a manual Deferred Expense!  

To do so, start in the **Accounting** app.

![](https://hibou.io/web/image/76153/hibou15-accounting-app.jpg?access_token=2f4e8679-96d5-4d68-8250-a114d8503e80)  

Once there, we'll go to [ACCOUNTING](https://hibou.io/docs/accounting-3/deferred-revenues-expenses-1566#) > [MANAGEMENT](https://hibou.io/docs/accounting-3/deferred-revenues-expenses-1566#) > [DEFERRED expenses](https://hibou.io/docs/accounting-3/deferred-revenues-expenses-1566#) and click [Create](https://hibou.io/docs/accounting-3/deferred-expenses-1573#) to bring up the empty form.

**Deferred Expense name:** Enter a name for this record.

**Asset Values:** Click [select the related purchases](https://hibou.io/docs/accounting-3/deferred-expenses-1573#).

![](https://hibou.io/web/image/76156/see-related-purchases-v15.png?access_token=e5f49959-d3c9-4368-ae60-10750c644cc3)  

This brings up a list of journal items. Here, locate and select the entry for the purchase, and click [Select](https://hibou.io/docs/accounting-3/deferred-expenses-1573#). In doing so, several fields on the page will populate for you.

![](https://hibou.io/web/image/76188/select-journal-item-v15.png?access_token=f4e0b451-7b39-45f0-9167-c4cc33aab752)  

-   **Original Value:** This is a calculated field that pulls directly from the record(s) you selected in the previous step.
    
-   **Acquisition Date:** The date of expense acquisition.
    

**Depreciation Method**

-   **Number of Recognitions:** Select the unit and number of units (e.g. months, years).
    
-   **Prorata Temporis:** Indicates that the first automated entry must be done from the purchase date instead of the first date of fiscal period.
    
-   **First Recognition Date:** Select the date for the first journal entry to be made.
    

**Current Values**

-   **Currency:** This will default to the invoice currency.
    
-   **Residual Amount to Recognize:** This is a calculated field that displays the amount left to defer.
    
-   **Deferred Expense Amount:** This is a calculated field that displays the amount deferred up until the current date.
    

**Accounting**

-   **Deferred Expense Account:** Select the account to recognize the deferred expense.
    
-   **Expense Account**: Select the account to recognize the revenue.
    
-   **Journal:** Select the journal to record entries for this deferred expense entry.
    
-   **Analytic Account + Analytic Tag:** If you're using analytic accounting, select the account and tag(s) for these journal entries.
    

Under the [Related expenses](https://hibou.io/docs/accounting-3/deferred-expenses-1573#) tab, you'll see the Sale Order you selected in the first step. When you're ready, click [Compute expense](https://hibou.io/docs/accounting-3/deferred-expenses-1573#).

![](https://hibou.io/web/image/76189/compute-expense-manually-created-product-v15.png?access_token=436f3fb3-9e1d-4205-8a27-b345463af58c)  

You'll now see a new [Expense BOARD](https://hibou.io/docs/accounting-3/deferred-revenues-expenses-1566#) tab with the planned entries.

![](https://hibou.io/web/image/76190/expense-board-2-v15.png?access_token=c078116a-ee62-4dd6-a764-bc296ca41ac2)

If everything looks good, you can go ahead and click [CONFIRM](https://hibou.io/docs/accounting-3/deferred-revenues-expenses-1566#). Odoo will now start posting journal entries according to the Expense Board.  

## Good to Know!

#### Create a Deferred Expense Model from a Manual Entry

If you've created a manual deferred expense entry that you think will be useful in the future, go ahead and click [Save Model](https://hibou.io/docs/accounting-3/deferred-expenses-1573#) to save this configuration for future use!

![](https://hibou.io/web/image/76191/save-model-v15.png?access_token=e585ede8-205d-4d3d-b9ef-79e88d22018e)  

At that point you can follow the instructions for [Creating a Deferred Expense Model](https://hibou.io/docs/accounting-3/deferred-expenses-1573#create_deferred_expense_model).