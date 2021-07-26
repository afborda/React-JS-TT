import React, { useContext } from "react";

import { Container, NavLinkCustom } from "./styled";
import { footerLink } from "../../mock/MenuLink";
import { GlobalContext } from "../../Context/NameContext";

function Footer() {
  const { nomeFilme } = useContext(GlobalContext);

  return (
    <Container>
      <div>
        <p>{nomeFilme}</p>
      </div>
      <div>
        {footerLink.map((item, index) => (
          <NavLinkCustom key={index} to={item.route}>
            {item.label}
          </NavLinkCustom>
        ))}
      </div>
    </Container>
  );
}

export default Footer;
