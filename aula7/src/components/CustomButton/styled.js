import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const ContainerButton = styled.div`
  background-color: red;
  width: 150px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  border-radius: 8px;
`;

export const NavLinkCustom = styled(NavLink)`
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
`;

export const ButtonStyle = styled.button`
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  color: #fff;
`;

export const ButtonIcon = styled(ContainerButton)`
  width: ${({ size }) => (size === "lg" ? "300px" : "64px")};
  height: 40px;
`;
