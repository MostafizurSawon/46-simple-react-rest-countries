import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

function Countries() {
    const [countries, setCountries] = useState([]);
    useEffect (() => {
      fetch('https://restcountries.eu/rest/v2/all')
      .then(response => response.json())
      .then(data => setCountries(data))
    } ,[])
    return (
      <div className="container mt-5 pt-3">
        <h2>Rest countries</h2>
        <h3>Total countries = {countries.length}</h3>
        <div className="row row-cols-1 row-cols-md-3 g-4 client-review mt-3">
        {
          countries.map(country => <Country
          key={country.name}
            country={country}></Country>)
        }</div>
      </div>
    )
  };

export default Countries;