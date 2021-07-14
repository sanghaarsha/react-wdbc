import React from "react";

function Input(props) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button type="submit">
        {(props.isRegistered && "Login") || "Register"}
      </button>
    </form>
  );
}

export default Input;
