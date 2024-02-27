import React from "react";

const Input = ({
  id,
  type,
  value,
  onChange,
  placeholder,
  required = true,
}) => {
  return (
    <input
      id={`input-${id}`}
      name={`input-${id}`}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      autoComplete="off"
    />
  );
};

export default Input;
