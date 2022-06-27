import { todosStorage } from "../../util/storage";
import { ADD_TODO, DELETE_TODO } from "./constants";

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
      state = { ...state, todos: [...state.todos, action.payload] };
      todosStorage.set(state.todos);
      return state;

    case DELETE_TODO:
      const newTodos = state.todos;
      newTodos.splice(action.payload, 1);

      state = { ...state, todos: [...newTodos] };
      todosStorage.set(state.todos);
      return state;

    default:
      throw new Error("Invalid action.");
  }
};

export { initialState };
export default reducer;
