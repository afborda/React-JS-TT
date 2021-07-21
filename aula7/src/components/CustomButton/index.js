import React from "react";

// import { Container } from './styles';

function CustomButton({ children, ...props }) {
  return (
    <>
      <button {...props}>{children}</button>
    </>
  );
}

export default CustomButton;
