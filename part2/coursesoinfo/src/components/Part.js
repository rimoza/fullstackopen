const Part = ({ course }) => {
  const part = course.parts.map((part) => {
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

export default Part;
