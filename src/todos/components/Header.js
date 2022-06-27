import { useStore } from "../js/hooks";
import * as actions from "../js/actions";

function Header() {
  const [{ todoInput }, dispatch] = useStore();

  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            dispatch(actions.addTodo(e.target.value));
            e.target.value = null;
          }
        }}
      />
    </header>
  );
}

export default Header;
