import { useEffect, useState } from "react";

const Header = (props) => {
  return (
    <div
      style={{
        backgroundColor: "blue",
        padding: "10px",
        color: "#fff",
        textAlign: "center",
      }}
    >
      {props.course.name}
    </div>
  );
};

const Hello = (props) => {
  const { age, name, bornYear } = props;
  // const bornYear = () => {
  //   const yearNow = new Date().getFullYear();
  //   return yearNow - age;
  // };
  // const bornYear = () => new Date().getFullYear() - age;
  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      {/* <p> So you were probably born in {bornYear()}</p> */}
      <p> So you were probably born in {bornYear}</p>
    </div>
  );
};

const Part = (props) => {
  const part = props.course.parts.map((part) => {
    return (
      <p key={part.name}>
        {part.name} {part.exercises}
      </p>
    );
  });
  return (
    <div>
      <ul>
        <li> {part} </li>
      </ul>
    </div>
  );
};
const Content = (props) => {
  return (
    <div>
      <Part course={props.course} />
    </div>
  );
};
const Total = (props) => {
  const total = props.course.parts.reduce((acc, part) => {
    return acc + part.exercises;
  }, 0);
  return <div>Total of exercises {total}</div>;
};

const App = () => {
  const [value, setValue] = useState(10);
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  const name = "Ridwan";
  const age = 10;
  const year = new Date().getFullYear();
  const bornYear = year - age;
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
      <button onClick={() => setValue(0)}>{value}</button>
      <Hello name={name} age={age + 20} bornYear={bornYear} />
      <Hello name={name} age={age} bornYear={bornYear} />
    </div>
  );
};

export default App;
