---
title: Taxes
summary: Accounting --> Taxes
authors: Wilson Loh
date: 2022-04-20
---

There are numerous types of **taxes**, and their application varies greatly, depending mostly on your company’s localization. To make sure they are recorded with accuracy, Odoo’s tax engine supports all kinds of uses and computations.

## Default taxes[¶](https://www.odoo.com/documentation/16.0/applications/finance/accounting/taxes.html#default-taxes "Permalink to this headline")

**Default Taxes** define which taxes are automatically selected when there is no other indication about which tax to use. For example, Odoo prefills the **Taxes** field with the Default Taxes when you create a new product or add a new line on an invoice.

![Odoo fills out the Tax field automatically according to the Default Taxes](https://www.odoo.com/documentation/16.0/_images/default-invoice-line.png)

To change your **Default Taxes**, go to , select the appropriate taxes for your default **Sales Tax** and **Purchase Tax**, and click on _Save_.

![Define which taxes to use by default on Odoo](https://www.odoo.com/documentation/16.0/_images/default-configuration.png)

Note

**Default Taxes** are automatically set up according to the country selected at the creation of your database, or when you set up a [fiscal localization package](https://www.odoo.com/documentation/16.0/applications/finance/fiscal_localizations.html#fiscal-localizations-packages) for your company.

![Odoo fills out the Tax field automatically according to the Default Taxes](https://www.odoo.com/documentation/16.0/_images/default-invoice-line.png)

![Define which taxes to use by default on Odoo](https://www.odoo.com/documentation/16.0/_images/default-configuration.png)

## Activate Sales Taxes from the List view[¶](https://www.odoo.com/documentation/16.0/applications/finance/accounting/taxes.html#activate-sales-taxes-from-the-list-view "Permalink to this headline")

As part of your [fiscal localization package](https://www.odoo.com/documentation/16.0/applications/finance/fiscal_localizations.html#fiscal-localizations-packages), most of your country’s sales taxes are already preconfigured on your database. However, only a few of them are activated by default, so that you can activate only the ones relevant for your business.

To activate Sale Taxes, go to and use the _Activate_ toggle button to activate or deactivate a tax.

![Activate pre-configured taxes in Odoo Accounting](https://www.odoo.com/documentation/16.0/_images/list.png)

![Activate pre-configured taxes in Odoo Accounting](https://www.odoo.com/documentation/16.0/_images/list.png)

## Configuration[¶](https://www.odoo.com/documentation/16.0/applications/finance/accounting/taxes.html#configuration "Permalink to this headline")

To edit or create a **Tax**, go to and open a tax or click on _Create_.

![Edition of a tax in Odoo Accounting](https://www.odoo.com/documentation/16.0/_images/edit.png)

Important

Taxes have three different labels, each one having a specific use. Refer to the following table to see where they are displayed.

  
| 
[Tax Name](https://www.odoo.com/documentation/16.0/applications/finance/accounting/taxes.html#taxes-name)

 | 

[Label on Invoice](https://www.odoo.com/documentation/16.0/applications/finance/accounting/taxes.html#taxes-label-invoices)

 | 

[Tax Group](https://www.odoo.com/documentation/16.0/applications/finance/accounting/taxes.html#taxes-tax-group)

 |
| --- | --- | --- |
| 

Back end

 | 

_Taxes_ column on exported invoices

 | 

Above the _Total_ line on exported invoices

 |

![Edition of a tax in Odoo Accounting](https://www.odoo.com/documentation/16.0/_images/edit.png)

### Basic Options[¶](https://www.odoo.com/documentation/16.0/applications/finance/accounting/taxes.html#basic-options "Permalink to this headline")

#### Tax Name[¶](https://www.odoo.com/documentation/16.0/applications/finance/accounting/taxes.html#tax-name "Permalink to this headline")

The **Tax Name** as you want to display it for backend users. This is the [label](https://www.odoo.com/documentation/16.0/applications/finance/accounting/taxes.html#taxes-labels) you see while editing Sales Orders, Invoices, Products, etc.

#### Tax Computation[¶](https://www.odoo.com/documentation/16.0/applications/finance/accounting/taxes.html#tax-computation "Permalink to this headline")

-   **Group of Taxes**
    
    The tax is a combination of multiple sub-taxes. You can add as many taxes you want, in the order you want them to be applied.
    
    Important
    
    Make sure that the tax sequence is correct, as the order in which they are may impact the taxes’ amounts computation, especially if one of the taxes [affects the base of the subsequent ones](https://www.odoo.com/documentation/16.0/applications/finance/accounting/taxes.html#taxes-base-subsequent).
    
-   **Fixed**
    
    The tax has a fixed amount in the default currency. The amount remains the same, regardless of the Sales Price.
    
    For example, a product has a Sales Price of $1000, and we apply a _$10 fixed_ tax. We then have:
    
       
    | 
    Product’s Sales Price
    
     | 
    
    Price without tax
    
     | 
    
    Tax
    
     | 
    
    Total
    
     |
    | --- | --- | --- | --- |
    | 
    
    1,000
    
     | 
    
    1,000
    
     | 
    
    10
    
     | 
    
    1,010.00
    
     |
    
-   **Percentage of Price**
    
    The _Sales Price_ is the taxable basis: the tax’s amount is computed by multiplying the Sales Price by the tax’s percentage.
    
    For example, a product has a Sales Price of $1000, and we apply a _10% of Price_ tax. We then have:
    
       
    | 
    Product’s Sales Price
    
     | 
    
    Price without tax
    
     | 
    
    Tax
    
     | 
    
    Total
    
     |
    | --- | --- | --- | --- |
    | 
    
    1,000
    
     | 
    
    1,000
    
     | 
    
    100
    
     | 
    
    1,100.00
    
     |
    
-   **Percentage of Price Tax Included**
    
    The _Total_ is the taxable basis: the tax’s amount is a percentage of the Total.
    
    For example, a product has a Sales Price of $1000, and we apply a _10% of Price Tax Included_ tax. We then have:
    
       
    | 
    Product’s Sales Price
    
     | 
    
    Price without tax
    
     | 
    
    Tax
    
     | 
    
    Total
    
     |
    | --- | --- | --- | --- |
    | 
    
    1,000
    
     | 
    
    1,000
    
     | 
    
    111.11
    
     | 
    
    1,111.11
    
     |
    

#### Active[¶](https://www.odoo.com/documentation/16.0/applications/finance/accounting/taxes.html#active "Permalink to this headline")

Only **Active** taxes can be added to new documents.

Important

It is not possible to delete taxes that have already been used. Instead, you can deactivate them to prevent future use.

Note

This field can be modified from the _List View_. See [above](https://www.odoo.com/documentation/16.0/applications/finance/accounting/taxes.html#taxes-list-activation) for more information.

#### Tax Scope[¶](https://www.odoo.com/documentation/16.0/applications/finance/accounting/taxes.html#tax-scope "Permalink to this headline")

The **Tax Scope** determines the tax’s application, which also restricts where it is displayed.

-   **Sales**: Customer Invoices, Product’s Customer Taxes, etc.
    
-   **Purchase**: Vendor Bills, Product’s Vendor Taxes, etc.
    
-   **None**
    

Tip

You can use **None** for taxes that you want to include in a [Group of Taxes](https://www.odoo.com/documentation/16.0/applications/finance/accounting/taxes.html#taxes-computation) but that you don’t want to list along with other Sales or Purchase taxes.

### Definition tab[¶](https://www.odoo.com/documentation/16.0/applications/finance/accounting/taxes.html#definition-tab "Permalink to this headline")

Allocate with precision the amount of the taxable basis or percentages of the computed tax to multiple accounts and Tax Grids.

![Allocate tax amounts to the right accounts and tax grids](https://www.odoo.com/documentation/16.0/_images/definition.png)

-   **Based On**:
    
    -   Base: the price on the invoice line
        
    -   % of tax: a percentage of the computed tax.
        
-   **Account**: if defined, an additional Journal Item is recorded.
    
-   **Tax Grids**: used to generate [Tax Reports](https://www.odoo.com/documentation/16.0/applications/finance/accounting/reporting/tax_returns.html) automatically, according to your country’s regulations.
    

![Allocate tax amounts to the right accounts and tax grids](https://www.odoo.com/documentation/16.0/_images/definition.png)

### Advanced Options tab[¶](https://www.odoo.com/documentation/16.0/applications/finance/accounting/taxes.html#advanced-options-tab "Permalink to this headline")

#### Label on Invoices[¶](https://www.odoo.com/documentation/16.0/applications/finance/accounting/taxes.html#label-on-invoices "Permalink to this headline")

The label of the tax, as displayed on each invoice line in the **Taxes** column. This is the [label](https://www.odoo.com/documentation/16.0/applications/finance/accounting/taxes.html#taxes-labels) visible to _front end_ users, on exported invoices, on their Customer Portals, etc.

![The Label on Invoices is displayed on each invoice line](https://www.odoo.com/documentation/16.0/_images/invoice-label.png)

![The Label on Invoices is displayed on each invoice line](https://www.odoo.com/documentation/16.0/_images/invoice-label.png)

#### Tax Group[¶](https://www.odoo.com/documentation/16.0/applications/finance/accounting/taxes.html#tax-group "Permalink to this headline")

Select to which **Tax Group** the tax belongs. The Tax Group name is the [label](https://www.odoo.com/documentation/16.0/applications/finance/accounting/taxes.html#taxes-labels) displayed above the _Total_ line on exported invoices, and the Customer Portals.

Tax groups include different iterations of the same tax. This can be useful when you must record differently the same tax according to [Fiscal Positions](https://www.odoo.com/documentation/16.0/applications/finance/accounting/taxes/fiscal_positions.html).

![The Tax Group name is different from the Label on Invoices](https://www.odoo.com/documentation/16.0/_images/invoice-tax-group.png)

In the example above, we see a 0% tax for Intra-Community customers in Europe. It records amounts on specific accounts and with specific tax grids. Still, to the customer, it is a 0% tax. That’s why the [Label on the Invoice](https://www.odoo.com/documentation/16.0/applications/finance/accounting/taxes.html#taxes-label-invoices) indicates _0% EU_, and the Tax Group name, above the _Total_ line, indicates _0%_.

![The Tax Group name is different from the Label on Invoices](https://www.odoo.com/documentation/16.0/_images/invoice-tax-group.png)

#### Include in Analytic Cost[¶](https://www.odoo.com/documentation/16.0/applications/finance/accounting/taxes.html#include-in-analytic-cost "Permalink to this headline")

With this option activated, the tax’s amount is assigned to the same **Analytic Account** as the invoice line.

#### Included in Price[¶](https://www.odoo.com/documentation/16.0/applications/finance/accounting/taxes.html#included-in-price "Permalink to this headline")

With this option activated, the total (including the tax) equals the **Sales Price**.

Total = Sales Price = Computed Tax-Excluded price + Tax

For example, a product has a Sales Price of $1000, and we apply a _10% of Price_ tax, which is _included in the price_. We then have:

   
| 
Product’s Sales Price

 | 

Price without tax

 | 

Tax

 | 

Total

 |
| --- | --- | --- | --- |
| 

1,000

 | 

900.10

 | 

90.9

 | 

1,000.00

 |

Note

-   **Invoices**: By default, the Line Subtotals displayed on your invoices are _Tax-Excluded_. To display _Tax-Included_ Line Subtotals, go to , and select _Tax-Included_ in the **Line Subtotals Tax Display** field, then click on _Save_.
    
-   **eCommerce**: By default, the prices displayed on your eCommerce website are _Tax-Excluded_. To display _Tax-Included_ prices, go to , and select _Tax-Included_ in the **Product Prices** field, then click on _Save_.
    

#### Affect Base of Subsequent Taxes[¶](https://www.odoo.com/documentation/16.0/applications/finance/accounting/taxes.html#affect-base-of-subsequent-taxes "Permalink to this headline")

With this option, the total tax-included becomes the taxable basis for the other taxes applied to the same product.

You can configure a new [Group of Taxes](https://www.odoo.com/documentation/16.0/applications/finance/accounting/taxes.html#taxes-computation) to include this tax, or add it directly to a product line.

![The eco-tax is taken into the basis of the 21% VAT tax](https://www.odoo.com/documentation/16.0/_images/subsequent-line.png)

Warning

The order in which you add the taxes on a product line has no effect on how amounts are computed. If you add taxes directly on a product line, only the tax sequence determines the order in which they are applied.

To reorder the sequence, go to , and drag and drop the lines with the handles next to the tax names.

![The taxes' sequence in Odoo determines which tax is applied first](https://www.odoo.com/documentation/16.0/_images/list-sequence.png)

![The taxes' sequence in Odoo determines which tax is applied first](https://www.odoo.com/documentation/16.0/_images/list-sequence.png)

See also

-   [Fiscal positions (tax and account mapping)](https://www.odoo.com/documentation/16.0/applications/finance/accounting/taxes/fiscal_positions.html)
    
-   [B2B (tax excluded) and B2C (tax included) pricing](https://www.odoo.com/documentation/16.0/applications/finance/accounting/taxes/B2B_B2C.html)
    
-   [TaxCloud integration](https://www.odoo.com/documentation/16.0/applications/finance/accounting/taxes/taxcloud.html)
    
-   [Tax return (VAT declaration)](https://www.odoo.com/documentation/16.0/applications/finance/accounting/reporting/tax_returns.html)
    

![The eco-tax is taken into the basis of the 21% VAT tax](https://www.odoo.com/documentation/16.0/_images/subsequent-line.png)