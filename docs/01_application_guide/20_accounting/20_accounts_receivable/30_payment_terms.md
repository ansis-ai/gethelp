---
title: Payment Terms
summary: Accounting --> Getting Started --> Configuration --> Payment Terms
authors: Wilson Loh
date: 2023-07-01
---


This documentation outlines how to set up and use Payment Terms in the **Accounting** app of PerfectWORK.
<br/><br/>
Payment terms designate the schedule to pay the full balance of an invoice. You can apply payment terms to both your customer and vendor invoices.
<br/><br/>
You can set payment terms on a contact, quotation, sale order, customer invoice, request for quotation, purchase order, or vendor bill.


## Creating a Payment Term

Once there, click on [Configuration](https://hibou.io/docs/accounting-3/payment-terms-84#) > [Invoicing](https://hibou.io/docs/accounting-3/payment-terms-84#) > [Payment Terms](https://hibou.io/docs/accounting-3/payment-terms-84#).

Here you'll see a list of existing payment terms, which you can view and edit. To create new payment terms, click [Create](https://hibou.io/docs/accounting-3/payment-terms-84#) and complete the form as follows.

![](https://hibou.io/web/image/73716/Screen%20Shot%202021-09-28%20at%209.14.15%20AM.png?access_token=15c9a1f1-1035-4973-8199-4faeeb8f9c42)  

-   **Payment Terms**: The name of your payment terms. Typically summarizes the payment schedule for that payment term.
    
-   **Company**: This field displays in a multi-company environment. You can leave the field blank to apply to all companies, or make a selection to apply to one company only.
    
-   **Description on the Invoice:** You can input a description of the payment terms conditions in more detail in the description so that your customers will understand the conditions to complete payment.
    
-   **Terms:** These lines represent the schedule for a set portion of the invoice's amount. To set the terms, you will need to add a new line for every condition.
    

As you add or edit lines, you can use the  icon to the left of a line (Only accessible when in Edit mode in the Payment Term) to move it up or down, by clicking and dragging.  This will be helpful because your last line should be the 'Balance' line that. the system pre-fills for you.

To add a new line, click [ADD A LINE](https://hibou.io/docs/accounting-3/payment-terms-84#) and a popup modal will appear.

![](https://hibou.io/web/image/75501/add-a-line-payment-terms-v15.png?access_token=2e656ef7-0125-4364-9eff-2cddc580473e)  

You'll then see a new form where you'll outline your first payment term. We'll go over each option:

**Term Type**

-   **Type:** There are three types of terms that you can use to construct your payment terms. The type is the amount that is due for this line. 
    
    -   **Balance**: The total remaining balance to be paid. You will enter the value of the balance once you close the modal.  You will use this for the last line of the terms.
        
    -   **Percent**: Input a percentage of the total balance to be paid based on the total amount of purchase. 
        
    -   **Fixed Amount**: Input a fixed dollar amount.
        

**Due Date Computation**: This is where you input when the amount you specified above is due. You'll have three options:

-   **Due \_\_\_\_:** Indicate the number of days or the ordinal day of the month (e.g 1st, 15th, 30th) that the invoice is due. This distinction is dependent on the option that is selected.
    
    -   **Days after the invoice date**: This defines how many days a payment is due based on the invoice date.
        
        -   **One the \_\_\_ of the month**: This option is only available is Days after the invoice date is selected. This allows you to select a specific ordinal day of the month in which this payment is due (e.g. 1st, 15th, 30th).
            
    -   **Days after the end of the invoice month**: This defines how many days the payment is due after the end of the invoice month.
        
    -   **Of the following month**: This defines the ordinal day of the following month when the payment is due (e.g.1st, 15th, 30th).
        
    -   **Of the current month**: This degines the ordinal day of the current month when the payment is due (e.g. 1st, 15th, 30th).
        

Once you have these fields set, you can click [SAVE & CLOSE](https://hibou.io/docs/accounting-3/payment-terms-84#) if you only need one line. If you need multiple lines, you can click [SAVE & NEW](https://hibou.io/docs/accounting-3/payment-terms-84#) to save your existing line and get a new line to appear without leaving the modal. 

Once you have your payment terms set and in the desired order, click [SAVE](https://hibou.io/docs/accounting-3/payment-terms-84#). 

![](https://hibou.io/web/image/73719/Screen%20Shot%202021-09-28%20at%209.23.50%20AM.png?access_token=929ed184-9d18-44de-a253-3cbaace03431)  


### End With a Balance

When creating a payment term with multiple lines, it is crucial that the last one is for the **Balance**. This is to ensure the invoice will be paid in full and you won't be left with only a partial payment, or an overpayment. 

### Layaway Example

For our example, we've created a layaway plan which requires a 25% down payment and 25% every 30-days for 3 months.

![](https://hibou.io/web/image/75502/layaway-payment-terms-v15.png?access_token=0da74a24-8a58-4400-b1af-2e78cee4b749)  

!!!Important
        -   The down payment is the first entry. It shows that 25% of the total price is due 0 days after the invoice is created (i.e. same day).
        -   The next payment is the second entry. It shows that 25% of the total price is due 30 days after the invoice is created. 
        -   The next payment is the third entry. It shows that 25% of the total price is due 60 days after the invoice is created.   
        -   The final line is a call for the Balance. We could have simply added another 25% line, but sometimes the totals don't amortize into equal amounts. Configuring the Balance as the final line ensures you'll be paid the appropriate amount.


## Applying Payment Terms

### **Setting Default Payment Terms On Contacts**

You may have certain customers that you have an agreement with on their payment terms. Once you've created the Payment Terms that will apply, you'll need to then apply it to their contact record to ensure the terms apply to sales moving forward.

To do so, open a contact record.  (There are many ways to access contact records, but for this example, we will stay in the **Accounting** app and look at Customers.)  In the **Accounting** app, click [CUSTOMERS](https://hibou.io/docs/accounting-3/payment-terms-84#) > [CUSTOMERS](https://hibou.io/docs/accounting-3/payment-terms-84#).  From the list of partners, select the contact to set the payment terms for.

![](https://hibou.io/web/image/75503/contact-for-payment-terms-v15.png?access_token=5eee4eba-e8f2-4cbc-b549-9843392112bd)  

Click [Edit](https://hibou.io/docs/accounting-3/payment-terms-84#) then navigate to the **[Sales & Purchases](https://hibou.io/docs/accounting-3/payment-terms-84#)** tab. On this tab, you'll see if your contact is a customer, vendor, or both and can apply payment terms to the contact as needed. 

When you're done, click [SAVE](https://hibou.io/docs/accounting-3/payment-terms-84#).  

![PerfectWORK CMS - a big picture](https://hibou.io/web/image/75504/apply-payment-terms-v15.png?access_token=b567d87b-03aa-476d-8980-322403e1e4f3)

### **Applying Payment Terms On Invoices**

If you'd like to set Payment Terms on a customer invoice, While still in the **Accounting** app, go to [CUSTOMERS](https://hibou.io/docs/accounting-3/payment-terms-84#) > [INVOICES](https://hibou.io/docs/accounting-3/payment-terms-84#), then create a new invoice by clicking [CREATE](https://hibou.io/docs/accounting-3/payment-terms-84#).

Due Date: Set the customer on the invoice. If there are any payment terms associated with the customer, they will display automatically in the payment terms field. This can be changed manually if needed.

If the customer does not have default payment terms, or if you removed them from the invoice, you will have an option to set a specific due date or to choose the appropriate payment terms from the drop-down menu. 

Proceed with creating the rest of the invoice, then click [SAVE](https://hibou.io/docs/accounting-3/payment-terms-84#) and [POST](https://hibou.io/docs/accounting-3/payment-terms-84#) when ready.

![PerfectWORK CMS - a big picture](https://hibou.io/web/image/75505/edit-payment-terms-on-rfq-v15.png?access_token=03781766-38a5-47ca-b0cb-60c6af692e61)

### **Applying Payment Terms to Quotations & Sales Orders**  

If you'd like to set Payment Terms per sale, then you'll want to do so through the Quotation or Sales Order itself. To get started, navigate to the **Sales** app.

![PerfectWORK CMS - a big picture](https://hibou.io/web/image/75506/hibou15-sales-app.jpg?access_token=49c01fea-890e-4485-956e-2dbe00a48889)

Once there, click [create](https://hibou.io/docs/accounting-3/payment-terms-84#) to make a new Quotation. 

Set the customer you are generating the Sale Order for. If there are default payment terms associated with the customer, they will display automatically in the payment terms field. This can be changed manually if needed. 

If the customer does not have payment terms set for them, you can choose the correct payment terms from the drop-down menu. 

Proceed with creating the rest of the Sales Order or Quotation, then hit [SAVE](https://hibou.io/docs/accounting-3/payment-terms-84#) and [confirm](https://hibou.io/docs/accounting-3/payment-terms-84#) when ready.  

![PerfectWORK CMS - a big picture](https://hibou.io/web/image/75505/edit-payment-terms-on-rfq-v15.png?access_token=03781766-38a5-47ca-b0cb-60c6af692e61)

### **Applying Payment Terms on Purchase Orders**

If you're making a purchase from one of your vendors that has payment terms, PerfectWORK lets you define those terms as well, to keep your payments on track.

To define payment terms on a purchase order, first navigate to the **Purchase** app. 

![PerfectWORK CMS - a big picture](https://hibou.io/web/image/75507/hibou15-purchase-app.jpg?access_token=b387c99d-09d7-4fcc-902f-70b9c096f04b)

Once there, click [create](https://hibou.io/docs/accounting-3/payment-terms-84#) to make a new Request for Quotation. 

Set the vendor you are creating the Purchase Order for, then navigate to the [Other Information](https://hibou.io/docs/accounting-3/payment-terms-84#) tab and you'll see the Payment Terms field. If there are any payment terms associated with the vendor, they will display automatically in the payment terms field and can be changed as needed.

If the vendor does not have payment terms set for them, you can choose the correct payment terms manually. 

Fill in the remaining details for the Request for Quotation or Purchase Order. When ready, click [SAVE](https://hibou.io/docs/accounting-3/payment-terms-84#), [CONFIRM ORDER](https://hibou.io/docs/accounting-3/payment-terms-84#), or [SEND BY EMAIL](https://hibou.io/docs/accounting-3/payment-terms-84#).   

![PerfectWORK CMS - a big picture](https://hibou.io/web/image/75508/payment-terms-on-purchase-v15.png?access_token=a18810b6-c567-45b7-a146-93d9bd41d04c)

### Payment Terms and Reporting  

### **Aged Receivable**

We've created a Sales Order for a customer on the Layaway plan we created earlier in this document. The total purchase price is $400,000.  They have agreed to pay us 25% today, then 25% at 30 days and 60 days, then at the 90-day mark they will pay the balance. This is what the invoice looks like:

![](https://hibou.io/web/image/75510/test-invoice-for-payment-terms-v15.png?access_token=e6a74d78-fc2d-48d7-9a48-5671c8fea5ff)  

To review Aged Receivables, navigate to the **Accounting** app.

![](https://hibou.io/web/image/75513/hibou15-accounting-app.jpg?access_token=610ed795-b84d-45e3-a639-869b61435d50)  

Once there, navigate to [Reporting](https://hibou.io/docs/accounting-3/payment-terms-84#) > [Partner Reports](https://hibou.io/docs/accounting-3/payment-terms-84#) > [Aged Receivable](https://hibou.io/docs/accounting-3/payment-terms-84#).

Here you can see that PerfectWORK has created three lines for the invoice, due at the agreed intervals under the customer, not including the payment made on the day the order was made:

![](https://hibou.io/web/image/75511/aged-receivable-v15.png?access_token=69e2dc02-2b38-4fef-a91d-795ddb8615a6)  

### **Aged Payable**

In the example below, we entered a vendor bill with a total of $300.00 and we have agreed to pay 50% upon ordering, then the final payment in 15 days. This is what the vendor bill looks like.:

![](https://hibou.io/web/image/75512/test-purchase-v15.png?access_token=9506e20a-ff89-427c-8c09-a965a82b55bc)  

To review Aged Payables, navigate to the **Accounting** app.

![](https://hibou.io/web/image/75513/hibou15-accounting-app.jpg?access_token=610ed795-b84d-45e3-a639-869b61435d50)  

Once there, navigate to [Reporting](https://hibou.io/docs/accounting-3/payment-terms-84#) > [Partner Reports](https://hibou.io/docs/accounting-3/payment-terms-84#) > [Aged payable](https://hibou.io/docs/accounting-3/payment-terms-84#).

Here you can see that PerfectWORK has created vendor bills due under the appropriate vendor. The first is the day the order is placed, the final is due in 15 days.

![](https://hibou.io/web/image/75514/aged-payable-v15.png?access_token=3aa37705-a967-40af-9a47-043843301497)  

## Incoterms in Accounting  

**Incoterms** is an abbreviation of **International Commercial Terms**, its sole purpose is to facilitate the transaction between two parties exporting and importing goods regarding international and global trade. There are 11 Incoterms, each defines the distribution of responsibilities and obligations of the involved parties.

In the **Accounting** app, navigate to [Configuration](https://hibou.io/docs/accounting-3/payment-terms-84#) > [Settings](https://hibou.io/docs/accounting-3/payment-terms-84#). Under **Customer Invoices**, you may select a **Default Incoterm** for your company.

![](https://hibou.io/web/image/74100/incoterm.jpg?access_token=dabda78a-4d6e-4870-9e70-6ca06191a24d)  

### **Use Incoterms in a Vendor Bill**

Navigate to [Vendors](https://hibou.io/docs/accounting-3/payment-terms-84#) > [Bills](https://hibou.io/docs/accounting-3/payment-terms-84#) and click [Create](https://hibou.io/docs/accounting-3/payment-terms-84#). Under the **Other Info** tab you will have the ability to manually set the **Incoterm**, if you have already set a **Default Incoterm**, this field will show the pre-selected Incoterm.

![](https://hibou.io/web/image/75515/incoterms-on-vendor-bill-v15.png?access_token=3b2ab19c-15af-4c33-8f3e-8c4bf3181646)  

### **Use Incoterms in a Customer Invoice**

Navigate to [Customers](https://hibou.io/docs/accounting-3/payment-terms-84/ver/14-0-21#) > [Invoices](https://hibou.io/docs/accounting-3/payment-terms-84/ver/14-0-21) and click [CREATE](https://hibou.io/docs/accounting-3/payment-terms-84/ver/14-0-21#). Under the Other Info tab you will have the ability to manually set the **Incoterm**, if you have already set a **Default Incoterm**, this field will show the pre-selected Incoterm.
