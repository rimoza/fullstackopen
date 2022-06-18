import React from "react";
import Input from "./fromElements/Input";
import Label from "./fromElements/Label";

const Filter = ({ filterByName }) => {
  return (
    <div>
      <label htmlFor="search"> Filter by Name: </label>
      <Input type="text" name="search" id="search" onChange={filterByName} />
    </div>
  );
};

export default Filter;
