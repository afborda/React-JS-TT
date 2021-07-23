import React from "react";

import { NavLink } from "react-router-dom";

import { Container, ContainerButton } from "./styled";

function CustomButton({ children, link, route, ...props }) {
  return (
    <>
      {link ? (
        <ContainerButton>
          <NavLink to={route}>{children}</NavLink>
        </ContainerButton>
      ) : (
        <ContainerButton>
          <button {...props}>{children}</button>
        </ContainerButton>
      )}
    </>
  );
}

export default CustomButton;
