---
title: Traceability
summary: Inventory & Manufacturing --> Warehouse Management --> Products --> Products Traceability
authors: Wilson Loh
date: 2022-01-18
---

The Product traceability feature offered by ANSIS will assist in tracing and tracking each and every component of a product. Tracking a product at each stage of stock movement is necessary to bring all operations under control. In order to ensure effective monitoring of the stock movement, lots and serial numbers play an important role.

<br/><br/>

From manufacturing processes to delivery operations, product traceability will keep a proper track that improves the efficiency of stock management. Proper monitoring is required to reduce the risk factors during the stock movements of any company. The ANSIS ERP system will record exact details of the stock movement of each component of a product in inventory in the form of a traceability report. The user can observe the whole production to distribution procedures in the inventory using the lots and serial numbers.

<br/><br/>

**Lots** and **serial numbers** are not exactly the same. Commonly we use a lot as a unique identification number to identify a group of products of the same type. If the products are small or can not count as individual products, you can put them together in a single pack and allot a lot number. They are picked as batches in the inventory. For individual products, you can assign serial numbers. The serial number is considered to identify individual products in the inventory.

<br/><br/>
We allocate lots and serial numbers for products at the time of their inventory management. You can assign lots and serial numbers to the products while configuring them in the Inventory module so that you can easily keep the traceability report of the respective products thereafter. The inventory management tools offered by ANSIS support this traceability feature to ensure effective tracking operations. 

### Configuration

In order to get the complete features of the traceability in the Inventory module, you are requested to activate the **Lots & Serial Numbers** option from the **Settings** menu.
<br/><br/>
[![ANSIS 16 inventory](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-inventory-45.png)](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-inventory-45.png)
<br/><br/>

As shown in the image above, this feature will be available under the **Traceability** tab. After activating this feature, you will get the **Lots/Serial Numbers** option under the **Products** menu.
<br/><br/>

[![ANSIS 16 inventory](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-inventory-46.png)](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-inventory-46.png)
<br/><br/>

Here, already configured lots and serial numbers can be observed. It includes the Lot/Serial number, Internal Reference number in case it differs from the manufacturer’s _lots/serial numbers, Product, Creation date_, and _Company_. Assigning a new lost/serial number for a product can be easily done using the **Create** button.

<br/><br/>
[![ANSIS 16 inventory](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-inventory-47.png)](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-inventory-47.png)
<br/><br/>

First, you can mention a unique lot/serial number in the given space. In the respective fields, you can specify the _Product, Quantity, Internal Reference_, and _Company_. You can not change the serial number anymore if the product has already been moved. Additional notes related to this lot/serial number can be specified in the **Description** tab.
<br/><br/>
The user will get some additional smart buttons on the window based on the operations done using this lot/serial number. As soon as you configure a new lot/serial number, you will get two smart buttons called Location and Traceability on the window as shown below.

<br/><br/>
[![ANSIS 16 inventory](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-inventory-48.png)](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-inventory-48.png)
<br/><br/>

By clicking on the **Location** button, you will get the exact location details of the product.

<br/><br/>
[![ANSIS 16 inventory](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-inventory-49.png)](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-inventory-49.png)
<br/><br/>

In the location history, you can find the _Location, Product, Package, Lot/Serial Number, Owner, On Hand Quantity, Reserved Quantity_, and _Unit details_. The **History** button available here will help you to get the movement history of the product. The product can be replenished from this window itself using the **Replenishment** button.

<br/><br/>
[![ANSIS 16 inventory](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-inventory-50.png)](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-inventory-50.png)
<br/><br/>

The Traceability smart button will give you the tracking information of the product.

<br/><br/>
[![ANSIS 16 inventory](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-inventory-51.png)](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-inventory-51.png)
<br/><br/>

Here, you will get the _Reference, Product, Date, Lot/Serial, From, To_, and _Quantity_ details of each product movement.
<br/><br/>

While configuring a new product in the ANSIS Inventory module, you can define the traceability of the product. As shown in the image below, you will get the option to define the **Traceability** of the product under the **Inventory** tab.

<br/><br/>
[![ANSIS 16 inventory](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-inventory-52.png)](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-inventory-52.png)
<br/><br/>

You can set the tracking of the product by using **Unique Serial Number** or **Lots** from this window. If you don’t want to track the product, you can select the **No Tracking** option.

### How To

You can assign lots/serial numbers to products while receiving them in the inventory. After confirming a purchase order, you will be able to manage lots and serial numbers for the products before receiving them. In order to understand this precisely, let’s create a new purchase order and confirm it.

<br/><br/>
[![ANSIS 16 inventory](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-inventory-53.png)](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-inventory-53.png)
<br/><br/>

The above-shown screenshot is a confirmed purchase order. Here, you will get a smart button to manage the **Receipt** of the purchase. Click this button.

<br/><br/>
[![ANSIS 16 inventory](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-inventory-54.png)](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-inventory-54.png)
<br/><br/>

Now, you can use the option highlighted in the image above from the Receipt window. As soon as you click on this button, a new wizard will appear to define the lots/serial number of the selected product.

<br/><br/>
[![ANSIS 16 inventory](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-inventory-55.png)](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-inventory-55.png)
<br/><br/>

Here, you can specify the Lot/Serial number and Destination Package in the corresponding fields using the **Add a Line** button. Click the **Confirm** button. Now, you can validate the receipt and receive the product in your inventory. This lot/serial number will be added to the product details window of this newly purchased product. You can check this using the smart button available on the product details window as highlighted in the image below.

<br/><br/>
[![ANSIS 16 inventory](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-inventory-56.png)](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-inventory-56.png)
<br/><br/>

You can observe the newly assigned lot/serial number here.

<br/><br/>
[![ANSIS 16 inventory](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-inventory-57.png)](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-inventory-57.png)
<br/><br/>

You can display lots and serial numbers on the delivery slips by activating the **Display Lots & Serial Numbers** on Delivery Slips option from the **Traceability** tab of the **Settings** menu. Similarly, activating the **Display Lots & Serial Numbers on Invoices** button will show lots and serial numbers on invoices.

<br/><br/>
[![ANSIS 16 inventory](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-inventory-58.png)](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-inventory-58.png)
<br/><br/>


### Expiration Date

Defining expiration dates for the storable or consumable products in your inventory is a crucial task. You should definitely mention the expiration date on each product so that the customer will get knowledge about the safety period to consume the product. 
<br/><br/>
ANSIS manages the expiration dates of the products using the lots and serial numbers aspects. You can activate this feature from the **Settings** menu of the Inventory module.

<br/><br/>
[![ANSIS 16 inventory](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-inventory-59.png)](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-inventory-59.png)
<br/><br/>

Under the **Traceability** tab, you can find the **Expiration Dates** option to activate. Along with this, you can activate the **Display Expiration Dates on Delivery Slips** option to display the expiration dates on the delivery slips.
<br/><br/>

After activating the expiration date feature, you can set expiration dates on lots or serial numbers of a product. For this, you can go to the product configuration window. Select the **Inventory** tab as shown below.

<br/><br/>
[![ANSIS 16 inventory](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-inventory-60.png)](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-inventory-60.png)
<br/><br/>

Here, you can define the tracking method from the **Traceability** field. After selecting the tracking method, you can activate the **Expiration Date** option.

<br/><br/>
[![ANSIS 16 inventory](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-inventory-61.png)](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-inventory-61.png)
<br/><br/>

When this option is activated, you will be able to specify the dates to manage product expiration on the product and on the corresponding lots/serial numbers. As soon as you activate this option, you will get some additional fields to define some important dates which are detailed below.

- **Expiration Date:** The number of days after the receipt of the product after which the goods may become dangerous and must not be consumed. It will be computed on the lot/serial number.

- **Best Before Date:** The number of days before the expiration date after which the goods start to deteriorate, without being dangerous yet.

- **Removal Date:** The number of days before the expiration date after which the goods should be removed from the stock.

- **Alert Date:** The number of days before the expiration date after which an alert should be raised on the lot/serial number.

After specifying the expiration date for a product, you can check the lot and serial number window of the respective product where you will get the expiration details automatically.
<br/><br/>

[![ANSIS 16 inventory](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-inventory-62.png)](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-inventory-62.png)
<br/><br/>

The Dates tab will show the expiry details of the lot/serial number. You can observe an expiration alert on the serial number if it is expired or near to expiration date. The filter Expiration Alert will assist you to get the exact list of the expired lots and serial numbers.
<br/><br/>

[![ANSIS 16 inventory](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-inventory-63.png)](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-inventory-63.png)
<br/><br/>

