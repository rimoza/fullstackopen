import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
    "It's better to wait for a productive programmer to become available than it is to wait for the first available programmer to become productive.",
  ];

  const [selected, setSelected] = useState(anecdotes[0]);
  const [vote, setVote] = useState(new Array(anecdotes.length).fill(0));

  const handleRandom = () => {
    setSelected([Math.floor(Math.random() * anecdotes.length)]);
  };

  const numberVoted = () => {
    const copy = [...vote];
    copy[selected] += 1;
    setVote(copy);
  };
  return (
    <div>
      <div>
        <h1>Anecdote of the day</h1>
        <p>{anecdotes[selected]}</p>
        <p> {selected} </p>
        <p>has {vote[selected]} votes</p>
      </div>
      <button onClick={numberVoted}>vote</button>
      <button onClick={handleRandom}> next anecdotes</button>
      <div>
        <h1>Anecdote with most votes</h1>
        <p>{anecdotes[vote.indexOf(Math.max(...vote))]}</p>
        <p>has {Math.max(...vote)} votes</p>
      </div>
    </div>
  );
};

export default App;
