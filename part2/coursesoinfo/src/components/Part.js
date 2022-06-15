const PartItem = ({ name, exercise, total }) => {
  return (
    <div>
      <ul>
        <li>
          {name} {exercise}
        </li>
      </ul>
    </div>
  );
};

const Part = ({ course }) => {
  const total = course.map((course, index) => (
    <div key={index}>
      {course.parts.reduce((acc, part) => acc + part.exercises, 0)}
    </div>
  ));
  return (
    <div>
      {course.map((course, index) => (
        <div key={index}>
          <h2>{course.name}</h2>
          {course.parts.map((part) => (
            <PartItem
              key={part.id}
              name={part.name}
              exercise={part.exercises}
              total={total}
            />
          ))}
          <h4> total of {total} exercises </h4>
        </div>
      ))}
    </div>
  );
};

export default Part;
