---
title: Budget Management
summary: Accounting --> Management --> Budget Management
authors: Wilson Loh
date: 2023-07-01
---

## **Purpose**

This document covers the Budget process in the **Accounting** application of Odoo 15, including Budgetary Positions.

## **Process**

To get started, navigate to the **Accounting** app.

![](https://hibou.io/web/image/75557/hibou15-accounting-app.jpg?access_token=7e8dd084-8e94-484c-87ad-ee888b8a6d22)  

Once there, go to [Configuration](https://hibou.io/docs/accounting-3/budgets-1551#) > [Settings](https://hibou.io/docs/accounting-3/budgets-1551#). Under the Analytics section, enable both **Analytic Accounting** and **Budget Management**. 

![](https://hibou.io/web/image/66950/enable-budget-management-odoo-14-accounting.png?access_token=edbf60a2-fd05-4368-895c-40470aea7fcf)  

When you're ready, click [SAVE](https://hibou.io/docs/accounting-3/budgets-1551#).  

### Budgetary Positions

Budgetary positions give you the ability to include several accounts into one configuration which can then apply to your budgets. For example, we're creating a 'Food + Beverage' budgetary position. We know that any time we purchase items in this category, they'll always be in our 'Food/Beverage Expenses' or 'Expenses' accounts. So let's create that position! 

Go to [Configuration](https://hibou.io/docs/accounting-3/budgets-1551#) > [Management](https://hibou.io/docs/accounting-3/budgets-1551#) > [Budgetary Positions](https://hibou.io/docs/accounting-3/budgets-1551#) and click [Create](https://hibou.io/docs/accounting-3/budgets-1551#).

Enter a **Name** for this position, then under the [Accounts](https://hibou.io/docs/accounting-3/budgets-1551#) tab, click [Add a Line](https://hibou.io/docs/accounting-3/budgets-1551#) and select the account to include. Add as many accounts as apply.

When you're ready, click [SAVE](https://hibou.io/docs/accounting-3/budgets-1551/ver/15-0-28#).  

![](https://hibou.io/web/image/75558/budgetary-expense-v15.png?access_token=21ebb01f-5fc2-438f-888f-10813e2abb0b)  

### Creating a Budget

Next go to [Accounting](https://hibou.io/docs/accounting-3/budgets-1551#) > [Management](https://hibou.io/docs/accounting-3/budgets-1551#) > [Budgets](https://hibou.io/docs/accounting-3/budgets-1551#). Here you'll see any existing budgets. To add a new one, click [create](https://hibou.io/docs/accounting-3/budgets-1551#).

![](https://hibou.io/web/image/74104/budget.jpg?access_token=4db114a1-1ed7-4dc9-ae3c-b94f24053602)  

-   **Budget Name:** Give your budget a name for easy reference.
    
-   **Responsible:** This field will default to your name, but you can change it to whoever is responsible for managing this budget.
    
-   **Period:** Set a date range that this budget is valid for.
    

Under the [Budget Lines](https://hibou.io/docs/accounting-3/budgets-1551#) tab, click [Add a Line](https://hibou.io/docs/accounting-3/budgets-1551#) to open a new line on the form.

-   **Budgetary Position:** Select a Budgetary Position. While this isn't a required field, it tells Odoo which account to consider for transactions related to your budget.
    
-   **Analytic Account:** Select an Analytic Account, if applicable. If you add an entry here, Odoo will only tally the journal entries that match this analytic tag within the Budgetary Position you selected.
    
-   **Start Date:** This will default to the budget's start date but you can adjust it to any date within the budget period.
    
-   **End Date:** This will default to the budget's end date but you can adjust it to any date within the budget period.
    
-   **Planned Amount:** Enter the amount planned for this line of the budget.
    
-   **Practical Amount:** This is a calculated field that represents how much of this portion of the budget has already been spent.
    
-   **Theoretical Amount:** This is a calculated field that represents how much of the budget could have been spent by today's date.
    
-   **Achievement:** This is a calculated field that displays the planned/practical figure.
    
-    **Entries**: Once the budget is confirmed and approved, this link takes you to the entries that count toward this budget's use, so far.
    

You can [Save](https://hibou.io/docs/accounting-3/budgets-1551#) this budget in draft form.

Once a budget is confirmed, the budget lines cannot be modified without canceling first. When you're ready, click [Confirm](https://hibou.io/docs/accounting-3/budgets-1551#). At this point, Odoo will calculate the transactions that have already been used toward the budget, if any. 

The budget will then be ready for a user with proper permissions to [APPROVE](https://hibou.io/docs/accounting-3/budgets-1551#).  

![](https://hibou.io/web/image/75559/approve-budget-v15.png?access_token=4333c0ef-97ac-4f5f-90a9-144150f3ca33)  

When a budget has been used or is no longer needed, click [Done](https://hibou.io/docs/accounting-3/budgets-1551#). At this point, matching journal entries will no longer tally against this budget.

![](https://hibou.io/web/image/75560/done-end-budget-v15.png?access_token=854ad6fd-2d1e-4585-ad32-4bdc63eab228)  

For an overview of all budgets and their usage, go to [Reporting](https://hibou.io/docs/accounting-3/budgets-1551#) > [Management](https://hibou.io/docs/accounting-3/budgets-1551#) > [Budgets Analysis](https://hibou.io/docs/accounting-3/budgets-1551#).

![](https://hibou.io/web/image/75561/budget-analysis-v15.png?access_token=896e2066-c7cb-4454-adaa-301839a495d8)