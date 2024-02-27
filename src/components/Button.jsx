import React from "react";

const Button = ({ onClick, label, type = "button", disabled = false }) => {
  return (
    <button type={type} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;
