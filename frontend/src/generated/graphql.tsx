import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  uuid: any;
  timestamptz: any;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "sub_tasks" */
  delete_sub_tasks?: Maybe<Sub_Tasks_Mutation_Response>;
  /** delete single row from the table: "sub_tasks" */
  delete_sub_tasks_by_pk?: Maybe<Sub_Tasks>;
  /** insert data into the table: "sub_tasks" */
  insert_sub_tasks?: Maybe<Sub_Tasks_Mutation_Response>;
  /** insert a single row into the table: "sub_tasks" */
  insert_sub_tasks_one?: Maybe<Sub_Tasks>;
  /** insert data into the table: "todo" */
  insert_todo?: Maybe<Todo_Mutation_Response>;
  /** insert a single row into the table: "todo" */
  insert_todo_one?: Maybe<Todo>;
  /** update data of the table: "sub_tasks" */
  update_sub_tasks?: Maybe<Sub_Tasks_Mutation_Response>;
  /** update single row of the table: "sub_tasks" */
  update_sub_tasks_by_pk?: Maybe<Sub_Tasks>;
  /** update data of the table: "todo" */
  update_todo?: Maybe<Todo_Mutation_Response>;
  /** update single row of the table: "todo" */
  update_todo_by_pk?: Maybe<Todo>;
};


/** mutation root */
export type Mutation_RootDelete_Sub_TasksArgs = {
  where: Sub_Tasks_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Sub_Tasks_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_Sub_TasksArgs = {
  objects: Array<Sub_Tasks_Insert_Input>;
  on_conflict?: Maybe<Sub_Tasks_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Sub_Tasks_OneArgs = {
  object: Sub_Tasks_Insert_Input;
  on_conflict?: Maybe<Sub_Tasks_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TodoArgs = {
  objects: Array<Todo_Insert_Input>;
  on_conflict?: Maybe<Todo_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Todo_OneArgs = {
  object: Todo_Insert_Input;
  on_conflict?: Maybe<Todo_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_Sub_TasksArgs = {
  _set?: Maybe<Sub_Tasks_Set_Input>;
  where: Sub_Tasks_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Sub_Tasks_By_PkArgs = {
  _set?: Maybe<Sub_Tasks_Set_Input>;
  pk_columns: Sub_Tasks_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_TodoArgs = {
  _set?: Maybe<Todo_Set_Input>;
  where: Todo_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Todo_By_PkArgs = {
  _set?: Maybe<Todo_Set_Input>;
  pk_columns: Todo_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "sub_tasks" */
  sub_tasks: Array<Sub_Tasks>;
  /** fetch data from the table: "sub_tasks" using primary key columns */
  sub_tasks_by_pk?: Maybe<Sub_Tasks>;
  /** fetch data from the table: "todo" */
  todo: Array<Todo>;
  /** fetch data from the table: "todo" using primary key columns */
  todo_by_pk?: Maybe<Todo>;
  /** fetch data from the table: "todo_state" */
  todo_state: Array<Todo_State>;
  /** fetch data from the table: "todo_state" using primary key columns */
  todo_state_by_pk?: Maybe<Todo_State>;
};


/** query root */
export type Query_RootSub_TasksArgs = {
  distinct_on?: Maybe<Array<Sub_Tasks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sub_Tasks_Order_By>>;
  where?: Maybe<Sub_Tasks_Bool_Exp>;
};


/** query root */
export type Query_RootSub_Tasks_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootTodoArgs = {
  distinct_on?: Maybe<Array<Todo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Todo_Order_By>>;
  where?: Maybe<Todo_Bool_Exp>;
};


/** query root */
export type Query_RootTodo_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootTodo_StateArgs = {
  distinct_on?: Maybe<Array<Todo_State_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Todo_State_Order_By>>;
  where?: Maybe<Todo_State_Bool_Exp>;
};


/** query root */
export type Query_RootTodo_State_By_PkArgs = {
  todo_state: Scalars['String'];
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

/** columns and relationships of "sub_tasks" */
export type Sub_Tasks = {
  __typename?: 'sub_tasks';
  category?: Maybe<Scalars['String']>;
  description: Scalars['String'];
  id: Scalars['uuid'];
  todo_id: Scalars['uuid'];
};

/** input type for inserting array relation for remote table "sub_tasks" */
export type Sub_Tasks_Arr_Rel_Insert_Input = {
  data: Array<Sub_Tasks_Insert_Input>;
  on_conflict?: Maybe<Sub_Tasks_On_Conflict>;
};

/** Boolean expression to filter rows from the table "sub_tasks". All fields are combined with a logical 'AND'. */
export type Sub_Tasks_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Sub_Tasks_Bool_Exp>>>;
  _not?: Maybe<Sub_Tasks_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Sub_Tasks_Bool_Exp>>>;
  category?: Maybe<String_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  todo_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "sub_tasks" */
export enum Sub_Tasks_Constraint {
  /** unique or primary key constraint */
  SubTasksPkey = 'sub_tasks_pkey'
}

/** input type for inserting data into table "sub_tasks" */
export type Sub_Tasks_Insert_Input = {
  category?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  todo_id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "sub_tasks" */
export type Sub_Tasks_Mutation_Response = {
  __typename?: 'sub_tasks_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Sub_Tasks>;
};

/** input type for inserting object relation for remote table "sub_tasks" */
export type Sub_Tasks_Obj_Rel_Insert_Input = {
  data: Sub_Tasks_Insert_Input;
  on_conflict?: Maybe<Sub_Tasks_On_Conflict>;
};

/** on conflict condition type for table "sub_tasks" */
export type Sub_Tasks_On_Conflict = {
  constraint: Sub_Tasks_Constraint;
  update_columns: Array<Sub_Tasks_Update_Column>;
  where?: Maybe<Sub_Tasks_Bool_Exp>;
};

/** ordering options when selecting data from "sub_tasks" */
export type Sub_Tasks_Order_By = {
  category?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  todo_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "sub_tasks" */
export type Sub_Tasks_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "sub_tasks" */
export enum Sub_Tasks_Select_Column {
  /** column name */
  Category = 'category',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  TodoId = 'todo_id'
}

/** input type for updating data in table "sub_tasks" */
export type Sub_Tasks_Set_Input = {
  category?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  todo_id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "sub_tasks" */
export enum Sub_Tasks_Update_Column {
  /** column name */
  Category = 'category',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  TodoId = 'todo_id'
}

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "sub_tasks" */
  sub_tasks: Array<Sub_Tasks>;
  /** fetch data from the table: "sub_tasks" using primary key columns */
  sub_tasks_by_pk?: Maybe<Sub_Tasks>;
  /** fetch data from the table: "todo" */
  todo: Array<Todo>;
  /** fetch data from the table: "todo" using primary key columns */
  todo_by_pk?: Maybe<Todo>;
  /** fetch data from the table: "todo_state" */
  todo_state: Array<Todo_State>;
  /** fetch data from the table: "todo_state" using primary key columns */
  todo_state_by_pk?: Maybe<Todo_State>;
};


/** subscription root */
export type Subscription_RootSub_TasksArgs = {
  distinct_on?: Maybe<Array<Sub_Tasks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sub_Tasks_Order_By>>;
  where?: Maybe<Sub_Tasks_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootSub_Tasks_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootTodoArgs = {
  distinct_on?: Maybe<Array<Todo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Todo_Order_By>>;
  where?: Maybe<Todo_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTodo_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootTodo_StateArgs = {
  distinct_on?: Maybe<Array<Todo_State_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Todo_State_Order_By>>;
  where?: Maybe<Todo_State_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTodo_State_By_PkArgs = {
  todo_state: Scalars['String'];
};


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "todo" */
export type Todo = {
  __typename?: 'todo';
  completed_at?: Maybe<Scalars['timestamptz']>;
  created_at: Scalars['timestamptz'];
  description: Scalars['String'];
  id: Scalars['uuid'];
  started_at?: Maybe<Scalars['timestamptz']>;
  state: Todo_State_Enum;
  /** An array relationship */
  sub_tasks: Array<Sub_Tasks>;
  time_to_complete_in_seconds?: Maybe<Scalars['Int']>;
};


/** columns and relationships of "todo" */
export type TodoSub_TasksArgs = {
  distinct_on?: Maybe<Array<Sub_Tasks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sub_Tasks_Order_By>>;
  where?: Maybe<Sub_Tasks_Bool_Exp>;
};

/** input type for inserting array relation for remote table "todo" */
export type Todo_Arr_Rel_Insert_Input = {
  data: Array<Todo_Insert_Input>;
  on_conflict?: Maybe<Todo_On_Conflict>;
};

/** Boolean expression to filter rows from the table "todo". All fields are combined with a logical 'AND'. */
export type Todo_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Todo_Bool_Exp>>>;
  _not?: Maybe<Todo_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Todo_Bool_Exp>>>;
  completed_at?: Maybe<Timestamptz_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  started_at?: Maybe<Timestamptz_Comparison_Exp>;
  state?: Maybe<Todo_State_Enum_Comparison_Exp>;
  sub_tasks?: Maybe<Sub_Tasks_Bool_Exp>;
  time_to_complete_in_seconds?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "todo" */
export enum Todo_Constraint {
  /** unique or primary key constraint */
  TodosPkey = 'todos_pkey'
}

/** input type for inserting data into table "todo" */
export type Todo_Insert_Input = {
  description?: Maybe<Scalars['String']>;
  sub_tasks?: Maybe<Sub_Tasks_Arr_Rel_Insert_Input>;
};

/** response of any mutation on the table "todo" */
export type Todo_Mutation_Response = {
  __typename?: 'todo_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Todo>;
};

/** input type for inserting object relation for remote table "todo" */
export type Todo_Obj_Rel_Insert_Input = {
  data: Todo_Insert_Input;
  on_conflict?: Maybe<Todo_On_Conflict>;
};

/** on conflict condition type for table "todo" */
export type Todo_On_Conflict = {
  constraint: Todo_Constraint;
  update_columns: Array<Todo_Update_Column>;
  where?: Maybe<Todo_Bool_Exp>;
};

/** ordering options when selecting data from "todo" */
export type Todo_Order_By = {
  completed_at?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  started_at?: Maybe<Order_By>;
  state?: Maybe<Order_By>;
  time_to_complete_in_seconds?: Maybe<Order_By>;
};

/** primary key columns input for table: "todo" */
export type Todo_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "todo" */
export enum Todo_Select_Column {
  /** column name */
  CompletedAt = 'completed_at',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  StartedAt = 'started_at',
  /** column name */
  State = 'state',
  /** column name */
  TimeToCompleteInSeconds = 'time_to_complete_in_seconds'
}

/** input type for updating data in table "todo" */
export type Todo_Set_Input = {
  completed_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  started_at?: Maybe<Scalars['timestamptz']>;
};

/** columns and relationships of "todo_state" */
export type Todo_State = {
  __typename?: 'todo_state';
  todo_state: Scalars['String'];
};

/** Boolean expression to filter rows from the table "todo_state". All fields are combined with a logical 'AND'. */
export type Todo_State_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Todo_State_Bool_Exp>>>;
  _not?: Maybe<Todo_State_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Todo_State_Bool_Exp>>>;
  todo_state?: Maybe<String_Comparison_Exp>;
};

export enum Todo_State_Enum {
  Completed = 'completed',
  InProgress = 'in_progress',
  NotStarted = 'not_started'
}

/** expression to compare columns of type todo_state_enum. All fields are combined with logical 'AND'. */
export type Todo_State_Enum_Comparison_Exp = {
  _eq?: Maybe<Todo_State_Enum>;
  _in?: Maybe<Array<Todo_State_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Todo_State_Enum>;
  _nin?: Maybe<Array<Todo_State_Enum>>;
};

/** ordering options when selecting data from "todo_state" */
export type Todo_State_Order_By = {
  todo_state?: Maybe<Order_By>;
};

/** primary key columns input for table: "todo_state" */
export type Todo_State_Pk_Columns_Input = {
  todo_state: Scalars['String'];
};

/** select columns of table "todo_state" */
export enum Todo_State_Select_Column {
  /** column name */
  TodoState = 'todo_state'
}

/** update columns of table "todo" */
export enum Todo_Update_Column {
  /** column name */
  CompletedAt = 'completed_at',
  /** column name */
  Description = 'description',
  /** column name */
  StartedAt = 'started_at'
}


/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

export type CompletedTodosQueryVariables = Exact<{ [key: string]: never; }>;


export type CompletedTodosQuery = (
  { __typename?: 'query_root' }
  & { todo: Array<(
    { __typename?: 'todo' }
    & Pick<Todo, 'id' | 'description' | 'state' | 'created_at' | 'time_to_complete_in_seconds'>
  )> }
);

export type CreateTodoMutationVariables = Exact<{
  description: Scalars['String'];
}>;


export type CreateTodoMutation = (
  { __typename?: 'mutation_root' }
  & { insert_todo?: Maybe<(
    { __typename?: 'todo_mutation_response' }
    & { returning: Array<(
      { __typename?: 'todo' }
      & Pick<Todo, 'id'>
    )> }
  )> }
);

export type InProgressTodosQueryVariables = Exact<{ [key: string]: never; }>;


export type InProgressTodosQuery = (
  { __typename?: 'query_root' }
  & { todo: Array<(
    { __typename?: 'todo' }
    & Pick<Todo, 'id' | 'description' | 'state' | 'created_at'>
  )> }
);

export type NewTodosQueryVariables = Exact<{ [key: string]: never; }>;


export type NewTodosQuery = (
  { __typename?: 'query_root' }
  & { todo: Array<(
    { __typename?: 'todo' }
    & Pick<Todo, 'id' | 'description' | 'state' | 'created_at'>
    & { sub_tasks: Array<(
      { __typename?: 'sub_tasks' }
      & Pick<Sub_Tasks, 'id'>
    )> }
  )> }
);

export type CompleteTodoMutationVariables = Exact<{
  todo_id?: Maybe<Scalars['uuid']>;
  date?: Maybe<Scalars['timestamptz']>;
}>;


export type CompleteTodoMutation = (
  { __typename?: 'mutation_root' }
  & { update_todo?: Maybe<(
    { __typename?: 'todo_mutation_response' }
    & { returning: Array<(
      { __typename?: 'todo' }
      & Pick<Todo, 'id'>
    )> }
  )> }
);

export type AddSubtaskToDoMutationVariables = Exact<{
  todo_id: Scalars['uuid'];
  description: Scalars['String'];
}>;


export type AddSubtaskToDoMutation = (
  { __typename?: 'mutation_root' }
  & { insert_sub_tasks?: Maybe<(
    { __typename?: 'sub_tasks_mutation_response' }
    & { returning: Array<(
      { __typename?: 'sub_tasks' }
      & Pick<Sub_Tasks, 'id' | 'category'>
    )> }
  )> }
);

export type StartTodoMutationVariables = Exact<{
  todo_id?: Maybe<Scalars['uuid']>;
  date?: Maybe<Scalars['timestamptz']>;
}>;


export type StartTodoMutation = (
  { __typename?: 'mutation_root' }
  & { update_todo?: Maybe<(
    { __typename?: 'todo_mutation_response' }
    & { returning: Array<(
      { __typename?: 'todo' }
      & Pick<Todo, 'id'>
    )> }
  )> }
);

export type SubTasksForTodoQueryVariables = Exact<{
  todo_id: Scalars['uuid'];
}>;


export type SubTasksForTodoQuery = (
  { __typename?: 'query_root' }
  & { sub_tasks: Array<(
    { __typename?: 'sub_tasks' }
    & Pick<Sub_Tasks, 'id' | 'description'>
  )> }
);


export const CompletedTodosDocument = gql`
    query CompletedTodos {
  todo(where: {state: {_eq: completed}}) {
    id
    description
    state
    created_at
    time_to_complete_in_seconds
  }
}
    `;

export function useCompletedTodosQuery(options: Omit<Urql.UseQueryArgs<CompletedTodosQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<CompletedTodosQuery>({ query: CompletedTodosDocument, ...options });
};
export const CreateTodoDocument = gql`
    mutation CreateTodo($description: String!) {
  insert_todo(objects: {description: $description}) {
    returning {
      id
    }
  }
}
    `;

export function useCreateTodoMutation() {
  return Urql.useMutation<CreateTodoMutation, CreateTodoMutationVariables>(CreateTodoDocument);
};
export const InProgressTodosDocument = gql`
    query InProgressTodos {
  todo(where: {state: {_eq: in_progress}}) {
    id
    description
    state
    created_at
  }
}
    `;

export function useInProgressTodosQuery(options: Omit<Urql.UseQueryArgs<InProgressTodosQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<InProgressTodosQuery>({ query: InProgressTodosDocument, ...options });
};
export const NewTodosDocument = gql`
    query NewTodos {
  todo(where: {state: {_eq: not_started}}) {
    id
    description
    state
    created_at
    sub_tasks {
      id
    }
  }
}
    `;

export function useNewTodosQuery(options: Omit<Urql.UseQueryArgs<NewTodosQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<NewTodosQuery>({ query: NewTodosDocument, ...options });
};
export const CompleteTodoDocument = gql`
    mutation CompleteTodo($todo_id: uuid, $date: timestamptz) {
  update_todo(_set: {completed_at: $date}, where: {id: {_eq: $todo_id}}) {
    returning {
      id
    }
  }
}
    `;

export function useCompleteTodoMutation() {
  return Urql.useMutation<CompleteTodoMutation, CompleteTodoMutationVariables>(CompleteTodoDocument);
};
export const AddSubtaskToDoDocument = gql`
    mutation AddSubtaskToDo($todo_id: uuid!, $description: String!) {
  insert_sub_tasks(objects: {description: $description, todo_id: $todo_id}) {
    returning {
      id
      category
    }
  }
}
    `;

export function useAddSubtaskToDoMutation() {
  return Urql.useMutation<AddSubtaskToDoMutation, AddSubtaskToDoMutationVariables>(AddSubtaskToDoDocument);
};
export const StartTodoDocument = gql`
    mutation StartTodo($todo_id: uuid, $date: timestamptz) {
  update_todo(_set: {started_at: $date}, where: {id: {_eq: $todo_id}}) {
    returning {
      id
    }
  }
}
    `;

export function useStartTodoMutation() {
  return Urql.useMutation<StartTodoMutation, StartTodoMutationVariables>(StartTodoDocument);
};
export const SubTasksForTodoDocument = gql`
    query SubTasksForTodo($todo_id: uuid!) {
  sub_tasks(where: {todo_id: {_eq: $todo_id}}) {
    id
    description
  }
}
    `;

export function useSubTasksForTodoQuery(options: Omit<Urql.UseQueryArgs<SubTasksForTodoQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<SubTasksForTodoQuery>({ query: SubTasksForTodoDocument, ...options });
};