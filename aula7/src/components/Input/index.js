import React from "react";

import { Container, InputStyle } from "./styled";

function Input({ id, value, label, setValue, type, ...props }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <InputStyle
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
