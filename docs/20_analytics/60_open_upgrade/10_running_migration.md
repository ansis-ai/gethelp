---
title: Running Migration
summary: This is Developer Guide
authors: Wilson Loh
date: 2023-07-12
---


Check out the code manually and upgrade your database by calling odoo-bin, (or openerp-server) directly. You will want to do this when you are working on developing migration scripts for uncovered modules.

## [Get the code from OpenUpgrade and dependencies](https://oca.github.io/OpenUpgrade/migration_details.html#get-the-code-from-openupgrade-and-dependencies "Permalink to this heading")

### [OpenUpgrade](https://oca.github.io/OpenUpgrade/migration_details.html#openupgrade "Permalink to this heading")

Make the _openupgrade_framework_ and the _openupgrade_scripts_ modules available in the addons path in the PerfectWORK instance of the new version.
<br/><br/>

### [openupgradelib](https://oca.github.io/OpenUpgrade/migration_details.html#openupgradelib "Permalink to this heading")

-   When installing the _openupgradelib_ make sure you check out the latest version from github to get the latest updates and fixes:
    
    ```bash  title="Install latest version of openupgradelib"
    pip install git+https://github.com/OCA/openupgradelib.git@master#egg=openupgradelib
    ```


## [Check coverage of the migration scripts for your installed modules](https://oca.github.io/OpenUpgrade/migration_details.html#check-coverage-of-the-migration-scripts-for-your-installed-modules "Permalink to this heading")

Check if there are migration scripts provided for the set of modules that are installed in your Odoo database. If there are modules for which no migration scripts have been developed yet, your migration may fail or the integrity of your database may be lacking. 
<br/><br/>

Check the module coverage in this documentation under [Module coverage](https://oca.github.io/OpenUpgrade/status.html) and refer to the [Migration script development](https://oca.github.io/OpenUpgrade/development.html) documentation to add the missing migration scripts.

## [Make a copy of the database to migrate](https://oca.github.io/OpenUpgrade/migration_details.html#make-a-copy-of-the-database-to-migrate "Permalink to this heading")

Decide which database you are going to upgrade. You absolutely _must_ make a backup of your live database before you start this process!

## [Adjust the configuration for PerfectWORK and OpenUpgrade](https://oca.github.io/OpenUpgrade/migration_details.html#adjust-the-configuration-for-odoo-and-openupgrade "Permalink to this heading")

Edit the configuration files and command line parameters to point to the database you are going to upgrade. The recommended command line parameters are 

```bash 
--upgrade-path=<path_to_openupgrade>/openupgrade_scripts/scripts --update all --stop-after-init --load=base,web,openupgrade_framework
```


### [Configuration options](https://oca.github.io/OpenUpgrade/migration_details.html#configuration-options "Permalink to this heading")

-   When migrating across several versions of Odoo, setting the target version as an environment variable allows OpenUpgrade to skip methods that are called in every version but really only need to run in the target version.
  
-   Make the target version available to OpenUpgrade with:
    
    ```
    export OPENUPGRADE_TARGET_VERSION=16.0
    
    ```
    
    (when migrating up to 16.0)
    

### [Obsolete options in the Odoo configuration file](https://oca.github.io/OpenUpgrade/migration_details.html#obsolete-options-in-the-odoo-configuration-file "Permalink to this heading")

Add these options to a separate stanza in the server configuration file under a header _\[openupgrade\]_

-   _autoinstall_ - A dictionary with module name keys and lists of module names as values. If a key module is installed on your database, the modules from the value (and their dependencies) are selected for installation as well.
    
-   _force\_deps_ - A dictionary with module name keys and lists of module names as values. If a key module is installed on your database, the modules from the value will be treated as a module dependency. With this directive, you can manipulate the order in which the modules are migrated. If the modules from the value are not already installed on your database, they will be selected for installation (as will their dependencies). Be careful not to introduce a circular dependency using this directive.
    

## [Run the upgrade, fix data and repeat…](https://oca.github.io/OpenUpgrade/migration_details.html#run-the-upgrade-fix-data-and-repeat "Permalink to this heading")

Run the upgrade and check for errors. You will probably learn a lot about your data and have to do some manual clean up before and after the upgrade. Expect to repeat the process several times as you encounter errors, clean up your data, and try again. If necessary, ask for help or report bugs on Github.

### [Write the missing migration scripts](https://oca.github.io/OpenUpgrade/migration_details.html#write-the-missing-migration-scripts "Permalink to this heading")

At this stage, if some of your modules don’t have yet migration scripts, you might need to add them yourself. Read more about the development of migrations scripts in [Migration script development](https://oca.github.io/OpenUpgrade/development.html)