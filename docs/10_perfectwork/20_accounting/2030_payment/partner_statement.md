---
title:  Partner Statement
no_toc: true
source: https://github.com/OCA/account-financial-reporting/tree/16.0/partner_statement
hide:
---


This module extends the functionality of Invoicing to support the printing of customer and vendor statements. There are three types of statements: Activity, Detailed Activity, and Outstanding. Aging details can be shown in the reports, expressed in aging buckets, so the customer or vendor can review how much is open, due or overdue.

</br>
The activity statement provides details of all activity on the partner receivables or payables between two selected dates. This includes all invoices, refunds and payments. Any outstanding balance dated prior to the chosen statement period will appear as a forward balance at the top of the statement. The list is displayed in chronological order and is split by currencies.

<br/>
The detailed activity statement is an extension of the previous statement, and intends to explain the transactions that have happened during the period, also providing with a Prior Balance section and an Ending Balance section.

</br>
The outstanding statement provides details of all outstanding partner receivables or payables up to a particular date. This includes all unpaid invoices, unclaimed refunds and outstanding payments. The list is displayed in chronological order and is split by currencies.

## Configuration

Users willing to access to this report should have proper Accounting & Finance rights:

1.  Go to _Settings / Users_ and edit your user to add the corresponding access rights as follows.
2.  In _Application / Accounting & Finance_, select _Billing_ or _Billing Manager_


To configure this module, you need to:

1.  Go to _Invoicing / Configuration / Settings_
2.  Under the _Partner Statements_ of _Accounting_ option select either or both of OCA Activity or Outstanding Statement
3.  Once selected, you may set default options for the reports.
4.  Click _Save_

Removing the wizard from menus follows the same process.

## [Usage](https://github.com/OCA/account-financial-reporting/tree/16.0/partner_statement#id4)

To use this module, you need to:

1.  Go to a list of Partners, Contacts, Customer or Vendors and select one or more.
2.  Press 'Action > Partner Activity Statement' or 'Action > Partner Outstanding Statement' respectively.
3.  Indicate if you want to display receivables or payables, and if you want to display aging buckets and the aging type.
4.  Optionally complete advanced options such as filtering non due or negative balance partners.

## Customization

