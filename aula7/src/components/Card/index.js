import React from "react";
import CustomButton from "../CustomButton";

import { Container, ContainerImage, ContainerData } from "./styled";

function Card({ data }) {
  console.log(data);

  const { Poster, Title, Type, Year, imdbID } = data;

  return (
    <Container>
      <ContainerImage>
        <img src={Poster} alt={Title} />
      </ContainerImage>
      <h1>{Title}</h1>
      <ContainerData>
        <p>Ano: {Year}</p>
        <p>Tipo: {Type}</p>
      </ContainerData>

      <CustomButton link route={`/Filmes/${imdbID}`}>
        Saiba mais
      </CustomButton>
    </Container>
  );
}

export default Card;
