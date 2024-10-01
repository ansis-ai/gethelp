---
title: Transactions Examples
summary: Accounting --> Getting Started --> Accounting Concept --> Transactions Examples
date: 2022-01-18
hide:
  - toc
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


<section id="journal-entries">
   <p>Every financial document of the company (e.g., an invoice, a bank statement, a pay slip, a capital increase contract) is recorded as a journal entry, impacting several accounts.</p>
   <br/>
   <p>For a journal entry to be balanced, the sum of all its debits must be equal to the sum of all its credits.</p>
   <br/>
   <div class="grid grid-cols-1">
      <div id="entries-control"></div>
      <br/>
      <div class="journal-entries text-xs"></div>
   </div>   
   <a href="accounting/reconciliation"></a>
</section>

<section id="example">
<h2>More Journal Entries</h2>
   <div class="grid grid-cols-2 gap-1">
         <div class="doc-aside">
            <backquote class="highlights">
                <div>
                   <p class="text-center text-xs">Balance = Debit - Credit</p>
                </div>
            </backquote>
            <div class="chart-of-accounts text-left">
               <!-- placeholder -->
            </div>
         </div>
         <div class="col-span-2 example"></div> 
   </div>
</section>
