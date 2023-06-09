import React from "react";
import ListOfGifs from './../../components/ListOfGifs';
import useGifs from "../../hooks/useGifs";
import TrendinSearches from './../../components/TrendingSearches';
import SearchForm from "../../components/SearchForm";
import { Helmet } from "react-helmet";
import Spinner from "../../components/Spinner";


export default function Home(){
  const {loading, gifs} = useGifs()

  return ( 
      <>
      <Helmet>
        <title>  Home | Giffy</title>
      </Helmet>

      <header className="o-header">
      <SearchForm />
      </header>
        <div className="App-main">
          <div className="App-results">
            <h3 className="App-tite"> Ultima Busqueda </h3>
            { loading ? <Spinner/> : <ListOfGifs gifs={gifs}/> }
          </div>
          <div className="App-category">
            <TrendinSearches/> 
            </div>
          </div> 
      </>
  )
}



/* linea 28 renderiza el componente trendingSearches*/