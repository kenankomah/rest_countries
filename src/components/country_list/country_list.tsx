import { Link } from "react-router-dom";
import "./country_list.scss";
import { CountryType } from "../../App";

interface CountryListProps {
    countryList: CountryType[];
}

const oneCountryInList = (countryList: CountryType[]) => {
    return countryList.length === 1;
};

function CountryList({ countryList }: CountryListProps) {
    const ListContainerClass =
        countryList.length === 1
            ? "country_list_container single_country"
            : "country_list_container";
    return (
        <div className={ListContainerClass}>
            {countryList.map((country: any) => {
                return (
                    <div className="country_card" key={country.cca2}>
                        <Link to={`/${country.cca3}`}>
                            <img
                                loading="lazy"
                                src={country.flags.svg}
                                alt={country.name.common}
                                className="country_flag"
                            />
                            <div className="country_info">
                                <h3>{country.name.common}</h3>
                                <p>
                                    <span className="country_info_label">
                                        Population:
                                    </span>
                                    {country.population.toLocaleString()}
                                </p>
                                <p>
                                    <span className="country_info_label">
                                        Region:
                                    </span>
                                    {country.region}
                                </p>
                                <p>
                                    <span className="country_info_label">
                                        Capital:
                                    </span>
                                    {country.capital}
                                </p>
                            </div>
                        </Link>
                    </div>
                );
            })}

            {/* flags too stretched on tablets */}

            {!countryList.length && (
                <div className="empty_list">
                    <h3>No countries found</h3>
                </div>
            )}
        </div>
    );
}

export default CountryList;
