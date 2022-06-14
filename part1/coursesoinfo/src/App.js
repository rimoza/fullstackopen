const Header = (props) => {
  return <div>{props.course.name}</div>;
};

const Part = (props) => {
  console.log(props.course, "part props");
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

function App() {
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

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
}

export default App;
