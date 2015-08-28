snippet-helper
====

The goal of snippet-helper is to:

1. Build an API
2. Create a CRUD setup for manipulating my database
3. interface with Postgres.
4. Create an app that lets me pull from memory.
5. Markdown Responsive.

Todo
---

* Write a base layout in index.js
* Learn how to write the CRUD setup
* Learn to pass variables
* separate the index.js
* create a way to use tree to print out folder/file structure

File Structure
----
* index.js
* package.json - the usual
* gulpfile.js - primarily runs nodemon right now, no frontend builds yet.
* config.js - contains the basic settings and variables
* /server - the base of the api and router
  * /routes
    * index.js - the basic routes(imports handlers)
  * /models
    * database.js - the basic database setup
  * /handlers - contains separate file functions indexed for calls into routes.
* /src
* /build - this is where I will plaste the app

Endpoints
-----
* GET
* PUT
* POST
* UPDATE
