import styled from "styled-components";

export const Container = styled.div`
  background-color: red;
  .texto2 {
    color: #fff;
  }
`;

export const Title1 = styled.h1`
  color: blue;
`;

export const TitleStatus = styled.h3`
  background-color: ${({ status }) => (status ? "green" : "red")};
  color: ${({ status }) => (status ? "#ccc" : "blue")};
  font-size: 24px;
`;

export const Button = styled.button`
  width: 200px;
  height: 60px;
  font-size: 16px;
  background-color: #ccc;
  border-radius: 8px;
`;
