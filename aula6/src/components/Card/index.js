import React from "react";

// import { Container } from './styles';

function Card({ data }) {
  const { Title, Poster, Runtime, imdbRating, Year, imdbVotes, Released } =
    data;
  return (
    <div>
      <h1>{Title}</h1>
      <h1>{Runtime}</h1>
      <h1>{imdbRating}</h1>
      <h1>{Year}</h1>
      <img src={Poster} alt={Title} />
      <h2>{imdbVotes}</h2>
      <h2>{Released}</h2>
    </div>
  );
}

export default Card;
