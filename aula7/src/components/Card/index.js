import React from "react";
import CustomButton from "../CustomButton";
import { CgAwards, CgWebsite } from "react-icons/cg";
import { FaMoneyCheck } from "react-icons/fa";
import { GiRoad } from "react-icons/gi";
import { FcDvdLogo } from "react-icons/fc";
import { BiCameraMovie, BiTimeFive } from "react-icons/bi";
import { BsGraphUp } from "react-icons/bs";

import {
  Container,
  ContainerImage,
  ContainerData,
  ContainerDetails,
} from "./styled";

export function Card({ data }) {
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

export function CardDetails({ data }) {
  const NotFound = "https://movieclip.co.uk/assets/images/imdbnoimage.jpg";

  const {
    Awards,
    BoxOffice,
    Country,
    DVD,
    Genre,
    Poster,
    Production,
    Runtime,
    Title,
    Website,
    Year,
    imdbRating,
  } = data;

  return (
    <ContainerDetails>
      <ContainerImage>
        <img src={Poster !== "N/A" ? Poster : NotFound} alt={Title} />
      </ContainerImage>
      <h1>{Title}</h1>
      <div className="dados-filmes">
        <p>Ano: {Year}</p>
        <p>
          Premios: {Awards} <CgAwards color="#DAA520" size={20} />
        </p>
        <p>
          Valor: {BoxOffice} <FaMoneyCheck color="#DAA520" size={20} />
        </p>
        <p>
          Origen: {Country} <GiRoad color="#DAA520" size={20} />
        </p>
        <p>
          Enviado: {DVD} <FcDvdLogo color="#DAA520" size={20} />
        </p>
        <p>
          Produtor: {Production}
          <BiCameraMovie color="#DAA520" size={20} />
        </p>
        <p>
          Tempo: {Runtime} <BiTimeFive color="#DAA520" size={20} />
        </p>
        <p>
          Site: {Website}
          <CgWebsite color="#DAA520" size={20} />
        </p>
        <p>Genero: {Genre}</p>
        <p>
          Nota: {imdbRating}
          <BsGraphUp color="#DAA520" size={20} />
        </p>
      </div>
    </ContainerDetails>
  );
}
