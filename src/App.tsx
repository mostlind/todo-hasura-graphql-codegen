import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { TodoList } from "./components/todo-list";
import { css } from "emotion";

const contaier = css`
  text-align: center;
  padding: 100px;
`;

export function App() {
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
