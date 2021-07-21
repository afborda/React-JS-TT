import React from "react";

import { Container } from "./styled";

function Input({ id, value, label, setValue, type, ...props }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={({ target }) => setValue(target.value)}
        {...props}
      />
    </>
  );
}

export default Input;
