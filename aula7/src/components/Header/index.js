import React from "react";

import Logo from "../../assets/Icons-logo.png";
import { menuLink } from "../../mock/MenuLink";
import {
  Container,
  LoginButton,
  ContainerImage,
  MainHeader,
  NavLinkCustom,
} from "./styled";

function Header() {
  return (
    <Container>
      <MainHeader>
        <ContainerImage>
          <img src={Logo} alt="logo filmes" />
        </ContainerImage>

        <div>
          {menuLink.map((item, index) => (
            <NavLinkCustom key={index} to={item.route}>
              {item.label}
            </NavLinkCustom>
          ))}
          <LoginButton to="/Home">Login</LoginButton>
        </div>
      </MainHeader>
    </Container>
  );
}

export default Header;
