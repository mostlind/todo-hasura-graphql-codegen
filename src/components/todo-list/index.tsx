import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Grid,
  List,
  ListItem,
  Card
} from "@material-ui/core";

import {
  Todo as ITodo,
  useCreateTodoMutation,
  useNewTodosQuery,
  useInProgressTodosQuery,
  useCompletedTodosQuery
} from "../../generated/graphql";
import { Todo } from "../todo";

const context = {
  additionalTypenames: ["todo"]
};

function TodosSection({ header, todos }: { header: string; todos: any }) {
  return (
    <>
      <Typography variant="h5" component="h2" gutterBottom align="left">
        {header}
      </Typography>
      <Card style={{ marginBottom: "16px" }}>
        <List>
          {todos.map((todo: any) => (
            <Todo todo={todo} key={todo.id} />
          ))}
        </List>
      </Card>
    </>
  );
}

export function TodoList() {
  const [newTodos] = useNewTodosQuery({ context });
  const [inProgressTodos] = useInProgressTodosQuery({ context });
  const [completedTodos] = useCompletedTodosQuery({ context });

  const [created, createTodo] = useCreateTodoMutation();
  const [description, setDescription] = useState("");

  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom align="left">
        Todos
      </Typography>
      <Grid
        direction="row"
        container
        alignItems="center"
        spacing={2}
        style={{ marginBottom: "16px" }}
      >
        <Grid item xs>
          <TextField
            variant="outlined"
            type="text"
            margin="dense"
            fullWidth
            label="What needs to get done?"
            value={description}
            id="todo-description-input"
            onChange={e => setDescription(e.target.value)}
          />
        </Grid>
        <Grid item>
          <Button
            color="primary"
            variant="contained"
            onClick={() => {
              createTodo({ description });
              setDescription("");
            }}
            fullWidth
          >
            Add Todo
          </Button>
        </Grid>
      </Grid>

      {inProgressTodos.data && inProgressTodos.data.todo.length > 0 && (
        <TodosSection header="In Progress" todos={inProgressTodos.data.todo} />
      )}
      {newTodos.data && newTodos.data.todo.length > 0 && (
        <TodosSection header="New" todos={newTodos.data.todo} />
      )}
      {completedTodos.data && completedTodos.data.todo.length > 0 && (
        <TodosSection header="Done" todos={completedTodos.data.todo} />
      )}
    </>
  );
}
