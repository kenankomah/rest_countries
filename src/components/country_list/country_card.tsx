import { Link } from "react-router-dom";
import { CountryType } from "../../App";

interface CountryCardProps {
    country: CountryType;
}

function CountryCard({ country }: CountryCardProps) {
    return (
        <div className="country_card">
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
                        <span className="country_info_label">Population:</span>
                        {country.population.toLocaleString()}
                    </p>
                    <p>
                        <span className="country_info_label">Region:</span>
                        {country.region}
                    </p>
                    <p>
                        <span className="country_info_label">Capital:</span>
                        {country.capital}
                    </p>
                </div>
            </Link>
        </div>
    );
}

export default CountryCard;
