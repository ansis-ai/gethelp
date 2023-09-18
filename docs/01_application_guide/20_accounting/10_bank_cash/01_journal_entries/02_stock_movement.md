---
title: Stock Movement
summary: Accounting --> Bank & Cash --> Journal Entries --> Stock Movement
authors: Wilson Loh
date: 2022-01-18
---

## **Purpose**

This document describes which configurations on products, product categories, and locations impact stock movement journal entries, and how Odoo 15 can automatically create stock movement journal entries for you in real-time. 

We will also provide some example journal entries from common stock moves at the end of this document. 

## **Process**

To get started, navigate to the **Accounting** app. 

![Odoo image and text block](https://hibou.io/web/image/75692/Stock%20Moves%20-%20APP.png?access_token=f89b6a5a-d265-4ed0-83ec-baed4aae043b)

### Overview

Odoo creates stock movement journal entries when **storable** products are being received into your stock from a virtual location or are leaving your stock and going to a virtual location. 

For example, receiving storable stock from a vendor, shipping storable stock to a customer, or moving storable stock to a virtual scrap location would all trigger stock movement journal entries, as long as the necessary settings were configured prior to those moves occurring.

Moving storable stock between internal locations does not create stock movement journal entries because the net value of your storable stock is not increasing or decreasing, the stock is just changing locations within your organization. 

### Product Category Configuration 

Odoo does not create stock movement journal entries for you by default. To enable this behavior, you will need to make sure that your product categories are configured correctly.  

Click [Configuration](https://hibou.io/docs/accounting-3/stock-movements-355#) > [management](https://hibou.io/docs/accounting-3/stock-movements-355#) > [Product Categories](https://hibou.io/docs/accounting-3/stock-movements-355#). This page will show you all of your current product categories.  

Select the product category **ALL**.

![Odoo image and text block](https://hibou.io/web/image/75718/Stock%20Moves%20-%20Category.png?access_token=a45166e6-a272-4a89-ac89-99ac3722dc9c)

From within this category, click [Edit](https://hibou.io/docs/accounting-3/stock-movements-355#). We'll review just a few settings on this page.

**Inventory Valuation**

-   **Costing Method:** This is how Odoo calculates the value of your inventory. Your costing method selection will not impact when the creation of stock movement journal entries occurs. Odoo gives you three costing methods to choose from: 
    
    -   **Standard Price:** This allows you to set the costs of your goods sold manually. 
        
    -   **First In First Out (FIFO):** This will calculate your costs based on selling your oldest goods first. 
        
    -   **Average Cost (AVCO):** This will calculate the average cost of your entire inventory at the receipt and assign that average cost to all of your goods.
        
-   **Inventory Valuation:**  Select **Automated**. If this is not selected, no stock movement journal entries will be created. 
    

**Account Stock Properties:** This is where you will select the accounts that should be debited and credited for your stock movements. 

-   **Stock Valuation Account:** This is the account used to track the total value of your inventory within your warehouse(s). 
    
-   **Stock Journal:** This is the journal into which your stock move journal entries will be recorded.
    
-   **Stock Input Account:** This is the account used to track the value of your incoming goods before they are processed into your inventory. 
    
-   **Stock Output Account:** This is the account used to track the value of your outgoing goods, either products that got sold to customers or products that you are moving out of your stock for other reasons like scrapping. 
    

![Odoo image and text block](https://hibou.io/web/image/75695/Stock%20Moves%20-%20Properties.png?access_token=40445ecf-7e76-4cdc-a868-c78bda4a19a4)

Once you've made the necessary changes on this page, click [save](https://hibou.io/docs/accounting-3/stock-movements-355#). 

## Important!

Take some time to go through all of your product categories and make sure that your **Inventory Valuation** is set to **Automated,** and check that you have the correct accounts and journal set for your accounting. 

### Product Configuration

Individual products also have an impact on whether stock movement journal entries are created. Stock movement journal entries will only be created if your product is designated as a **Storable Product**.

## **Good to Know!**

#### Consumable + Service Products

Consumable products and service products have accounting implications but do not trigger stock movement journal entries.  

There are several ways to access your products, but in the **Accounting** app, you can click [Customers](https://hibou.io/docs/accounting-3/stock-movements-355#) > [Products](https://hibou.io/docs/accounting-3/stock-movements-355#) or [Vendors](https://hibou.io/docs/accounting-3/stock-movements-355#) > [Products](https://hibou.io/docs/accounting-3/stock-movements-355#). The only difference between these views is the preset filter in the search field.

On this page, you'll see a full product listing. 

Click   [Group By](https://hibou.io/docs/accounting-3/stock-movements-355#)  \> [Product Type](https://hibou.io/docs/accounting-3/stock-movements-355#). This will sort your products into their product types so that you can check to make sure that your current configuration will make the necessary journal entries when products are moved. 

![Odoo image and text block](https://hibou.io/web/image/75722/Stock%20Moves%20-%20Product%20List.png?access_token=dfb07d52-f580-43d8-a5a5-b8c9c891bbdc)

Click the **Storable Product** type heading, then click into a product to review the category and accounting journal configuration. Once there, click [Edit](https://hibou.io/docs/accounting-3/stock-movements-355#). Ensure the following fields are correct under the  [GENERAL INFORMATION](https://hibou.io/docs/accounting-3/stock-movements-355/ver/13-0-7?debug=true#) tab.

**Product Type:** This will be set as "Storable Product"; a product in which you can manage stock.  

**Product Category:** Set to a category that is designated for Automated Inventory Valuations, as specified in the section above. 

![Odoo image and text block](https://hibou.io/web/image/75725/Stock%20Moves%20-%20General%20Info.png?access_token=73ac3c4f-2606-480d-a658-f6e95d1346a3)

Under the [Accounting](https://hibou.io/docs/accounting-3/stock-movements-355#) tab in the **Payables** section, you also have the option to select specific accounts to track the value of any transfers on the product itself. If there are no accounts set on the product, they will inherit the accounts set on the product category. 

![Odoo image and text block](https://hibou.io/web/image/75728/Stock%20Moves%20-%20Prod%20Acct.png?access_token=e1554f29-e8df-4849-bd48-5eba348033aa)

When you've made your changes, click [Save](https://hibou.io/docs/accounting-3/stock-movements-355#). 

### Location Configuration

Locations also have implications for stock movement journal entries. Remember that stock movement journal entries are created when storable products move between an internal location and a virtual location. So, ensuring that your locations are designated correctly as either Virtual or Internal is important.  (Note: Locations are optional, and you will only see them listed if that option has been selected in the configuration.)

To get started, navigate to the **Inventory** app. 

![Odoo image and text block](https://hibou.io/web/image/75732/Stock%20Moves%20-%20Inv%20APP.png?access_token=3d6382b2-5b2e-48f0-8db7-4eb190848718)

You can see the type of each entry under the **Location Type** column.  

With the exception of the "View" location, which is only for display purposes, all virtual locations within Odoo (listed below) will create a stock movement journal entry on a transfer.  

-   Vendor Location
    
-   Customer Location
    
-   Inventory Loss
    
-   Production
    
-   Transit Location
    

You can also set your accounts on the location itself. For example, a scrap location could associate a specific account for tracking the value of all incoming and outgoing scrapped goods.

To review this example, select the **Virtual Locations/\[Your Company\]: Scrap** from your location list. On the details page, click [Edit](https://hibou.io/docs/accounting-3/stock-movements-355#).

You will see that the **Inventory Loss** location type has its own **Accounting Information** section which will utilize the accounts you specify in this area to track the value entering and leaving this location. 

![Odoo image and text block](https://hibou.io/web/image/75755/Stock%20Moves%20-%20Location%20Accts.png?access_token=2d8c40bb-e41e-4175-b3eb-4c74da976fc6)

## **Good to Know!**

The only other location type that allows you to input Accounting Information is 'Production', which is also very important to set up with a Work in Process (WIP) account.   

### Example Journal Entry: Incoming Stock Picking

This example journal entry was made from an inbound stock-picking generated by purchase order. After we completed the stock-picking, the products were moved into our stock and the journal entry was created. 

You can see a credit to the **Stock Interim (Received)** account and a debit to the **Stock Valuation** account. This is because as the value is entering our warehouse and adding value to our stock value, it is leaving the interim account used to hold the value of our pending incoming transfers.  

![Odoo CMS - a big picture](https://hibou.io/web/image/75756/Stock%20Moves%20-%20JE%20in.png?access_token=01684105-6624-4843-8b0f-12c33e1a734a)

### Example Journal Entry: Outgoing Stock Picking

This example journal entry was made from an outbound stock-picking generated by a sales order from a customer. Once we completed the stock-picking from our inventory, this journal entry was made. 

You can see a credit to the **Stock Valuation** account and a debit to the **Stock Interim (Delivered)** account. This is because the value is leaving our stock and is going outbound to a customer, so we have to remove value from our stock and move it into the account used to track outbound goods. 

![Odoo CMS - a big picture](https://hibou.io/web/image/75757/Stock%20Moves%20-%20JE%20out.png?access_token=580b1d00-d1bf-4552-abe7-d63513158ed1)

### Example Journal Entry: Inventory Adjustment

Inventory adjustments are necessary when human error occurs and the actual quantity on hand doesn't match the recorded quantity on hand in Odoo.  

The following journal entry was made from an inventory adjustment after we discovered that we had more of a particular product on hand than the system said we did. 

You'll see that the **Stock Interim (Received)** account was credited and the **Stock Valuation** account was debited to correct for the additional inventory. 

![Odoo CMS - a big picture](https://hibou.io/web/image/75758/Stock%20Moves%20-%20JE%20adj.png?access_token=909e219d-ee32-4fc8-9a4d-9cd11b208ac9)

### Example Journal Entry: Manufacturing Order

The following journal entries were made when we processed a manufacturing order. When you move component products from your stock to your production location, it will create a journal entry. Likewise, once the finished product is produced, you will have a journal entry for the move out of your production location back into your inventory. 

## Important!

You will only have stock movement journal entries for Manufacturing Orders if your component product(s) and finished product(s) are set as storable products and are in a product category that is set for **Automated Inventory Valuation**. If your component product(s) or the finished product(s) are consumable, or in a product category that is set for **Manual Valuation**, then you will not have any journal entries for their movements.   

![Odoo CMS - a big picture](https://hibou.io/web/image/75871/Stock%20Moves%20-%20MO%20Components.png?access_token=ee2a5ca3-3fba-43df-9784-1ff9ba71c3ae)

![Odoo CMS - a big picture](https://hibou.io/web/image/75872/Stock%20Moves%20-%20MO%20Finished%20Product.png?access_token=dec520bc-a5fe-4ea2-bf25-de76bfd2d497)