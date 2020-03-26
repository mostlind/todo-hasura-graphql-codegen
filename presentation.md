# Who needs a backend anyway?

## The problem

- most backend work is mindless / routine
  - write SQL / ORM query
  - tranform data into shape needed
  - error handling
  - HTTP things (status codes, etc)
  - Rewrite model on frontend
  - create query/API call on frontend

`Let's automate it away`

## The stack

### Postgres

- The best relational database

### [Hasura](https://hasura.io/)

- generates a graphql API from postgres schema
- exposes powerful filtering, sorting, aggregation, CRUD operations with no effort other than creating the tables
- more complex querying can be accomplished through database views
- computed fields can be accomplished through generated columns or PG function calls
- [implements granular authorization options, based on roles](https://hasura.io/docs/1.0/graphql/manual/auth/authorization/index.html)
  - limit who can perform inserts, deletes, updates, selects at the table or column level
  - limit returned rows based on user id
- [escape hatches for custom logic](https://hasura.io/blog/custom-business-logic/)
  - schema stitching: point hasura at a seperate graphql schema and it will be combined with the hasura graphql schema
  - events: call a webhook when data changes

### [`graphql-code-generator`](https://graphql-code-generator.com/)

- generates graphql schema file for `.graphql` files autocomplete
- generates typescript models
- generates typescript functions from `.graphql` files in frontend source, ready to be imported into `.ts` files

### [`urql`](https://formidable.com/open-source/urql/)

- a clean graphql query library
- based around react hooks
- automatic cache invalidation / refetching

## These tools work together to create a highly productive development loop

- add column to db
- write graphql query on frontend (fully typesafe with autocomplete)
- import generated query function into typescript code
- viola! you have data

## [Demo](http://localhost:8081)

## Performance

- Hasura compiles graphql queries to efficient SQL queries
- Horizontally scalable
- Better than I would do (without multiple passes, at least)

## Open questions

- How much does code generation slow down as project size grows?
