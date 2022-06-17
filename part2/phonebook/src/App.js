import { useState } from "react";
import Filter from "./components/Filter";
import Person from "./components/Person";
import PersonForm from "./components/PersonFom";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);

  const [searchItem, setSearchItem] = useState("");

  const filteredName = persons.filter((p) => {
    if (searchItem === "") {
      return p;
    } else if (
      p.name.toLocaleLowerCase().includes(searchItem.toLocaleLowerCase())
    ) {
      return p;
    }
  });
  const filterByName = (e) => {
    setSearchItem(e.target.value);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter filterByName={filterByName} />
      <h1>Add New Person</h1>
      <PersonForm persons={persons} setPersons={setPersons} />
      <h1>Numbers</h1>

      <div>
        {filteredName.map((person) => (
          <Person key={person.name} person={person} />
        ))}
      </div>
    </div>
  );
};

export default App;
