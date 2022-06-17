import React from "react";

const Filter = ({ filterByName }) => {
  return (
    <div>
      <label htmlFor="search">Filter by Name</label>
      <input type="text" name="search" id="search" onChange={filterByName} />
    </div>
  );
};

export default Filter;
