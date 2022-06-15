import { useState } from "react";

const Button = ({ text, handleClick }) => {
  return <button onClick={handleClick}> {text} </button>;
};

const StatisticLine = ({ text, value }) => {
  return (
    <div>
      {" "}
      <p>
        {text} {value}
      </p>{" "}
    </div>
  );
};

const Statistics = (props) => {
  return (
    <div>
      <h1>Statistics</h1>
      <StatisticLine text="good" value={props.good} />
      <StatisticLine text="neutral" value={props.neutral} />
      <StatisticLine text="bad" value={props.bad} />
      <p>All {props.sum} </p>
      <p onClick={props.calculateAverage}>average {props.average} </p>
      <p onClick={props.handlePositivePercentage}>
        positive {props.positivePercentage}
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

  const sum = good + neutral + bad;
  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button handleClick={handleGood} text="good" />
        <Button handleClick={handleNeutral} text="neutral" />
        <Button handleClick={handleBad} text="bad" />
      </div>

      {sum > 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          sum={sum}
          average={average}
          positivePercentage={positivePercentage}
          calculateAverage={calculateAverage}
          handlePositivePercentage={handlePositivePercentage}
        />
      ) : (
        "No feedback given"
      )}
    </div>
  );
};

export default App;
