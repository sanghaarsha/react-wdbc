import React, { useState } from "react";

function TodoItem(props) {
  const [currentStatc, setCurrentState] = useState(false);

  function toggleState() {
    if (currentStatc === false) {
      setCurrentState(true);
    } else if (currentStatc === true) {
      setCurrentState(false);
    }
  }

  return (
    <li
      onClick={toggleState}
      style={{ textDecoration: currentStatc ? "line-through" : "none" }}
      key={Math.random()}
    >
      {props.todo}
    </li>
  );
}

export default TodoItem;
