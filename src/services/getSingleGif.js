// Su logica es la misma al servicio getGifs pero este solo realiza la peticion del gif correspondiente a la 'id' que llega como parametro a la funcion GetSingleGif

// se usa este servicio cada vez que se recarga una pagina deatil en la que solo se obserrva un gif

import { API_KEY, API_URL } from "./settings";

const fromApiResponseToGifs = (apiResponse) => {
  const {data} = apiResponse
  const {images, title, id} = data
  const {url} =images.downsized_medium
  return {title, id, url}
};

export default function GetSingleGif({ id }) {
  return fetch(`${API_URL}/gifs/${id}?api_key=${API_KEY}`)
    .then((res) => res.json())
    .then(fromApiResponseToGifs);
}
