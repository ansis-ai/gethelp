---
title: Locations
summary: Inventory & Manufacturing --> Warehouse Management --> Warehouses --> Locations
authors: Wilson Loh
date: 2023-07-04
---

The platform to configure and manage different locations available in the Odoo Inventory module will help you to define the places in your warehouses in which the products are stocked. Within a single warehouse you can manage multiple locations for your stocks. From the Settings menu of the Inventory module, you can activate the Storage Location feature as shown below that will help you to track product location in your warehouse.

[![Odoo 16 inventory](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-warehouse-management-179.png)](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-warehouse-management-179.png)

Now, the option to configure Locations can be found under the Configuration menu of the Inventory module as shown below.

[![Odoo 16 inventory](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-warehouse-management-180.png)](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-warehouse-management-180.png)

The list view of this platform will give details of the Locations, Location Type, Storage Category, and Company. We will detail each of these options while discussing the configuration of a new location in Odoo. For this, you can click on the Create button.

[![Odoo 16 inventory](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-warehouse-management-181.png)](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-warehouse-management-181.png)

The new location creation window is shown above. Here, you can mention the Location Name in the given field. The parent location that includes this location can be specified in the Parent Location field. You can select the parent location from the drop-down. You will get the Additional information, Logistics, and Cyclic Counting tabs to define. From the given options, you can select Location Type for the new one. The available Location Types are,

**Vendor Location:** Vendor location is considered as a kind of virtual location that represents the source location for the products that come from your vendors.  
**View:** View is another kind of virtual location that is used to create a hierarchical structure for your warehouse. They can’t directly store products.  
**Internal Location:** Internal Locations are the actual or physical locations available in your warehouse.  
**Customer Location:** Customer Location is a kind of virtual location that represents the destination locations for the products sent to your customers.  
**Inventory Loss:** This is also a virtual location that serves as a counterpart for inventory operations used to correct stock levels.  
**Production:** This virtual counterpart location is used for production operations. You can consume components from this location and produce finished products.  
**Transit Location:** The Transit Location is considered a counterpart location that should be used in intercompany or inter-warehouse operations.

The storage category used in this location can be specified in the Storage Category field. If this location is shared between companies, you can let the Company field empty. You can allow using this location to put scrap and damaged goods by activating the Is a Scrap Location?. This location can be used as a return location to store returned products by activating the Is a Return Location?. The Is a Subcontracting Location can be activated to create a new dedicated subcontracting location for this company. The barcode used for this location can be specified in the Barcode field. You can activate the Replenish Location feature to get all quantities to replenish at this location.

Mention the Inventory Frequency in days in the Cyclic Counting tab. When the difference is more than zero, the inventory count date for the products stored at this location will be automatically set at the defined frequency. The Last Effective Inventory field will show the date of the last inventory at this location. The date of the next planned inventory based on cyclic schedule will appear in the Next Expected Inventory field.

Mention the Inventory Frequency in days in the Cyclic Counting tab. When the difference is more than zero, the inventory count date for the products stored at this location will be automatically set at the defined frequency. The Last Effective Inventory field will show the date of the last inventory at this location. The date of the next planned inventory based on cyclic schedule will appear in the Next Expected Inventory field.

[![Odoo 16 inventory](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-warehouse-management-182.png)](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-warehouse-management-182.png)

It defines the default method used for suggesting the exact location where to take the products from, which lot etc, for this location. This method can be enforced at the product category level, and a fallback is made on the parent locations if none is set here. The available removal strategies are,

**FIFO:** Products/lots that were stocked first will be moved out first.  
**LIFO:** Products/lots that were stocked last will be moved out first.  
**Closest Location:** Products/lots closest to the target location will be moved out first.  
**FEFO:** Products/lots with the closest removal date will be moved out first.

[![Odoo 16 inventory](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-warehouse-management-183.png)](https://www.images.cybrosys.com/images/odoo-book-16/odoo-book-16-warehouse-management-183.png)

Additionally, you will get dedicated smart buttons on the location window such as the Putaway Rules and Stocks. The Putaway Rules button will give access to the window that includes the rules for shifting products from one location to another and the Current Stocks button will give details of the current stock updates of this location.