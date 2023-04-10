//Recuepara los gifs Solicitados desde la API 
//se utiliza tanto al inicio de la pagina como en cada bsuqueda realizada 

import {API_KEY, API_URL} from './settings'

const fromApiResponseToGifs = apiResponse =>{
    const {data} = apiResponse // recupera el campo 'data' del json pasado comop parametro en apiResponse
    if(Array.isArray(data)){   // verifica que es un arreglo
      const gifs = data.map(image => {   // mapea cada obgeto de data y extrae su title, id y url
          const {images, title, id} = image
          const {url} =images.downsized_medium
          
          return {title, id, url} //retorna lo pedido
      })

      return gifs 
  }
    return []
  }


  export default function getGifs({
    limit = 5,  //numero de gifs a recuperar de la API
    rating = "g", // Clasificaion deafult de los gif a recuperar
    keyword = "", //palabra clave de la busqueda
    page = 0, // Valor inicial de la variable que acumula las paginas en la bsuqueda
  } = {}) {
    const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}
    &limit=${limit}&offset=${page * limit}&rating=${rating}&lang=en` // definicion de la URL con los parametros pasados desde la funcion que la llame
  
    return fetch(apiURL)   // el metodo fetch por defecto realiza una peticion get
      .then((res) => res.json()) //transforma la respuesta de la peticion en un json
      .then(datos => fromApiResponseToGifs(datos))// datos es la respuesta de la promesa anterios y es pasada como parametro a la funcion fromApiResponseToGifs
  }


