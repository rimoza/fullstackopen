import { useState } from "react";

const Statistics = (props) => {
  console.log(props, "props");
  return (
    <div>
      <h1>Statistics</h1>
      <p>good {props.good} </p>
      <p>neutral {props.neutral} </p>
      <p>bad {props.bad} </p>
      <p>All {props.good + props.neutral + props.bad} </p>
      <p onClick={props.calculateAverage}>average {props.average} </p>
      <p onClick={props.handlePositivePercentage}>
        positive {props.positivePercentage}{" "}
      </p>
    </div>
  );
};

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
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        average={average}
        calculateAverage={calculateAverage}
        positivePercentage={positivePercentage}
        handlePositivePercentage={handlePositivePercentage}
      />
    </div>
  );
};

export default App;
