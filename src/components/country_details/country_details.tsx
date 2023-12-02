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
            <button className="back_button">
                <Link to="/">Back</Link>
            </button>

            <div className="country_details_container">
                <img
                    className="country_flag"
                    src={flags.svg}
                    alt={name.common}
                />
                <div className="country_details_info">
                    <div className="info_container">
                        <h1>{name.common}</h1>

                        <div className="info_list">
                            <div className="first_info_column">
                                <p>Native Name: {nativeName} </p>
                                <p>Population: {population.toLocaleString()}</p>
                                <p>Region: {region}</p>
                                <p>Subregion: {subregion}</p>
                                <p>Capital: {capital}</p>
                            </div>

                            <div className="second_info_column">
                                <p>Top Level Domain: {tld}</p>
                                <p>Currencies: {currencyNameList.join(", ")}</p>

                                <p>
                                    Languages:{" "}
                                    {Object.values(languages).join(", ")}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="border_countries">
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
            </div>
        </div>
    );
}

export default CountryDetails;
