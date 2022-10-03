---
title: API
authors: Wilson Loh
date: 2022-09-21
---

The library provides few objects to access the PerfectWORK model and the associated services of the PerfectWORK API.
<br /><br />
The signature of the methods mimics the standard methods provided by the osv.Model PerfectWORK class. This is intended to help the developer when developping addons. What is experimented at the interactive prompt should be portable in the application with little effort.

## Client and Services

The Client object provides thin wrappers around PerfectWORK RPC services and their methods. Additional helpers are provided to explore the models and list or install PerfectWORK add-ons.
```py
class pw_cli.Client(server, db=None, user=None, password=None, transport=None, verbose=False)
```
Connection to an PerfectWORK instance.
<br /><br />
This is the top level object. The server is the URL of the instance, like http://localhost:8069. If server is an PerfectWORK/openerp Python package, it is used to connect to the local server.
<br /><br />
The db is the name of the database and the user should exist in the table res.users. If the password is not provided, it will be asked on login.

```py
class methodClient.from_config(environment, user=None, verbose=False)[source]
```
Create a connection to a defined environment.
<br /><br />
Read the settings from the section [environment] in the pw_cli.ini file and return a connected Client. See read_config() for details of the configuration file format.

```py
Client.create_database(passwd, database, demo=False, lang='en_US', user_password='admin', login='admin', country_code=None)[source]
```
Create a new database.
<br /><br />
The superadmin passwd and the database name are mandatory. By default, demo data are not loaded, lang is en_US and no country is set into the database. Login if successful.

```py
Client.clone_database(passwd, database)[source]
```
Clone the current database.

The superadmin passwd and database are mandatory. Login if successful.

```py
Client.login(user, password=None, database=None)[source]
```
Switch user and (optionally) database.

!!!note
    In interactive mode, a method Client.connect(env=None) exists, to connect to another environment, and recreate the globals().


### PerfectWORK RPC Services

The naked PerfectWORK RPC services are exposed too. The db and the common services expose few methods which might be helpful for server administration. Use the dir() function to introspect them. The _object service should not be used directly because its methods are wrapped and exposed on the Env object itself. The two last services are deprecated and removed in recent versions of PerfectWORK. Please refer to the PerfectWORK documentation for more details.

```py
Client.db
```
Expose the db Service.

Examples: Client.db.list() or Client.db.server_version() RPC methods.

```py
Client.common
```
Expose the common Service.

Example: Client.common.login_message() RPC method.

```py
Client._object
```
Expose the object Service.

```py
Client._report
```
Expose the report Service.

```py
class pw_cli.Service(client, endpoint, methods, verbose=False)[source]
```
A wrapper around XML-RPC endpoints.

The connected endpoints are exposed on the Client instance. The server argument is the URL of the server (scheme+host+port). If server is an PerfectWORK Python package, it is used to connect to the local server. The endpoint argument is the name of the service (examples: "object", "db"). The methods is the list of methods which should be exposed on this endpoint. Use dir(...) on the instance to list them.

## Environment

```py
class PerfectWORKly.Env[source]
```
An environment wraps data for PerfectWORK models and records:

- db_name, the current database;
- uid, the current user id;
- context, the current context dictionary.

To retrieve an instance of some.model:

```py
>>> env["some.model"]
```

## db_name
Environment’s database name.

## uid
Environment’s user id.

## user
Instance of the environment’s user.

## context
Environment’s context dictionary. It defaults to the lang and tz of the user. Use Model.with_context() to switch the context. For example env['account.invoice'].with_context({}) can be used to call a method which does not accept the context argument.

## cr
Cursor on the current database.

## sudo(user=SUPERUSER_ID)[source]
Attach to the provided user, or SUPERUSER.

## __getitem__(name)[source]
Return the given Model.

## access(model_name, mode='read')[source]
Check if the user has access to this model.

Optional argument mode is the access mode to check. Valid values are read, write, create and unlink. If omitted, the read mode is checked. Return a boolean.

## execute(obj, method, *params, **kwargs)[source]
Wrapper around object.execute_kw RPC method.

Argument method is the name of an osv.osv method or a method available on this obj. Method params are allowed. If needed, keyword arguments are collected in kwargs.

## lang
Return the current language code.

## models(name='')[source]
Search PerfectWORK models.

The argument name is a pattern to filter the models returned. If omitted, all models are returned.

The return value is a sorted list of model names.

## PerfectWORK_env
Return a server Environment.

Supported since PerfectWORK 8.

## ref(xml_id)[source]
Return the record for the given xml_id external ID.

## registry
Return the environment’s registry.

!!!note
    When connected to the local PerfectWORK server, the Env.PerfectWORK_env attribute grabs an PerfectWORK Environment with the same characteristics as the Env instance (db_name, uid, context). In this case a cursor on the database is available as Env.cr.


### Advanced methods

Those methods give more control on the PerfectWORK objects: workflows and reports. Please refer to the PerfectWORK documentation for details.

```py
Env.execute(obj, method, *params, **kwargs)[source]
```
Wrapper around object.execute_kw RPC method.
<br /><br />
Argument method is the name of an osv.osv method or a method available on this obj. Method params are allowed. If needed, keyword arguments are collected in kwargs.

### Manage addons

These helpers are convenient to list, install or upgrade addons from a Python script or interactively in a Python session.

```py
Env.modules(name='', installed=None)[source]
```
Return a dictionary of modules.

The optional argument name is a pattern to filter the modules. If the boolean argument installed is True, the modules which are “Not Installed” or “Not Installable” are omitted. If the argument is False, only these modules are returned. If argument installed is omitted, all modules are returned. The return value is a dictionary where module names are grouped in lists according to their state.

```py
Env.install(*modules)[source]
```
Press the button Install.

```py
Env.upgrade(*modules)[source]
```
Press the button Upgrade.

```py
Env.uninstall(*modules)[source]
```
Press the button Uninstall.

!!!note

    It is not recommended to install or upgrade modules in offline mode when any web server is still running: the operation will not be signaled to other processes. This restriction does not apply when connected through XML-RPC or JSON-RPC.

## Model and Records

The Env provides a high level API similar to the PerfectWORK API, which encapsulates objects into Active Records.

The Model is instantiated using the client.env[...] syntax.

Example: client.env['res.company'] returns a Model.

```py
class pw_cli.Model(client, model_name)[source]
```
The class for PerfectWORK models.

> keys()[source]

Return the keys of the model.

> fields(names=None, attributes=None)[source]

Return a dictionary of the fields of the model.

Optional argument names is a sequence of field names or a space separated string of these names. If omitted, all fields are returned. Optional argument attributes is a sequence of attributes or a space separated string of these attributes. If omitted, all attributes are returned.

> field(name)[source]

Return the field properties for field name.

> access(mode='read')[source]

Check if the user has access to this model.

Optional argument mode is the access mode to check. Valid values are read, write, create and unlink. If omitted, the read mode is checked. Return a boolean.

> search(domain, offset=0, limit=None, order=None)[source]

Search for records in the domain.

> search_count(domain)[source]

Count the records in the domain.

> read(domain, fields=None, offset=0, limit=None, order=None)[source]

Wrapper for client.execute(model, 'read', [...], ('a', 'b')).

The first argument is a list of ids [1, 3] or a single id 42.

The second argument, fields, accepts:
- a single field: 'first_name'
- a tuple of fields: ('street', 'city')
- a space separated string: 'street city'
- a format spec: '%(street)s %(city)s'
If fields is omitted, all fields are read.

> If domain is a single id, then:

- return a single value if a single field is requested.
- return a string if a format spec is passed in the fields argument.
- else, return a dictionary.
  
If domain is not a single id, the returned value is a list of items. Each item complies with the rules of the previous paragraph.

The optional keyword arguments offset, limit and order are used to restrict the search. The order is also used to order the results returned. Note: the low-level RPC method read itself does not preserve the order of the results.

> get(domain)[source]

Return a single Record.

The argument domain accepts a single integer id or a search domain, or an external ID xml_id. The return value is a Record or None. If multiple records are found, a ValueError is raised.

> browse(ids)[source]

Return a Record or a RecordList.

The argument ids accepts a single integer id or a list of ids. If it is a single integer, the return value is a Record. Otherwise, the return value is a RecordList.

>create(values)[source]

Create a Record.

The argument values is a dictionary of values which are used to create the record. Relationship fields one2many and many2many accept either a list of ids or a RecordList or the extended PerfectWORK syntax. Relationship fields many2one and reference accept either a Record or the PerfectWORK syntax.

The newly created Record is returned.

> with_env(env)

Attach to the provided environment.

> sudo(user=SUPERUSER_ID)

Attach to the provided user, or SUPERUSER.

> with_context([context][, **overrides])

Attach to an extended context.

> _get_external_ids(ids=None)[source]

Retrieve the External IDs of the records.

Return a dictionary with keys being the fully qualified External IDs, and values the Record entries.

```py
class pw_cli.RecordList(model, ids)[source]
```
A sequence of PerfectWORK Record.

It has a similar API as the Record class, but for a list of records. The attributes of the RecordList are read-only, and they return list of attribute values in the same order. The many2one, one2many and many2many attributes are wrapped in RecordList and list of RecordList objects. Use the method RecordList.write to assign a single value to all the selected records.

> read(fields=None)[source]

Wrapper for the Record.read() method.

Return a RecordList if fields is the name of a single many2one field, else return a list. See Model.read() for details.

> write(values)

Wrapper for the Record.write() method.

> unlink()

Wrapper for the Record.unlink() method.

> exists()

Return a subset of records that exist.

> mapped(func)

Apply func on all records.

> filtered(func)

Select the records such that func(rec) is true.

As an alternative func can be a search domain (list) to search among the records.

> sorted(key=None, reverse=False)

Return the records sorted by key.

> ensure_one()

Return the single record in this recordset.

Raise a ValueError it recordset has more records or is empty.

> union(*args)

Return the union of all records.

Preserve first occurence order.

> concat(*args)

Return the concatenation of all records.

> with_env(env)

Attach to the provided environment.

> sudo(user=SUPERUSER_ID)

Attach to the provided user, or SUPERUSER.

> with_context([context][, **overrides])

Attach to an extended context.

> get_metadata()

Wrapper for the Record.get_metadata() method.

> _external_id

Retrieve the External IDs of the RecordList.

Return the list of fully qualified External IDs of the RecordList, with default value False if there’s none. If multiple IDs exist for a record, only one of them is returned.

```py
class pw_cli.Record(model, id)[source]
```
A class for all PerfectWORK records.

It maps any PerfectWORK object. The fields can be accessed through attributes. The changes are immediately sent to the server. The many2one, one2many and many2many attributes are wrapped in Record and RecordList objects. These attributes support writing too. The attributes are evaluated lazily, and they are cached in the record. The Record’s cache is invalidated if any attribute is changed.

> exists()

Return a subset of records that exist.

> get_metadata(details=True)

Lookup metadata about the record(s). Return dictionaries with the following keys:

- id: object id
- create_uid: user who created the record
- create_date: date when the record was created
- write_uid: last user who changed the record
- write_date: date of the last change to the record
- xmlid: External ID to use to refer to this record (if there is one), in format module.name.

> _external_id

Retrieve the External ID of the Record.

Return the fully qualified External ID of the Record, with default value False if there’s none. If multiple IDs exist, only one of them is returned (randomly).

> _send(signal)[source]

Trigger workflow signal for this Record.

> copy(default=None)[source]

Copy a record and return the new Record.

The optional argument default is a mapping which overrides some values of the new record.

> read(fields=None)[source]

Read the fields of the Record.

The argument fields accepts different kinds of values. See Model.read() for details.

> refresh()[source]

Force refreshing the record’s data.

> unlink()

Delete the record(s) from the database.

> write(values)

Write the values in the record(s).

values is a dictionary of values. See Model.create() for details.


## Utilities

```py
pw_cli.issearchdomain(arg)[source]
```
Check if the argument is a search domain.

> Examples:

- [('name', '=', 'mushroom'), ('state', '!=', 'draft')]
- ['name = mushroom', 'state != draft']
- []

```py
pw_cli.searchargs(params, kwargs=None)[source]
```
Compute the ‘search’ parameters.

```py
pw_cli.format_exception(type, value, tb, limit=None, chain=True)[source]
```
Format a stack trace and the exception information.

This wrapper is a replacement of traceback.format_exception which formats the error and traceback received by XML-RPC/JSON-RPC. If chain is True, then the original exception is printed too.

```py
pw_cli.read_config(section=None)[source]
```
Read the environment settings from the configuration file.

The config file PerfectWORKly.ini contains a section for each environment. Each section provides parameters for the connection: host, port, database, username and (optional) password. Default values are read from the [DEFAULT] section. If the password is not in the configuration file, it is requested on login. Return a tuple (server, db, user, password or None). Without argument, it returns the list of configured environments.

```
pw_cli.start_PerfectWORK_services(options=None, appname=None)[source]
```
Initialize the PerfectWORK services.

Import the PerfectWORK Python package and load the PerfectWORK services. The argument options receives the command line arguments for PerfectWORK. Example:

```console
['-c', '/path/to/PerfectWORK-server.conf', '--without-demo', 'all'].
```
Return the [PW CLI](index.md) package.