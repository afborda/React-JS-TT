import React, { useState } from "react";

import { Container, Title1, Button, TitleStatus } from "./styled";

function Home() {
  const [data, setData] = useState(false);

  return (
    <Container>
      <h2 className="texto2">Texto com class</h2>
      <Title1> Styled-components Home</Title1>
      <Title1> Novo componente</Title1>
      <TitleStatus status={data}> Mudando Style</TitleStatus>
      <TitleStatus status={data}> Mudando Style</TitleStatus>
      <Button onClick={() => setData(!data)}>Trocar</Button>
    </Container>
  );
}

export default Home;
