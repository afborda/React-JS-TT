import React from "react";
import { NavLink } from "react-router-dom";

// import { Container } from './styles';

function Header() {
  return (
    <div>
      <NavLink to="/">Home</NavLink> | | <NavLink to="/movie">Filmes</NavLink>
    </div>
  );
}

export default Header;
