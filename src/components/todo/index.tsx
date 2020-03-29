import React, { useMemo } from "react";
import { Todo as ITodo, Todo_State_Enum } from "../../generated/graphql";
import {
  Typography,
  Button,
  Grid,
  ListItemIcon,
  ListItem,
  List
} from "@material-ui/core";
import {
  useStartTodoMutation,
  useCompleteTodoMutation,
  useSubTasksForTodoQuery,
  useAddSubtaskToDoMutation
} from "../../generated/graphql";
import CheckCircle from "@material-ui/icons/CheckCircle";
import RotateRight from "@material-ui/icons/RotateRight";
import RadioButtonUnchecked from "@material-ui/icons/RadioButtonUnchecked";

function Icon({ state }: { state: Todo_State_Enum }) {
  switch (state) {
    case Todo_State_Enum.NotStarted:
      return <RadioButtonUnchecked />;
    case Todo_State_Enum.InProgress:
      return <RotateRight />;
    case Todo_State_Enum.Completed:
      return <CheckCircle />;
  }
}

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

function nextState(state: Todo_State_Enum) {
  switch (state) {
    case Todo_State_Enum.NotStarted:
      return Todo_State_Enum.InProgress;
    case Todo_State_Enum.InProgress:
      return Todo_State_Enum.Completed;
    case Todo_State_Enum.Completed:
      return Todo_State_Enum.Completed;
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
      <ListItemIcon>
        <Icon state={state} />
      </ListItemIcon>
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
