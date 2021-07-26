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

export const ContainerDetails = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 90px;
  h1 {
    color: #fff;
    font-weight: 700;
    font-size: 30px;
    margin: 15px 0;
  }
  .dados-filmes {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    p {
      color: #fff;
      font-size: 16px;
    }
  }
`;
