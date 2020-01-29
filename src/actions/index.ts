import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

export interface Todo {
    id: number,
    title: string;
    completed: boolean;
}
// creates organized reducers, action creators
export interface FetchTodosActions {
    type: ActionTypes.fetchTodos;
    payload: Todo[];
}

const url = "https://jsonplaceholder.typicode.com/todos";

export const fetchTodos = () => {
    return async (dispatch: Dispatch) => {
        // tells TS inside response.data we'll have array of objects
        const response = await axios.get<Todo[]>(url);

        dispatch<FetchTodosActions>({
            type: ActionTypes.fetchTodos,
            // response.data equals arrays of TODOS
            payload: response.data
        })
    }
}