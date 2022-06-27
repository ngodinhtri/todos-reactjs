import { useStore } from "../js/hooks";
import * as actions from "../js/actions";

function Footer() {
  const [state, dispatch] = useStore();
  const { todos, filters, filterState } = state;

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{todos.filter(filters.active).length}</strong> item left
      </span>
      <ul className="filters">
        {Object.keys(filters).map((type) => (
          <li key={type}>
            <a
              href="#"
              className={type === filterState ? "selected" : undefined}
              style={{ textTransform: "capitalize" }}
              onClick={() => dispatch(actions.switchFilter(type))}
            >
              {type}
            </a>
          </li>
        ))}
      </ul>
      <button
        className="clear-completed"
        hidden={!todos.some(filters.completed)}
        onClick={() => dispatch(actions.deleteCompletedTodoItems())}
      >
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;
