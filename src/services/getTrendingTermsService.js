//Recuepara los gifs mas populares desde la API

import {API_KEY,API_URL} from './settings'

const fromApiResponseToGifs = apiResponse =>{  // solo debe recuperar los nombres de los temas en tendecnia que se encuentran en el campo data del json
  const {data =[]} = apiResponse
  return data
}


export default function getTrendinsTerms(){
    const apiURL=`${API_URL}/trending/searches?api_key=${API_KEY}`
    
  return fetch(apiURL)
    .then(res => res.json())
    .then(fromApiResponseToGifs)
    
}