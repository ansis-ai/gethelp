---
title: Internal Transfers
summary: Accounting --> Management --> Internal Transfers
authors: Wilson Loh
date: 2023-07-01
---

## **Purpose**

This document covers the configuration and usage of Automatic Transfers in the **Accounting** application of Odoo 15. Automatic Transfers, as the name implies, are scheduled transfers you can set up in Odoo to help automate your bookkeeping processes. Transfers are calculated by percentage and not by dollar amount, and will move that percentage of the balance from the related period.

## **Process**

To get started, navigate to the **Accounting** app.

![](https://hibou.io/web/image/75546/hibou15-accounting-app.jpg?access_token=7f4acc3d-c5c4-42d7-a0c7-8b467838fdd6)  

Once there, go to [Accounting](https://hibou.io/docs/accounting-3/automatic-transfers-1550#) > [Management](https://hibou.io/docs/accounting-3/automatic-transfers-1550#) > [Account Transfers](https://hibou.io/docs/accounting-3/automatic-transfers-1550#). This brings you to a list of configured automatic transfers if any. To create a new one, click [Create](https://hibou.io/docs/accounting-3/automatic-transfers-1550#).

![](https://hibou.io/web/image/75547/create-automatic-transfers-v15.png?access_token=62fe4784-4c7c-410e-9dcb-9fba2c71ad62)  

On the form that presents, enter the following information:

**Description:** Enter a name for your transfer.

**Period:** Select the date at which this transfer should begin. The end date is optional; leaving it empty means it will continue until it is disabled.

**Frequency:** Select the frequency at which the transfer should occur.

**Journal:** Select the journal where this transfer should be recorded.  Only journals set with type as 'Miscellaneous' are available.

**Origin Accounts:** Click [add a line](https://hibou.io/docs/accounting-3/automatic-transfers-1550#) to add the source account for this transfer. This brings up a modal window where you can select one or more GL account. When you're ready, click [Select](https://hibou.io/docs/accounting-3/automatic-transfers-1550#) to add them to the original form.

**Automated Transfer:** Click [add a line](https://hibou.io/docs/accounting-3/automatic-transfers-1550#) to add destination accounts for this transfer. This opens a line in this section where you'll add the percentage of the transaction and the destination account. The totals may be less than, but not exceed 100%.

![](https://hibou.io/web/image/75551/auto-transfer-template-v15.png?access_token=5dfebaf4-61d5-46b6-afa1-568218f2fe5e)  

Next, click [SAve](https://hibou.io/docs/accounting-3/automatic-transfers-1550#), and then [activate](https://hibou.io/docs/accounting-3/automatic-transfers-1550#) the transfer to see how it works.

![](https://hibou.io/web/image/75552/activate-auto-transfer-v15.png?access_token=de4b457b-81d1-4423-84b7-a6ab46c9e44b)  

Next, click [compute transfer](https://hibou.io/docs/accounting-3/automatic-transfers-1550#).

![](https://hibou.io/web/image/75553/compute-transfer-of-auto-transfer-v15.png?access_token=905dc64b-387d-48e5-a869-b6f0ee0c03a6)  

If we click the  **Transfer** smart button, we can see the resulting records.

![](https://hibou.io/web/image/75554/transfers-smart-button-v15.png?access_token=63990415-4c1b-4e03-bcd7-a13349d2110d)  

Select a scheduled transfer from the list. Note that these transactions will remain in draft until they are posted.

![](https://hibou.io/web/image/75555/generated-entries-v15.png?access_token=7fe24780-664d-4e82-9a9f-ea80ac984464)

## Purpose

This documentation demonstrates how to transfer funds between journals in the **Accounting** application of Odoo v15. Internal transfers allow you to move money between your internal journals with ease. 

## Processes

Let's start by navigating to the **Accounting** app.

![](https://hibou.io/web/image/75207/Hibou-Accounting-15-Icon.png?access_token=66aeb2dd-1306-43e1-a440-556e6d6479da)

### Scenario

**Scenario**: A company is going to transfer money from their **Bank** journal to their Cash journal.

### Send a Transfer

From the  [Accounting Dashboard](https://hibou.io/docs/accounting-3/internal-transfers-1657#), go to the journal that will sending the funds and click on the  menu. Next, select [View](https://hibou.io/docs/accounting-3/internal-transfers-1657#) > [Internal Transfers](https://hibou.io/docs/accounting-3/internal-transfers-1657#), then click [Create](https://hibou.io/docs/accounting-3/internal-transfers-1657#).

-   **Internal Transfer:** This box will be ticked by default in order to indicate that this is an internal transfer.:
    
-   **Payment Type:** Select **"Send"**
    
-   **Amount:** Indicate the amount to be sent.
    
-   **Date:** This will automatically pre-fill with today's date**.**
    
-   **Memo:** This is optional, however writing a memo can help you remember why this transfer was done.  
    
-   **Journal: :** This is the journal in which the funds are coming out of. (Bank)
    
-   **Payment Method:** Select your payment method.
    
-   **Destination Journal:** Select the specific journal it is going to. \*\*\*A second payment will be created automatically in the destination journal.
    

Once you have configured your internal transfer, click [Confirm](https://hibou.io/docs/accounting-3/internal-transfers-1657#).

![](https://hibou.io/web/image/75209/confirm-internal-transfer-v15.png?access_token=a3ba7830-8b48-4236-b51a-64ea005aedf5)  

#### **Reconcile the Internal Transfer to the Bank Statement**

From the [DASHBOARD](https://hibou.io/docs/accounting-3/internal-transfers-1657/ver/14-0-21#), go to the same journal that is sending the funds and click on the  menu. Next, select[VIEW](https://hibou.io/docs/accounting-3/internal-transfers-1657/ver/14-0-21#) > [statements](https://hibou.io/docs/accounting-3/internal-transfers-1657/ver/14-0-21#). We have received our bank statement and see that there is a line for the internal transfer that was made. Click [Reconcile](https://hibou.io/docs/accounting-3/internal-transfers-1657#) to match the internal transfer to our bank statement line.

![](https://hibou.io/web/image/75211/reconcile-internal-transfer-v15.png?access_token=2e943fcc-f170-4476-ad41-e5b2812350be)  

Once the internal transfer line has been matched to the bank statement, click [Validate](https://hibou.io/docs/accounting-3/internal-transfers-1657#).

![](https://hibou.io/web/image/75212/validate-t-sheet-v15-internal-transfer.png?access_token=550b94a2-62f9-4b43-b9b7-0afea009e704)  

### Receive a Transfer

Now, let's learn how to receive a transfer. From the [DASHBOARD](https://hibou.io/docs/accounting-3/internal-transfers-1657/ver/14-0-21#), go to the journal that will be receiving the funds and click on the  menu. Next, select [VIEW](https://hibou.io/docs/accounting-3/internal-transfers-1657/ver/14-0-21#) > [INTERNAL TRANSFERS](https://hibou.io/docs/accounting-3/internal-transfers-1657/ver/14-0-21#), then click [CREATE](https://hibou.io/docs/accounting-3/internal-transfers-1657/ver/14-0-21#).

-   **Is Internal Transfer**: This box will be ticked by default in order to indicate that this is an internal transfer.
    
-   **Payment Type**: Select "**Receive Money**".
    
-   **Amount**:  Indicate the amount to be received, in this case $100.00.  
    
-   **Date**: This will automatically pre-fill with today's date.  
    
-   **Memo**: This is optional, however writing a memo can help you remember why this transfer was done.
    
-   **Journal**: This is the journal in which the funds are being received into.
    
-   **Destination Journal**: Set the journal you wish to receive funds to.
    

Once you have configured your internal transfer, click [CONFIRM](https://hibou.io/docs/accounting-3/internal-transfers-1657/ver/14-0-21#).

![](https://hibou.io/web/image/75213/confirm-internal-receipt-v15.png?access_token=7a20b53e-1d0f-4b87-8251-6775bb7ea2a5)  

#### Reconcile the Internal Transfer to the Bank Statement

From the [DASHBOARD](https://hibou.io/docs/accounting-3/internal-transfers-1657/ver/14-0-21#), go to the same journal that is receiving the funds and click on the  Ellipsis > [VIEW](https://hibou.io/docs/accounting-3/internal-transfers-1657/ver/14-0-21#) > [STATEMENTS](https://hibou.io/docs/accounting-3/internal-transfers-1657/ver/14-0-21#). We have received our bank statement and see that there is a line for the internal transfer that was made. Click [RECONCILE](https://hibou.io/docs/accounting-3/internal-transfers-1657/ver/14-0-21#) to match the internal transfer to our bank statement line.

![](https://hibou.io/web/image/75214/reconcile-internal-transfer-receipt-v15.png?access_token=a1f53c97-37fe-4222-b6ea-d0a2432257b8)  

Once the internal transfer line has been matched to the bank statement, click [Validate](https://hibou.io/docs/accounting-3/internal-transfers-1657#).

![](https://hibou.io/web/image/75215/validate-internal-receipt-v15.png?access_token=51d8e12c-f7bf-4a89-bf6c-6930e5a4eb81)