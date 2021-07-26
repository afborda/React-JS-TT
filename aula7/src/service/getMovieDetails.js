import { api } from "../config/index";

async function GetMoviesDetails(id) {
  try {
    const response = await api.get(`/?apikey=fa70f7a7&i=${id}`);
    return response;
  } catch (err) {
    alert(err);
  }
}

export default GetMoviesDetails;
