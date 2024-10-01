---
title: Analytic Accounting
summary: Accounting --> Analytic Accounting
authors: Wilson Loh
date: 2022-04-20
---

## **Purpose**

This documentation outlines the use cases and processes associated with analytic accounting in the Accounting application of Odoo 15.

An **Analytic Account** contains accounting entries but is not bound to legal constraints, meaning you can create a Chart of Analytic Accounts that is completely your own and do with it as you wish.

Analytic Accounts are helpful for keeping track of specific costs and revenues. For example, you can make an Analytic Account called 'Administration' to track of all your administrative costs. An analytic account is comprised of **Analytic Entries,** which are similar to journal entries. These are lines that give you a clear view of your analytic account's costs and revenues, and are generally created when various Odoo documents are validated. You can also create manually analytic Entries.

You can use Analytic Tags to further refine analytic entries. For example, you could make tags for different teams in a department, you can then filter the list of analytic entries to view only those with a specific tag.

## **Processes**

To get started, navigate to the **Accounting** app.

![](https://hibou.io/web/image/76194/hibou15-accounting-app.jpg?access_token=92fe0e5c-bcf5-4650-8b97-8803fcf30b88)  

### Configuring Analytic Accounting

![Odoo CMS - a big picture](https://hibou.io/web/image/76195/analytic-accounting-v15.png?access_token=ebb54cdf-9705-426c-8946-0daad1052a4c)

### Creating an Analytic Account 

Go to  [Configuration](https://hibou.io/docs/accounting-3/analytic-accounting-91#) > [Analytic Accounting](https://hibou.io/docs/accounting-3/analytic-accounting-91#) > [Analytic Accounts](https://hibou.io/docs/accounting-3/analytic-accounting-91#).

On this page, you will see a list of all Analytic Accounts. Click the [create](https://hibou.io/docs/accounting-3/analytic-accounting-91#) button to create a new Analytic Account. Here you'll see a blank form where you'll enter information for your new Analytic Account.

**Analytic Account**: Add a name for the account; this is the only required field.

**Customer:** If this account applies to one customer only, select them here.

**Reference**: Enter a word or phrase to reference this account quickly.  

**Group:** If this account should be grouped with other analytic accounts, select or create the group here.

When ready, click [Save](https://hibou.io/docs/accounting-3/analytic-accounting-91#).

![](https://hibou.io/web/image/76196/analytic-account-creation-v15.png?access_token=cacf3021-52fc-4595-a0fb-cda92075685a)  

### Generating an Analytic Entry

Making an analytic entry for an analytic account is easy!

Let's say, for example, you'd like to record the cost of a vendor bill in an analytic account. When adding a line item for the bill, simply choose the Analytic Account you desire from the dropdown menu!

When we [post](https://hibou.io/docs/accounting-3/analytic-accounting-91#) this vendor bill, the analytic accounting entry will be generated along with the other accounting items.

![Odoo CMS - a big picture](https://hibou.io/web/image/76199/bill-analytic-accounting-v15.png?access_token=bb173cf7-6bae-4d66-b76c-ef459180455b)

![Odoo CMS - a big picture](https://hibou.io/web/image/76200/analytic-item-v15.png?access_token=b0b78ac9-8e72-4162-afd8-bf3156ff1607)

To take a look at the analytic entries of an analytic account, go to [Configuration](https://hibou.io/docs/accounting-3/analytic-accounting-91#) > [Analytic Accounting](https://hibou.io/docs/accounting-3/analytic-accounting-91#) >[Analytic Accounts](https://hibou.io/docs/accounting-3/analytic-accounting-91#) then, click the desired account from the list.

![Odoo CMS - a big picture](https://hibou.io/web/image/76201/analytic-accounts-list-v15.png?access_token=4525d43e-9559-466a-bfb3-ae9c2108f738)  

You will now see three smart buttons that will take you to related  Budgets,  Gross Margins,  and  Vendor Bills. 

 ![](https://hibou.io/web/image/76202/smart-buttons-on-analytic-account-v15.png?access_token=89c4d87c-f509-4c18-9d86-379db9532777)

### Manually Creating an Analytic Entry

In the **Accounting** application, click [configuration](https://hibou.io/docs/accounting-3/analytic-accounting-91#) > [management](https://hibou.io/docs/accounting-3/analytic-accounting-91#) > [Analytic Items](https://hibou.io/docs/accounting-3/analytic-accounting-91#). Once there, click [Create](https://hibou.io/docs/accounting-3/analytic-accounting-91#) and enter the details of the entry into the form that displays.

![](https://hibou.io/web/image/76203/manual-analytic-entry-v15.png?access_token=bc057127-ca7d-46a4-97f8-d08e19ab7bd4)  

**Analytic Entry**

-   **Description:** Enter the asset.
    
-   **Analytic Account:** Select the Analytic Account to record this asset.
    
-   **Tags:** Select any applicable tags.
    
-   **Ref.:** Enter any pertinent reference.
    
-   **Partner:** If applicable select a Partner.
    
-   **Date:** Enter the date of acquisition.
    

**Amount**

-   **Amount:** Enter the amount of purchase.
    
-   **Quantity:** Enter the quantity of item(s) purchased.
    
-   **Product:** If there is a related asset product, select it here.
    
-   **Unit of Measure:** Enter the unit of measure for this asset.
    

**Accounting**

-   **Financial Account:** This field will auto-populate.
    
-   **Journal Item:** Select or Create a journal Item, if desired.
    

When ready, click [Save](https://hibou.io/docs/accounting-3/analytic-accounting-91#).