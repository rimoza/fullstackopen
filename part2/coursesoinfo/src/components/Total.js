import React, { useState } from "react";

const Total = ({ course }) => {
  const courseMap = course.map((course, index) => (
    <div key={index}>
      {course.parts.reduce((acc, part) => acc + part.exercises, 0)}
    </div>
  ));

  const [resetTotal, setResetTotal] = useState(courseMap);
  return (
    <div>
      <h4>Total of {resetTotal} exercises</h4>
      <button onClick={() => setResetTotal(0)}> Reset </button>
    </div>
  );
};

export default Total;
