import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./style.css";

function Header() {
  return (
    <nav>
      <Link to="/"> Home</Link>| |<Link to="/produtos">Produtos</Link> | |
      <NavLink exact to="/">
        NavHome
      </NavLink>{" "}
      | |<NavLink to="/produtos">NavHome</NavLink>
    </nav>
  );
}

export default Header;
