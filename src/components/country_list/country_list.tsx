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
            {/* if no countries match search then put a display message */}
        </div>
    );
}

export default CountryList;
