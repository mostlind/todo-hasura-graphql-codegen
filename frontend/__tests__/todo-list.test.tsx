import "@types/jest";
import React from "react";
import { Provider } from "urql";

import { render, screen, waitFor, fireEvent } from "@testing-library/react";

import { mockUrqlClient } from "../test-utils/utils";
import { Index } from "../src/pages/index";
import { Todo_State_Enum } from "../src/generated/graphql";

test("App renders todos", async () => {
  const newItems = [{ description: "a thing" }];

  // create mock client with todo resolver that returns items if the component queries for new todos
  const client = mockUrqlClient({
    query_root: () => ({
      todo: (_: any, args: any) => {
        if (args?.where?.state?._eq === Todo_State_Enum.NotStarted) {
          return newItems;
        } else {
          return [];
        }
      },
    }),
  });

  // Render app with mock client
  render(
    <Provider value={client}>
      <Index />
    </Provider>
  );

  // Wait for todos to be rendered
  const items = await waitFor(() => screen.getAllByTestId("todo-title"));

  // Assert that todo titles match those returned from mock client
  expect(items.map((item) => item.innerHTML)).toEqual(["a thing"]);
});

test("Add a new todo", async () => {
  // create empty list of todos to be returned by mock client
  const newItems: { description: string }[] = [];

  // create mock client
  const client = mockUrqlClient({
    // returns items if the component queries for new todos
    query_root: () => ({
      todo: (_: any, args: any) => {
        if (args?.where?.state?._eq === Todo_State_Enum.NotStarted) {
          return newItems;
        } else {
          return [];
        }
      },
    }),

    // Adds a new todo with passed in description when the insert_todo mutation is called
    mutation_root: () => ({
      insert_todo: (_: any, args: any) => {
        newItems.push({ description: args?.objects?.[0]?.description });
        return {};
      },
    }),
  });

  // create spy to check that mutation was called
  const mutationSpy = jest.spyOn(client, "executeMutation");

  // render app with mock client
  render(
    <Provider value={client}>
      <Index />
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
  expect(updatedItems.map((item) => item.innerHTML)).toEqual(["a new todo"]);
});
