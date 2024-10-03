---
title: Reconciliation
summary: Accounting --> Getting Started --> Accounting Concept --> Reconciliation
authors: Wilson Loh
date: 2023-07-02
---
<script type='text/javascript'>

(function()
{
  if( window.localStorage )
  {
    if( !localStorage.getItem('firstLoad') )
    {
      localStorage['firstLoad'] = true;
      window.location.reload();
    }  
    else
      localStorage.removeItem('firstLoad');
  }
})();

</script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/immutable/3.8.2/immutable.min.js"
            integrity="sha512-myCdDiGJRYrvRb/VuJ67ljifYTJdc1jdEvL4c4ftX9o3N6EAnmD83c/7l2/91RCINZ7c8w21tiXDT7RDFjdc3g=="
            crossorigin="anonymous"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.13.0/react-with-addons.min.js"
            integrity="sha512-wsnDgOxfyn4lhblRMHPMuJh+9CnLcwcisda1zLRGNWKh6OiQynebYTyRZYgH+eWLEdNTKak0OD2GAd/S51UhTw=="
            crossorigin="anonymous"></script>

<script src="/javascripts/atom.js"></script>

Reconciliation is an accounting practice in which two kinds of records can be successfully compared in order to check whether these records are proper and in agreement. Reconciliation is the right method to identify any inconsistencies between them. This method is helpful for substantiating that the accounts in the general ledger are uniform, precise, and complete.
<br/><br/> 
In the case of Account Reconciliation, it will be beneficial to describe the difference between two financial records or account balances. That means the system allows you to ensure the money that drops from an account matches the money that is actually spent. 
<br/><br/> 
This adequate method is very comfortable for ascertaining that the balances after each accounting period are equal. Little kinds of differences may be reasonably caused by the time of payments and deposits. However, the unauthorized discrepancies will be identified successfully. You can reconcile your records as a basis of daily, monthly, or yearly.
<br/><br/> 
In the ANSIS platform, you can see both **Payment Matching** and **Bank Reconciliation.** These two methods are used for matching and reconciling entries. Let us discuss each one below.

## Payment Matching

In the Payment Matching method, the strategy applied is that the invoice created or the bill created will be compared against customer payments or vendor payments. As an example, suppose a customer invoice is created and registered payment from the invoice. The payment matching will be performed automatically. However, when the customer payment is added, the payment should match the invoice.

### Examples for Reconciliation
<section id="reconciliation">
   <div class="grid grid-cols-2 gap-1">
      <div>
          <strong>Reconciliation</strong> is the process of linking journal items of a specific account and matching credits and debits.
          Its primary purpose is to link payments to their related invoices to mark them as paid. This is done by doing a reconciliation on the accounts receivable account and/or the accounts payable account.
          <br />
          Reconciliation is performed automatically by the system when:
          <ul>
             <li>the payment is registered directly on the invoice</li>
             <li>the links between the payments and the invoices are detected at the bank matching process</li>
          </ul>
      </div>
      <div class="doc-aside reconciliation-example">
         <div class="rubric"><strong class="text-center text-xs">Customer Statement Example</strong></div>
         <table class="table-sm d-c-table">
               <col style="width: 33%" />
               <col style="width: 33%" />
               <col style="width: 33%" />
            </colgroup>
         <thead>
         <tr>
            <th>Accounts Receivable</th>
            <th>Debit</th>
            <th>Credit</th>
         </tr>
      </thead>
      <tbody>
         <tr>
            <td>Invoice 1</td>
            <td>100</td>
            <td></td>
         </tr>
         <tr>
            <td>Partial payment 1/2</td>
            <td></td>
            <td>70</td>
         </tr>
         <tr>
            <td>Invoice 2</td>
            <td>65</td>
            <td></td>
         </tr>
         <tr>
            <td>Partial payment 2/2</td>
            <td></td>
            <td>30</td>
         </tr>
         <tr>
            <td>Payment 2</td>
            <td></td>
            <td>65</td>
         </tr>
         <tr>
            <td>Invoice 3</td>
            <td>50</td>
            <td></td>
         </tr>
         <tr>
            <td></td>
            <td></td>
            <td></td>
         </tr>
         <tr>
            <td>Total to pay</td>
            <td>50</td>
            <td></td>
         </tr>
      </tbody>
         </table>
   </div>
   </div>
</section>

## Bank Reconciliation

The Bank Reconciliation procedure is very effective for helping the user to match an individual or an organization’s cash account information to bank details. Using the comparing method, the bank reconciliation enables an organization to understand whether there are any dissimilarities in the account. With these advanced advantages, an organization will be able to obtain fast corrective actions if any variances are found.
<br/><br/> 
**Bank reconciliation** is to match the system payment entries with the bank statement. As per the above example, the customer invoice is matched with the customer payment. Now the next is to match with bank statements. There will be an entry in the bank statement corresponding to the invoice. Now reconciling with the bank statement will be termed as bank reconciliation.
<br/><br/> 
<section id="bank-reconciliation">


Bank reconciliation is the matching of bank statement lines (provided by your bank) with
transactions recorded internally (payments to suppliers or from customers). For each line in a bank
statement, it can be:
<ul>
   <li><strong>matched with a previously recorded payment</strong>: a payment is registered when a check is received from a customer, then matched when checking the bank statement.</li>
   <li><strong>recorded as a new payment</strong>: the payment's journal entry is created and econciled with the related invoice when processing the bank statement.</li>
   <li><strong>recorded as another transaction</strong>: bank transfer, direct charge, etc.</li>
</ul>

ANSIS should automatically reconcile most transactions; only a few should need manual review. When
the bank reconciliation process is finished, the balance on the bank account in ANSIS should match
the bank statement's balance.

</section>


### Checks Handling
<section id="checks-handling">

<div class="grid grid-cols-1 gap-1">
   <div>
      There are two approaches to managing checks and internal wire transfers:
      <ul>
         <li><p>Two journal entries and a reconciliation</p></li>
         <li><p>One journal entry and a bank reconciliation</p></li>
      </ul>
   </div>
   <div class="doc-aside">
      <strong>Two journal entries and a reconciliation</strong><br/>
      The first journal entry is created by registering the payment on the invoice. 
      <br/><br/>
      The second one is created when registering the bank statement.
      <div>
            <table class="table-sm d-c-table">
            <colgroup>
               <col style="width: 30%" />
               <col style="width: 30%" />
               <col style="width: 30%" />
               <col style="width: 30%" />
            </colgroup>
            <thead>
               <tr>
               <th>Account</th>
               <th>Debit</th>
               <th>Credit</th>
               <th>Reconciliation</th>
               </tr>
            </thead>
            <tbody>
               <tr>
               <td>Account Receivable</td>
               <td></td>
               <td>100</td>
               <td>Invoice ABC</td>
               </tr>
               <tr>
               <td>Undeposited funds</td>
               <td>100</td>
               <td></td>
               <td>Check 0123</td>
               </tr>
            </tbody>
         </table>
      </div>
      <div>
         <table class="table-sm d-c-table text-xs">
         <colgroup>
            <col style="width: 30%" />
            <col style="width: 30%" />
            <col style="width: 30%" />
            <col style="width: 30%" />
         </colgroup>
         <thead>
            <tr>
               <th>Account</th>
               <th>Debit</th>
               <th>Credit</th>
               <th>Reconciliation</th>
            </tr>
         </thead>
         <tbody>
            <tr>
               <td>Undeposit Fund</td>
               <td></td>
               <td>100</td>
               <td>Invoice ABC</td>
            </tr>
            <tr>
               <td>Bank</td>
               <td>100</td>
               <td></td>
               <td>Check 0123</td>
            </tr>
         </tbody>
         </table>
      </div>
      <strong>One journal entry and a bank reconciliation</strong><br/>
      A journal entry is created by registering the payment on the invoice. When reconciling the bank statement, the statement line is linked to the existing journal entry.
     <div >
         <table class="table-sm d-c-table text-xs">
         <colgroup>
            <col style="width: 20%" />
            <col style="width: 20%" />
            <col style="width: 20%" />
            <col style="width: 20%" />
            <col style="width: 20%" />
         </colgroup>
         <thead>
            <tr>
               <th>Account</th>
               <th>Debit</th>
               <th>Credit</th>
               <th>Reconciliation</th>
               <th>Bank Statement</th>
            </tr>
         </thead>
         <tbody>
            <tr>
               <td>Account Receivable</td>
               <td></td>
               <td>100</td>
               <td>Invoice ABC</td>
               <td></td>
            </tr>
            <tr>
               <td>Bank</td>
               <td>100</td>
               <td></td>
               <td></td>
               <td>Statement XYZ</td>
            </tr>
         </tbody>
         </table>
      </div>
   </div>
</div>

</section>