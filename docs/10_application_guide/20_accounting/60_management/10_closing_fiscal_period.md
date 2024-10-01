---
title: Closing Fiscal Period
summary: Accounting --> Management --> Closing Fiscal Period
authors: Wilson Loh
date: 2023-07-01
---

## **Purpose**

This document covers the process of closing a fiscal period in the Accounting application of Odoo 15 to end the year and generate all financial statements that are used to review a company's business operations as well as performance. While you can set your fiscal year to whichever opening and closing dates you would like for your company, the most commonly used dates coincide with the calendar year, meaning it begins on January 1st and ends December 31st.

Before closing out the year and generating your statements, it is advised to complete the following first:

-   Verify all invoices, bills, and expenses have been validated. 
    
-   Complete the reconciliation of cash and bank accounts as well as bank statements to ensure they are in line with bank balances within Odoo, and close suspense accounts to leave them with a $0 balance. 
    
-   Verify balance sheet items and book entries for depreciated journal entries. 
    
-   Verify that deferred revenues are correctly recorded. 
    
-   Verify accrued revenues and expenses. 
    

## **Process**

To get started, navigate to the **Accounting** application. 

![](https://hibou.io/web/image/76237/hibou15-accounting-app.jpg?access_token=8fd00263-a547-4dd1-9a95-eca874609a74)

Use the menu and go to [Configuration](https://hibou.io/docs/accounting-3/closing-fiscal-period-to-end-the-year-1540#) > [Settings](https://hibou.io/docs/accounting-3/closing-fiscal-period-to-end-the-year-1540#), and scroll down to **Fiscal Periods**. 

![](https://hibou.io/web/image/76238/fiscal-period-v15.png?access_token=f96703e8-fe4b-4076-8140-f94034682102)

Here, we will define the end of the fiscal year. By default, it is set to December 31st but we will change the date to that of this writing for the purposes of this workflow. [Save](https://hibou.io/docs/accounting-3/closing-fiscal-period-to-end-the-year-1540#) if you have made any changes. 

## Good to Know

#### Custom Fiscal Years

You can define a fiscal year as being shorter than one year by selecting the Fiscal Years box and configuring it to your needs.  

![](https://hibou.io/web/image/66622/Accountingv14-fiscal-years.png?access_token=fd7bfa75-ad99-4edf-bd87-23023e9545c9)  

### User Permissions

From your dashboard, navigate to the **Settings** Application. 

![](https://hibou.io/web/image/76239/hibou15-settings-app.jpg?access_token=ab36f038-a875-4e55-8927-f415e90c9999)  

Under the **Users** section, select   [Manage users](https://hibou.io/docs/accounting-3/closing-fiscal-period-to-end-the-year-1540#) and select the user to edit.

![](https://hibou.io/web/image/66618/Accountingv14-manage-users.png?access_token=d9d153d7-64a3-4bea-9a8c-419f5a03de7d)  

![](https://hibou.io/web/image/76240/select-user-v15.png?access_token=dfac1eca-6062-4322-9e5e-6fb4d471745d)  

Click  [Edit](https://hibou.io/docs/accounting-3/closing-fiscal-period-to-end-the-year-1540#).

![](https://hibou.io/web/image/76241/edit-contact-v15.png?access_token=90aad974-11ce-48e4-b4c3-11f3984a574b)  

Under the **Accounting** field, we have the different access levels to choose from. Advisors have the highest access rights within Odoo, and are the only ones who are able to modify the Chart of Accounts, reconciliations, and tax adjustments.

Select 'Advisor', then click [save](https://hibou.io/docs/accounting-3/closing-fiscal-period-to-end-the-year-1540#) when complete.

![](https://hibou.io/web/image/76242/save-contact-permissions-v15.png?access_token=99909cf4-3394-4635-963b-a1d7f834f04a)  

### Lock Dates

Make your way back to the **Accounting** app.

![](https://hibou.io/web/image/76243/hibou15-accounting-app.jpg?access_token=89da00e6-7398-4a67-91e0-7c39a95cb980)  

Once there, go to  [Accounting](https://hibou.io/docs/accounting-3/closing-fiscal-period-to-end-the-year-1540#) > [Actions](https://hibou.io/docs/accounting-3/closing-fiscal-period-to-end-the-year-1540#) > [Lock dates](https://hibou.io/docs/accounting-3/closing-fiscal-period-to-end-the-year-1540#). This will open a modal with the following fields:

-   **Journal Entries Lock Date:**  Only advisors will be able to create journal entries prior to the date set. 
    
-   **T****ax Return Lock Date**:  Date after which no users can edit journals related to a tax prior to and including this date.
    
-   **All Users Lock Date:**  The date after which no journal entries may be created or modified by any user. No accounting operations will be allowed after this date.
    

![](https://hibou.io/web/image/76244/lock-fiscal-period-v15.png?access_token=397bb12e-c848-4eaf-84d9-8af9c6ad8da9)  

Click [SAVE](https://hibou.io/docs/accounting-3/closing-fiscal-period-to-end-the-year-1540#) when you are finished. 

Now, go to [Reporting](https://hibou.io/docs/accounting-3/closing-fiscal-period-to-end-the-year-1540#) > [US GAAP](https://hibou.io/docs/accounting-3/closing-fiscal-period-to-end-the-year-1540#) > [Balance Sheet](https://hibou.io/docs/accounting-3/closing-fiscal-period-to-end-the-year-1540#). Make sure the calendar dates reflect the end of the financial year. 

![](https://hibou.io/web/image/67622/Accountingv14-unallocated%20earnings.png?access_token=31095295-766b-422a-b01c-a85c124e5c9b)  

Scroll down to **Unallocated Earnings**. We want to allocate our current year earnings in order to have the total **Current Year Unallocated Earnings** report a balance of $0, so we will allocate all current year earnings to **Retained Earnings**.

Now, go to [Accounting](https://hibou.io/docs/accounting-3/closing-fiscal-period-to-end-the-year-1540#) > [Miscelleanous](https://hibou.io/docs/accounting-3/closing-fiscal-period-to-end-the-year-1540#) > [Journal Entries](https://hibou.io/docs/accounting-3/closing-fiscal-period-to-end-the-year-1540#). Click [CREATE](https://hibou.io/docs/accounting-3/closing-fiscal-period-to-end-the-year-1540#).

![](https://hibou.io/web/image/76248/create-a-journal-entry-v15.png?access_token=c0b8968a-6f4e-4e70-9cd2-6b83de7e82f3)  

Give the Journal Entry a Reference Name, select a date in the past, for instance, December 31st, and keep the journal set to the default Miscellaneous Operations. Under the Journal Items tab, [Add a Line](https://hibou.io/docs/accounting-3/closing-fiscal-period-to-end-the-year-1540#) under **Accounts**, we will use Profits/Losses which is an Odoo created account used to record unallocated yearly earnings, the type must be set to current year earnings. To offset the unallocated earnings, we will Debit $907,500. 

![](https://hibou.io/web/image/67626/Acocuntingv14-create-journal-entry.png?access_token=53d0ebc7-28e9-42dd-969e-abd700bd83ee)  

Next, we'll need to offset this to the Retained Earnings account. If you need to create that account, click [Add a line](https://hibou.io/docs/accounting-3/closing-fiscal-period-to-end-the-year-1540#), then in the Account field type the name of your account (Retained Earnings) and select [Create and Edit](https://hibou.io/docs/accounting-3/closing-fiscal-period-to-end-the-year-1540#) from the drop-down.

![](https://hibou.io/web/image/76246/create-and-edit-account-v15.png?access_token=4ad19322-4e9b-43e0-a778-ff9a1a6b763a)  

The following modal will open: 

![](https://hibou.io/web/image/76247/save-retained-earnings-account-v15.png?access_token=a7a4339c-8c61-4c12-9e99-0f5021fd5cfc)  

-   **Code:** Assign a code to be used for this account.
    
-   **Account Name:** Name of account, i.e. Retained Earnings.
    
-   **Type:** Account type is used for the purpose of information to generate country-specific legal reports, and to set the rules to close a fiscal year as well as generate opening journal entries. 
    
-   **Default Taxes:** Tax Rate set on the Account.  
    
-   **T****ags**: Assigned tags for custom reporting.
    
-   **A****llowed Journals**: Journals in which this account can be used. If left blank, can be used in all journals. 
    
-   **Group:** If using **[Journal Groups](https://hibou.io/docs/accounting-3/journals-85/ver/15-0-28)**, (found at the bottom of the page) set the Group here. 
    
-   **Allow Reconciliation:** Check this box if the account allows invoices & payments matching of journal items.
    
-   **Deprecated:** Mark this box to prevent use of the account. 
    
-   **Co****mpany**: The company in which the journal is to be used. If in a single company database, the company name will be selected by default. 
    

Click [Save](https://hibou.io/docs/accounting-3/closing-fiscal-period-to-end-the-year-1540#).

As soon as you have saved, you will see that the new account creates a credit line in the same amount, to offset the debit. Click [SAVE](https://hibou.io/docs/accounting-3/closing-fiscal-period-to-end-the-year-1540#) once again, then click [POST](https://hibou.io/docs/accounting-3/closing-fiscal-period-to-end-the-year-1540#).

![](https://hibou.io/web/image/67629/Accountingv14-post-journal-entry.png?access_token=d519ced4-c83e-4b33-80cb-e38205d6bea0)  

Use the drop down menu to go to [Reporting](https://hibou.io/docs/accounting-3/closing-fiscal-period-to-end-the-year-1540#) > [US GAAP](https://hibou.io/docs/accounting-3/closing-fiscal-period-to-end-the-year-1540#) > [Balance Sheet](https://hibou.io/docs/accounting-3/closing-fiscal-period-to-end-the-year-1540#) and we should see that the assets equal the liabilities plus equity.

![](https://hibou.io/web/image/67631/Accountingv14-balanced-ledger.png?access_token=f5257ac4-3564-4056-815c-5620ce9e6c16)  

Now, go back to [Accounting](https://hibou.io/docs/accounting-3/closing-fiscal-period-to-end-the-year-1540#) > [Actions](https://hibou.io/docs/accounting-3/closing-fiscal-period-to-end-the-year-1540#) > [Lock Dates](https://hibou.io/docs/accounting-3/closing-fiscal-period-to-end-the-year-1540#) and enter the lock date for all users as we are done making any changes to the reporting. Click [Save](https://hibou.io/docs/accounting-3/closing-fiscal-period-to-end-the-year-1540#). 

![](https://hibou.io/web/image/76249/save-lock-dates-v15.png?access_token=8f559e0c-7ec0-4feb-b91b-98c00527324a) 

Odoo will generate all reports automatically so there is no need to run them manually. In addition, you will not need to open a new fiscal year so at the beginning of the new year, the account balances will be $0. 

Use the drop down menu to go to [Reporting](https://hibou.io/docs/accounting-3/closing-fiscal-period-to-end-the-year-1540#) > [Audit Reports](https://hibou.io/docs/accounting-3/closing-fiscal-period-to-end-the-year-1540#) > [General Ledger](https://hibou.io/docs/accounting-3/closing-fiscal-period-to-end-the-year-1540#). Once there, click  [Options](https://hibou.io/docs/accounting-3/closing-fiscal-period-to-end-the-year-1540#) > [Unfold All](https://hibou.io/docs/accounting-3/closing-fiscal-period-to-end-the-year-1540#).

![](https://hibou.io/web/image/76250/unfold-general-ledger-v15.png?access_token=fbff77b0-26c3-406d-8e84-9621224624aa)  

From here you can download a [PDF](https://hibou.io/docs/accounting-3/closing-fiscal-period-to-end-the-year-1540#) or [XLSX](https://hibou.io/docs/accounting-3/closing-fiscal-period-to-end-the-year-1540#) file to your computer. 

![](https://hibou.io/web/image/76251/save-audit-reports-v15.png?access_token=279981e3-3426-4a5a-bfdb-b8f172488ceb)  

Clicking [SAVE](https://hibou.io/docs/accounting-3/closing-fiscal-period-to-end-the-year-1540/ver/15-0-28#) will open a new modal allowing you to export a copy of the report.  When you are ready, click [EXPORT](https://hibou.io/docs/accounting-3/closing-fiscal-period-to-end-the-year-1540#).  

![](https://hibou.io/web/image/76252/general-ledger-report-v15.png?access_token=d6b76a1a-f32b-40c5-8c13-9a0b62ec144c)