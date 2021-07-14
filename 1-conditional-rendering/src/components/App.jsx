import React from "react";
import Login from "./Login";
import Welcome from "./Welcome";

let isLoggedIn = false;

function App() {
  return (
    <div className="container">
      {isLoggedIn === true ? <Welcome /> : <Login />}
    </div>
  );
}

export default App;
