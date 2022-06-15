import { useState } from "react";

const Button = ({ text, handleClick }) => {
  return <button onClick={handleClick}> {text} </button>;
};

const StatisticLine = ({ text, value }) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>{text}</td>
          <td> {value} </td>
        </tr>
      </tbody>
    </table>
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
      <p>average {props.average} </p>
      <p>positive {props.positivePercentage}</p>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => {
    setGood(good + 1);
  };
  const handleNeutral = () => {
    setNeutral(neutral + 1);
  };
  const handleBad = () => {
    setBad(bad + 1);
  };

  const sum = good + neutral + bad;
  const feedbackAaverage = sum / 3;
  const positive = (good / sum) * 100;
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
          average={feedbackAaverage}
          positivePercentage={positive}
        />
      ) : (
        "No feedback given"
      )}
    </div>
  );
};

export default App;
