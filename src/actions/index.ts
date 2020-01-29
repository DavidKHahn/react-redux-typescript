import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

interface Todo {
    id: number,
    title: string;
    completed: boolean;
}

const url = "https://jsonplaceholder.typicode.com/todos";

export const fetchTodos = () => {
    return async (dispatch: Dispatch) => {
        // tells TS inside response.data we'll have array of objects
        const response = await axios.get<Todo[]>(url);

        dispatch({
            type: ActionTypes.fetchTodos,
            // response.data equals arrays of TODOS
            payload: response.data
        })
    }
}