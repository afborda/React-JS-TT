import { api } from "../config/index";

async function GetMovies(name) {
  try {
    const response = await api.get(`/?apikey=fa70f7a7&s=${name}`);

    return response.data.Search;
  } catch (err) {
    alert(err);
  }
}

export default GetMovies;
