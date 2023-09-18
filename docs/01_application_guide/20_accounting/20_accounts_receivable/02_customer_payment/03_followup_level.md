---
title: Follow Up Levels
summary:  Accounting --> Account Receivable --> Customer Payment --> Follow Up Levels
authors: Wilson Loh
date: 2022-01-18
---
## **Purpose**

This document covers Payment Follow-Ups used within the Accounting app in Odoo 15.  Follow-ups are an easy-to-use tool to help encourage your customers to pay their bills. Odoo 15 allows you to create your own Follow-up Levels.  

## **Process**

To get started, navigate to the **Accounting** app.

![](https://hibou.io/web/image/75004/hibou15-accounting-app.jpg?access_token=4de86fd3-3800-464f-a7c0-b7395687a0c0)  

Click on [Configuration](https://hibou.io/docs/accounting-3/follow-up-levels-1506#) > [Invoicing](https://hibou.io/docs/accounting-3/follow-up-levels-1506#) > [Follow-up Levels](https://hibou.io/docs/accounting-3/follow-up-levels-1506#).  This brings us to the following page which shows us the pre-set Follow-up Report levels. From here, you can configure each level by checking the corresponding boxes, or, select and click the level you would like to edit by clicking on the name of the level. 

![](https://hibou.io/web/image/74069/payment-follow-ups.png?access_token=818e6f62-6308-40b1-b48f-7b66f2d69737)  

### Create A Follow-Up Level

Click [CREATE](https://hibou.io/docs/accounting-3/follow-up-levels-1506#). 

![](https://hibou.io/web/image/74070/create-follow-up.png?access_token=25de0e4c-15a8-4e39-bb66-87e5e91e9c34)  

**Name of Follow-up Action:** Name your Follow-up Level

**After \_\_\_\_ days overdue, do the following actions:** Number of days past due you would like your actions to occur.

**Actions:**

-   **Send an Email:** When processed, this will send a message to the customer's email address on file.
    
-   **Send an SMS Message:** When processed, this will send an SMS text message to the customer's phone number on file. 
    
-   **Print a Letter:** When processed, this will print a PDF for your records. 
    
-   **Send a Letter:** When processed, this will send a physical letter to the customer's address on file. 
    
-   **Manual Action:** When selected, a new tab appears at the bottom of the page. See the picture below.
    

**Options:**

-   **Auto Execute:** Selecting this will remove the Actions for Print a Letter and Manual Action. Selecting this option will trigger the Action type based on the number of days overdue you input in that field. 
    
-   **Join Open Invoices:** Selecting this option will attach a PDF of all open invoices with your follow-up notice unless the invoice has not previously been provided to the customers. 
    

## Important!

To use the Join Open Invoices option, all invoices must have already been submitted to the customer. If you have not provided an invoice to the customer before attempting to use the option, it will not work!

On the **[Message](https://hibou.io/docs/accounting-3/follow-up-levels-1506#)** tab, you can edit the pre-filled text or leave it as is. Don't forget to at minimum replace "%(partner\_name)s" with the customer's name, and include your own below "Best Regards!"

## Default Follow-Up Levels

Now that we have shown you how to create your own Follow-up level, we will show the pre-set levels and quickly cover each one. Each level has the same options, however, the configurations are slightly different. We will not go over every single option, but rather summarize the outcome of each level's configurations.

![](https://hibou.io/web/image/74071/first-rmeinder.png?access_token=d36ce036-4d61-4623-b30e-5a675dbfa5d6)The First reminder email configuration, shown above, will simply send an email to the customer and print a PDF of this reminder for your records once the payment is 15 days overdue. 

![](https://hibou.io/web/image/74072/second-reminder.png?access_token=c164c038-bce6-4d26-b76f-35f133a46c5a)

The Second reminder letter and email configuration will send a second, slightly stronger worded email (This is editable) as well as print a PDF for your records when the payment is 30 days overdue.   

![](https://hibou.io/web/image/74073/third-reminder.png?access_token=365ff76c-f98a-4ed5-9c14-d98a4313639f)

The Third reminder: phone the customer level will prompt the Manual Action of placing a phone call to the customer once payment is 40 days overdue.  This level will also print a PDF for your records to show that you have attempted to communicate with the customer. 

![](https://hibou.io/web/image/74074/urging-email.png?access_token=ab23f031-5fff-4f19-ac33-704061def5e3)

The Urging reminder email level will once again send an Email to the customer as well as print a PDF for your records once payment is 50 days overdue. 

![](https://hibou.io/web/image/74075/urging-letter.png?access_token=11c57d52-44e6-4423-b450-040d4f3e1faa)

The Urging reminder letter will send a snail-mail letter to the customer as well as print a PDF for your records once payment is 60 days overdue.