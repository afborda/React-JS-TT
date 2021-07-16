import { api } from "../../config";

async function GetDetailsMovie(idMovie) {
  try {
    const response = await api.get(`/?apikey=fa70f7a7&i=${idMovie}`);

    return response.data;
  } catch (error) {
    alert(error);
  }
}

export default GetDetailsMovie;
