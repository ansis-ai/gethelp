---
title: Depreciation & Depreciation Schedules
summary: Accounting --> Management --> Assets Management --> Depreciation & Depreciation Schedules
date: 2023-07-01
---

## **Purpose**

This documentation outlines the use case and processes associated with Fixed Assets in the **Accounting** application of Odoo 15.

Fixed Assets are items that a company purchases for long-term use (more than one year) and are not likely to be quickly liquidated into cash. Fixed Assets can include:

-   Computer/Office Equipment
    
-   Vehicles
    
-   Production Equipment/Machinery
    
-   Furniture
    

Fixed Assets then undergo depreciation, at a determined schedule, to reflect within financial reporting the decreasing value of the asset.

Items that are held in inventory are not typically fixed assets, as they are purchased with the intent of resale to earn revenue.

## Example

If your company purchases a computer for employee use, this is a Fixed Asset because it was paid for by the company and will be utilized over a relatively long period of time with no plans for reselling.

## **Process**

To get started, navigate to the **Accounting** app.

![Odoo text and image block](https://hibou.io/web/image/75600/hibou15-accounting-app.jpg?access_token=66ba823c-04e1-449d-920a-9ff33569a2a3)

### Creating Asset Models

Once there, click [Configuration](https://hibou.io/docs/accounting-3/assets-42#) > [management](https://hibou.io/docs/accounting-3/assets-42#) > [Asset models](https://hibou.io/docs/accounting-3/assets-42#).

You will see a list view of all existing Asset Models. Click the [Create](https://hibou.io/docs/accounting-3/assets-42#) button to create a new Asset Model.

In the form that displays, configure the fields according to your needs and the guidelines below.

**Asset Model Name:** Give the asset model a name to represent the type of asset being depreciated (e.g. Computer, Delivery Truck).

**Depreciation Method**

-   **Method:**
    
    -   **Straight Line:** This is the most common method and the easiest to calculate. With this method, the initial residual value is divided equally by number of planned entries.
        
    -   **Declining:** This method multiplies the last residual value by a chosen declining factor. 
        
    -   **Declining then Straight Line:** This method is a combination of Straight Line and Declining. It follows the Declining method until the Straight Line method gives a higher amount, then it switches to Straight Line values. This allows you to claim higher amounts earlier in the life of the asset.
        
    -   **Declining Factor**: (Does not apply to Straight Line depreciation) Specify a factor to calculate the reduction for each planned entry.
        
-   **Duration:** This figure is set by the IRS, so you'll need to refer to their documentation and enter the correct duration.
    
-   **Prorata Temporis:** When selected, the value of the first depreciation entry will be made based on when the asset is purchased.
    

**Accounting**

-   **Fixed Asset Account:** The account used to record the purchase of the asset at its original price.
    
-   **Depreciation Account:** The account used in the depreciation entries, to decrease the asset values.
    
-   **Expense Account:** The account used in the periodical entries, to record a part of the asset expense.
    
-   **Journal:** The Journal that will record the asset entries, you may only select from journals with the type set as 'Miscellaneous' journal.  You may create a separate journal for these entries if you wish.  
    
-   **Analytic Account:** An optional field, applying an Analytic Account provides additional reporting. 
    
-   **Analytic Tag**: Relevant keywords used for reporting and organization.
    

![](https://hibou.io/web/image/75601/asset-model-v15.png?access_token=46f559ae-b2fb-4925-9b8d-500de4b7ab21)  

## Good to Know!

If you would like to set up an expense account specifically for depreciation, it's fast and easy! When editing the Asset Model, enter the name of the new account in the Expense Account field, choose the "Create and Edit" option that appears below, then fill in the appropriate fields.

-   **Code:** Expense accounts in Odoo are typically in the 220000 sequences by default (though your system may be different), so start the code with 2200 and then add an incremented value to avoid a code collision.
    
-   **Account Name:** Name it something descriptive.  In this case, 'Depreciation Expense Account'.
    
-   **Type:** Depreciation
    
-   **Tags:** Operating Activities
    

Click [Save](https://hibou.io/docs/accounting-3/assets-42#) and you'll be brought back to editing your Asset Type.

![](https://hibou.io/web/image/75602/create-depreciation-account-v15.png?access_token=035d7793-7e49-460b-86b4-647c9923913f)  

## Example

Based on this Asset Type configuration, we can expect the following to happen each time we purchase this Asset Type:

-   An asset for the item will be created and automatically confirmed. The value of the item will be made in the Asset Account.
    
-   A debit entry in the Depreciation Expense Account will be made every year, starting on the day the purchase is made, for five years.
    
-   Each entry will be for the same amount (with small variations, to account for numbers that are not evenly divisible by the number of entries).
    

![](https://hibou.io/web/image/75603/tesla-truck-asset-v15.png?access_token=f81ae8be-6978-48d4-98bf-c1e1a3663f63)  

### Creating an Asset

Go to [Vendors](https://hibou.io/docs/accounting-3/assets-42#) > [Bills](https://hibou.io/docs/accounting-3/assets-42#). Here you will see a list view of all Vendor Bills. Click the [CREATE](https://hibou.io/docs/odoo-11-accounting-3/fixed-assets-42#) button to create a new vendor bill for the asset that was purchased.

As with all Vendor Bills, select or create the vendor from which you're purchasing the asset, then click the [Add a Line](https://hibou.io/docs/accounting-3/assets-42#) link under the [Invoice Lines](https://hibou.io/docs/accounting-3/assets-42#) tab.

If you want the fixed assets to be created manually, because each one will be very unique or is infrequent, you can do so. Simply skip choosing a product; enter a **Label** and choose the appropriate **Account** based on your Asset Model configuration.

Don't forget to give the line item a **Price**, which will be what you paid when purchasing the item.

When you're ready, click [CONFIRM](https://hibou.io/docs/accounting-3/fixed-assets-42/ver/13-0-7#).  

![](https://hibou.io/web/image/75605/confirm-vendor-bill-for-expense-v15.png?access_token=34df35d5-c09a-4a23-b87b-218f999c731c)  

## Good to Know!

#### Creating an Asset Product

We often recommend creating products for assets, which serve as templates through which you can quickly create assets with little variation. To get started, click [Vendors](https://hibou.io/docs/accounting-3/assets-42#) > [Products](https://hibou.io/docs/accounting-3/assets-42#) and then [CREATE](https://hibou.io/docs/accounting-3/assets-42#).

**Product Name:** Give the product a name that conveys what the item is.

![](https://hibou.io/web/image/75606/product-name-v15.png?access_token=1b1f9c4e-2881-4352-b403-82b1002420e1)  

Under the [General Information](https://hibou.io/docs/accounting-3/assets-42#) tab:

-   Set the **Product Type** to **Consumable**.
    
-   Assign an appropriate category, such as 'Fixed Assets'. Note that this can be a very simple category that uses its parent (All) defaults, as this is for reporting and grouping/filtering purposes only.
    

![](https://hibou.io/web/image/75607/expense-good-to-know-v15.png?access_token=f720725b-9ed6-4e4c-8814-e614ddc2867f)  

Under the [Accounting](https://hibou.io/docs/accounting-3/assets-42#) tab:

In the **Payables** section, set the **Expense Account** to your Fixed Asset account.

![](https://hibou.io/web/image/75608/accounting-tab-fixed-asset-account-v15.png?access_token=4913f58d-1c72-4d08-b4a5-4035e4d56d9c)  

When ready, click [Save](https://hibou.io/docs/accounting-3/assets-42#).

### Managing Assets

## Good to Know!

#### Options for Automating Assets

Once you have opened up your **Fixed Asset** account, click [Edit](https://hibou.io/docs/accounting-3/assets-42#). In the [Automation](https://hibou.io/docs/accounting-3/assets-42#) tab's **Automate Asset** section, you'll see three options:

![](https://hibou.io/web/image/75610/automation-tab-on-fixed-asset-v15.png?access_token=05806e89-3f00-4088-8ecc-0c6eb97e7743)  

These settings directly impact what you'll see in the [ACCOUNTING](https://hibou.io/docs/accounting-3/fixed-assets-42/ver/13-0-7#) > [Management](https://hibou.io/docs/accounting-3/assets-42#) >  [ASSETS](https://hibou.io/docs/accounting-3/fixed-assets-42/ver/13-0-7#) area.  

-   **No:** The asset will not be created automatically. To add it, you'll need to create it manually (outlined below).
    
-   **Create in Draft:** When an asset is purchased, it will be listed here in **Draft** state. You'll need to open and [Confirm](https://hibou.io/docs/accounting-3/assets-42#) it to move it to the **Running** state.  (The **Asset Model** field will appear and be optional.)
    
-   **Create and Validate:** When an asset is purchased, it will be listed here in Running state.  (The **Asset Model** field will be required.)
    

If you've made any changes to this account, click [Save](https://hibou.io/docs/accounting-3/assets-42#).

#### Creating an Asset Manually

Navigate back to [Accounting](https://hibou.io/docs/accounting-3/assets-42#) > [Management](https://hibou.io/docs/accounting-3/assets-42#) > [Assets](https://hibou.io/docs/accounting-3/assets-42#), then click [Create](https://hibou.io/docs/accounting-3/assets-42#) to open a blank form. In this form, we can manually enter all details, but since we've created a vendor bill for our asset, we'll click [Select Related Purchases](https://hibou.io/docs/accounting-3/assets-42#) to make the process easier!

![](https://hibou.io/web/image/75611/select-related-purchases-v15.png?access_token=ac54c5b3-5c28-4821-8c64-169110a9d2e4)  

You'll then see a modal window where you can **filter** for, then **select** the asset you'd like to add. Once you've checked the appropriate box, click [Select](https://hibou.io/docs/accounting-3/assets-42#).

![](https://hibou.io/web/image/75612/select-journal-item-v15.png?access_token=a5545626-620f-4aa2-acf1-bb8e3301725a)  

Doing this will populate the asset form with the details from the Vendor Bill. Next, you'll need to select the **Asset Model** from the option(s) at the top of the form. For our example, we'll click [Batch mixer](https://hibou.io/docs/accounting-3/assets-42#).

![](https://hibou.io/web/image/75613/batch-mixer-v15.png?access_token=7198147d-d65d-4cb5-b5e7-d022d916c2d3)  

Doing this will populate the fields on the form that are configured in this Asset Model.  Be sure you have the proper account set as the **Expense Account**.

![](https://hibou.io/web/image/75614/depreciation-expense-account-v15.png?access_token=1316d168-d191-4a7e-9bce-c9b40c6a95ba)

When ready, click [Confirm](https://hibou.io/docs/accounting-3/assets-42#). After the page reloads, click the  **Posted Entries** smart button.

![](https://hibou.io/web/image/75615/posted-entries-v15.png?access_token=43c7f854-de62-43e0-9073-a09f33023315)  

On this page, you'll see the depreciation amortization that was created. The entries are listed in descending order by date, the first entry at the bottom. 

![](https://hibou.io/web/image/75616/bakery-journal-entries-v15.png?access_token=f7cfe9d2-8041-49fc-a817-9e2276961f4f)  

Because we selected the **Prorata Temporis** option, the first entry was prorated ($9,528.77) and the last entry contains the balance ($37,471.23). With this model, these two figures will be equal, or close to equal, to the value of the other depreciation entries.

## Good to Know!

These entries are invoiced via an automated process in Odoo on the date specified. There is no need to manually post them.