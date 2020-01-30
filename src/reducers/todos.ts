import { ActionTypes, FetchTodosActions, Todo } from '../actions';

// state will be an array of Todos with empty [] as default
export const todosReducer = (
    state: Todo[] = [],
    action: FetchTodosActions
    ) => {
        switch (action.type) {
            case ActionTypes.fetchTodos:
                return action.payload;
            default:
                return state;
        }
    };