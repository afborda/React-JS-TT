import React, { useEffect, useState } from "react";

import { NavLink } from "react-router-dom";
import GetMovies from "../../service/Movie/GetMovies";

function Home() {
  const [data, setData] = useState([]);

  const GetDataMovies = async () => {
    const response = await GetMovies("hulk");
    console.log("response>>> ", response);
    setData(response);
  };

  useEffect(() => {
    GetDataMovies();
  }, []);

  console.log("teste", data);
  return (
    <div>
      <h1>Home</h1>

      <div>
        {data.map((item) => {
          return (
            <div key={item.imdbID}>
              <h1>{item.Title}</h1>
              <NavLink to={`/movie/${item.imdbID}`}>Saiba mais</NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
