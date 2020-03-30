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

import { App } from "./App";

const client = createClient({
  url: "http://localhost:8080/v1/graphql",
  exchanges: [dedupExchange, devtoolsExchange, cacheExchange, fetchExchange]
});

render(
  <Provider value={client}>
    <App />
  </Provider>,
  document.getElementById("app")
);
