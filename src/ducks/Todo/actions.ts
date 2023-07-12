import {Action} from 'redux';
import {GET_TODO, UPDATE_TODO, ADD_TODO, DELETE_TODO} from './types';

interface TodoAction extends Action {
  data?: any;
  id?: number;
}

export function getTodo(): TodoAction {
  return {
    type: GET_TODO,
  };
}

export function setTodos(data: any): TodoAction {
  return {
    data,
    type: GET_TODO,
  };
}

export function updateTodo(data: any): TodoAction {
  return {
    data,
    type: UPDATE_TODO,
  };
}

export function addTodo(data: any): TodoAction {
  return {
    data,
    type: ADD_TODO,
  };
}

export function deleteTodo(id: number): TodoAction {
  return {
    id,
    type: DELETE_TODO,
  };
}
