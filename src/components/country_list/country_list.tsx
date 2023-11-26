import { Link } from "react-router-dom";
import "./country_list.scss";
import { CountryType } from "../../App";

interface CountryListProps {
    countryList: CountryType[];
}

function CountryList({ countryList }: CountryListProps) {
    return (
        <div className="country_list_container">
            {countryList.map((country: any) => {
                return (
                    <div className="country_card" key={country.cca2}>
                        <Link to={`/${country.cca3}`}>
                            <img
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
            {/* if no countries match search then put a display message */}
            {/* color of input text in dark mode needs to be fixed  */}
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
