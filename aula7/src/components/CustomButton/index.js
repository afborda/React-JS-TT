import React from "react";

import { NavLink } from "react-router-dom";

import {
  ContainerButton,
  NavLinkCustom,
  ButtonStyle,
  ButtonIcon,
} from "./styled";

function CustomButton({ children, link, route, size, ...props }) {
  return (
    <>
      {link ? (
        <ContainerButton>
          <NavLinkCustom to={route}>{children}</NavLinkCustom>
        </ContainerButton>
      ) : (
        <ButtonIcon size={size}>
          <ButtonStyle {...props}>{children}</ButtonStyle>
        </ButtonIcon>
      )}
    </>
  );
}

export default CustomButton;
