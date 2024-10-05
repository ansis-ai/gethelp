---
title: Canceling Journal Entries
summary: Accounting --> Bank & Cash --> Journal Entries --> Canceling Journal Entries
authors: Wilson Loh
date: 2022-01-18
---

## **Purpose**

This documentation outlines the process associated with reversing journal entries in the **Accounting** application of Odoo 15.  

## **Processes**

To get started, navigate to the **Accounting** app.  

![Odoo text and image block](https://hibou.io/web/image/80640/hibou15-accounting-app.jpg?access_token=232d697a-7ca9-4e84-9612-d406f8261e76)

### Reversing a Journal Entry

First, we'll want to locate the journal entry to reverse. A simple way to do this is to go to [Accounting](https://hibou.io/docs/accounting-3/canceling-journal-entries-80#) > [Miscellaneous](https://hibou.io/docs/accounting-3/canceling-journal-entries-80#) > [Journal Entries](https://hibou.io/docs/accounting-3/canceling-journal-entries-80#) and use the filters to find the posted entry you would like to cancel. 

![](https://hibou.io/web/image/75335/select-posted-journal-entry-v15.png?access_token=c145aa2b-14b7-417f-8c00-95c9dadc2e2e)  

Once you're on the journal entry, click [reverse Entry](https://hibou.io/docs/accounting-3/canceling-journal-entries-80#).

![](https://hibou.io/web/image/75336/reverse-entry-v15.png?access_token=0bfdebde-bd62-45a6-af62-5b7530d97ab9)  

A modal will pop up giving you a few fields to choose:

**Reversal Date:**

-   **Specific:** If selected, you can choose a specific date to reverse the entry. 
    
-   **Journal Entry Date:**  If selected, the date of the journal entry will also be used as the reversal date.
    

**Use Specific Journal:** Choose the journal you would like to use, though if this field is left blank, the journal of the journal entry will be used for the reversal. 

**Reversal Date:** Select a date for the reversal to be reflected on in the journal.

When finished, click [reverse](https://hibou.io/docs/accounting-3/canceling-journal-entries-80#) . 

![](https://hibou.io/web/image/75337/reverse-button-v15.png?access_token=0ee8c114-1fc7-4a94-99a1-358615294577)  

This will remove the journal entry from the journal, at which point it can be edited and posted again, if needed.