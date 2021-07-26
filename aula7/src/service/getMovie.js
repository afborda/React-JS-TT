import { api } from "../config/index";

async function GetMovies(name, page) {
  try {
    const response = await api.get(`/?apikey=fa70f7a7&s=${name}&page=${page}`);
    return response;
  } catch (err) {
    alert(err);
  }
}

export default GetMovies;
