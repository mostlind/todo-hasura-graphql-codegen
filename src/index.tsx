import React from "react";
import { render } from "react-dom";
import { createClient, Provider } from "urql";
import { App } from "./App";

const client = createClient({
  url: "http://localhost:8080/v1/graphql"
});

render(
  <Provider value={client}>
    <App />
  </Provider>,
  document.getElementById("app")
);
