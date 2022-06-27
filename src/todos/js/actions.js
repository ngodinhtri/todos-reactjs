import { ADD_TODO, DELETE_TODO } from "./constants";

const addTodo = (payload) => ({ type: ADD_TODO, payload });
const deleteToDo = (payload) => ({ type: DELETE_TODO, payload });

export { addTodo, deleteToDo };
