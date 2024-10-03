---
title: Variants
summary: Inventory & Manufacturing --> Warehouse Management --> Products --> Products Variants
authors: Wilson Loh
date: 2023-07-04
---

Offering multiple variants of a product to customers is an effective strategy to improve sales. ANSIS allows you to configure different variants of a product in the Inventory module just like we did in the Sales and Purchase module. Firstly, make sure to activate the **Variants** feature from the **Settings** menu of the Inventory module as shown below.
<br/><br/>
[![ANSIS 16 inventory](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-inventory-23.png)](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-inventory-23.png)

<br/><br/>
The **Product Variants** option can be assessed from the **Products** menu of the Inventory module. The configuration of the product variant is the same as we discussed in the previous section.
<br/><br/>
The screenshot shown below shows the list of variants configured in the Inventory module. This window also is similar to the Products window. The only difference is that here, you can observe the **Variant Values** of the respective products.
<br/><br/>
[![ANSIS 16 inventory](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-inventory-24.png)](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-inventory-24.png)
<br/><br/>
While configuring a new product, you can mention its variants in the **Attributes & Variants** tab. Here, you need to mention the Attributes and Values of the variant.
<br/><br/>
[![ANSIS 16 inventory](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-inventory-25.png)](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-inventory-25.png)

### Configuration

Using the Configure button, you can create a new variant value from this platform itself. Apart from this, ANSIS offers another platform to configure new attributes of a product and its values. You will get access to this platform from the **Configuration** menu.
<br/><br/>
[![ANSIS 16 inventory](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-inventory-26.png)](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-inventory-26.png)
<br/><br/>
Click the **Attributes** button from the **Configuration** button and ANSIS will lead you to the platform with the list of already configured attributes. It shows the Attribute _name, Category, Display Type, Variants Creation Mode_, and _eCommerce Filter Visibility_. 
<br/><br/>
In order to search for attributes, you can use the search box. For sorting operations, you will get custom Filter and Group By options on this window. For creating new attributes, use the **Create** button.
<br/><br/>
[![ANSIS 16 inventory](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-inventory-27.png)](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-inventory-27.png)
<br/><br/>
You can mention the suitable title for the attribute in the **Attribute Name** field. Set a category in the **Category** field to regroup similar attributes under the same section on the comparison page of eCommerce. 
<br/><br/>
The **Display Type** of the attribute used in the product configurator can be set as _Radio, Pills, Select_, or _Color_. In the Variants Creation Mode, you can define the method of variants creation from the given options that are:

  - **Instantly:** All possible variants are created as soon as the attribute and its values are added to a product.

  - **Dynamically:** Each variant is only created when its corresponding attributes and values are added to a sales order.

  - **Never:** Variants are never created for the attributes.

You cannot change the variant creation mode once the attribute is used on at least one product. You can provide a filter option for the customer on eCommerce to filter products based on their attributes by activating the **Visible** option from the **eCommerce Filter Visibility field.** 
<br/><br/>
Selecting the **Hidden** option will hide the attribute filters on the eCommerce page. You can mention the **Attribute Values** one by one using the **Add a Line** button. Activating the Is Custom field will allow users to input custom values for the attribute value.
<br/><br/>
[![ANSIS 16 inventory](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-inventory-28.png)](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-inventory-28.png)
<br/><br/>
The products with this attribute can be observed using the smart button called **Related Products** as highlighted in the image above.