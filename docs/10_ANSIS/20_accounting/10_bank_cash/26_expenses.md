---
title: Expenses
summary: Accounting --> Getting Started --> Configuration --> Expenses
authors: Wilson Loh
date: 2023-07-01
---

## **Purpose**

The purpose of this documentation is to outline the use cases and processes associated within the  **Expenses** application of ANSIS 15. We'll go over the app configuration, as well as Expense Product configuration.

We'll then show you how to enter, submit, post, approve, and charge expenses to the client.

## **Process**

To get started, navigate to the **Expenses** app.

![ANSIS text and image block](https://hibou.io/web/image/75456/hibou15-expenses-app.jpg?access_token=af700ed3-be3a-4380-87bc-b27a6ba939a4)

### Configuring Expenses

Within the **Expenses** application, click on [CONFIGURATION](https://hibou.io/docs/accounting-3/expenses-79#) > [SETTINGS](https://hibou.io/docs/accounting-3/expenses-79#). Here you'll see the following options:

![](https://hibou.io/web/image/74004/Screen%20Shot%202021-09-30%20at%203.56.57%20PM.png?access_token=dced5888-0eee-407b-bf92-ed6b0c90aed6)  

**Incoming Emails:** If selected and you have configured your ANSIS system for Custom Email Servers in your General Settings, you will enter an email alias where expenses can be emailed to in order to generate expenses. 

**Reimburse in Payslip:** Select this option to reimburse via payslip rather than separate payments.

**Expense Digitalization (OCR):** This is a paid ANSIS feature that will digitalize scanned/uploaded receipts for a more automated method of expense entry into the **Expenses** app. We will not be covering this functionality in our documentation, but if you need help, please [**contact us**](https://hibou.io/contact-us).  

When you are finished, click [Save](https://hibou.io/docs/accounting-3/expenses-79#).

#### Expense Products

Expense Products are products that have the 'Can be Expensed' checkbox selected. Click [CONFIGURATION](https://hibou.io/docs/accounting-3/expenses-79#) > [EXPENSE PRODUCTS](https://hibou.io/docs/accounting-3/expenses-79#) to see a kanban view of Expense Products, if any exist. 

To create a new Expense Product, click [CREATE](https://hibou.io/docs/accounting-3/expenses-79/ver/13-0-7#). Complete the following form according to these guidelines: 

**Product Name:** The name of the expense. Here are some common expense products to serve as examples:

-   **Travel Expenses \[Internal\]:** Used for airfare, car rental, hotels and other similar expenses that are associated with travel that is not being invoiced back to a customer.
    
-   **Travel Expenses \[Client\]:** Used for airfare, car rental, hotels and other similar expenses that are associated with client travel and will be invoiced back to a customer.
    
-   **Meals and Entertainment \[Internal\]:** Used for meals and food purchases that will not be invoiced back to a customer.
    
-   **Meals and Entertainment \[Client\]:** Used for meals and food purchases that will be invoiced back to a customer.
    
-   **Other Products:** Various products for other expenses, such as office supplies, cell phones, postage, subscriptions, etc.
    

**General Information**

-   **Cost:** This can be configured with a default cost for things like regular monthly expenses (e.g. Cell Phone), but you may wish to leave this at $0 and set the price appropriately on each expense.
    
-   **Unit of Measure:** Enter the unit of measure for this product (e.g. each, per unit).
    
-   **Internal Reference:** When emailing expenses, this code will serve as a subject prefix when submitting expenses via email.Be creation to keep these unique.
    
-   **Company:** If you're in a multi-company environment, leave this blank to apply to all companies. Otherwise, select the individual company to which this applies.
    

**Accounting**

-   **Expense Account**: This should be an expense account that makes sense for the type of product. For example, Travel Expenses are assigned a Travel Expenses expense account. Here are some example expense product and account matchups:
    
-   **Vendor Taxes:** Taxes that are automatically applied when this expense is purchased.
    
-   **Customer Taxes:** Taxes that are automatically applied when this expense is sold/charged to a client.
    

**Invoicing**

-   **Invoicing Policy:** Select when this expense should be invoiced back to the customer, when applicable.
    
-   **Re-Invoice Expenses:** This should be set to 'No' for all expenses that will not be invoiced back to a client. If it will be invoiced back to a client, this should be set to 'At cost' or 'Sales price'.
    

When you're ready, click [SAVE](https://hibou.io/docs/accounting-3/expenses-79/ver/13-0-7#).

![](https://hibou.io/web/image/75766/travel-expense-v15.png?access_token=229a5739-b0e9-4df3-8643-22a8e12b3c25)  

## Important!

#### Configuring Products for Expenses that Will be Invoiced Back to Clients

If you are creating an expense product for an expense that will be invoiced back to the client at cost, create your those products here, but you will need to edit them in either the **Sales** or **Inventory** applications to configure the **Income Account** and the **Expense Account** (under the [Accounting](https://hibou.io/docs/accounting-3/expenses-79#) tab) to use the same expense account, allowing the account to wash out since the cost and the revenue will match.

### Entering Expenses

Employees can enter their own expenses, and those with proper permissions can enter expenses on behalf of employees.

To submit an expense, click [MY EXPENSES](https://hibou.io/docs/accounting-3/expenses-79/ver/13-0-7#) \> [MY EXPENSES to report](https://hibou.io/docs/accounting-3/expenses-79/ver/13-0-7#) or [MY EXPENSES](https://hibou.io/docs/accounting-3/expenses-79/ver/13-0-7#) \> [ALL MY EXPENSES](https://hibou.io/docs/accounting-3/expenses-79/ver/13-0-7#). Once there, click [Create](https://hibou.io/docs/accounting-3/expenses-79#) and enter details in the following form.

![](https://hibou.io/web/image/76057/expense-submission-form-v15.png?access_token=214896b9-3ac6-45fb-8d43-a6ac13e9e9b2)  

**Description:** Describe the expense including enough details to make it easily identifiable ('Hotel for Trip to X Client', for example).

**Category:** Choose the appropriate expense product.

**Amount Paid:** Set the price based on the receipt total.

**Amount Due:** This will be calculated by the system once [SAVED](https://hibou.io/docs/accounting-3/expenses-79#).

**Taxes:** Typically none, but if you have taxes configured, you may choose one or more as needed.

**Bill Reference:** This is a free text field commonly used for something like a receipt or order number.

**Expense Date:** The date the purchase was made.

**Account:** An appropriate expense account, as described above (usually filled by the product).

**Employee:** Select the employee responsible for the expense (usually yourself).

**Customer to Reinvoice:** If the customer is to be invoiced for this expense, select the related Customer's Sales Order from the drop-down list.

**Analytic Account:** If needed (e.g. to bill to a project like potentially large trips or marketing initiatives, or potentially an Analytic Account that is related to the Sale Order chosen earlier.)

**Company: S**elect the company reimbursing this expense.

**Paid By:** Indicate who paid this initial expense.

-   **Employee (to reimburse):** Select this option if an employee made the purchase and needs to be reimbursed.
    
-   **Company:** Select this option if the company paid for the purchase and no reimbursement is needed.
    

When you've completed the form, click [Save](https://hibou.io/docs/accounting-3/expenses-79#). Next, click [Attach receipt](https://hibou.io/docs/accounting-3/expenses-79#) and upload the receipt for this purchase.   

![](https://hibou.io/web/image/76058/attach-receipt-v15.png?access_token=c1ed59f5-0b99-468d-860f-dcfb6fd3db35)  

Once you've uploaded your document(s), you'll also see the  **Receipts** smart button with an updated total of attachments added. The attachment(s) can also be found in the chatter.

![](https://hibou.io/web/image/76059/receipt-smart-button-v15.png?access_token=99d66fe0-24c6-4ca2-a9e9-dc882fe13081)  

### Expense Reports

The next step is submitting your Expenses is to create an Expense Report.  You may do so in a couple of different ways.

You can generate an Expense Report directly from within the Expense record by clicking. [CREATE REPORT](https://hibou.io/docs/accounting-3/expenses-79#)**.**

![](https://hibou.io/web/image/76060/create-report-v15.png?access_token=e5c1e7c2-5dc3-4741-9aa6-6f4c0cbeb2b8)

This will take you to a draft Expense Report Summary where most of the data you've entered will be populated. It will include information for that particular expense and employee.

![](https://hibou.io/web/image/76062/submit-expense-v15.png?access_token=1e00c64c-9af0-4663-8d8b-bba2619674bd)  

Review the information on the page, and if you are finished, click [SAVE](https://hibou.io/docs/accounting-3/expenses-79/ver/15-0-28#) .

If you have additional lines to add, look in the

[Expense](https://hibou.io/docs/accounting-3/expenses-79#) tab at the row below your expense and click [Add a line](https://hibou.io/docs/accounting-3/expenses-79#).  This will open a modal window that will list any unsubmitted expenses for the same employee.  You can use the [create](https://hibou.io/docs/accounting-3/expenses-79#) button at the bottom to go to the typical Expense entry screen and add an expense on-the-fly.

Once saved, that new expense will be added to the list.  To include that, or any listed expense in the **Expense Report** currently being created, place a check in the box to the left of those.  When ready, click [select](https://hibou.io/docs/accounting-3/expenses-79#).

![](https://hibou.io/web/image/76063/create-expense-new-v15.png?access_token=5f285faa-2765-495d-a6c3-8b38ebb84d3e)

You will be returned to the Expense Report screen to review the information on this page. When you're ready, click [SAVE](https://hibou.io/docs/accounting-3/expenses-79/ver/15-0-28#) (if it shows as an option). You can then click [SUBMIT TO MANAGER](https://hibou.io/docs/accounting-3/expenses-79/ver/15-0-28#) if your expense requires approval. If you are a manager, you can click [APPROVE](https://hibou.io/docs/accounting-3/expenses-79/ver/15-0-28#).

![](https://hibou.io/web/image/76064/submit-to-man%20ager.png?access_token=5d7a209a-f2ee-4ace-b19b-10f7d8544d3b)

Another method for creating a report for one or more expenses is from [EXPENSE REPORTS](https://hibou.io/docs/accounting-3/expenses-79#) > [Reports to Approve](https://hibou.io/docs/accounting-3/expenses-79#) and clicking [Create](https://hibou.io/docs/accounting-3/expenses-79#).  It will take you to the same screen we covered above, but you will need to give the expense report a name, and click [Add a line](https://hibou.io/docs/accounting-3/expenses-79#) to include any expenses in the list.

![](https://hibou.io/web/image/76067/reports-to-approve-v15.png?access_token=9b2c0900-9e10-4dab-86fd-496b96a49708)  

The final method for creating a report for one or more expenses is by going to [My Expenses](https://hibou.io/docs/accounting-3/expenses-79#) > [All my expenses](https://hibou.io/docs/accounting-3/expenses-79#). Simply select all expenses to submit, then click [Create Report](https://hibou.io/docs/accounting-3/expenses-79#). This brings you to the draft Expense Summary Report we covered, above.  Using this method, ANSIS will automatically name your expense report with the date range of included expenses, and as is typical, you may edit that.

![](https://hibou.io/web/image/76071/create-expense-report-v15.png?access_token=f072ade3-83a0-4823-b38d-fa41842519fe)  

Once saved, the expense report will be ready to be submitted for approval, even if no manager is listed.  Click [Submit to Manager](https://hibou.io/docs/accounting-3/expenses-79#) to move the report to a [SUBMITTED](https://hibou.io/docs/accounting-3/expenses-79#) status as it awaits approval.

![](https://hibou.io/web/image/76072/submitted-expense-v15.png?access_token=40e8484d-f940-41a5-8a7b-5c199e4bf0b2)  

## Good to Know!

Sometimes when you transition from an expense to the expense summary, the document count won't update. You can click [Save](https://hibou.io/docs/accounting-3/expenses-79#) on the summary and reload the page to make sure the count is correct.

### Approving Expenses

As an administrator, you can review pending expenses by clicking [Expense Reports](https://hibou.io/docs/accounting-3/expenses-79#) >[reports to Approve](https://hibou.io/docs/accounting-3/expenses-79#).

Here you will see expense reports that have been submitted and await approval. Click into the individual report.

![](https://hibou.io/web/image/76073/expense-to-approve-v15.png?access_token=7918005f-4ca7-475d-9996-1a46cd23d10e)  

If the expense has been created correctly and the appropriate documentation has been attached, click [APPROVE](https://hibou.io/docs/accounting-3/expenses-79/ver/13-0-7#). This will move it to the [APPROVED](https://hibou.io/docs/accounting-3/expenses-79#) stage where you'll Post the expenses.

![](https://hibou.io/web/image/76074/approve-expense-v15.png?access_token=1644528d-1602-44c6-bfab-d6a1c5bc9163)  

If the expense wasn't submitted correctly, for example if the expense is missing a receipt, click [Refuse](https://hibou.io/docs/accounting-3/expenses-79#).

![](https://hibou.io/web/image/76075/refue-expense-v15.png?access_token=f2f18b9d-74dc-477e-92e5-074261e41a7f)  

Enter a reason for refusal, then click [Refuse](https://hibou.io/docs/accounting-3/expenses-79#) again.

![](https://hibou.io/web/image/76076/refuse-expense-reason-v15.png?access_token=949700c1-d098-4ebe-af25-5316cc2ba15a)  

### Posting Expenses

If you're not coming directly from within an approved expense report, you can view the reports ready to post by clicking [Expense Reports](https://hibou.io/docs/accounting-3/expenses-79#) > [Reports to Post](https://hibou.io/docs/accounting-3/expenses-79#) and selecting an expense report to post from the list.

This page is your final review. If everything still looks correct, click [POST JOURNAL ENTRIES](https://hibou.io/docs/internal-documentation-2/expenses-45#) moving the status to [POSTED](https://hibou.io/docs/accounting-3/expenses-79#).

![](https://hibou.io/web/image/76078/post-journal-entrie-for-expense-v15.png?access_token=b223a1aa-d4cf-40df-89f2-bcdcbfbbab4c)  

Once entries are posted, one of two things will happen.

If **Paid By** was set to **Company**, there will be no further action until the charge hits a card or bank, at which point it will be reconciled. This expense will be marked with a green banner saying [IN PAYMENT](https://hibou.io/docs/accounting-3/expenses-79/ver/15-0-28#) (or [PAID](https://hibou.io/docs/accounting-3/expenses-79/ver/15-0-28#) if the payment is reconciled to a bank statement.)

![](https://hibou.io/web/image/76082/done-expense-v15.png?access_token=86fb0aa2-9be8-447a-b09c-adb6c12e25b8)  

If **Paid By** was **Employee (to Reimburse)**, the status will change to [Posted](https://hibou.io/docs/accounting-3/expenses-79#) and you'll have the option to [Register Payment](https://hibou.io/docs/accounting-3/expenses-79#) directly from the expense. The unpaid expense will also be listed under [Expense Reports](https://hibou.io/docs/accounting-3/expenses-79#) > [reports tO PAY](https://hibou.io/docs/accounting-3/expenses-79/ver/13-0-7#) where you'll be able to register payment which will move the status to [DONE](https://hibou.io/docs/accounting-3/expenses-79#).

![](https://hibou.io/web/image/76083/register-payment-v15.png?access_token=1288c6c6-319c-40fa-b0b1-e4dd5eb0dc71)  

The Register Payment modal window allows the selection of the payment details, and pre-fills the **Memo** field with the employee's name and descriptions of all the related expenses.  Review and edit as needed, then click [Create Payment](https://hibou.io/docs/accounting-3/expenses-79#) to complete the process. 

![](https://hibou.io/web/image/76084/create-payment-on-expense-v15.png?access_token=1128beaa-f2d2-49df-81db-a59611120697)  

The result is an expense report with a green banner saying [IN PAYMENT](https://hibou.io/docs/accounting-3/expenses-79#) (or [PAID](https://hibou.io/docs/accounting-3/expenses-79#) if the payment is reconciled to a bank statement.)

![](https://hibou.io/web/image/76085/in-payment-expense-v15.png?access_token=0846e5c0-a4f1-4007-9ce5-7fb7466d6dc8)  

### Re-Invoicing to Clients

In this example, we'll click [Approve](https://hibou.io/docs/accounting-3/expenses-79#) on an expense configured to "Customer to Reinvoice".  You'll see the related, open Sales Order in the Expense lines.

![](https://hibou.io/web/image/76087/customer-to-reinvoice-v15.png?access_token=c8faf3ac-3771-42a5-b8c2-d6b019f8c402)  

Navigate to the Sales application to find the Sale Order.  You can see the entry was created and there's a smart button that links back to the related  **Expenses**.

![](https://hibou.io/web/image/76091/expense-button-on-SO-v15.png?access_token=86005904-def6-47db-bcad-ba6f93dbcb85)  

Good to Know!

**Enter an expense via email:**

An employee set up in the system can create an email addressed to the email alias you set up in configuration steps at the beginning of this document (e.g. expense@mycompany.com), with a subject line that exactly matches the "Reference" of the expense product (e.g. TRAV-CLIENT) with an attached image of a receipt.  The system will receive this, create the expense and send a verification response to the sender.