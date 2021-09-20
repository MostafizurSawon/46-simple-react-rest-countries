import React from 'react';

function Country(props){
    const {name, capital, population, flag, region} = props.country;
    return(
                <div className="col">
                    <div className="card h-100 p-3">
                        <div className="d-flex justify-content-center">
                            <img src={flag} className="card-img-top" alt="user" />
                        </div>
                        <div className="card-body">
                            <h3> Region = {region}</h3>
                            <h3>Name : {name}</h3>
                            <h3 className="card-text">Capital : {capital} </h3>
                            <h4>Population = {population}</h4>
                        </div>
                    </div>
                </div>
     );
 };

 export default Country;