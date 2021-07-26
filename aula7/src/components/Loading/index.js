import React from "react";

import { Container } from "./styled";

import LoadingGif from "../../assets/loading.gif";

function Loading({ visible }) {
  return (
    <>
      {visible ? (
        <Container>
          <div>
            <img src={LoadingGif} alt="loading" />
          </div>
        </Container>
      ) : null}
    </>
  );
}

export default Loading;
