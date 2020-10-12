import { DeleteTodoAction, FetchTodoAction } from "./todos";

export enum ActionTypes  {
    FetchTodos,
    DeleteTodo
}

export type Action = FetchTodoAction | DeleteTodoAction