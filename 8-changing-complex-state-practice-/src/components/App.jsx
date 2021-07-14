import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function changeHandler(event) {
    const { name, value } = event.target;

    if (name === "fName") {
      setContact((prevState) => {
        return {
          fName: value,
          lName: prevState.lName,
          email: prevState.email
        };
      });
    } else if (name === "lName") {
      setContact((prevState) => {
        return {
          fName: prevState.fName,
          lName: value,
          email: prevState.email
        };
      });
    } else if (name === "email") {
      setContact((prevState) => {
        return {
          fName: prevState.fName,
          lName: prevState.lName,
          email: value
        };
      });
    }
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={changeHandler}
          name="fName"
          placeholder="First Name"
          value={contact.fName}
        />
        <input
          onChange={changeHandler}
          name="lName"
          placeholder="Last Name"
          value={contact.lName}
        />
        <input
          onChange={changeHandler}
          name="email"
          placeholder="Email"
          value={contact.email}
        />
        <button /*{onClick={(event) => event.preventDefault()}}*/>Submit</button>
      </form>
    </div>
  );
}

export default App;
