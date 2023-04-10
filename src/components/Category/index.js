import React from "react";
import { Link } from "wouter";
import "./Category.css"

export default function Category({options = [] }) { // recibe las tenedencias en 'options' desde TrendingSearches que a su vez se las solicita al servicio adecuado
  
  return (
    <div className='Category'>
      <h3 className="Category-title"> Tendencias</h3>
      <ul className="Category-list">
        {
        options.map((singleOption) => ( // retorna un comonenete por cada tendencia en oprions
          <li key={singleOption} className="Category-list-item">
            <Link className="Category-link" to={`/search/${singleOption}`}>
              {singleOption}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
