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
