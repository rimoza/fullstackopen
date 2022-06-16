import { useState } from "react";
import Person from "./components/Person";

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: "Ridwan Mohamed",
    },
  ]);

  const [newName, setNewName] = useState("");

  const handleNewNameChange = (e) => {
    console.log(e.target.value);
    setNewName(e.target.value);
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    const neUSerObject = {
      name: newName,
    };
    setPersons(persons.concat(neUSerObject));
    setNewName("");
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <form onSubmit={handleSumbit}>
        <label>Name:</label> {""}
        <input
          type="text"
          name="newName"
          value={newName}
          onChange={handleNewNameChange}
        />
        <button>Add</button>
      </form>
      <h1>Numbers</h1>
      <div>
        {persons.map((person) => (
          <Person key={person.name} person={person} />
        ))}
      </div>
    </div>
  );
};

export default App;
