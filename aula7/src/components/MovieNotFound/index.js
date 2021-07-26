import React from "react";

import NotFound from "../../assets/notFoundBlack.gif";

import { Container } from "./styled";

function MovieNotFound() {
  return (
    <Container>
      <div>
        <img src={NotFound} alt="Filme nao encontrado ou nome errado" />
      </div>
    </Container>
  );
}

export default MovieNotFound;
