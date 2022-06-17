import React, { useState } from "react";

const PersonForm = (props) => {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const handleNewNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handlephoneNumerChange = (e) => {
    setNewNumber(e.target.value);
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    if (props.persons.find((person) => person.name === newName)) {
      alert(`${newName} is already in the list`);
      setNewName("");
      setNewNumber("");
      return;
    }
    if (newName === "") {
      alert("Please enter a name");
      return;
    }
    const newUSerObject = {
      name: newName,
      phone: newNumber,
    };
    props.setPersons(props.persons.concat(newUSerObject));
    setNewName("");
    setNewNumber("");
  };
  return (
    <form onSubmit={handleSumbit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="newName"
          value={newName}
          onChange={handleNewNameChange}
        />
      </div>
      <div>
        <label htmlFor="phone">Number:</label>
        <input
          type="text"
          id="phone"
          name="phoneNumber"
          value={newNumber}
          onChange={handlephoneNumerChange}
        />
      </div>
      <button>Add</button>
    </form>
  );
};

export default PersonForm;
