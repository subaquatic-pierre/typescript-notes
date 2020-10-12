import { Todo, FetchTodoAction } from '../actions/index';
import { ActionTypes } from '../actions/types';

export const todos = (state: Todo[] = [], action: FetchTodoAction) => {
    switch(action.type) {
        case ActionTypes.FetchTodos:
            return action.payload
        default:
            return state
    }
}