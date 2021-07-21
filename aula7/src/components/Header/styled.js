import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
  background: #303030;
`;

export const ContainerImage = styled.div`
  width: 50px;
  height: 40px;
`;

export const NavLinkCustom = styled(NavLink)`
  font-size: 18px;
  line-height: 28px;
  color: #ffffff;
  margin-right: 41px;
  text-decoration: none;
`;

export const MainHeader = styled.div`
  width: 1280px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LoginButton = styled.button`
  color: #ffffff;
  width: 60px;
  height: 30px;
  background: #f40000;
  border-radius: 5px;
  border: none;
  font-weight: 700;
`;
