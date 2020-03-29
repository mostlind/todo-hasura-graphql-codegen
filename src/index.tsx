import React from "react";
import { render } from "react-dom";
import {
  createClient,
  Provider,
  defaultExchanges,
  subscriptionExchange
} from "urql";
import { SubscriptionClient } from "subscriptions-transport-ws";
import { App } from "./App";

const subscriptionClient = new SubscriptionClient(
  "ws://localhost:8080/v1/graphql",
  {
    reconnect: true
  }
);

const client = createClient({
  url: "http://localhost:8080/v1/graphql",
  exchanges: [
    ...defaultExchanges,
    subscriptionExchange({
      forwardSubscription(operation) {
        return subscriptionClient.request(operation);
      }
    })
  ]
});

render(
  <Provider value={client}>
    <App />
  </Provider>,
  document.getElementById("app")
);
