import React from "react";
import { render } from "react-dom";
import {
  createClient,
  Provider,
  defaultExchanges,
  subscriptionExchange
} from "urql";
import { SubscriptionClient } from "subscriptions-transport-ws";
import { Location } from "./components/todo-list";
import { Container, AppBar, Toolbar, Typography } from "@material-ui/core";
import { css } from "emotion";

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

const contaier = css`
  text-align: center;
  padding: 100px;
`;

function App() {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography variant="h6">Do the thing</Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" className={contaier}>
        <Location />
      </Container>
    </>
  );
}

render(
  <Provider value={client}>
    <App />
  </Provider>,
  document.getElementById("app")
);
