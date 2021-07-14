import React, { useState } from "react";

function App() {
  const [headingText, setHeadingState] = useState("Hello!");
  const [isMouseOver, setMouseOver] = useState(false);

  function clickHandler() {
    setHeadingState("Submitted!");
  }

  function handleMouseOver() {
    setMouseOver(true);
  }
  function handleMouseOut() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{
          backgroundColor: isMouseOver ? "black" : "white"
        }}
        onClick={clickHandler}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
