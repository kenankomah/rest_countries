import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { CountriesData } from "../../App";
import { CountryType } from "../../App";
import Nav from "../nav/nav";
import "./country_details.scss";
import CountryDetailsInfo from "./country_details_info";

function CountryDetails() {
    const { countries } = useContext(CountriesData);

    let { country } = useParams();

    const selectedCountry = countries.find((nation) => nation.cca3 === country);

    if (!selectedCountry)
        return (
            <div className="country_not_found">
                <p>
                    Country not found! <br />
                    <Link to={"/"}>Back to homepage</Link>
                </p>
            </div>
        );

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
        return countries.find(
            (country) => country.cca3 === border
        ) as CountryType;
    });

    const nativeName = Object.values(name.nativeName)[0].common;
    const currencyArray = Object.values(currencies);
    const currencyNameList = currencyArray.map(({ name }) => {
        return name;
    });

    return (
        <>
            <Nav />
            <div className="country_details">
                <Link to="/">
                    <button className="back_button">
                        <span className="button_text">Back </span>
                    </button>
                </Link>

                <div className="country_details_container">
                    <img
                        className="country_flag"
                        src={flags.svg}
                        alt={name.common}
                    />

                    <CountryDetailsInfo
                        name={name}
                        currencyNameList={currencyNameList}
                        nativeName={nativeName}
                        languages={languages}
                        population={population}
                        region={region}
                        subregion={subregion}
                        capital={capital}
                        tld={tld}
                        borderCountries={borderCountries}
                    />
                </div>
            </div>
        </>
    );
}

export default CountryDetails;
