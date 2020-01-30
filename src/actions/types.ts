import { DeleteToDoAction, FetchTodosActions } from './todos';

export enum ActionTypes {
    fetchTodos,
    deleteTodo
}
// cleaner code rather than having this within the todos reducer (can get really long and messy)
export type Action = FetchTodosActions | DeleteToDoAction;