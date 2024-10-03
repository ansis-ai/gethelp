---
title: Packages & Packaging
summary: Inventory & Manufacturing --> Warehouse Management --> Products --> Products Packaging
authors: Wilson Loh
date: 2022-01-18
---

Using the ANSIS Inventory management system, you can put your products in packs and track them effortlessly. It will be beneficial to ensure secure and comfortable transportation and movements of products in inventory. Putting products in packages will protect them from damage to some extent.
<br/><br/>
As we all know, delivering products in good condition without any damage is a crucial responsibility of all companies. ANSIS helps you to create multiple packages for a single product, a single pack for different products, and delivery packages. Let’s check these packaging features available in the Inventory module.

### Configuration
You will get access to the packaging features in the Inventory module after activating them from the **Settings** menu. As shown in the screenshots below, you need to activate the **Packages** option from the **Operations** tab and the **Product Packagings** option from the **Products** tab.
<br/><br/>
 [![ANSIS 16 inventory](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-inventory-32.png)](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-inventory-32.png)

<br/><br/> 
You must be thinking why there are two options for packages. In ANSIS, Packages and Product Packagings are used for different purposes. **Packages** are packs of different products. We can put different products in a pack using the Packages features and track them. 
<br/><br/>
Whereas **Product Packaging** is used to pack different quantities of the same product. It is a single pack of multiple units of the same product. Let’s check each of these features in detail.
<br/><br/>
[![ANSIS 16 inventory](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-inventory-33.png)](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-inventory-33.png)

### Packages

After activating the **Packages** feature from the **Settings** module, you will be able to find the option under the Products menu of the Inventory module as shown below.

<br/><br/>
[![ANSIS 16 inventory](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-inventory-34.png)](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-inventory-34.png)
<br/><br/>
This is the Kanban view of the platform.
<br/><br/>
[![ANSIS 16 inventory](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-inventory-35.png)](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-inventory-35.png)
<br/><br/>

From the list view, you will get the Display Name, Package Type, Location, and Company details of the already configured packages. You can create a new package for multiple products using the **Create** button.

<br/><br/>
[![ANSIS 16 inventory](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-inventory-36.png)](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-inventory-36.png)
<br/><br/>

The **Package Reference** can be observed in this window as shown above. In the **Package Type** field, you can select a suitable type for your packages. The configuration of the package type will be discussed later. The total weight of the package can be specified in the **Shipping Weight** field. 
<br/><br/>
Mention the name of the **Company** and the **Location** of the product in the respective fields. The Pack Date will be displayed in the corresponding field. You can set the **Package Use** as Disposable Box or Reusable Box. Reusable boxes are used for batch picking and emptied afterward to be reused. 
<br/><br/>
In the barcode application, scanning a reusable box will add the products in this box. Disposable boxes are not reused. When scanning a disposable box in the barcode application, the contained products are added to the transfer. The Products included in this package can be seen under the Content tab. 
<br/><br/>
The product list will only appear after you use this package for stock movements. It includes the _Product Name, Lot/Serial Number, Quantity_, and _Unit of Measure_.
<br/><br/>
It is possible to put multiple products in a package while confirming delivery orders. After confirming the sales order, you can confirm the delivery order using the smart button available on the respective sales order window. As shown below, you will get the delivery order to validate.
<br/><br/>
[![ANSIS 16 inventory](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-inventory-37.png)](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-inventory-37.png)
<br/><br/>
Here, you can find the **Put in Pack** option under the **Operations** tab. The products ordered by the customer can be put in a pack using this button. As soon as you click on this option, a new smart button will appear on the screen as shown below.
<br/><br/>
[![ANSIS 16 inventory](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-inventory-38.png)](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-inventory-38.png)
<br/><br/>
Clicking on the Packages button will give you the details of the package of this delivery order.
<br/><br/>
[![ANSIS 16 inventory](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-inventory-39.png)](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-inventory-39.png)
<br/><br/>
Such created packages can be observed in the **Packages** menu of the Inventory module as we discussed earlier.

### Product Packaging

The user will get access to the **Product Packaging** window from the **Configuration** menu of the Inventory module. You can use this feature to pack multiple units of a product. The window will show the Product, Packaging, Package Type, quantity of products in the package, Unit of Measure, Sales, and Purchase details.
<br/><br/>
[![ANSIS 16 inventory](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-inventory-40.png)](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-inventory-40.png)
<br/><br/>
Click the **Create** button. ANSIS will display a new product packaging creation window as shown below.
<br/><br/>
[![ANSIS 16 inventory](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-inventory-41.png)](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-inventory-41.png)
<br/><br/>
Here, you can mention the name of the Packaging, Product, Package Type, Contained Quantity, Barcode used for packaging identification, and Company in the corresponding fields. You are allowed to activate the Purchase and Sales options if you want to use this product packaging in the purchase and sales orders respectively.
<br/><br/>
[![ANSIS 16 inventory](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-inventory-42.png)](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-inventory-42.png)
<br/><br/>
You can define product packaging from the product configuration window also. We already discussed this while detailing the product configuration in the Inventory module.Now, we will look at configuration of package types in the Inventory module

### Package Type

The option to define different types of packages can be found in the Configuration menu of the Inventory module as shown in the image below. With the help of this platform, you can configure multiple package types for delivery operations.
<br/><br/>
[![ANSIS 16 inventory](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-inventory-43.png)](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-inventory-43.png)
<br/><br/>
You can observe all predefined package types in this window along with the details of the _Carrier, Package Type, Height, Width, Length, Max Weight_, and _Carrier Code_. Let’s check how ANSIS creates new package types for products. For this, you can use the **Create** button.
<br/><br/>
[![ANSIS 16 inventory](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-inventory-44.png)](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-inventory-44.png)
<br/><br/>
In the **Package Type** field, you can specify a suitable title for the package. After this, define the **Size** of the package type in the specified field. The total weight of the package can be added in the **Weight** field. The maximum weight shippable using this package type can be mentioned in the **Max Weight** field. 
<br/><br/>
In the **Barcode** fields, you can specify the barcode used for the package identification process. After mentioning your **Company** , you can add the **Carrier** and **Carrier Code** used for this package.
