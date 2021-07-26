import React, { useEffect, useState } from "react";

import { Container } from "./styled";

import { useParams } from "react-router-dom";
import GetMoviesDetails from "../../service/getMovieDetails";
import { CardDetails } from "../../components/Card";
import Loading from "../../components/Loading";

function MovieDatails() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const params = useParams();

  useEffect(() => {
    const GetDetails = async () => {
      setLoading(true);
      const response = await GetMoviesDetails(params.id);
      setData(response.data);
      setLoading(false);
    };

    GetDetails();
  }, []);

  return (
    <Container>
      {loading ? <Loading visible={loading} /> : <CardDetails data={data} />}
    </Container>
  );
}

export default MovieDatails;
