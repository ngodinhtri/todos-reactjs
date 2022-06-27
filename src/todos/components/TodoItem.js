import { useRef, useState } from "react";
import * as actions from "../js/actions";
import { useStore } from "../js/hooks";

function TodoItem({ todo, index }) {
  const [{ editingIndex }, dispatch] = useStore();
  const [todoContent, setTodoContent] = useState(todo.content);
  const editInputRef = useRef();

  const handleEditTodo = (e) => {
    switch (e.key) {
      case "Enter":
        dispatch(actions.endEdit(e.target.value));
        break;
      case "Escape":
        handleCancelEdit();
        break;
      default:
        return;
    }
  };

  const handleCancelEdit = (e) => {
    setTodoContent(todo.content);
    editInputRef.current.blur();
    dispatch(actions.cancelEdit());
  };

  return (
    <li
      className={`
      ${index === editingIndex ? "editing" : undefined} 
      ${todo.isCompleted ? "completed" : undefined}
      `}
    >
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={todo.isCompleted}
          onChange={() => {
            dispatch(actions.toggleTodoItem(index));
          }}
        />
        <label onClick={() => dispatch(actions.startEdit(index))}>
          {todo.content}
        </label>
        <button
          className="destroy"
          onClick={() => dispatch(actions.deleteToDo(index))}
        ></button>
      </div>
      <input
        ref={editInputRef}
        className="edit"
        value={todoContent}
        onChange={(e) => setTodoContent(e.target.value)}
        onBlur={handleCancelEdit}
        onKeyUp={handleEditTodo}
      />
    </li>
  );
}

export default TodoItem;
