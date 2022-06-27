import { useStore } from "../js/hooks";

import Header from "./Header";
import TodoList from "./TodoList";

function TodosApp() {
  const [state, dispatch] = useStore();
  const { todos } = state;

  return (
    <section className="todoapp">
      <Header />
      {todos.length > 0 && <TodoList />}
    </section>
  );
}

export default TodosApp;
