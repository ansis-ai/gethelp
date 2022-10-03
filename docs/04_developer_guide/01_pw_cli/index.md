---
title: PW CLI
summary: A versatile tool for browsing PerfectWORK data
authors:
  - Wilson Loh
date: 2021-10-26
---
This section gives the bare minimum to use PW_CLI as a command line tool or within an interactive shell.

This is a test .

## Installation

Download and install the latest release from PyPI:

```console
    pip install -U pw_cli
```

## Command line arguments

There are few arguments to query PerfectWORK models from the command line. Although it is quite limited:

```console
$ PW_CLI --help

Usage: PW_CLI.py [options] [search_term_or_id [search_term_or_id ...]]

Inspect data on PerfectWORK objects.  Use interactively or query a model (-m) and
pass search terms or ids as positional parameters after the options.

Options:
  --version             show program's version number and exit
  -h, --help            show this help message and exit
  -l, --list            list sections of the configuration
  --env=ENV             read connection settings from the given section
  -c CONFIG, --config=CONFIG
                        specify alternate config file (default: 'PW_CLI.ini')
  --server=SERVER       full URL of the server (default:
                        http://localhost:8069/xmlrpc)
  -d DB, --db=DB        database
  -u USER, --user=USER  username
  -p PASSWORD, --password=PASSWORD
                        password, or it will be requested on login
  -m MODEL, --model=MODEL
                        the type of object to find
  -f FIELDS, --fields=FIELDS
                        restrict the output to certain fields (multiple
                        allowed)
  -i, --interact        use interactively; default when no model is queried
  -v, --verbose         verbose
$ #
```

Example:

```console
$ pw_cli -d demo -m res.partner -f name -f lang 1
"name","lang"
"Your Company","en_US"
```

```console
$ pw_cli -d demo -m res.groups -f full_name 'id > 0'
"full_name"
"Administration / Access Rights"
"Administration / Configuration"
"Human Resources / Employee"
"Usability / Multi Companies"
"Usability / Extended View"
"Usability / Technical Features"
"Sales Management / User"
"Sales Management / Manager"
"Partner Manager"
```

## Interactive use

Edit pw_cli.ini and declare the environment(s):

```console
[DEFAULT]
scheme = http
host = localhost
port = 8069
database = perfectwork
username = admin

[demo]
username = demo
password = demo
protocol = xmlrpc

[demo_jsonrpc]
username = demo
password = demo
protocol = jsonrpc

[local]
scheme = local
options = -c /path/to/pw-server.conf --without-demo all
```

Connect to the PerfectWORK server:

```console
pw_cli --list
pw_cli --env demo
```

This is a sample session:

```console
>>> env['res.users']
<Model 'res.users'>
>>> env['res.users'].search_count()
4
>>> crons = env['ir.cron'].with_context(active_test=False).search([])
>>> crons.read('active name')
[{'active': True, 'id': 5, 'name': 'Calendar: Event Reminder'},
 {'active': False, 'id': 4, 'name': 'Mail: Fetchmail Service'}]
>>> #
>>> env.modules('delivery')
{'uninstalled': ['delivery', 'website_sale_delivery']}
>>> env.upgrade('base')
1 module(s) selected
42 module(s) to process:
  to upgrade    account
  to upgrade    account_chart
  to upgrade    account_tax_include
  to upgrade    base
  ...
>>> #
```

!!!note
Use the --verbose switch to see what happens behind the scene. Lines are truncated at 79 chars. Use -vv or -vvv to print more.

!!!note
To preserve the history of commands when closing the session, first create an empty file in your home directory: touch ~/.pw_cli_history

More details in the [Tutorial](02_tutorial.md) section.
