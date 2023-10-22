import React, { useState, useEffect } from "react";
import "./country_list.scss";

function CountryList() {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("https://restcountries.com/v3/all");
            const data = await response.json();
            console.log(data);
            setCountries(data);
        }
        fetchData();
    }, []);

    return (
        <div className="App">
            <nav className="nav-bar">Where in the world?</nav>
            <div className="country_list_container">
                {countries.map((country: any) => {
                    return (
                        <div className="country_card" key={country.cca2}>
                            <img
                                src={country.flags[0]}
                                alt={country.name.common}
                                width="100"
                            />
                            <h3>{country.name.common}</h3>
                            <p>Population: {country.population}</p>
                            <p>Region: {country.region}</p>
                            <p>Capital: {country.capital}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default CountryList;
