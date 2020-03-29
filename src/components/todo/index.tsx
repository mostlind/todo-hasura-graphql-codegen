import React, { useMemo } from "react";
import {
  Todo as ITodo,
  Todo_State_Enum,
  useStartTodoMutation,
  useCompleteTodoMutation,
  useSubTasksForTodoQuery,
  useAddSubtaskToDoMutation
} from "../../generated/graphql";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";

function buttonText(state: Todo_State_Enum) {
  switch (state) {
    case Todo_State_Enum.NotStarted:
      return "Start";
    case Todo_State_Enum.InProgress:
      return "Complete";
    case Todo_State_Enum.Completed:
      return "Done";
  }
}

interface TodoProps {
  todo: ITodo;
}

export function Todo({ todo }: TodoProps) {
  const context = useMemo(() => ({ additionalTypenames: ["sub_tasks"] }), []);
  const { id, description, state } = todo;
  const [startTodoResponse, startTodo] = useStartTodoMutation();
  const [completeTodoResponse, completeTodo] = useCompleteTodoMutation();
  const [subTasks] = useSubTasksForTodoQuery({
    variables: { todo_id: id },
    context
  });
  const [subtask, createSubtask] = useAddSubtaskToDoMutation();

  if (startTodoResponse.error) {
    console.error(startTodoResponse.error);
  }

  if (completeTodoResponse.error) {
    console.error(completeTodoResponse.error);
  }
  return (
    <ListItem>
      <Grid container direction="column">
        <Grid container spacing={2}>
          <Grid xs item>
            <Typography
              variant="h5"
              component="h2"
              align="left"
              data-testid="todo-title"
            >
              {description}
            </Typography>
          </Grid>
          {todo.time_to_complete_in_seconds && (
            <Grid xs item>
              <Typography variant="body1" align="left">
                Completed in {Math.round(todo.time_to_complete_in_seconds / 60)}{" "}
                minutes
              </Typography>
            </Grid>
          )}
          <Grid item>
            <Button
              onClick={() => {
                createSubtask({ todo_id: id, description: "some subtask" });
              }}
              color="secondary"
              disabled={state === Todo_State_Enum.Completed}
            >
              Add subtask
            </Button>
          </Grid>
          <Grid item>
            <Button
              onClick={() => {
                if (state === Todo_State_Enum.NotStarted) {
                  startTodo({ todo_id: id, date: new Date() });
                } else {
                  completeTodo({ todo_id: id, date: new Date() });
                }
              }}
              color="secondary"
              disabled={state === Todo_State_Enum.Completed}
            >
              {buttonText(state)}
            </Button>
          </Grid>
        </Grid>
        <List>
          {subTasks.data?.sub_tasks.map(({ id, description }) => (
            <ListItem key={id}>
              <Typography
                variant="h6"
                component="h3"
                align="left"
                data-testid={id}
              >
                {description}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Grid>
    </ListItem>
  );
}
