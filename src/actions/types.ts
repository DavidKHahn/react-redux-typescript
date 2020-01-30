import { DeleteToDoAction, FetchTodosActions } from './todos';

export enum ActionTypes {
    fetchTodos,
    deleteTodo
}

export type Action = FetchTodosActions | DeleteToDoAction;