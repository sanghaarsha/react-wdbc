import React, { useState } from "react";
import TodoItem from "./TodoItem";

function App() {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);

  function textChangeHandler(event) {
    const newText = event.target.value;
    setText(newText);
  }

  function handleAdd() {
    setItems((prevState) => [...prevState, text]);
    // clearing input after adding to list
    setText("");
  }

  // Enter key will also add list item
  function handleKeyPress(target) {
    if (target.key === "Enter") {
      handleAdd();
    }
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          onKeyPress={handleKeyPress}
          onChange={textChangeHandler}
          type="text"
          value={text}
        />
        <button onClick={handleAdd}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul id="list">
          {items.map((todo) => (
            <TodoItem todo={todo} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
