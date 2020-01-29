import { combineReducers } from 'redux';
import { Todo } from '../actions';
import { todosReducer } from './todos';
// describe entire state of store
export interface StoreState {
    todos: Todo[]
}
// With StoreState TS now looks at the object that we are passing into combinedReducers
export const reducers = combineReducers<StoreState>({
    // TS makes sure that todosReducer returns a value of type array of Todos (validation)
    // lines up what we want StoreState to be
    todos:todosReducer
});