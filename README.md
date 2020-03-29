# Hasura & Graphql Code Generation Todo App

## Running locally

Pre-reqs:

- have Node installed
- have Docker installed

Commands:

1. `npm install` to install deps
1. `npm run start:backend` to run backend
1. `npm run migrate` to apply migrations
1. Run in seperate terminals:

   - `npm run start` to start the frontend
   - `npm run generate` to start code generation watcher
   - `npm run console` to start hasura console

1. The frontend should be running at http://localhost:8081

## Stopping the backend

Run `npm run stop:backend`

## GraphQL Auto-Complete

For graphql auto-complete, install [this package](https://marketplace.visualstudio.com/items?itemName=apollographql.vscode-apollo)

## Testing

- `npm test` to run tests
- `npm test -- --coverage` to get a coverage report

### Writing new tests

> Write tests. Not too many. Mostly Integration.
> -- Guillermo Rauch

- See https://kentcdodds.com/blog/write-tests
- Integration tests give the most bang your buck, so test high in the react tree
- the whole backend is mocked using `test-utils/utils.ts#mockUrqlClient`
- custom resolvers can be added to `mockUrqlClient` to test specific functionality
- See `__tests__` for examples

## Todo:

- Integrate [Urql DevTools](https://github.com/FormidableLabs/urql-devtools)
- MDX for interactive documentation?
