import * as actions from "../js/actions";
import { useStore } from "../js/hooks";

function TodoItem({ todo, index, editingIndex }) {
  const [, dispatch] = useStore();
  return (
    <li className="">
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label>{todo}</label>
        <button
          className="destroy"
          onClick={() => dispatch(actions.deleteToDo(index))}
        ></button>
      </div>
      <input className="edit" value={todo} />
    </li>
  );
}

export default TodoItem;
