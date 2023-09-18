---
title: Fiscal Positions
summary: Accounting --> Taxes --> Fiscal Positions (tax and account mapping)
authors: Wilson Loh
date: 2022-04-20
---

Default taxes and accounts are set on products and customers to create new transactions on the fly. However, depending on the customers’ and providers’ localization and business type, using different taxes and accounts for a transaction might be necessary.

**Fiscal positions** allow the creation of rules to adapt the taxes and accounts used for a transaction automatically.

They can be applied [automatically](https://www.odoo.com/documentation/16.0/applications/finance/accounting/taxes/fiscal_positions.html#fiscal-positions-automatic), [manually](https://www.odoo.com/documentation/16.0/applications/finance/accounting/taxes/fiscal_positions.html#fiscal-positions-manual), or [assigned to a partner](https://www.odoo.com/documentation/16.0/applications/finance/accounting/taxes/fiscal_positions.html#fiscal-positions-partner).

## Configuration[¶](https://www.odoo.com/documentation/16.0/applications/finance/accounting/taxes/fiscal_positions.html#configuration "Permalink to this headline")

### Tax and account mapping[¶](https://www.odoo.com/documentation/16.0/applications/finance/accounting/taxes/fiscal_positions.html#tax-and-account-mapping "Permalink to this headline")

To edit or create a fiscal position, go to , and open the entry to modify or click on New.

The mapping of taxes and accounts is based on the default taxes and accounts defined in the product form.

-   To map to another tax or account, fill out the right column (Tax to Apply/ Account to Use Instead).
    

![Example of a fiscal position's tax mapping](https://www.odoo.com/documentation/16.0/_images/fiscal-positions-tax-mapping.png) ![Example of a fiscal position's account mapping](https://www.odoo.com/documentation/16.0/_images/fiscal-positions-account-mapping.png)

-   To remove a tax, leave the field Tax to Apply empty.
    
-   To replace a tax with several other taxes, add multiple lines using the same Tax on Product.
    

Note

The mapping only works with _active_ taxes. Therefore, make sure they are active by going to .

![Example of a fiscal position's tax mapping](https://www.odoo.com/documentation/16.0/_images/fiscal-positions-tax-mapping.png)

![Example of a fiscal position's account mapping](https://www.odoo.com/documentation/16.0/_images/fiscal-positions-account-mapping.png)

## Application[¶](https://www.odoo.com/documentation/16.0/applications/finance/accounting/taxes/fiscal_positions.html#application "Permalink to this headline")

### Automatic application[¶](https://www.odoo.com/documentation/16.0/applications/finance/accounting/taxes/fiscal_positions.html#automatic-application "Permalink to this headline")

To automatically apply a fiscal position following a set of conditions, go to , open the fiscal position to modify, and tick Detect Automatically.

From there, several conditions can be activated:

-   VAT Required: the customer’s VAT number must be present on their contact form.
    
-   Country Group and Country: the fiscal position is only applied to the selected country or country group.
    

![Example of a fiscal position automatic application settings](https://www.odoo.com/documentation/16.0/_images/fiscal-positions-automatic.png)

Note

Taxes on **eCommerce orders** are automatically updated once the customer has logged in or filled out their billing details.

Important

The fiscal positions’ **sequence** defines which fiscal position is applied if all conditions set on multiple fiscal positions are met simultaneously.

For example, suppose the first fiscal position in a sequence targets _country A_ while the second fiscal position targets a _country group_ that comprises _country A_. In that case, only the first fiscal position will be applied to customers from _country A_.

![Example of a fiscal position automatic application settings](https://www.odoo.com/documentation/16.0/_images/fiscal-positions-automatic.png)

### Manual application[¶](https://www.odoo.com/documentation/16.0/applications/finance/accounting/taxes/fiscal_positions.html#manual-application "Permalink to this headline")

To manually select a fiscal position, open a sales order, invoice, or bill, go to the Other Info tab and select the desired Fiscal Position before adding product lines.

![Selection of a fiscal position on a sales order, invoice, or bill](https://www.odoo.com/documentation/16.0/_images/fiscal-positions-manual.png)

![Selection of a fiscal position on a sales order, invoice, or bill](https://www.odoo.com/documentation/16.0/_images/fiscal-positions-manual.png)

### Assign to a partner[¶](https://www.odoo.com/documentation/16.0/applications/finance/accounting/taxes/fiscal_positions.html#assign-to-a-partner "Permalink to this headline")

To define which fiscal position must be used by default for a specific partner, go to , select the partner, open the Sales & Purchase tab, and select the Fiscal Position.

![Selection of a fiscal position on a customer](https://www.odoo.com/documentation/16.0/_images/fiscal-positions-customer.png)

![Selection of a fiscal position on a customer](https://www.odoo.com/documentation/16.0/_images/fiscal-positions-customer.png)

[Edit on GitHub](https://github.com/odoo/documentation/edit/16.0/content/applications/finance/accounting/taxes/fiscal_positions.rst)

##### On this page

-   -   -   [Tax and account mapping](https://www.odoo.com/documentation/16.0/applications/finance/accounting/taxes/fiscal_positions.html#tax-and-account-mapping)
    -   -   [Automatic application](https://www.odoo.com/documentation/16.0/applications/finance/accounting/taxes/fiscal_positions.html#automatic-application)
        -   [Manual application](https://www.odoo.com/documentation/16.0/applications/finance/accounting/taxes/fiscal_positions.html#manual-application)
        -   [Assign to a partner](https://www.odoo.com/documentation/16.0/applications/finance/accounting/taxes/fiscal_positions.html#assign-to-a-partner)