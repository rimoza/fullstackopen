const Header = (props) => {
  return <div>{props.course}</div>;
};

const Part = (props) => {
  console.log(props, "part");
  return (
    <div>
      <div>
        <p>
          {props.part1.name} {props.part1.exercises}{" "}
        </p>
      </div>
      <div>
        <p>
          {props.part2.name} {props.part2.exercises}{" "}
        </p>
      </div>
      <div>
        <p>
          {props.part3.name} {props.part3.exercises}{" "}
        </p>
      </div>
    </div>
  );
};
const Content = (props) => {
  console.log(props, "content");
  return (
    <div>
      <p>
        {props.part1.name} {props.part1.exercises}
      </p>
      <Part part1={props.part1} part2={props.part2} part3={props.part3} />
    </div>
  );
};
const Total = (props) => {
  return <div>{props.total}</div>;
};

function App() {
  const course = "Half Stack application development";

  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };
  const total = part1.exercises + part2.exercises + part3.exercises;
  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total total={total} />
    </div>
  );
}

export default App;
