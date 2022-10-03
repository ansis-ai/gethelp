---
title: Managing Products
summary: Managing Products
authors:
    - Wilson Loh
date: 2022-09-29
---

## Converting Products into Product Variants

Create the necessary attributes and the attribute values. 
<br /><br />
Each product.template record also automatically creates a product.product record (variant), even if no variants are created explicitly.
<br /><br />
You may want to create a new product template with  the  corresponding  variants , then go to the corresponding newly created product variants and export them to  see  the  **External  ID**  of  the  corresponding  product  template and the  fields  for  the  **attribute  values** .
<br /><br />
Also export the product variants of the old product templates. Then in the  product  variant  records  replace the **External ID of the product template** with the External ID of the newly created product template,  add the  **attribute  fields**  and  reimport  the  product  variants.
<br /><br />
Then *delete  the  newly created  product.product*  records  of  the  new  product  template.  Maybe it works.
<br /><br />
*But make a database backup before!*