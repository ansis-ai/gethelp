---
title: After Migration
summary: This is Developer Guide
authors: Wilson Loh
date: 2023-07-12
---

OpenUpgrade keeps old model tables and old columns (prefixed with openupgrade\_legacy\_ word) in PostgreSQL as a conservative strategy because they can be used in a later migration script (or to fix an incorrect migration) or only for reference.
<br/><br/>

After the upgraded database has been running stable for a while, you can consider removing the obsolete tables and columns to keep your database clean and tidy (i.e. to restore the consistency between the ORM and the database layout). The data is orphaned, which means there is no protection from the ORM when another module or a future version of Odoo reintroduces any table or column (for a new purpose) that happens to still exist in your database.
<br/><br/>

There’s a module called \_database\_cleanup\_, hosted on OCA server-tools project ([https://github.com/OCA/server-tools](https://github.com/OCA/server-tools)), that allows to purge this old data in an intuitive way.
<br/><br/>

You are also encouraged to have Postgresql run a full vacuum to free up disk space (see the documentation of your version of Postgresql).