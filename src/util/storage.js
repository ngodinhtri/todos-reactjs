const TODOS_STORAGE_KEY = "todos-list";

export const todosStorage = {
  get() {
    return JSON.parse(localStorage.getItem(TODOS_STORAGE_KEY)) || [];
  },
  set(todosList) {
    localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todosList));
  }
};
