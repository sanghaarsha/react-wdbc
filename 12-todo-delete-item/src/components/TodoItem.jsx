import React from "react";

function TodoItem(props) {
  return (
    <li
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      {props.todo}
    </li>
  );
}

export default TodoItem;
