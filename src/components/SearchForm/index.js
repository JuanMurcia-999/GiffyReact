import React from "react";
import { useLocation } from "wouter";
import useForm from "./hook";


const RATINGS = ["g", "pg", "pg-13", "r"]; // opciones por defecto del select



function SearchForm({ initialKeyword = "", initialRating = "g " }) {

  const{keyword,rating,times, updateKeyword, updateRating} = useForm({initialKeyword,initialRating});


  const [path, pushLocation] = useLocation();

  const handleSbubmit = (evt) => {
    evt.preventDefault(); // evita el comportamiento por defecto del componente
    pushLocation(`/search/${keyword}/${rating}`);
  };
  const handleChange = (evt) => {
    updateKeyword(evt.target.value)
  };

  const handleChangeRating = (evt) => {
    updateRating(evt.target.value)
  };



  return (
    <form onSubmit={handleSbubmit}>
      <input
        onChange={handleChange}
        type="text"
        value={keyword}
        placeholder="Seacrg a gif here ..."
      />
      <button className="searchButton">Buscar</button>
      <select onChange={handleChangeRating} value={rating}>
        <option disabled>Rating Type </option>
        {RATINGS.map((rating) => (
          <option key={rating}>{rating}</option>
        ))}
      </select>
      <small>{times}</small>
    </form>
  );
}


export default React.memo(SearchForm);
