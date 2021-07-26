import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  height: 500px;
  background-color: #454545;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 8px;
  margin: 15px;
  h1 {
    color: #fff;
    white-space: nowrap;
    max-width: 250px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const ContainerImage = styled.div`
  max-width: 250px;
  height: 350px;
  margin-bottom: 10px;
  img {
    border-radius: 8px;
  }
`;

export const ContainerData = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
  width: 100%;
  p {
    color: #fff;
  }
`;
