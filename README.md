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

### Testing Libraries

- [Jest](https://jestjs.io/) for test running and assertions
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) to render components, fire events, etc.
- [Graphql Tools](https://www.apollographql.com/docs/graphql-tools/mocking/) for mocking graphql backend

## Urql DevTools

[Urql devtools](https://github.com/FormidableLabs/urql-devtools) are available for firefox and chrome to monitor requests and cache hit/miss results. Also allows you to run queries.

They work better on Chrome.

## Storybook

To start run `npm run storybook`

- TODO: describe how to write stories
- Setup MDX documentation

## Grafana

Grafana runs at `localhost:3000`

Can be used to make graphs measuring performance

TODO: set up metrics example

## Todo:

- Add Google Analytics with `react-ga` library
  - Log user events (form completions, invalid form inputs, page changes, modal openings, other user actions)
- Add react router and hook up route changes to Google Analytics
- Storybook UI for interactive documentation?
- Remove Material UI, maybe check out Reach UI instead?
- Feature flags over environments?
- Implement better logging (https://github.com/pimterry/loglevel)
  - create log structure, e.g. log, metric, error + json structure
  - create unique id for session
  - give info about browser, window size etc
  - Send logs to server? (json logging, postgres / graphana or elastisearch / kibana?)
  - performance / memory usage / load times?
- Internationalization
- Look into https://registry.terraform.io/modules/FormidableLabs/serverless/aws/1.0.0
