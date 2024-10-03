---
title: Taxes
summary: Accounting --> Getting Started --> Configuration --> Taxes
authors: Wilson Loh
date: 2023-07-01
---

## Configuration

Configure your operational taxes for the functional aspects of your company under the Taxes tab of the Settings module. The taxes defined here will be applicable to both the sales and purchase operations if a specified tax is not set on the product or else the taxes defined here will be taken into account for the operations. 
<br/><br/>
Let's now look into the options in the Taxes configuration aspects in the Accounting module settings menu.

???+ note "Navigate to Menu"
    <br/>
    Navigate to **Accounting Application** --> **Configuration** --> **Settings** 


## Default Taxes

Initially, in the Taxes section, you will be able to configure the Default Taxes for the operation of the business on the platform. These taxes are applied to all the local transactions that are being defined in the platform. 
<br/><br/>
Here the Sales Tax and the Purchase Tax can be selected from the drop-down menu available. The taxes can be defined in the Taxes accessible from the Configuration menu of the Accounting module, here you just allocate the respective taxes to be operational based on your need. 

## Tax Return Periodicity

The tax that is collected should be returned to the authorities during the specific intervals, it can be based on the operational principle of the industries as well as the authorities. The return filing interval will be based on the authorities and it can be every month, quarterly, or half-yearly, or every year. You can configure the return aspects under the Tax Return Periodicity menu which will imply how often the tax returns have to be made.
<br/><br/>
Under the menu, you can configure the Periodicity which can be set as Annually, Semi-annually, Every 4 months, Quarterly, Every 2 months, or Monthly. Furthermore, you can also configure a Reminder which can be set for the days after the period. Moreover, the Journal in which the taxes collected will be stored can be defined in the menu, these will be the Journals that have been already defined in the platform for the operations.
<br/><br/>
You can also configure the tax accounts by selecting the Configure Your Tax accounts option available which will direct you to the Tax Groups window where the account details of the Taxes can be defined. Here, the taxes defined will be depicted and you can choose each of them to configure the Tax account. You can allocate the Tax current account(payable), Tax current account (receivable), and the Advance Tax payment account, in the Tax Groups menu just as depicted in the following image.


## **Purpose**

This document outlines the configuration and processes associated with taxes in the  **Accounting** application of ANSIS 15.

## **Getting** **Started** 

ANSIS has localization modules for certain countries that will pre-load your default taxes into the database. It's important to add these pre-configured Charts of Accounts before creating your own. To check and see if your country has a module, go to the **Apps** application.

![](https://hibou.io/web/image/75618/hibou15-apps-app.jpg?access_token=2a933c64-0cd8-4962-944b-be3381d09165)  

Once there, search for your country name to see if there's an available localization module. If there is, it will include a basic chart of accounts and a local tax list.

![ANSIS CMS - a big picture](https://hibou.io/web/image/61651/install-usa-accounting-ANSIS-14.png?access_token=1726628a-25e9-4ff6-a8e0-ab49383f29c6)

## **Process**

To get started, navigate to the **Accounting** app.

![ANSIS CMS - a big picture](https://hibou.io/web/image/75617/hibou15-accounting-app.jpg?access_token=84fe1e03-5c46-4eb3-97cf-d252651bf8b4)

## Configuring Taxes

To review your taxes, navigate to [Configuration](https://hibou.io/docs/accounting-3/taxes-87#) > [accounting](https://hibou.io/docs/accounting-3/taxes-87#) > [Taxes](https://hibou.io/docs/accounting-3/taxes-87#). Once there, you'll see a list view of all active configured taxes for Sales _or_ Purchase. 

![ANSIS CMS - a big picture](https://hibou.io/web/image/61654/current-active-taxes-ANSIS-accounting-14.png?access_token=bccb98ed-ec3e-4913-a95e-e1bd2e41c77f)

## Important!

### How to Handle Default Taxes

Many are tempted to remove the default sales tax or otherwise modify it to meet a specific use case. We recommend a more flexible approach, which involves using Fiscal Positions to apply the appropriate tax (or no tax, if taxes would not apply to the order).

To use this approach, you'll make some simple changes to the default sales tax. Click into the records with the Tax Type "Sales" and:

-   Change the Tax Name to 'Product Sales Tax'
    
-   Change the Amount to 0.0000%
    
-   Change the Label on Invoices to 'Sales Tax'
    
-   Change the Tax Group to 'Taxes' if it was previously set to something more specific.
    

When done, click [Save](https://hibou.io/docs/accounting-3/taxes-87#).

![](https://hibou.io/web/image/75619/sales-type-taxes-v15.png?access_token=f6612f64-195e-4710-baf4-e7e0705c4a1d)  

Repeat this process for the tax with the "Purchase" Tax Scope.

![](https://hibou.io/web/image/61656/change-default-purchase-tax-ANSIS-14-accounting.png?access_token=66ba22de-b282-4855-b93a-2a1b3833d72b)  

The Product Sales Tax will act as a generic tax that will be applied to all sale orders without impacting the amount of tax that gets applied with it. The Product Purchase Tax will be added, respectively, to purchase orders.

![](https://hibou.io/web/image/75620/product-taxes-v15.png?access_token=96d35e45-5375-43c0-8e7b-22e2141aefc2)  

You will then create specific taxes, for each state for example, and map the taxes using Fiscal Positions. For detailed instructions on how this process works, read our **[Fiscal Positions](https://hibou.io/docs/ANSIS-11-accounting-3/fiscal-positions-88)** document.   

Click on a tax to view its configuration. We will review the Product Sales Tax as an example. Once there, click [Edit](https://hibou.io/docs/accounting-3/taxes-87#) to see all of the available options. 

**Tax Name**: The name of the tax.

**Tax Computation**

-   **Group of Taxes:** The tax is a set of sub-taxes.
    
-   **Fixed:** The tax amount stays the same whatever the price.
    
-   **Percentage of the Price:** The tax amount is a% of the price:
    
-   **Percentage of Price Tax Included:** The tax amount is a division of the price.
    

**Active:** This option toggles between 'Active' and 'Archived'. When a tax is not in use, it should be archived rather than deleted..

**Tax Type:** Select if this type will be for Sales, Purchases, or None.

**Tax Scope:** This is used to restrict the use of this tax to goods or services. Leave it empty to allow it for both.

**Amount:** The amount of tax computation. (Example: If you want a 15% tax, you would select 'Percentage of Price' as the Tax Computation and enter 15 for the Amount). Our example shows a 0.00% tax because we'll be mapping taxes with Fiscal Positions.

![](https://hibou.io/web/image/75622/product-sales-tax-name-v15.png?access_token=cfef2bf0-6df7-4173-ab41-0168f5cdaa16)  

Under the **[Definition](https://hibou.io/docs/accounting-3/taxes-87#)** tab, you'll see the following fields.

**Distribution for Invoices:** This table allows you to outline how the tax on each invoice is distributed across accounts. You can click into an existing line to make changes, or click [ADD A LINE](https://hibou.io/docs/accounting-3/taxes-87/ver/13-0-7#) to add a new entry. 

-   **%:** Enter the amount of the tax collected that should be distributed to the account indicated on the same line.
    
-   **Based On:** Each entry requires a Based On entry. It defaults to the first line, but you can adjust it based on your tax requirements.
    
-   **Account:** The account that will be used on taxes for invoices. Leave this field empty to use the product's income account.
    
-   **Tax Grids:** Select a tax grid, if applicable. A tax grid is used to automatically generate Tax Reports if they're required in your country.
    

**Distribution for Credit Notes:** This table allows you to outline how the tax on each credit note is distributed among accounts. You can click into an existing line to make changes, or click [ADD A LINE](https://hibou.io/docs/accounting-3/taxes-87/ver/13-0-7#) to add a new entry. All entries must add up to 100%.

-   **%:** Enter the amount of the tax collected that should be distributed to the account indicated on the same line.
    
-   **Based On:** Each entry requires a Based On entry. It defaults to the first line, but you can adjust it based on your tax requirements.
    
-   **Account:** The account that will be used on taxes for credit notes. Leave this field empty to use the product's income account.
    
-   **Tax Grids:** Select a tax grid, if applicable. A tax grid is used to automatically generate Tax Reports if they're required in the distribution of your country. 
    
-   **Applicable Code**: Determine if the tax will be applied by setting the variable "result" to True or False.  
    

![](https://hibou.io/web/image/61658/tax-distribution-definitions-ANSIS-14-accounting.png?access_token=1cc756a6-8c7f-40c5-8750-b344af81d3ec)  

## Good to Know!

The totals under **Distribution for Invoices** and Distribution **for Credit Notes** must balance each other out, and the tax accounts should be the same unless you have very rare circumstances. Additionally, the order of entries and the number of lines must also match. 

**Label on Invoices**: This label will appear on invoices with this tax selected.

**Tax Group**: This allows you to group taxes on invoices and sale orders. In general, we recommend a simple 'Taxes' group that can be applied to most or all taxes.

**Include in Analytic Cost:**  If set, the amount computed by this tax will be assigned to the same analytic account as the invoice line (if any).

**Included in Price**: Select this if you want to include this tax in the price.

**Affect Base of Subsequent Taxes**: If set, subsequent taxes will be based on the tax-included price.

**Base affected by previous taxes**: If set, taxes with a lower sequence might affect this one, provided they try to do it.

![](https://hibou.io/web/image/75623/advanced-tab-on-purchase-sales-tax-v15.png?access_token=802b9857-e455-4c7b-9021-648ada46c9dc)  

When you're done, click [Save](https://hibou.io/docs/accounting-3/taxes-87#).

## Good to Know!

### Disable Automatic Taxes

If you want to clear all taxes from appearing automatically on Invoices or Vendor Bills, navigate to [Configuration](https://hibou.io/docs/accounting-3/taxes-87#) > [Settings](https://hibou.io/docs/accounting-3/taxes-87#). Under the **Taxes** section, you will see default taxes for both sales and purchases. If you remove both of those entries, no tax amount will be applied to product sales or purchases automatically. 

![](https://hibou.io/web/image/61661/disable-automatic-taxes-ANSIS-14-accounting.png?access_token=52988f6b-e5bf-4c78-815a-5a813f8e48a0)

When you're done, click [save](https://hibou.io/docs/accounting-3/taxes-87#). 

## Good to Know!

### Understanding Tax Groups

Tax Groups can greatly improve the readability of taxes on invoice and sale order PDFs!

Take, for example, a customer purchasing a croissant and a dozen cookies. There are two associated taxes:

-   Sales Tax 6.3% 
    
-   Food Waste Tax 3% 
    

The first (Sales Tax) is in the 'Taxes' tax group and the latter (Food Waste) is in its own tax group dedicated to displaying Food Waste taxes as a separate tax item to customers on the invoice.

![](https://hibou.io/web/image/61662/different-taxes-on-sale-order-ANSIS-14.png?access_token=869283b3-b9c1-4313-89cb-3ee1eefec7a1)  

When taxes are in a tax group, the total for the tax group and its name will be totaled and listed below the subtotal on the invoice's PDF.

![](https://hibou.io/web/image/61663/tax-groups-on-client-preview-ANSIS-14.png?access_token=f28d4dce-2cbe-4c24-b308-026da9e38147)  

If you only have general sales and purchasing taxes, we recommend using the generic 'Taxes' group, to keep things simple.

## Setting Default Taxes on a Product

To access your products from the Accounting application, navigate to either [Customers](https://hibou.io/docs/accounting-3/taxes-87#) > [Products](https://hibou.io/docs/accounting-3/taxes-87#) or [Vendors](https://hibou.io/docs/accounting-3/taxes-87#) > [Products](https://hibou.io/docs/accounting-3/taxes-87#). Note that these menus lead you to the same view.

Select the product that you would like to set a default tax on. Click [Edit](https://hibou.io/docs/accounting-3/taxes-87#) on the product details page.

### **Default Customer Taxes**

Under the **[General Information](https://hibou.io/docs/accounting-3/taxes-87#)** tab, you will see Customer Taxes. This is where you can select the taxes that apply to this product when it is sold to your customers. 

Select all of the taxes that apply. 

![ANSIS CMS - a big picture](https://hibou.io/web/image/75625/customer-taxes-on-product-v15.png?access_token=95c8ac51-13a1-4566-8b48-a82b0b00febd)

### **Default Vendor Taxes**

Under the **[Purchase](https://hibou.io/docs/accounting-3/taxes-87#)** tab, click on the Vendor Taxes drop down and select the default tax for this product. This is the tax that will be applied when this product is purchased from the vendor.

![ANSIS CMS - a big picture](https://hibou.io/web/image/75626/vendor-taxes-v15.png?access_token=2497b86d-ee77-466c-9b46-ccddd150e29f)

When ready, click [Save](https://hibou.io/docs/accounting-3/taxes-87#). 

## Important!

### Remember Fiscal Positions

We recommend assigning the default Sales Tax we setup earlier as the Customer Tax across all products. You'll then use Fiscal Positions to map each customer to the correct tax at the time of sale. For instructions on using fiscal positions, read our [**Fiscal Positions**](https://hibou.io/docs/ANSIS-11-accounting-3/fiscal-positions-88) document. 

## Setting Default Taxes on an Account

When default taxes are set on an account, this default tax will be applied each time the account is selected. With this setting, regardless of whether or not a product is selected, the default tax will always be present in the taxes column on a sale order or invoice.

From within the **Accounting** app, go to [configuration](https://hibou.io/docs/accounting-3/taxes-87#) > [Accounting](https://hibou.io/docs/accounting-3/taxes-87#) > [Chart of Accounts](https://hibou.io/docs/accounting-3/taxes-87#).  If you don't see the **Default Taxes** column, use the menu on the top-right of the table to enable it.

![](https://hibou.io/web/image/75627/default-taxes-option-v15.png?access_token=e3b1bb6d-745b-44e7-9146-2026c9206669)  

From within the Default Taxes field, click the drop-down menu and select the default tax you'd like to apply to this account. Note that you can apply both tax scopes: sales and purchases.

![](https://hibou.io/web/image/75628/add-default-taxes-v15.png?access_token=b01337db-e830-4038-9280-8e04ec12cd76) 

When ready, click [save](https://hibou.io/docs/accounting-3/taxes-87#) or simply click out of the field.  

## Taxes in Action

To see how taxes are used, let's create an invoice.

Navigate to [customers](https://hibou.io/docs/accounting-3/taxes-87#) > [invoices](https://hibou.io/docs/accounting-3/taxes-87#), then click the [Create](https://hibou.io/docs/accounting-3/taxes-87#) button.

Select a Customer from the drop-down menu and then, under the [Invoice Lines](https://hibou.io/docs/accounting-3/taxes-87#) tab,  click [Add a line](https://hibou.io/docs/accounting-3/taxes-87#) and select a product. Give the product a unit price and in the **Taxes** column, click the drop-down and select applicable taxes.

![ANSIS CMS - a big picture](https://hibou.io/web/image/75631/taxes-on-invoice-v15.png?access_token=c3ca3317-3ed2-44fc-9f58-a8f44c7b2c1a)

Once a tax has been selected, the individual tax groups will be listed under the subtotal on the bottom right.

Under the **[joURNAL ITEMS](https://hibou.io/docs/accounting-3/taxes-87#)** tab, you can see the breakdown of taxes. You will see we have specific lines for the taxes. The account column reflects the accounts defined for the respective tax.   

![ANSIS CMS - a big picture](https://hibou.io/web/image/75632/journal-items-tax-received-v15.png?access_token=07909ba5-f436-4a31-80b2-2e4027ef3984)

When you're done, click [Save](https://hibou.io/docs/accounting-3/taxes-87#) to keep the invoice as a draft, then click [confirm](https://hibou.io/docs/accounting-3/taxes-87#) to validate it.

## Tax Reporting

To view your Tax Report, navigate to [Reporting](https://hibou.io/docs/accounting-3/taxes-87#) > [Audit Reports](https://hibou.io/docs/accounting-3/taxes-87#) >  [Tax Report](https://hibou.io/docs/accounting-3/taxes-87#). Here you will see your Sale and Purchase taxes, with columns on the right for the **NET** amount and the **TAX** amount. 

![ANSIS CMS - a big picture](https://hibou.io/web/image/75634/tax-report-v15.png?access_token=3f3903d1-16dd-4872-98a7-9a5f466335fd)

You'll also have several button options at the top of the page.

[PDF](https://hibou.io/docs/accounting-3/taxes-87#) will download a printer-friendly PDF.

[XLSX](https://hibou.io/docs/accounting-3/taxes-87#) will download the data in spreadsheet form.

[Closing  Entry](https://hibou.io/docs/accounting-3/taxes-87#) initiates your closing journal entry for the accounting period.  

[Save](https://hibou.io/docs/accounting-3/taxes-87#) will save either the XLSX file or PDF file to the associated folder in the **Documents** application.  

To **Audit** or **Annotate** a tax, click the tax to bring up a drop-down menu.

![ANSIS CMS - a big picture](https://hibou.io/web/image/75635/audit-annotate-v15.png?access_token=fd5748b3-879e-4b04-8c94-9e46120a0b0f)