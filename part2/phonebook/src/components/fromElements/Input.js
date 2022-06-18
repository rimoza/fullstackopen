import React from "react";

const Input = ({ type, id, name, onChange, ...rest }) => {
  return <input type={type} id={id} name={name} onChange={onChange} />;
};

export default Input;
