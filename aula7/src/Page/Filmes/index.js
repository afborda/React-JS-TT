import React, { useState } from "react";
import CustomButton from "../../components/CustomButton";
import Input from "../../components/Input";

import { Container } from "./styled";

function Filmes() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name);
  };

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
    </Container>
  );
}

export default Filmes;
