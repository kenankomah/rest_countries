import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { CountriesData } from "../../App";
import { CountryType } from "../../App";
import Nav from "../nav/nav";
import "./country_details.scss";

function CountryDetails() {
    const countries = useContext(CountriesData);

    let { country } = useParams();

    const selectedCountry = countries.find((nation) => nation.cca3 === country);

    console.log("selectedCountry", selectedCountry);
    if (!selectedCountry) return <div>Country not found</div>; // replace with a 404 page

    const {
        name,
        languages,
        currencies,
        population,
        region,
        subregion,
        capital,
        tld,
        borders,
        flags,
    } = selectedCountry as CountryType;

    const borderCountries = borders?.map((border) => {
        return countries.find((country) => country.cca3 === border);
    });

    const nativeName = Object.values(name.nativeName)[0].common;
    const currencyArray = Object.values(currencies);
    const currencyNameList = currencyArray.map(({ name }) => {
        return name;
    });

    return (
        <div className="country_details">
            <Nav />
            <button className="back-button">
                <Link to="/">Back</Link>
            </button>
            <img src={flags.svg} alt={name.common} />
            <h1>{name.common}</h1>
            <p>Population: {population}</p>
            <p>Region: {region}</p>
            <p>Subregion: {subregion}</p>
            <p>Capital: {capital}</p>
            <p>Top Level Domain: {tld}</p>
            <p>Languages: {Object.values(languages).join(", ")}</p>
            <p>Currencies: {currencyNameList.join(", ")}</p>
            <p>Native Name: {nativeName} </p>

            <div>
                <h2>Border Countries:</h2>
                {borderCountries?.map((neighbour) => {
                    const { cca3, name } = neighbour as CountryType;
                    return (
                        <p key={cca3}>
                            <Link to={`/${cca3}`}>{name.common} </Link>
                        </p>
                    );
                })}
            </div>
        </div>
    );
}

export default CountryDetails;
