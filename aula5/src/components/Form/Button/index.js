import React from "react";

function Button({ children, ...props }) {
  return (
    <>
      <button style={{ background: "red" }} {...props}>
        {children}
      </button>
    </>
  );
}

export default Button;
