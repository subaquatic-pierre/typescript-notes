import axios from 'axios';
import {Dispatch} from 'redux'
import { ActionTypes } from './types';

export interface Todo {
    id: number,
    title: string,
    completed: boolean
}

export interface FetchTodoAction {
    type: ActionTypes.FetchTodos,
    payload: Todo[]
}

export interface DeleteTodoAction {
    type: ActionTypes.DeleteTodo,
    payload: number
}

const url = 'https://jsonplaceholder.typicode.com/todos?limit=10'

export const fetchTodos = () => {
    return async (dispatch: Dispatch) => {
        const response = await axios.get<Todo[]>(url)

        dispatch<FetchTodoAction>({
            type: ActionTypes.FetchTodos,
            payload: response.data
        })
    }
} 

export const deleteTodo = (id: number): DeleteTodoAction => {
    return {
        type: ActionTypes.DeleteTodo,
        payload: id
    }
}