import { useState } from "react";
import Note from "./components/Note.js";

const App = (props) => {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(false);
  const handleNoteChange = (e) => {
    setNewNote(e.target.value);
    console.log(e.target.value);
  };

  const addNotes = (e) => {
    e.preventDefault();
    const newObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1,
    };

    setNotes(notes.concat(newObject));
    setNewNote("");
  };

  const notestoShow = showAll
    ? notes
    : notes.filter((note) => note.important === true);

  return (
    <div>
      <h1>Notes</h1>
      <button onClick={() => setShowAll(!showAll)}>
        show {showAll ? "important" : "all"}
      </button>
      {notestoShow.length > 0 ? (
        <ul>
          {notestoShow.map((note) => (
            <Note key={note.id} note={note} />
          ))}
        </ul>
      ) : (
        <h1>"No Notes is Avaliable"</h1>
      )}
      <form onSubmit={addNotes}>
        <input name="newNote" value={newNote} onChange={handleNoteChange} />
        <button>save</button>
      </form>
    </div>
  );
};

export default App;
