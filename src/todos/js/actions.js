import {
  ADD_TODO,
  DELETE_TODO,
  START_EDIT_TODO,
  END_EDIT_TODO,
  CANCEL_EDIT_TODO,
  TOGGLE_TODO_ITEM,
  TOGGLE_ALL_TODO_ITEMS,
  SWITCH_FILTER,
  DELETE_COMPLETED_TODO_ITEMS
} from "./constants";

const addTodo = (payload) => ({ type: ADD_TODO, payload });
const deleteToDo = (payload) => ({ type: DELETE_TODO, payload });
const startEdit = (payload) => ({ type: START_EDIT_TODO, payload });
const endEdit = (payload) => ({ type: END_EDIT_TODO, payload });
const cancelEdit = () => ({ type: CANCEL_EDIT_TODO });
const toggleTodoItem = (payload) => ({ type: TOGGLE_TODO_ITEM, payload });
const toggleAllTodoItems = (payload) => ({
  type: TOGGLE_ALL_TODO_ITEMS,
  payload
});
const switchFilter = (payload) => ({ type: SWITCH_FILTER, payload });
const deleteCompletedTodoItems = () => ({
  type: DELETE_COMPLETED_TODO_ITEMS
});

export {
  addTodo,
  deleteToDo,
  startEdit,
  endEdit,
  cancelEdit,
  toggleTodoItem,
  toggleAllTodoItems,
  switchFilter,
  deleteCompletedTodoItems
};
