import React from "react";
import Head from "next/head";
// import styles from "../styles/Home.module.css";
import { withUrqlClient } from "next-urql";
import { devtoolsExchange } from "@urql/devtools";
import { cacheExchange, dedupExchange, fetchExchange, useQuery } from "urql";
import { AppBar, Toolbar, Typography, Container } from "@material-ui/core";
import { TodoList } from "../components/todo-list";
import { css } from "emotion";

const contaier = css`
  text-align: center;
  padding: 100px;
`;

export function Index() {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography variant="h6">Do the thing</Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" className={contaier}>
        <TodoList />
      </Container>
    </>
  );
}

export default withUrqlClient((ssrExchange, ctx) => {
  // ...add your Client options here
  return {
    url: process.env.NEXT_PUBLIC_TODO_APP_BACKEND_URL!,
    exchanges: [
      devtoolsExchange,
      dedupExchange,
      cacheExchange,
      ssrExchange,
      fetchExchange,
    ],
  };
})(Index);
