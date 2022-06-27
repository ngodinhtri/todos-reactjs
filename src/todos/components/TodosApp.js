import { useStore } from "../js/hooks";

import Header from "./Header";
import TodoList from "./TodoList";
import Footer from "./Footer";

function TodosApp() {
  const [state] = useStore();
  const { todos } = state;

  return (
    <section className="todoapp">
      <Header />
      {todos.length > 0 && <TodoList />}
      {todos.length > 0 && <Footer />}
    </section>
  );
}

export default TodosApp;
