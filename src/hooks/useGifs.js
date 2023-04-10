import { useState, useEffect, useContext } from "react";
import getGifs from "../services/getGifs";
import GifsContext from "./../contexts/GifsContext";

const INITIAL_PAGE = 0; // pagina inicial en las busquedas

export default function useGifs({ keyword, rating } = { keyword: null }) {
  const [loading, setLoading] = useState(false); // estado para comprobar si la pag esta cargando o no
  const [loadingNextPage, setLoadingNextPage] = useState(false); // en las busqueda comprueba el slide de la pagina

  const [page, setPage] = useState(INITIAL_PAGE); // estado numerico de la pagina cargada en las busquedas
  const { gifs, setGifs } = useContext(GifsContext);


  //console.log(page)

  // recuperamos la keyword del localStorage
  const keywordToUse =
    keyword || localStorage.getItem("lastKeyword") || "morty";


// este efecto se ejecuta al cargar las busquedas del Home o al realizar una busqueda cambiando alguno de los valores 
  useEffect(
    function () {
      setLoading(true); // pagina cargando inica el Spinner en Home
      getGifs({ keyword: keywordToUse, rating })
      .then((gifs) => {setGifs(gifs);
        setLoading(false); // pagina cargada, ternima la ejecucion del Spinner
        localStorage.setItem("lastKeyword", keyword);  // guardamos la keyword en el localStorage
      });
    },
    [keyword, keywordToUse, rating, setGifs]
  );


  useEffect(   // este efecto se ejecuta en la busqueda al utilizar el slider de la pagina cargando una pagina mas o una seccion de gifs adicional (paginado), se ejecuta principalmente al cambiar el valor de 'page'
    function () {
    
      if (page === INITIAL_PAGE) return;

      setLoadingNextPage(true);
      getGifs({ keyword: keywordToUse, page, rating }).then((nextGifs) => {
        setGifs((prevGifs) => prevGifs.concat(nextGifs));
        setLoadingNextPage(false);
      });
    },
    [keywordToUse, page, rating, setGifs]

  );

// el numero de pagina es actualizado desde SearchResults recuperando el setPage de la propia funcion


  return { loading, loadingNextPage, gifs, setPage };
}
