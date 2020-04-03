import React from "react";
import { render } from "react-dom";
import {
  cacheExchange,
  createClient,
  dedupExchange,
  fetchExchange,
  Provider
} from "urql";
import { devtoolsExchange } from "@urql/devtools";
import { initialize, pageview } from "react-ga";

import { App } from "./App";

if (
  [process.env.TODO_APP_GA_ID, process.env.TODO_APP_BACKEND_URL].some(
    envVar => envVar === undefined
  )
) {
  throw new Error("Must provide all environment variables");
}

initialize(process.env.TODO_APP_GA_ID!, { debug: true });
pageview(window.location.pathname + window.location.search);

const client = createClient({
  url: process.env.TODO_APP_BACKEND_URL ?? "http://localhost:8080/v1/graphql",
  exchanges: [dedupExchange, devtoolsExchange, cacheExchange, fetchExchange]
});

render(
  <Provider value={client}>
    <App />
  </Provider>,
  document.getElementById("app")
);
