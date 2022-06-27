import { useStore } from "../js/hooks";
import TodoItem from "./TodoItem";

function TodoList() {
  const [state, dispatch] = useStore();
  const { todos } = state;
  return (
    <section className="main">
      <input id="toggle-all" className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <TodoItem todo={todo} index={index} key={index} />
        ))}
      </ul>
    </section>
  );
}

export default TodoList;
