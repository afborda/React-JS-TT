import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

export const Container = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 60px;
  color: white;
  text-align: center;

  background: #f40000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
`;

export const NavLinkCustom = styled(Link)`
  font-size: 18px;
  line-height: 28px;
  color: #ffffff;
  margin-right: 41px;
  text-decoration: none;
`;
