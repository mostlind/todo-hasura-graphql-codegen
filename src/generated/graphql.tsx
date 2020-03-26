import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
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

export type Mutation_Root = {
   __typename?: 'mutation_root';
  delete_sub_tasks?: Maybe<Sub_Tasks_Mutation_Response>;
  delete_todo?: Maybe<Todo_Mutation_Response>;
  delete_todo_state?: Maybe<Todo_State_Mutation_Response>;
  insert_sub_tasks?: Maybe<Sub_Tasks_Mutation_Response>;
  insert_todo?: Maybe<Todo_Mutation_Response>;
  insert_todo_state?: Maybe<Todo_State_Mutation_Response>;
  update_sub_tasks?: Maybe<Sub_Tasks_Mutation_Response>;
  update_todo?: Maybe<Todo_Mutation_Response>;
  update_todo_state?: Maybe<Todo_State_Mutation_Response>;
};


export type Mutation_RootDelete_Sub_TasksArgs = {
  where: Sub_Tasks_Bool_Exp;
};


export type Mutation_RootDelete_TodoArgs = {
  where: Todo_Bool_Exp;
};


export type Mutation_RootDelete_Todo_StateArgs = {
  where: Todo_State_Bool_Exp;
};


export type Mutation_RootInsert_Sub_TasksArgs = {
  objects: Array<Sub_Tasks_Insert_Input>;
  on_conflict?: Maybe<Sub_Tasks_On_Conflict>;
};


export type Mutation_RootInsert_TodoArgs = {
  objects: Array<Todo_Insert_Input>;
  on_conflict?: Maybe<Todo_On_Conflict>;
};


export type Mutation_RootInsert_Todo_StateArgs = {
  objects: Array<Todo_State_Insert_Input>;
  on_conflict?: Maybe<Todo_State_On_Conflict>;
};


export type Mutation_RootUpdate_Sub_TasksArgs = {
  _set?: Maybe<Sub_Tasks_Set_Input>;
  where: Sub_Tasks_Bool_Exp;
};


export type Mutation_RootUpdate_TodoArgs = {
  _inc?: Maybe<Todo_Inc_Input>;
  _set?: Maybe<Todo_Set_Input>;
  where: Todo_Bool_Exp;
};


export type Mutation_RootUpdate_Todo_StateArgs = {
  _set?: Maybe<Todo_State_Set_Input>;
  where: Todo_State_Bool_Exp;
};

export enum Order_By {
  Asc = 'asc',
  AscNullsFirst = 'asc_nulls_first',
  AscNullsLast = 'asc_nulls_last',
  Desc = 'desc',
  DescNullsFirst = 'desc_nulls_first',
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
   __typename?: 'query_root';
  sub_tasks: Array<Sub_Tasks>;
  sub_tasks_aggregate: Sub_Tasks_Aggregate;
  sub_tasks_by_pk?: Maybe<Sub_Tasks>;
  todo: Array<Todo>;
  todo_aggregate: Todo_Aggregate;
  todo_by_pk?: Maybe<Todo>;
  todo_state: Array<Todo_State>;
  todo_state_aggregate: Todo_State_Aggregate;
  todo_state_by_pk?: Maybe<Todo_State>;
};


export type Query_RootSub_TasksArgs = {
  distinct_on?: Maybe<Array<Sub_Tasks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sub_Tasks_Order_By>>;
  where?: Maybe<Sub_Tasks_Bool_Exp>;
};


export type Query_RootSub_Tasks_AggregateArgs = {
  distinct_on?: Maybe<Array<Sub_Tasks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sub_Tasks_Order_By>>;
  where?: Maybe<Sub_Tasks_Bool_Exp>;
};


export type Query_RootSub_Tasks_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootTodoArgs = {
  distinct_on?: Maybe<Array<Todo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Todo_Order_By>>;
  where?: Maybe<Todo_Bool_Exp>;
};


export type Query_RootTodo_AggregateArgs = {
  distinct_on?: Maybe<Array<Todo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Todo_Order_By>>;
  where?: Maybe<Todo_Bool_Exp>;
};


export type Query_RootTodo_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootTodo_StateArgs = {
  distinct_on?: Maybe<Array<Todo_State_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Todo_State_Order_By>>;
  where?: Maybe<Todo_State_Bool_Exp>;
};


export type Query_RootTodo_State_AggregateArgs = {
  distinct_on?: Maybe<Array<Todo_State_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Todo_State_Order_By>>;
  where?: Maybe<Todo_State_Bool_Exp>;
};


export type Query_RootTodo_State_By_PkArgs = {
  todo_state: Scalars['String'];
};

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

export type Sub_Tasks = {
   __typename?: 'sub_tasks';
  description: Scalars['String'];
  id: Scalars['uuid'];
  todo_id: Scalars['uuid'];
};

export type Sub_Tasks_Aggregate = {
   __typename?: 'sub_tasks_aggregate';
  aggregate?: Maybe<Sub_Tasks_Aggregate_Fields>;
  nodes: Array<Sub_Tasks>;
};

export type Sub_Tasks_Aggregate_Fields = {
   __typename?: 'sub_tasks_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Sub_Tasks_Max_Fields>;
  min?: Maybe<Sub_Tasks_Min_Fields>;
};


export type Sub_Tasks_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Sub_Tasks_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Sub_Tasks_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Sub_Tasks_Max_Order_By>;
  min?: Maybe<Sub_Tasks_Min_Order_By>;
};

export type Sub_Tasks_Arr_Rel_Insert_Input = {
  data: Array<Sub_Tasks_Insert_Input>;
  on_conflict?: Maybe<Sub_Tasks_On_Conflict>;
};

export type Sub_Tasks_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Sub_Tasks_Bool_Exp>>>;
  _not?: Maybe<Sub_Tasks_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Sub_Tasks_Bool_Exp>>>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  todo_id?: Maybe<Uuid_Comparison_Exp>;
};

export enum Sub_Tasks_Constraint {
  SubTasksPkey = 'sub_tasks_pkey'
}

export type Sub_Tasks_Insert_Input = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  todo_id?: Maybe<Scalars['uuid']>;
};

export type Sub_Tasks_Max_Fields = {
   __typename?: 'sub_tasks_max_fields';
  description?: Maybe<Scalars['String']>;
};

export type Sub_Tasks_Max_Order_By = {
  description?: Maybe<Order_By>;
};

export type Sub_Tasks_Min_Fields = {
   __typename?: 'sub_tasks_min_fields';
  description?: Maybe<Scalars['String']>;
};

export type Sub_Tasks_Min_Order_By = {
  description?: Maybe<Order_By>;
};

export type Sub_Tasks_Mutation_Response = {
   __typename?: 'sub_tasks_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Sub_Tasks>;
};

export type Sub_Tasks_Obj_Rel_Insert_Input = {
  data: Sub_Tasks_Insert_Input;
  on_conflict?: Maybe<Sub_Tasks_On_Conflict>;
};

export type Sub_Tasks_On_Conflict = {
  constraint: Sub_Tasks_Constraint;
  update_columns: Array<Sub_Tasks_Update_Column>;
  where?: Maybe<Sub_Tasks_Bool_Exp>;
};

export type Sub_Tasks_Order_By = {
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  todo_id?: Maybe<Order_By>;
};

export enum Sub_Tasks_Select_Column {
  Description = 'description',
  Id = 'id',
  TodoId = 'todo_id'
}

export type Sub_Tasks_Set_Input = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  todo_id?: Maybe<Scalars['uuid']>;
};

export enum Sub_Tasks_Update_Column {
  Description = 'description',
  Id = 'id',
  TodoId = 'todo_id'
}

export type Subscription_Root = {
   __typename?: 'subscription_root';
  sub_tasks: Array<Sub_Tasks>;
  sub_tasks_aggregate: Sub_Tasks_Aggregate;
  sub_tasks_by_pk?: Maybe<Sub_Tasks>;
  todo: Array<Todo>;
  todo_aggregate: Todo_Aggregate;
  todo_by_pk?: Maybe<Todo>;
  todo_state: Array<Todo_State>;
  todo_state_aggregate: Todo_State_Aggregate;
  todo_state_by_pk?: Maybe<Todo_State>;
};


export type Subscription_RootSub_TasksArgs = {
  distinct_on?: Maybe<Array<Sub_Tasks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sub_Tasks_Order_By>>;
  where?: Maybe<Sub_Tasks_Bool_Exp>;
};


export type Subscription_RootSub_Tasks_AggregateArgs = {
  distinct_on?: Maybe<Array<Sub_Tasks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sub_Tasks_Order_By>>;
  where?: Maybe<Sub_Tasks_Bool_Exp>;
};


export type Subscription_RootSub_Tasks_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootTodoArgs = {
  distinct_on?: Maybe<Array<Todo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Todo_Order_By>>;
  where?: Maybe<Todo_Bool_Exp>;
};


export type Subscription_RootTodo_AggregateArgs = {
  distinct_on?: Maybe<Array<Todo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Todo_Order_By>>;
  where?: Maybe<Todo_Bool_Exp>;
};


export type Subscription_RootTodo_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootTodo_StateArgs = {
  distinct_on?: Maybe<Array<Todo_State_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Todo_State_Order_By>>;
  where?: Maybe<Todo_State_Bool_Exp>;
};


export type Subscription_RootTodo_State_AggregateArgs = {
  distinct_on?: Maybe<Array<Todo_State_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Todo_State_Order_By>>;
  where?: Maybe<Todo_State_Bool_Exp>;
};


export type Subscription_RootTodo_State_By_PkArgs = {
  todo_state: Scalars['String'];
};


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

export type Todo = {
   __typename?: 'todo';
  completed_at?: Maybe<Scalars['timestamptz']>;
  created_at: Scalars['timestamptz'];
  description: Scalars['String'];
  id: Scalars['uuid'];
  started_at?: Maybe<Scalars['timestamptz']>;
  state: Todo_State_Enum;
  sub_tasks: Array<Sub_Tasks>;
  sub_tasks_aggregate: Sub_Tasks_Aggregate;
  time_to_complete_in_seconds?: Maybe<Scalars['Int']>;
};


export type TodoSub_TasksArgs = {
  distinct_on?: Maybe<Array<Sub_Tasks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sub_Tasks_Order_By>>;
  where?: Maybe<Sub_Tasks_Bool_Exp>;
};


export type TodoSub_Tasks_AggregateArgs = {
  distinct_on?: Maybe<Array<Sub_Tasks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sub_Tasks_Order_By>>;
  where?: Maybe<Sub_Tasks_Bool_Exp>;
};

export type Todo_Aggregate = {
   __typename?: 'todo_aggregate';
  aggregate?: Maybe<Todo_Aggregate_Fields>;
  nodes: Array<Todo>;
};

export type Todo_Aggregate_Fields = {
   __typename?: 'todo_aggregate_fields';
  avg?: Maybe<Todo_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Todo_Max_Fields>;
  min?: Maybe<Todo_Min_Fields>;
  stddev?: Maybe<Todo_Stddev_Fields>;
  stddev_pop?: Maybe<Todo_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Todo_Stddev_Samp_Fields>;
  sum?: Maybe<Todo_Sum_Fields>;
  var_pop?: Maybe<Todo_Var_Pop_Fields>;
  var_samp?: Maybe<Todo_Var_Samp_Fields>;
  variance?: Maybe<Todo_Variance_Fields>;
};


export type Todo_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Todo_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Todo_Aggregate_Order_By = {
  avg?: Maybe<Todo_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Todo_Max_Order_By>;
  min?: Maybe<Todo_Min_Order_By>;
  stddev?: Maybe<Todo_Stddev_Order_By>;
  stddev_pop?: Maybe<Todo_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Todo_Stddev_Samp_Order_By>;
  sum?: Maybe<Todo_Sum_Order_By>;
  var_pop?: Maybe<Todo_Var_Pop_Order_By>;
  var_samp?: Maybe<Todo_Var_Samp_Order_By>;
  variance?: Maybe<Todo_Variance_Order_By>;
};

export type Todo_Arr_Rel_Insert_Input = {
  data: Array<Todo_Insert_Input>;
  on_conflict?: Maybe<Todo_On_Conflict>;
};

export type Todo_Avg_Fields = {
   __typename?: 'todo_avg_fields';
  time_to_complete_in_seconds?: Maybe<Scalars['Float']>;
};

export type Todo_Avg_Order_By = {
  time_to_complete_in_seconds?: Maybe<Order_By>;
};

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

export enum Todo_Constraint {
  TodosPkey = 'todos_pkey'
}

export type Todo_Inc_Input = {
  time_to_complete_in_seconds?: Maybe<Scalars['Int']>;
};

export type Todo_Insert_Input = {
  completed_at?: Maybe<Scalars['timestamptz']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  started_at?: Maybe<Scalars['timestamptz']>;
  state?: Maybe<Todo_State_Enum>;
  sub_tasks?: Maybe<Sub_Tasks_Arr_Rel_Insert_Input>;
  time_to_complete_in_seconds?: Maybe<Scalars['Int']>;
};

export type Todo_Max_Fields = {
   __typename?: 'todo_max_fields';
  completed_at?: Maybe<Scalars['timestamptz']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  started_at?: Maybe<Scalars['timestamptz']>;
  time_to_complete_in_seconds?: Maybe<Scalars['Int']>;
};

export type Todo_Max_Order_By = {
  completed_at?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  started_at?: Maybe<Order_By>;
  time_to_complete_in_seconds?: Maybe<Order_By>;
};

export type Todo_Min_Fields = {
   __typename?: 'todo_min_fields';
  completed_at?: Maybe<Scalars['timestamptz']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  started_at?: Maybe<Scalars['timestamptz']>;
  time_to_complete_in_seconds?: Maybe<Scalars['Int']>;
};

export type Todo_Min_Order_By = {
  completed_at?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  started_at?: Maybe<Order_By>;
  time_to_complete_in_seconds?: Maybe<Order_By>;
};

export type Todo_Mutation_Response = {
   __typename?: 'todo_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Todo>;
};

export type Todo_Obj_Rel_Insert_Input = {
  data: Todo_Insert_Input;
  on_conflict?: Maybe<Todo_On_Conflict>;
};

export type Todo_On_Conflict = {
  constraint: Todo_Constraint;
  update_columns: Array<Todo_Update_Column>;
  where?: Maybe<Todo_Bool_Exp>;
};

export type Todo_Order_By = {
  completed_at?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  started_at?: Maybe<Order_By>;
  state?: Maybe<Order_By>;
  sub_tasks_aggregate?: Maybe<Sub_Tasks_Aggregate_Order_By>;
  time_to_complete_in_seconds?: Maybe<Order_By>;
};

export enum Todo_Select_Column {
  CompletedAt = 'completed_at',
  CreatedAt = 'created_at',
  Description = 'description',
  Id = 'id',
  StartedAt = 'started_at',
  State = 'state',
  TimeToCompleteInSeconds = 'time_to_complete_in_seconds'
}

export type Todo_Set_Input = {
  completed_at?: Maybe<Scalars['timestamptz']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  started_at?: Maybe<Scalars['timestamptz']>;
  state?: Maybe<Todo_State_Enum>;
  time_to_complete_in_seconds?: Maybe<Scalars['Int']>;
};

export type Todo_State = {
   __typename?: 'todo_state';
  todo_state: Scalars['String'];
};

export type Todo_State_Aggregate = {
   __typename?: 'todo_state_aggregate';
  aggregate?: Maybe<Todo_State_Aggregate_Fields>;
  nodes: Array<Todo_State>;
};

export type Todo_State_Aggregate_Fields = {
   __typename?: 'todo_state_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Todo_State_Max_Fields>;
  min?: Maybe<Todo_State_Min_Fields>;
};


export type Todo_State_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Todo_State_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Todo_State_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Todo_State_Max_Order_By>;
  min?: Maybe<Todo_State_Min_Order_By>;
};

export type Todo_State_Arr_Rel_Insert_Input = {
  data: Array<Todo_State_Insert_Input>;
  on_conflict?: Maybe<Todo_State_On_Conflict>;
};

export type Todo_State_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Todo_State_Bool_Exp>>>;
  _not?: Maybe<Todo_State_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Todo_State_Bool_Exp>>>;
  todo_state?: Maybe<String_Comparison_Exp>;
};

export enum Todo_State_Constraint {
  TodoStatePkey = 'todo_state_pkey'
}

export enum Todo_State_Enum {
  Completed = 'completed',
  InProgress = 'in_progress',
  NotStarted = 'not_started'
}

export type Todo_State_Enum_Comparison_Exp = {
  _eq?: Maybe<Todo_State_Enum>;
  _in?: Maybe<Array<Todo_State_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Todo_State_Enum>;
  _nin?: Maybe<Array<Todo_State_Enum>>;
};

export type Todo_State_Insert_Input = {
  todo_state?: Maybe<Scalars['String']>;
};

export type Todo_State_Max_Fields = {
   __typename?: 'todo_state_max_fields';
  todo_state?: Maybe<Scalars['String']>;
};

export type Todo_State_Max_Order_By = {
  todo_state?: Maybe<Order_By>;
};

export type Todo_State_Min_Fields = {
   __typename?: 'todo_state_min_fields';
  todo_state?: Maybe<Scalars['String']>;
};

export type Todo_State_Min_Order_By = {
  todo_state?: Maybe<Order_By>;
};

export type Todo_State_Mutation_Response = {
   __typename?: 'todo_state_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Todo_State>;
};

export type Todo_State_Obj_Rel_Insert_Input = {
  data: Todo_State_Insert_Input;
  on_conflict?: Maybe<Todo_State_On_Conflict>;
};

export type Todo_State_On_Conflict = {
  constraint: Todo_State_Constraint;
  update_columns: Array<Todo_State_Update_Column>;
  where?: Maybe<Todo_State_Bool_Exp>;
};

export type Todo_State_Order_By = {
  todo_state?: Maybe<Order_By>;
};

export enum Todo_State_Select_Column {
  TodoState = 'todo_state'
}

export type Todo_State_Set_Input = {
  todo_state?: Maybe<Scalars['String']>;
};

export enum Todo_State_Update_Column {
  TodoState = 'todo_state'
}

export type Todo_Stddev_Fields = {
   __typename?: 'todo_stddev_fields';
  time_to_complete_in_seconds?: Maybe<Scalars['Float']>;
};

export type Todo_Stddev_Order_By = {
  time_to_complete_in_seconds?: Maybe<Order_By>;
};

export type Todo_Stddev_Pop_Fields = {
   __typename?: 'todo_stddev_pop_fields';
  time_to_complete_in_seconds?: Maybe<Scalars['Float']>;
};

export type Todo_Stddev_Pop_Order_By = {
  time_to_complete_in_seconds?: Maybe<Order_By>;
};

export type Todo_Stddev_Samp_Fields = {
   __typename?: 'todo_stddev_samp_fields';
  time_to_complete_in_seconds?: Maybe<Scalars['Float']>;
};

export type Todo_Stddev_Samp_Order_By = {
  time_to_complete_in_seconds?: Maybe<Order_By>;
};

export type Todo_Sum_Fields = {
   __typename?: 'todo_sum_fields';
  time_to_complete_in_seconds?: Maybe<Scalars['Int']>;
};

export type Todo_Sum_Order_By = {
  time_to_complete_in_seconds?: Maybe<Order_By>;
};

export enum Todo_Update_Column {
  CompletedAt = 'completed_at',
  CreatedAt = 'created_at',
  Description = 'description',
  Id = 'id',
  StartedAt = 'started_at',
  State = 'state',
  TimeToCompleteInSeconds = 'time_to_complete_in_seconds'
}

export type Todo_Var_Pop_Fields = {
   __typename?: 'todo_var_pop_fields';
  time_to_complete_in_seconds?: Maybe<Scalars['Float']>;
};

export type Todo_Var_Pop_Order_By = {
  time_to_complete_in_seconds?: Maybe<Order_By>;
};

export type Todo_Var_Samp_Fields = {
   __typename?: 'todo_var_samp_fields';
  time_to_complete_in_seconds?: Maybe<Scalars['Float']>;
};

export type Todo_Var_Samp_Order_By = {
  time_to_complete_in_seconds?: Maybe<Order_By>;
};

export type Todo_Variance_Fields = {
   __typename?: 'todo_variance_fields';
  time_to_complete_in_seconds?: Maybe<Scalars['Float']>;
};

export type Todo_Variance_Order_By = {
  time_to_complete_in_seconds?: Maybe<Order_By>;
};


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

export type CompletedTodosQueryVariables = {};


export type CompletedTodosQuery = (
  { __typename?: 'query_root' }
  & { todo: Array<(
    { __typename?: 'todo' }
    & Pick<Todo, 'id' | 'description' | 'state' | 'created_at' | 'time_to_complete_in_seconds'>
  )> }
);

export type CreateTodoMutationVariables = {
  description: Scalars['String'];
};


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

export type InProgressTodosQueryVariables = {};


export type InProgressTodosQuery = (
  { __typename?: 'query_root' }
  & { todo: Array<(
    { __typename?: 'todo' }
    & Pick<Todo, 'id' | 'description' | 'state' | 'created_at'>
  )> }
);

export type NewTodosQueryVariables = {};


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

export type CompleteTodoMutationVariables = {
  todo_id?: Maybe<Scalars['uuid']>;
  date?: Maybe<Scalars['timestamptz']>;
};


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

export type AddSubtaskToDoMutationVariables = {
  todo_id: Scalars['uuid'];
  description: Scalars['String'];
};


export type AddSubtaskToDoMutation = (
  { __typename?: 'mutation_root' }
  & { insert_sub_tasks?: Maybe<(
    { __typename?: 'sub_tasks_mutation_response' }
    & { returning: Array<(
      { __typename?: 'sub_tasks' }
      & Pick<Sub_Tasks, 'id'>
    )> }
  )> }
);

export type StartTodoMutationVariables = {
  todo_id?: Maybe<Scalars['uuid']>;
  date?: Maybe<Scalars['timestamptz']>;
};


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

export type SubTasksForTodoQueryVariables = {
  todo_id: Scalars['uuid'];
};


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