import React from "react";
import CustomButton from "../CustomButton";

import { Container, ContainerImage, ContainerData } from "./styled";

function Card({ data }) {
  const NotFound = "https://movieclip.co.uk/assets/images/imdbnoimage.jpg";

  const { Poster, Title, Type, Year, imdbID } = data;

  return (
    <Container>
      <ContainerImage>
        <img src={Poster !== "N/A" ? Poster : NotFound} alt={Title} />
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
