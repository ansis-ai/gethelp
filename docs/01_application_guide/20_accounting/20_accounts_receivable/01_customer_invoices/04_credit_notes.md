---
title: Credit Notes
summary: Accounting --> Account Receivable --> Credit Notes
authors: Wilson Loh
date: 2023-07-01
---
## **Purpose**

This document covers creating a Credit Note for a customer's invoice within the **Accounting** application in Odoo 15. A Credit Note (sometimes called a Credit Memo) is issued to the customer, notifying them that a credit for a certain amount has been sent to them as a document. There are several events that may lead to issuing a credit note, including the return of goods or rejection of a service, a mistake on the invoice, or delivered goods being damaged.   

## **Process**

To get started, navigate to the **Accounting** app.

![](https://hibou.io/web/image/75010/hibou15-accounting-app.jpg?access_token=0b88b52f-066d-4548-9d5e-baf83d38a034)  

## Important!

Issuing a Credit Note is the only legal way to change, cancel, or refund a validated invoice. Remember to Register the Payment if you need to return money to the customer!

We can manually record a credit note through [Customers](https://hibou.io/docs/accounting-3/credit-notes-1507#) > [Credit Notes](https://hibou.io/docs/accounting-3/credit-notes-1507#); however, we recommend recording it directly from the posted, paid invoice. To do so, go to [Customers](https://hibou.io/docs/accounting-3/credit-notes-1507#) > [Invoices](https://hibou.io/docs/accounting-3/credit-notes-1507#) and select the invoice to issue a credit note on.

![](https://hibou.io/web/image/75011/credit-note-on-invoice.png?access_token=64ebcbbb-e8b0-4236-ad2f-ea72159610fb)

From within the invoice, click [ADD CREDIT NOTE](https://hibou.io/docs/accounting-3/credit-notes-1507#). This brings up the Credit Note modal window, which we'll cover next.

 

![](https://hibou.io/web/image/75012/add-credit-note-on-invoice.png?access_token=1b5d8ccc-6b43-47bc-a21e-68a4ea1437a1)

## Good to Know!

#### Partial Refund vs Full Refund?

When an invoice is marked as Paid or In Payment, the only option for a credit note is for a Partial Refund. The other credit note types are only accessible on invoices that have not been paid.  

An example for issuing a full refund on an invoice with an outstanding balance due might be that your company is giving a credit on that order, to the customer, for one reason or another. Another example might be that you need to modify the invoice because the price listed was incorrect and you can not reset the invoice to Draft.  If a period that an invoice is in is locked, you wouldn't be able to modify that invoice, but you could still issue a credit against it, and then make a new draft record to modify and report the original invoice. 

### Partial Refund Credit Notes

With a Partial Refund, Odoo will create a Draft profiled with the necessary information from the referenced or original invoice. The following modal will open with the Credit Method already set and is not able to be modified.  

![](https://hibou.io/web/image/75013/reverse-button.png?access_token=94498410-a34b-48f4-b469-a209d92411d3)   

-   **Credit Method:** Select **'Partial Refund'.** This type of credit note is created as a draft and can be edited before being issued.  
    
-   **Reason:** Enter a reason for the credit note, if desired. 
    

**Reversal Date**

-   **Specific:** Marking this box allows you to choose the **Refund Date** in the corresponding field.
    
-   **Journal Entry Date:** Marking this box will issue the credit note on the same date the payment was made. Choosing this option will remove the **Refund Date** field.
    

-   **Use Specific Journal**: To record the credit note to a journal different from the one where the payment was recorded, select that journal here.
    
-   **Refund Date:** This is the date for when the refund is being issued.
    

Click [REVERSE](https://hibou.io/docs/accounting-3/credit-notes-1507#) when complete. This will create the Draft Credit Note where you can then click [CONFIRM](https://hibou.io/docs/accounting-3/credit-notes-1507#).

![Odoo • Text and Image](https://hibou.io/web/image/75014/confirm-reversal.png?access_token=49eb38f2-ea95-4124-899b-e1c8059639ae)

This will move the draft to the **Posted** state, and reflect the credit note as **Outstanding debits**, or partial payments, near the total due, which can be applied to the invoice as payment. Note in the breadcrumbs that the new posted reference number begins with an 'R,' and is followed by the original invoice reference.

![](https://hibou.io/web/image/75015/posted-state.png?access_token=f30e2ffa-54fb-4622-8d96-bce83a0ef105)

### Full Refund Credit Notes

When creating a Full Refund, Odoo automatically creates and validates a credit note, and reconciles the original invoice to it. This is the option to choose if you need to do a full refund or cancel an already validated invoice. In this section, we have chosen an invoice that has already posted. Click [ADD CREDIT NOTE](https://hibou.io/docs/accounting-3/credit-notes-1507#). 

![](https://hibou.io/web/image/75016/full-credit-note.png?access_token=d03a1a28-47f3-4b4a-a417-3b4f202df2a3)  

This will give us the same pop up window with the same options as the Partial Refund, though this time, we will select '**Full Refund**', complete the form, then click [REVERSE](https://hibou.io/docs/accounting-3/credit-notes-1507#) when ready. 

![](https://hibou.io/web/image/75017/reverse-full-refund.png?access_token=82565d27-c568-412c-a998-11e41302e32d)  

If we now look at the amount due at the bottom of the invoice, we will see the  icon. When clicked, the following pop out window will show the amount of the credit, a **Memo** line showing the Reversal and reference numbers, the date, and the journal it posted to. 

![](https://hibou.io/web/image/75018/payment-info-full-refund.png?access_token=c281913f-73fa-4344-9063-dc98137a9730)  

## Full Refund and New Draft Invoice Credit Note

With a **Full Refund with New Draft Invoice**, Odoo will create a credit note, automatically validate it, reconciles it with the original invoice, _and_ will draft a new invoice using the same information from the original invoice. This is the Rolls Royce of Credit Notes. You would choose this option to modify the content of a validated invoice. We will once again use a posted invoice, and click [ADD CREDIT NOTE](https://hibou.io/docs/accounting-3/credit-notes-1507#). 

![](https://hibou.io/web/image/75055/full-refund-with-draft-v15.png?access_token=042d765e-4aa4-4f29-b8f7-94b00cd03cd3)

For this credit note method, we will select 'Full refund and new draft' invoice, complete the form, then click [REVERSE](https://hibou.io/docs/accounting-3/credit-notes-1507#) when ready. 

![](https://hibou.io/web/image/75056/reverse-button-full-refund-v15.png?access_token=ad907ed5-a7dc-48e0-9b3f-a9a3dab59700)

We will automatically be taken to the new **Draft.** You can leave this in draft for now, or [confirm](https://hibou.io/docs/accounting-3/credit-notes-1507#) it if you're ready to do so.

![](https://hibou.io/web/image/75057/confirm-draft-invoice-v15.png?access_token=3c17b5c8-219d-4906-96ca-3d3b776e21a6)

Next, we will follow our breadcrumbs to view the original invoice. 

![](https://hibou.io/web/image/75058/breadcrumbs-full-refund-v15.png?access_token=ae2fd659-9a22-40ba-83c7-4a0ba95c6b3c)

Which will now show us the source invoice now in a [REVERSED](https://hibou.io/docs/accounting-3/credit-notes-1507#) state. Again, if we click on the  icon we will see all the related Payment Info:

![](https://hibou.io/web/image/75059/reversed-credit-note-v15.png?access_token=73dd02be-1b88-4aa6-ad78-7791c2a6308b)

See also: [**Vendor Refunds**](https://hibou.io/docs/accounting-3/refunds-1508/ver/15-0-28).