---
title: Fiscal Position
summary: Accounting --> Getting Started --> Configuration --> Fiscal Position
authors: Wilson Loh
date: 2023-07-01
---

The Fiscal Position in ANSIS Accounting module is a mapping of tax rules that can be applied to a customer, supplier, or product. It allows you to assign different tax rules to customers based on their country, state, and other criteria. This helps you manage the different tax regulations in different countries. 
<br/><br/>

This is useful for companies that sell products or services to customers in multiple countries. This is very advantageous for handling the taxation requirements of different countries and allows for easy compliance. This feature enables you to configure tax rules in different ways according to the customers' location or product type. It can be used to define different tax rates for different customers or products. This account management entity is the perfect solution for the financial management of a company worldwide. This tool has the power to automatically adapt the taxes and the financial accounts described for the transactions.

### Configuration

The ANSIS Accounting software provides a space for the menu Fiscal Positions, which can be accessed under the Accounting section of the Configuration tab.
<br/><br/>

[![ANSIS Accounting Book](https://www.images.cybrosys.com/images/odoo-book-16/accounting/odoo-accounting-book-ch3-54.png)](https://www.images.cybrosys.com/images/odoo-book-16/accounting/odoo-accounting-book-ch3-54.png)
<br/><br/>

The Fiscal Positions menu performs as the key to the Fiscal Positions window, where you can manage all the fiscal position entries. The window will showcase every predefined Fiscal position, as illustrated in the image below.
<br/><br/>

[![ANSIS Accounting Book](https://www.images.cybrosys.com/images/odoo-book-16/accounting/odoo-accounting-book-ch3-55.png)](https://www.images.cybrosys.com/images/odoo-book-16/accounting/odoo-accounting-book-ch3-55.png)
<br/><br/>

The window can be accessed in both Kanban and List view. The Kanban view of the window is given below.
<br/><br/>

[![ANSIS Accounting Book](https://www.images.cybrosys.com/images/odoo-book-16/accounting/odoo-accounting-book-ch3-56.png)](https://www.images.cybrosys.com/images/odoo-book-16/accounting/odoo-accounting-book-ch3-56.png)
<br/><br/>

All the fields that the window displays will be selectable, and it is also possible to select the already defined fiscal position records to view the complete details of the respective one. 
<br/><br/>

In addition, the Filters, Group by, and Search options allow you to retrieve the required Fiscal Position if the platform manages more Fiscal Positions. The Favourites tab includes the options such as Save current search, import records, Link menu in spreadsheet, Insert view in article, Insert link in article, Insert list in spreadsheet, and Add to my dashboard options.
<br/><br/>

The CREATE button is a fine way to define required Fiscal Positions. The creation form of the Fiscal Positions is given below.
<br/><br/>

[![ANSIS Accounting Book](https://www.images.cybrosys.com/images/odoo-book-16/accounting/odoo-accounting-book-ch3-57.png)](https://www.images.cybrosys.com/images/odoo-book-16/accounting/odoo-accounting-book-ch3-57.png)
<br/><br/>

Here you can define the fiscal position name in the Fiscal Position field. Then you can view various fields to configure, such as Use _TaxCloud API_, Use _AvaTax API_, Detect Automatically, and _Foreign Tax ID_. All these fields can be enabled or disabled based on the preferences. 
<br/><br/>

#### TaxCloud

If you activate the Use TaxCloud API option, you should enter your taxcloud credentials to compute tax rates automatically. Likewise, the Detect Automatically field makes you able to apply this fiscal position automatically with respect to the country, country group, localities, or the federal state of the partner operation. 
<br/><br/>

Furthermore, you have the option to specify the Country where you can mention the country if you want to apply only to a particular country. Now under the Tax Mapping tab of the configuration window, you can define the ‘Tax on Product’ together with the ‘Tax to Apply.’ So the corresponding tax which is required to apply to the product can be specified. 
<br/><br/>

Additionally, if the fiscal mapping is confirmed by the ANSIS system when the partner is allocated for the operation, the matching product tax will be employed in accordance with the fiscal position. Similarly, the Accounting Mapping tab allows you to mention the Account on Product and the Account to use Instead of using the Add a line option. Further, you can type the legal note in the provided Legal Note line, which is the legal mentions that have to be printed on the invoices.

#### AvaTax

[![ANSIS Accounting Book](https://www.images.cybrosys.com/images/odoo-book-16/accounting/odoo-accounting-book-ch3-58.png)](https://www.images.cybrosys.com/images/odoo-book-16/accounting/odoo-accounting-book-ch3-58.png)
<br/><br/>

Similarly, under the Avatax configuration tab of the Fiscal Positions creation form, you can define the Avatax Invoice Account and the Avatax Refund Account, which are the account that will be used by Avatax for invoices and refunds, respectively. Here also, you can add Legal Notes in the provided space.
<br/><br/>

[![ANSIS Accounting Book](https://www.images.cybrosys.com/images/odoo-book-16/accounting/odoo-accounting-book-ch3-59.png)](https://www.images.cybrosys.com/images/odoo-book-16/accounting/odoo-accounting-book-ch3-59.png)
<br/><br/>

After configuring all these aspects, you can apply to the invoices and bills so that the tax and the accounts will be mapped according to the rule defined as shown in the example.
<br/><br/>

[![ANSIS Accounting Book](https://www.images.cybrosys.com/images/odoo-book-16/accounting/odoo-accounting-book-ch3-60.png)](https://www.images.cybrosys.com/images/odoo-book-16/accounting/odoo-accounting-book-ch3-60.png)
<br/><br/>

Fiscal position is automatically detected for partners according to the country group, country, federal states provided.
<br/><br/>


## **Purpose**

The purpose of this documentation is to outline the use case and processes associated with Fiscal Positions in the **Accounting** application of ANSIS 15 .

**Fiscal Positions** allow you to define the taxes that should be applied for a specific customer or vendor. This is especially useful if you handle customers or vendors in multiple states or counties that have different taxes! It's as easy as just applying the fiscal position to them. Once that happens, the right taxes will be selected for the products they buy automatically!

## **Process**

To get started, navigate to the **Accounting** app.

![ANSIS image and text block](https://hibou.io/web/image/75651/hibou15-accounting-app.jpg?access_token=8de1059c-c936-4283-8f8c-6f1c66f79c3d)

### Configuring Fiscal Positions

Click [Configuration](https://hibou.io/docs/accounting-3/fiscal-positions-88#) > [accounting](https://hibou.io/docs/accounting-3/fiscal-positions-88#) > [Fiscal Positions](https://hibou.io/docs/accounting-3/fiscal-positions-88#) to see a list of configured Fiscal Positions.

To make a new record, click [Create](https://hibou.io/docs/accounting-3/fiscal-positions-88#) and complete the following fields.

-   **Fiscal Position:** Enter a name to describe which customers it will be applied to.  
    
-   **Use Taxcloud API:** TaxCloud is an API that will detect the customer's tax rate by location, then create and apply the tax rate automatically. To use this method, you'll also need to select the **Detect Automatically** option when selling to American customers, as well as configure the TaxCloud API with ANSIS. [**Contact Hibou**](https://hibou.io/contactus) for help configuring this integration.
    

-   **Company:** This will auto-populate with the company you're working in.
    
-   **Detect Automatically**: This standalone option also allows ANSIS to automatically assign this position based on the location criteria you select. When enabled, the following fields will display and should be completed if TaxCloud is not enabled. You can refine this as much as necessary according to your specific requirements.
    
-   -   **VAT Required:** The tax ID of your company in the region mapped by the fiscal position.
        
    -   **Country Group** or **Country:** If you use country Groups, you can select the appropriate one here. Otherwise, select your country. 
        
    -   **Federal State:** Select the state this fiscal position will apply to.
        
    -   **Zip Range:** To further refine the taxes applied, enter a zip code range for the state.
        

Under the [Tax Mapping](https://hibou.io/docs/accounting-3/fiscal-positions-88#) tab, you'll be indicating which broader-defined tax will be mapped to this fiscal position. Click [Add an item](https://hibou.io/docs/accounting-3/fiscal-positions-88#) to specify which tax should be replaced:

-   **Tax on Product**: The tax you are replacing.
    
-   **Tax to Apply**: The tax you would like to apply for this fiscal position.
    

-   **Legal Notes:** Write in legal mentions that have to be printed on the invoices here.
    

![ANSIS CMS - a big picture](https://hibou.io/web/image/75700/tax%3Dmapping%3Dtab-fiscal-position-v15.png?access_token=00935718-fb0c-417d-ade4-c65b5535b32c)

Under the [Account Mapping](https://hibou.io/docs/accounting-3/fiscal-positions-88#) tab, you can remap an associated product tax account within this fiscal position.

This is not commonly used.

![](https://hibou.io/web/image/61675/remap-accounts-ANSIS14.png?access_token=891e323f-0444-4fbf-b18d-2d59f2640658)  

When you've configured your Fiscal Position, click [Save](https://hibou.io/docs/accounting-3/fiscal-positions-88#).  

## Good to Know!

#### Detect Automatically? Good News!

If **Detect Automatically** is selected on the form for a Fiscal Position, every partner with an address that contains that Country, Country Group, State, or Zip Code Range (whichever was configured) will have this fiscal position applied. There is no need to additionally apply the Fiscal Position to a Contact.

### Applying a Fiscal Position to a Contact

Navigate to the **Contacts** app.

![ANSIS image and text block](https://hibou.io/web/image/75655/hibou15-contacts-app.jpg?access_token=8d682408-c719-4ebd-8b02-28a206e95d63)

Click the contact you'd like to add a fiscal position for, then click [Edit](https://hibou.io/docs/accounting-3/fiscal-positions-88#).

Under the [Sales & Purchases](https://hibou.io/docs/accounting-3/fiscal-positions-88#) tab, select the appropriate entry from the **Fiscal Position** drop-down.

![ANSIS CMS - a big picture](https://hibou.io/web/image/75701/sales-and-purchase-tab-fiscal-position-v15.png?access_token=6e320a08-0c1b-4c2e-9175-234ad2993a24)

When you've set the contact's Fiscal Position, click [Save](https://hibou.io/docs/accounting-3/fiscal-positions-88#).

#### **Managing Tax Exemption with Fiscal Positions**

It is possible to use Fiscal Positions to manage tax exemption on sales. Any product that should be taxed should have a tax named '**Product Sales Tax**'. By creating a new 'Tax Exempt' fiscal position that is not mapped to a tax rate, and another that is designated for the required state tax, new orders will be assigned the appropriate rate as needed. Any additional tax requirements will be applied by the customer's location. 

To illustrate this ruleset, the following use case outlines a typical reseller tax configuration:

The fiscal position **Tax Exempt** does not have a tax rate applied.

![ANSIS image and text block](https://hibou.io/web/image/75657/tax_exempt.jpg?access_token=34fd7026-33eb-4338-b05a-723f653afd71)

The contact Bakery Essentials has been assigned the Tax Exempt fiscal position.

![ANSIS image and text block](https://hibou.io/web/image/75702/bakery-essentials-fiscal-position-v15.png?access_token=b611e2b1-166f-4f44-a36c-f76eea9601a5)

Now, when creating a quotation or sale order, the product sales tax will be applied, but because there is no applicable rate, no tax will be collected. 

![ANSIS image and text block](https://hibou.io/web/image/75706/tax-exempt-on-SO-v15.png?access_token=24dce8e9-bd23-4d18-be5b-b22ec5a6b914)

## Good to Know!

#### Change Fiscal Position on the Quotation/Sale Order

You can always change a Fiscal Position on your Quotation or Sale Order under the [Other Info](https://hibou.io/docs/accounting-3/fiscal-positions-88#) tab. This will apply to this record only and will not update the contact. Once changed, the items under [Order Lines](https://hibou.io/docs/accounting-3/fiscal-positions-88#) will update automatically.

![](https://hibou.io/web/image/75707/update-fiscal-position-on-other-info-tab-v15.png?access_token=0a566649-f673-45b5-9fb9-8dc472a33724)  

And, of course, you can do the same on an RFQ or Purchase Order under the [Other Information](https://hibou.io/docs/accounting-3/fiscal-positions-88#) tab.

![](https://hibou.io/web/image/75713/fiscal-position-on-PO-v15.png?access_token=af5754dc-8105-4f4b-839a-a7939bee0f60)