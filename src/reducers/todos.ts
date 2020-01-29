import { FetchTodosActions, Todo } from '../actions';
import { ActionTypes } from '../actions/types';
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