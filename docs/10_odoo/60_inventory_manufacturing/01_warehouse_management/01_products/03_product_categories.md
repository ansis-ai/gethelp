---
title: Categories
summary: Inventory & Manufacturing --> Warehouse Management --> Products --> Products Categories
authors: Wilson Loh
date: 2022-01-18
---

You can categorize your products using the Product Categories feature available in the PerfectWORK Inventory module. In order to perform various kinds of product operations, it is essential to define product categories in PerfectWORK. 
<br/><br/>
PerfectWORK will make the products easier to find because it allows you to filter by product categories. The user will get access to the **Product Categories** window from the **Configuration** menu of the Inventory module as shown below.
<br/><br/>
[![PerfectWORK 16 inventory](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-inventory-29.png)](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-inventory-29.png)
<br/><br/>
The pre-configured categories can be obtained from this window such as _All, Consumable, Deliveries, Rental, Saleable, Internal, External_, and _many more_. Let’s create a new product category using the **Create** button. PerfectWORK will direct you to a new window to configure a new product category as shown in the screenshot below.

### Configuration

[![PerfectWORK 16 inventory](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-inventory-30.png)](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-inventory-30.png)
<br/><br/>

The name of the new category can be specified in the given field along with the details of its **Parent Category** and **Avatax Category.** In the **Taxcloud** tab, you can mention the TaxCloud Category of this product category. 
<br/><br/>
It refers to the taxability information codes which are used by TaxCloud to compute specific tax rates for each category. This value is used when no TIC is set on the product. If no value is set here, the default value set in Invoicing Settings is used. 
<br/><br/>
Under the Logistics tab, you can define the **Routes** of operation of this product category. In the **Force Removal Strategy** field, you can set a specific removal strategy that will be used regardless of the source location for this product category.
<br/><br/>
The **Reserve Packaging** can be set as Reserve Only Full Packaging or Reserve Partial Packaging.

-   **Reserve Only Full Packagings:** It will allow you to reserve full packaging only. If a customer orders 2 pallets of 1000 units each and you only have 1600 in stock, then only 1000 will be reserved.
-   **Reserve Partial Packagings:** It allows reserving partial packaging. If a customer orders 2 pallets of 1000 units each and you only have 1600 in stock, then 1600 will be reserved.

#### Accounting Properties

In the **Accounting Properties** tab, you can specify the **Income Account** and **Expense Account** in the respective fields. The income account will be used when validating a customer invoice and the expense is accounted for when the vendor bill is validated.

### Inventory Valuation

In the **Inventory Valuation** tab, you can set the **Costing Method** for this product category. The costing methods available in PerfectWORK are,

-   **Standard Price:** The products are valued at their standard cost defined on each of them.
-   **Average Cost (AVCO):** The products are valued at weighted average cost.
-   **First in First out (FIFO):** The products are valued supposing those that enter the company first will also leave it first.

[![PerfectWORK 16 inventory](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-inventory-31.png)](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-inventory-31.png)

<br/><br/>
You can set the **Inventory Valuation** of the product category as **Manually** or **Automated** as per your requirement. In the case of Manual inventory valuation, the accounting entries to value the inventory are not posted automatically. In Automated inventory valuation, an accounting entry is automatically created to value the inventory when a product enters or leaves the company.
<br/><br/>
When you select the Automated inventory valuation, you will get an additional tab called Account Stock Properties on the screen. This tab includes

-   **Valuation Account:** When automated inventory valuation is enabled on a product, this account will hold the current value of the products.
-   **Stock Journal:** When doing automated inventory valuation, this will be the account journal in which entries will be automatically posted when stock moves are processed.
-   **Stock Input Account:** Counterpart journal items for all incoming stock moves will be posted in this account unless there is a specific valuation account set on the source location. This is the default value for all products in this category. It can also directly be set on each product.
-   **Stock Output Account:** When doing automated inventory valuation, counterpart journal items for all outgoing stock moves will be posted in this account, unless there is a specific valuation account set on the destination location.
  
The smart buttons available on the product category window will give details of the Products configured under this category and Putaway Rules respectively.
