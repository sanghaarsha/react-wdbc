import React, { useState } from "react";

function App() {
  const [name, setName] = useState("Unknown");

  const [currentName, setCurrentName] = useState(name);

  function changeHandler(event) {
    setName(event.target.value);
  }

  function clickHandler(event) {
    setCurrentName(name);
    event.preventDefault();
  }

  return (
    <div className="container">
      <form>
        <h1>Hello {currentName}</h1>
        <input
          onChange={changeHandler}
          type="text"
          placeholder="What's your name?"
        />
        <button onClick={clickHandler}>Submit</button>
      </form>
    </div>
  );
}

export default App;
