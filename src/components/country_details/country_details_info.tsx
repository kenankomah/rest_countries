import { Link } from "react-router-dom";
import { CountryType } from "../../App";

//central place to store the type of the props?

interface CountryDetailsInfoProps {
    name: {
        common: string;
        official: string;
        nativeName: {
            [key: string]: {
                official: string;
                common: string;
            };
        };
    };
    nativeName: string;
    population: number;
    region: string;
    subregion: string;
    capital: string;
    tld: string;
    languages: {
        [key: string]: string;
    };
    borderCountries: {
        cca3: string;
        name: {
            common: string;
        };
    }[];
    currencyNameList: string[];
}

function CountryDetailsInfo({
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    tld,
    languages,
    borderCountries,
    currencyNameList,
}: CountryDetailsInfoProps) {
    return (
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
    );
}

export default CountryDetailsInfo;
