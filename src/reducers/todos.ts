import { Action, ActionTypes, Todo } from '../actions';

// state will be an array of Todos with empty [] as default
export const todosReducer = (
    state: Todo[] = [],
    action: Action
    ) => {
        switch (action.type) {
            case ActionTypes.fetchTodos:
                return action.payload;
            case ActionTypes.deleteTodo:
                return state.filter((todo: Todo) => todo.id !== action.payload);
            default:
                return state;
        }
    };