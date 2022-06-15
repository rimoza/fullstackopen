import { useState } from "react";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [positivePercentage, setPositivePercentage] = useState(0);
  const [average, setAverage] = useState(0);

  const handleGood = () => {
    setGood(good + 1);
  };
  const handleNeutral = () => {
    setNeutral(neutral + 1);
  };
  const handleBad = () => {
    setBad(bad + 1);
  };

  const calculateAverage = () => {
    const sum = good + neutral + bad;
    const average = sum / 3;
    setAverage(average);
  };

  const handlePositivePercentage = () => {
    const posiveSum = good;
    setPositivePercentage((posiveSum / (good + neutral + bad)) * 100);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <button onClick={handleGood}>good</button>
        <button onClick={handleNeutral}>neutral</button>
        <button onClick={handleBad}>bad</button>
      </div>
      <div>
        <h1>Statistics</h1>
        <p>good {good} </p>
        <p>neutral {neutral} </p>
        <p>bad {bad} </p>
        <p>All {good + neutral + bad} </p>
        <p onClick={calculateAverage}>average {average} </p>
        <p onClick={handlePositivePercentage}>positive {positivePercentage} </p>
      </div>
    </div>
  );
};

export default App;
