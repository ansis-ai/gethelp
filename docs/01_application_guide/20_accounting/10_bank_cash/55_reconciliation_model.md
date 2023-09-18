---
title: Reconciliation Model
summary: Accounting --> Bank & Cash --> Reconciliation Model
authors: Wilson Loh
date: 2022-01-18
---

Once the bank statements are correctly imported, it is essential to _reconcile_ the records properly and ensure all _Journal Entries_ are balanced and in agreement. To ease and speed up the reconciliation process, you can configure **Reconciliation Models**, which are particularly useful with recurrent entries such as bank fees.

Note

Reconciliation Models are also useful to handle _Cash Discounts_. Please refer to [this documentation](https://www.odoo.com/documentation/16.0/applications/finance/accounting/customer_invoices/cash_discounts.html) for more information.

## Types of Reconciliation Models[¶](https://www.odoo.com/documentation/16.0/applications/finance/accounting/bank/reconciliation_models.html#types-of-reconciliation-models "Permalink to this headline")

There are three types of Reconciliation Models:

1.  [Write-off Button](https://www.odoo.com/documentation/16.0/applications/finance/accounting/bank/reconciliation_models.html#reconciliation-models-button)
    
2.  [Suggestion of counterpart values](https://www.odoo.com/documentation/16.0/applications/finance/accounting/bank/reconciliation_models.html#reconciliation-models-suggestion)
    
3.  [Match existing invoices/bills](https://www.odoo.com/documentation/16.0/applications/finance/accounting/bank/reconciliation_models.html#reconciliation-models-match)
    

### Manually create a write-off on clicked button[¶](https://www.odoo.com/documentation/16.0/applications/finance/accounting/bank/reconciliation_models.html#manually-create-a-write-off-on-clicked-button "Permalink to this headline")

When you are reconciling an entry with an _Open Balance_, you can use the buttons available under the _Manual Operations_ tab to pre-fill all the values automatically, before validating the reconciliation. Each button is a different Reconciliation Model.

![Example of a Reconciliation Model with a write-off button in Odoo Accounting](https://www.odoo.com/documentation/16.0/_images/reconciliation_models_button.png)

![Example of a Reconciliation Model with a write-off button in Odoo Accounting](https://www.odoo.com/documentation/16.0/_images/reconciliation_models_button.png)

### Suggest counterpart values[¶](https://www.odoo.com/documentation/16.0/applications/finance/accounting/bank/reconciliation_models.html#suggest-counterpart-values "Permalink to this headline")

This type of Reconciliation Model suggests immediately counterpart values that only need to be validated. This automation is based on a set of rules defined in the reconciliation model.

![Example of a Reconciliation Model that suggests counterpart values in Odoo Accounting](https://www.odoo.com/documentation/16.0/_images/reconciliation_models_suggestion.png)

![Example of a Reconciliation Model that suggests counterpart values in Odoo Accounting](https://www.odoo.com/documentation/16.0/_images/reconciliation_models_suggestion.png)

### Match existing invoices/bills[¶](https://www.odoo.com/documentation/16.0/applications/finance/accounting/bank/reconciliation_models.html#match-existing-invoices-bills "Permalink to this headline")

This type of Reconciliation Model automatically selects the right Customer Invoice or Vendor Bill that matches the payment. All that is left to do is to validate the entry. This automation is based on a set of rules defined in the reconciliation model.

![Example of a Reconciliation Model that matches existing invoices and bills automatically in Odoo Accounting](https://www.odoo.com/documentation/16.0/_images/reconciliation_models_match.png)

![Example of a Reconciliation Model that matches existing invoices and bills automatically in Odoo Accounting](https://www.odoo.com/documentation/16.0/_images/reconciliation_models_match.png)

## Configuration[¶](https://www.odoo.com/documentation/16.0/applications/finance/accounting/bank/reconciliation_models.html#configuration "Permalink to this headline")

To manage or create new **Reconciliation Models**, go to . Alternatively, you can also open this menu from the Accounting Overview, by going to your Bank Journal card, clicking on the three little dots, and then on _Reconciliation Models_.

![Open the Reconciliation Model menu from the overview dashboard in Odoo Accounting](https://www.odoo.com/documentation/16.0/_images/reconciliation_models_overview.png)

Important

The first entry, named _Invoices Matching Rule_, is the one responsible for the current matching of invoices and bills. Therefore, it is advised to leave it at the top of the list and not to delete it.

Open the model you want to modify, or click on _Create_ to create a new one, then fill out the form.

![Open the Reconciliation Model menu from the overview dashboard in Odoo Accounting](https://www.odoo.com/documentation/16.0/_images/reconciliation_models_overview.png)

### Type[¶](https://www.odoo.com/documentation/16.0/applications/finance/accounting/bank/reconciliation_models.html#type "Permalink to this headline")

See [above](https://www.odoo.com/documentation/16.0/applications/finance/accounting/bank/reconciliation_models.html#reconciliation-models-types) for an explanation about the different types of Reconciliation Models.

Note

If the _Documents_ application is installed on your database, an additional **Activity type** field appears when _To check_ is ticked. Selecting the value _Reconciliation request_ implies that, whenever you use this model, a _Request Document_ window pops up to request a document from a user.

### Conditions on Bank Statement Line[¶](https://www.odoo.com/documentation/16.0/applications/finance/accounting/bank/reconciliation_models.html#conditions-on-bank-statement-line "Permalink to this headline")

Define here all the conditions that are required for a Reconciliation Model to be applied.

Important

If a record matches with several Reconciliation Models, the first one in the _sequence_ of models will be applied. The sequence is simply the order of the models in the _list view_. They can be rearranged by dragging-and-dropping the handle next to the name.

![Conditions for the Reconciliation Model to be applied in Odoo Accounting](https://www.odoo.com/documentation/16.0/_images/reconciliation_models_conditions.png)

![Conditions for the Reconciliation Model to be applied in Odoo Accounting](https://www.odoo.com/documentation/16.0/_images/reconciliation_models_conditions.png)

### Counterpart Values[¶](https://www.odoo.com/documentation/16.0/applications/finance/accounting/bank/reconciliation_models.html#counterpart-values "Permalink to this headline")

This section comprises the values that are applied by the Reconciliation Model.

If the value to reconcile needs to be written-off in two separate accounts, click on _Add a second line_.

![Counterparts values of a Reconciliation Model in Odoo Accounting](https://www.odoo.com/documentation/16.0/_images/reconciliation_models_counterparts.png)

![Counterparts values of a Reconciliation Model in Odoo Accounting](https://www.odoo.com/documentation/16.0/_images/reconciliation_models_counterparts.png)


## **Purpose**

The purpose of this documentation is to go over the different reconciliation models in the **Accounting** application of Odoo 15.

Reconciliation in this case refers to the process of ensuring that the items on your business's bank statement are reconciled (linked) to activities in your business. 

You can use a reconciliation model to manually reconcile bank statement lines to the correct account without needing to select it from the Accounts drop-down menu.

Click [**here**](https://hibou.io/docs/accounting-3/reconciliation-94/ver/15-0-28) to read more about the reconciliation process itself.

## **Processes**

To get started, navigate to the Accounting app.

![Odoo CMS - a big picture](https://hibou.io/web/image/75832/hibou15-accounting-app.jpg?access_token=126d79d9-27e3-4dda-ba77-91df9a534fac)

To get to the reconciliation models, either select the **:** icon on the bank Kanban card from the Account Overview page and select Reconciliation Model or under [Configuration](https://hibou.io/docs/accounting-3/reconciliation-models-625#) > **[Reconciliation Models](https://hibou.io/docs/accounting-3/reconciliation-models-625#)**.

![Odoo CMS - a big picture](https://hibou.io/web/image/75878/reconciliation-model-v15.png?access_token=39ae0f0b-465c-40f5-ae5f-9eefa885787d)

From the Reconciliation Models details list view, click the [CREATE](https://hibou.io/docs/accounting-3/reconciliation-models-625#) button to make a new one.   

![](https://hibou.io/web/image/74446/create-reconciliation-model.png?access_token=71bd2e82-392d-4b4f-833b-996bfb4b7ce1)  

Reconciliation Models have 3 different Types that create different results:

### Button to generate counterpart entry button 

**Name**: Create a name for this Reconciliation Model. 

**Type:**

-   **Button to generate counterpart entry button**: This option will use the bank or cash transaction conditions that you input into the Counterpart entry.
    
-   **For descriptions and examples of the other Reconciliation Model Types, see the other sections below.**
    

**To Check:** This matching rule is used when the user is not certain of all the information in the counterpart.  

**Bank Transaction Conditions**

**Journal Availability**: If one is selected, the reconciliation model will only be available for the Bank/Cash journals. 

Counterpart Entries:   

> Account: Select the G/L account to which this partner's amounts will be written off.  
> Amount Type:

-   Fixed: The Write-off Amount will only be the selected amount. (see Write-off Amount below).
    
-   Percentage of balance: The Write-off Amount will be a percentage of the total. (see Write-off Amount below).
    
-   Percentage of statement line: This defines the percentage of the contents of expenditures/revenue of the report line.
    
-   From the Label: will be selected when it's from the label type itself.
    

Journal: Leave this field empty to have it apply to all Journals with reconciliation enabled. To have this model apply to one Journal only, select it here.  
Amount: Enter the amount

Taxes: When the reconciliation model is applied, the selected Taxes will be applied.

Analytic Account: Select Analytic Account if tracking specific costs and revenues.

Tax Included in Price: Forces the tax to be managed as a price included tax.  

Journal Item Label: Auto-fills with the Reconciliation Model Name. This field can not be change

After completed, click on [SAVE](https://hibou.io/docs/accounting-3/reconciliation-models-625/ver/15-0-28#).  

![Odoo CMS - a big picture](https://hibou.io/web/image/75881/reconciliation-model-button-v15.png?access_token=89c3b64c-844b-47f0-b9fe-bf80508dd467)

### Rule to suggest counterpart entry 

**Name**: Create a name for this Reconciliation Model. 

Type:

-   Rule to suggest counterpart entry: This option is used when there are bank transaction conditions along with partner mapping.
    

Auto- Validate:  Validate the statement line automatically (based on your rule).

[Bank Transaction Conditions](https://hibou.io/docs/accounting-3/reconciliation-models-625#) tab:

Journal Availability: If one is selected, the reconciliation model will only be available for those journals. 

 Amount Type: 

-   Received: Only apply to amounts received.
    
-   Paid: Only apply to amounts paid.
    
-   Paid/Received: Apply on both amounts paid and received
    

**Amount Condition:** The reconciliation model will only be applied when the amount being lower, greater than, or between a specified amount.

Label: Filter for label text that contains, does not contain, or matches the supplied Regex expression.  
Note: Filter for note text that contains, does not contain, or matches the supplied Regex expression.  
Transaction Type: Filter for the text that contains, does not contain, or matches the supplied Regex expression.  
Partner should be Set: When enabled, you'll be able to select a Partner (customer or vendor) or Partner Category that must be set on the transaction for this model to apply.

> Counterpart Entries:  
>   
> Account: Select the G/L account to which this partner's amounts will be written off.  
>   
> Amount Type:

-   Fixed: The Write-off Amount will only be the selected amount. 
    
-   Percentage of balance: The Write-off Amount will be a percentage of the total. 
    
-   Percentage of statement line: This defines the percentage of the contents of expenditures/revenue of the report line.  
    From the Label:  will be selected when it's from the label type itself.  
    

**Amount:** The amount for the counterpart entries/model.

Tax: When the reconciliation model is applied, the selected Tax will be applied.

Analytic Account: Select Analytic Account if tracking specific costs and revenues.

Tax included in Price: When the reconciliation model is applied, the selected Taxes that are included in the price will be applied.

Journal Item Label: Auto-fills with the Reconciliation Model Name. This field can not be changed.

![](https://hibou.io/web/image/75882/rule-to-suggest-v15.png?access_token=02706447-871a-4dc0-9ce4-157037f7a14c)  

[Partner Mapping](https://hibou.io/docs/accounting-3/reconciliation-models-625#) tab:  

**Find Text in Label:** To match the text at the beginning of the line (in Label from the Bank Transactions Conditions tab) simply fill in your text.

Find Text in Notes: To match the text at the beginning of the line (in note from the Bank Transactions Conditions tab) simply fill in your text.

Partner Mapping Lines: To match the text at the beginning of the line (in Label or note) simply fill in your text.  

![](https://hibou.io/web/image/74454/partner-mapping-tab.png?access_token=cf1a6e5e-41fe-47c0-87db-34b3372fed28)  

After completed, click on [SAVE](https://hibou.io/docs/accounting-3/reconciliation-models-625/ver/15-0-28#).  

## Good To Know!

Without a **Label** on the label line, Odoo will suggest using this reconciliation model on all items that do not have a **Partner** during reconciliation.

In the **Label** field, you can use the wildcard "^" to indicate that any text or characters can proceed the **Reconciliation Model's Name**.

![Odoo CMS - a big picture](https://hibou.io/web/image/74458/label-line.png?access_token=22824680-21f1-45f5-9e61-27086ff9da6f)

### Rule to match invoices/bills 

**Name**: Create a name for this Reconciliation Model. 

**Type:**

    **Rule to Match invoices/bills**: This option is used when there are bank transaction conditions along with partner mapping.  
Auto Validate: As this method is not very accurate due to missing information from imported bank statements, we don't recommend using Auto-validate.  That way, you have a chance to review matches before validating

Search Month Limit: Number of months in the past to consider entries from when applying this model  
Matching Order: Oldest first or Newest first.  

[Bank Transaction Conditions](https://hibou.io/docs/accounting-3/reconciliation-models-625#) tab:

Journal Availability: If one is selected, the reconciliation model will only be available for the Bank/Cash journals. 

Amount Type:

-   Received: Only apply to amounts received.
    
-   Paid: Only apply to amounts paid.
    
-   Paid/Received: Apply on both amounts paid and received
    

Amount Condition: The reconciliation model will only be applied when the amount is lower than, greater than or between the specific amount.

Payment Tolerance: Difference accepted in case of underpayment. This can be either in percentage or in amount.

Same Currency:  Restrict to propositions having the same currency as the statement line.

Match Invoice/bill with: (Label/Note/Reference): Search within the statement's label to find the invoice or payment reference. 

Label:  

-   Contains: Odoo will search for keywords contained in the bank statement line.
    
-   Not Contains: Odoo will search for keywords not contained in the bank statement line.
    
-   Match Regex: This allows you to define your own search keyword in bank statement lines.
    

Note:   

-   **Contains:** The proposition note must contain this string (case sensitive).
    
-   **Not Contains:** Negation of "Contains."
    
-   **Match Regex**: Define your own regular expression.  
    

Transaction type:   

-   Contains: Odoo will search for keywords contained in the bank statement line.
    
-   Not Contains: Odoo will search for keywords not contained in the bank statement line.
    
-   Match Regex: This allows you to define your own search keyword in bank statement lines.
    

Partner should be set: The reconciliation model will only be applied when a customer/vendor is set

![](https://hibou.io/web/image/75883/rule-to-match.png?access_token=06e1bb99-bc25-4369-80c6-637299dfe715)  

[Partner Mapping](https://hibou.io/docs/accounting-3/reconciliation-models-625#) tab:

**Find Text in Label:** To match the text at the beginning of the line (in Label from the Bank Transactions Conditions tab) simply fill in your text.

**Find Text in Notes**: To match the text at the beginning of the line (in note from the Bank Transactions Conditions tab) simply fill in your text.

**Partner Mapping Lines:** To match the text at the beginning of the line (in Label or note) simply fill in your text.

![](https://hibou.io/web/image/75884/partner-mapping-tab-v15.png?access_token=2ccf023d-b296-4c72-9693-b0d393b6f2cc)  
After completed, click on [SAVE  
](https://hibou.io/docs/accounting-3/reconciliation-models-625/ver/15-0-28#)

## Good to Know!

We also don't recommend this method as you will have to select the G/L account in the reconciliation wizard for each amount.