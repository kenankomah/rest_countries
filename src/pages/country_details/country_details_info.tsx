import { Link, useParams } from "react-router-dom";
import { CountriesData, CountryType } from "../../App";
import { useContext } from "react";
import { findSelectedCountry } from "./utilities";

function CountryDetailsInfo() {
    const { countries } = useContext(CountriesData);

    let { countryCode } = useParams();
    // console.log(countryCode);
    // console.log(countries);
    // console.log(useParams());

    const selectedCountry = findSelectedCountry(countryCode, countries);

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
        <div className="country_details_container">
            <img className="country_flag" src={flags.svg} alt={flags.alt} />
            <div className="country_details_info">
                <div className="info_container">
                    <h1 className="country_name">{name.common}</h1>

                    <div className="info_list">
                        <div className="first_info_column">
                            <p className="info_text">
                                <span className="info_label">Native Name:</span>
                                {nativeName}
                            </p>
                            <p className="info_text">
                                <span className="info_label">Population:</span>
                                {population.toLocaleString()}
                            </p>
                            <p className="info_text">
                                <span className="info_label">Region:</span>
                                {region}
                            </p>
                            <p className="info_text">
                                <span className="info_label">Subregion:</span>
                                {subregion}
                            </p>
                            <p className="info_text">
                                <span className="info_label">Capital:</span>
                                {capital}
                            </p>
                        </div>

                        <div className="second_info_column">
                            <p className="info_text">
                                <span className="info_label">
                                    Top Level Domain:
                                </span>
                                {tld}
                            </p>
                            <p className="info_text">
                                <span className="info_label">Currencies:</span>
                                {currencyNameList.join(", ")}
                            </p>

                            <p className="info_text">
                                <span className="info_label">Languages:</span>
                                {Object.values(languages).join(", ")}
                            </p>
                        </div>
                    </div>
                </div>
                {borderCountries?.length && (
                    <div className="border_countries">
                        <h2 className="border_countries_heading">
                            Border Countries:
                        </h2>
                        {borderCountries?.map((neighbour) => {
                            const { cca3, name } = neighbour as CountryType;
                            return (
                                <Link key={cca3} to={`/${cca3}`}>
                                    <button className="border_country_name">
                                        {name.common}
                                    </button>
                                </Link>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}

export default CountryDetailsInfo;
