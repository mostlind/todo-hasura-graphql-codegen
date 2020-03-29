import React from "react";
import { Provider } from "urql";

import { render, screen, waitFor, fireEvent } from "@testing-library/react";

import { mockUrqlClient } from "../test-utils/utils";
import { App } from "../src/App";
import { Todo_State_Enum } from "../src/generated/graphql";

test("App renders todos", async () => {
  const newItems = [{ description: "a thing" }];
  const client = mockUrqlClient({
    query_root: () => ({
      todo: (_: any, args: any) => {
        if (args?.where?.state?._eq === Todo_State_Enum.NotStarted) {
          return newItems;
        } else {
          return [];
        }
      }
    })
  });

  render(
    <Provider value={client}>
      <App />
    </Provider>
  );

  const items = await waitFor(() => screen.getAllByTestId("todo-title"));
  expect(items.map(item => item.innerHTML)).toEqual(["a thing"]);
});

test("Add a new todo", async () => {
  const newItems: { description: string }[] = [];
  const client = mockUrqlClient({
    query_root: () => ({
      todo: (_: any, args: any) => {
        if (args?.where?.state?._eq === Todo_State_Enum.NotStarted) {
          return newItems;
        } else {
          return [];
        }
      }
    }),

    mutation_root: () => ({
      insert_todo: (_: any, args: any) => {
        newItems.push({ description: args?.objects?.[0]?.description });
        return {};
      }
    })
  });

  const mutationSpy = jest.spyOn(client, "executeMutation");

  render(
    <Provider value={client}>
      <App />
    </Provider>
  );

  // Assert that there are no todos
  await expect(screen.findAllByTestId("todo-title")).rejects.toThrow();

  // Add text input to the "What needs to get things done?" <input />
  const addTodoInput = screen.getByLabelText("What needs to get done?");
  fireEvent.change(addTodoInput, { target: { value: "a new todo" } });

  // Click the "ADD TODO" button
  const addTodoButton = screen.getByText(/add todo/i);
  fireEvent.click(addTodoButton);

  // Assert that the a mutation was sent
  await waitFor(() => expect(mutationSpy).toHaveBeenCalled());

  // Get added todo title header
  const updatedItems = await waitFor(() => screen.getAllByTestId("todo-title"));

  // Assert that the new todo was added
  expect(updatedItems.map(item => item.innerHTML)).toEqual(["a new todo"]);
});
