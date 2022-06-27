import { useStore } from "../js/hooks";
import TodoItem from "./TodoItem";
import * as actions from "../js/actions";

function TodoList() {
  const [state, dispatch] = useStore();
  const { todos, filters, filterState } = state;
  return (
    <section className="main">
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        checked={todos.every(filters.completed)}
        onChange={(e) => dispatch(actions.toggleAllTodoItems(e.target.checked))}
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {todos.filter(filters[filterState]).map((todo, index) => (
          <TodoItem todo={todo} index={index} key={index} />
        ))}
      </ul>
    </section>
  );
}

export default TodoList;
