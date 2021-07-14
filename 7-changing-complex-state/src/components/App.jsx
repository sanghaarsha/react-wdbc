import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  function fullNameChangeHandler(event) {
    const changedField = event.target.name;
    const recievedName = event.target.value;

    // if fname changed return state with changed fName but previous lName
    if (changedField === "fName") {
      setFullName((prevState) => {
        return {
          fName: recievedName,
          lName: prevState.lName
        };
      });
    }
    // if lname changed return state with changed lName but previous fName
    else if (changedField === "lName") {
      setFullName((prevState) => {
        return {
          fName: prevState.fName,
          lName: recievedName
        };
      });
    }
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          name="fName"
          onChange={fullNameChangeHandler}
          placeholder="First Name"
          value={fullName.fName}
        />
        <input
          onChange={fullNameChangeHandler}
          name="lName"
          placeholder="Last Name"
          value={fullName.lName}
        />
        <button onClick={(event) => event.preventDefault()}>Submit</button>
      </form>
    </div>
  );
}

export default App;
