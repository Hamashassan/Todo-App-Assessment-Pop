import {Action} from 'redux';
import {Alert} from 'react-native';

import {GET_TODO, SET_TODOS, UPDATE_TODO, ADD_TODO, DELETE_TODO} from './types';
import {NavigationService} from '../../utils';

interface TodoState {
  todos: Todo[];
}

interface TodoAction extends Action {
  data?: any;
  id?: number;
}

const initialState: TodoState = {
  todos: [],
};

export default (
  state: TodoState = initialState,
  action: TodoAction,
): TodoState => {
  switch (action.type) {
    case GET_TODO: {
      return {
        todos: action.data,
      };
    }

    case SET_TODOS: {
      return {
        todos: action.data,
      };
    }

    case UPDATE_TODO: {
      const selectedTodo = action.data;

      const todosCopy = [...state.todos];
      const index = todosCopy.findIndex(obj => obj.id === selectedTodo.id);
      todosCopy[index] = selectedTodo;

      return {
        todos: todosCopy,
      };
    }

    case ADD_TODO: {
      const todosCopy = [...state.todos];
      todosCopy.unshift(action.data);
      NavigationService.pop();
      return {
        todos: todosCopy,
      };
    }

    case DELETE_TODO: {
      const todosCopy = [...state.todos];
      const index = todosCopy.findIndex(obj => obj.id === action.id);
      todosCopy.splice(index, 1);
      Alert.alert('Todo Deleted Successfully');
      NavigationService.pop();
      return {
        todos: todosCopy,
      };
    }

    default:
      return state;
  }
};
