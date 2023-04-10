import React,{useState,useEffect} from "react";
import getTrendinsTerms from './../../services/getTrendingTermsService';
import Category from "../Category";

export default function TrendingSearches () {
  const [trends, setTrends] = useState([]) // Donde se actualiza el estado de las tendencias, segun como se recupere desde el servicio

  useEffect(function () { //este efecto se ejecuta una sola vez al caragr la pagina principal al no tener dependecias
    getTrendinsTerms()
      .then(setTrends)
      .catch(err => {})
  
  }, [])


  return <Category options={trends} />
  //hace el llamado al componente Category el cual le responde con los elementos a renderizar y se combierte en la respuesta retornada de este propio componente

}