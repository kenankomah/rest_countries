import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Nav from "../nav/nav";
import "./country_list.scss";
import { CountriesData } from "../../App";

function CountryList() {
    const countries = useContext(CountriesData);

    return (
        <div className="App">
            <Nav />
            <div className="country_list_container">
                {countries.map((country: any) => {
                    return (
                        <div className="country_card" key={country.cca2}>
                            <Link to={`/${country.cca3}`}>
                                <img
                                    src={country.flags.svg}
                                    alt={country.name.common}
                                    width="100"
                                />
                                <h3>{country.name.common}</h3>
                                <p>Population: {country.population}</p>
                                <p>Region: {country.region}</p>
                                <p>Capital: {country.capital}</p>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default CountryList;
