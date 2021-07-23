import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import CustomButton from "../../components/CustomButton";
import Input from "../../components/Input";
import GetMovies from "../../service/getMovie";

import { Container, ContainerCard } from "./styled";

function Filmes() {
  const [name, setName] = useState("");
  const [data, setData] = useState([]);

  const getMovieName = async (value = "hulk") => {
    const response = await GetMovies(value);
    setData(response);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getMovieName(name);
  };

  useEffect(() => {
    getMovieName();
  }, []);

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Input
          id="name"
          placeholder="Informe seu filme"
          type="text"
          value={name}
          setValue={setName}
        />

        <CustomButton>Buscar</CustomButton>
      </form>

      <ContainerCard>
        {data.map((item, index) => {
          return (
            <div key={index}>
              <Card data={item} />
            </div>
          );
        })}
      </ContainerCard>
    </Container>
  );
}

export default Filmes;
