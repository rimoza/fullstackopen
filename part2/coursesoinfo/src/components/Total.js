import React, { useState } from "react";

const Total = ({ course }) => {
  const total = course.parts.reduce((acc, part) => acc + part.exercises, 0);
  const [resetTotal, setResetTotal] = useState(total);
  return (
    <div>
      <p>Total {resetTotal}</p>
      <button onClick={() => setResetTotal(0)}> Reset </button>
    </div>
  );
};

export default Total;
