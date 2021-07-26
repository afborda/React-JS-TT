import React, { useContext, useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { GoPlus } from "react-icons/go";

import { Card } from "../../components/Card";
import CustomButton from "../../components/CustomButton";
import Input from "../../components/Input";
import MovieNotFound from "../../components/MovieNotFound";
import { GlobalContext } from "../../Context/NameContext";
import GetMovies from "../../service/getMovie";

import {
  Container,
  ContainerCard,
  FormStyle,
  BodyButton,
  CenterButton,
} from "./styled";

function Filmes() {
  const [name, setName] = useState("");
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);
  const [response, setResponse] = useState(false);
  const { setNomeFilme } = useContext(GlobalContext);

  const getMovieName = async (value, page) => {
    setNomeFilme(value);
    const response = await GetMovies(value, page);
    if (data === null) {
      setData(response.data.Search);
    }
    setResponse(response);
    return response;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (data !== []) {
      setData([]);
    }
    const filmes = await getMovieName(name);
    setData(filmes.data.Search);
  };

  const getNewPage = async () => {
    try {
      if (response.data.Response) {
        setPage(page + 1);
        const filmes = await getMovieName(name, page);
        setData(data.concat(filmes.data.Search));
      }
    } catch (err) {
      alert("Acabou");
    }
  };

  useEffect(() => {
    getMovieName("Hulk", "1");
  }, []);

  return (
    <Container>
      <FormStyle onSubmit={handleSubmit}>
        <Input
          id="name"
          placeholder="Informe seu filme"
          type="text"
          value={name}
          setValue={setName}
        />

        <CustomButton>
          <AiOutlineSearch size={25} />
        </CustomButton>
      </FormStyle>

      {data ? (
        <>
          <ContainerCard>
            {data.map((item, index) => {
              return (
                <div key={index}>
                  <Card data={item} />
                </div>
              );
            })}
          </ContainerCard>
          <CenterButton>
            <CustomButton onClick={() => getNewPage()} size="lg">
              <BodyButton>
                <p>Mais Filmes</p>
                <GoPlus />
              </BodyButton>
            </CustomButton>
          </CenterButton>
        </>
      ) : (
        <MovieNotFound />
      )}
    </Container>
  );
}

export default Filmes;
