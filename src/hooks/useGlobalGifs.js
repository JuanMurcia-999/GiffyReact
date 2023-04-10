import { useContext } from "react";
import GifsContext from './../contexts/GifsContext';


export default function useGlobalGifs () {
    return useContext(GifsContext).gifs
  }