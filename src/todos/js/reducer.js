import { todosStorage } from "../../util/storage";
import {
  ADD_TODO,
  CANCEL_EDIT_TODO,
  DELETE_TODO,
  START_EDIT_TODO,
  END_EDIT_TODO,
  TOGGLE_TODO_ITEM,
  TOGGLE_ALL_TODO_ITEMS,
  SWITCH_FILTER,
  DELETE_COMPLETED_TODO_ITEMS
} from "./constants";

const initialState = {
  todos: todosStorage.get(),
  filters: {
    all: () => true,
    active: (todoItem) => !todoItem.isCompleted,
    completed: (todoItem) => todoItem.isCompleted
  },
  filterState: "all",
  editingIndex: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      if (action.payload.trim()) {
        state = {
          ...state,
          todos: [
            ...state.todos,
            { content: action.payload, isCompleted: false }
          ]
        };
        todosStorage.set(state.todos);
      }
      return { ...state };

    case DELETE_TODO:
      state.todos.splice(action.payload, 1);
      todosStorage.set(state.todos);
      return { ...state, todos: [...state.todos] };

    case START_EDIT_TODO:
      return { ...state, editingIndex: action.payload };

    case END_EDIT_TODO:
      if (action.payload.trim()) {
        const todoItem = state.todos[state.editingIndex];
        todoItem.content = action.payload;
      } else {
        state.todos.splice(state.editingIndex, 1);
      }

      todosStorage.set(state.todos);
      return { ...state, todos: [...state.todos], editingIndex: null };

    case CANCEL_EDIT_TODO:
      return { ...state, editingIndex: null };

    case TOGGLE_TODO_ITEM:
      const todoItem = state.todos[action.payload];
      todoItem.isCompleted = !todoItem.isCompleted;
      todosStorage.set(state.todos);
      return { ...state, todos: [...state.todos] };

    case TOGGLE_ALL_TODO_ITEMS:
      state.todos.forEach((todo) => {
        todo.isCompleted = action.payload;
      });
      todosStorage.set(state.todos);
      return { ...state };

    case SWITCH_FILTER:
      return { ...state, filterState: action.payload };

    case DELETE_COMPLETED_TODO_ITEMS:
      const activeTodos = state.todos.filter(state.filters.active);
      todosStorage.set(activeTodos);
      return { ...state, todos: [...activeTodos] };

    default:
      throw new Error("Invalid action.");
  }
};

export { initialState };
export default reducer;
