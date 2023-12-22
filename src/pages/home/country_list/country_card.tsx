import { Link } from "react-router-dom";
import { CountryType } from "../../../App";

interface CountryCardProps {
    country: CountryType;
}

function CountryCard({ country }: CountryCardProps) {
    const { name, population, region, capital, flags } = country;
    const altText = flags.alt ? flags.alt : `Flag of ${name.common}`;
    return (
        <div className="country_card">
            <Link to={`/${country.cca3}`}>
                <img
                    loading="lazy"
                    src={flags.svg}
                    alt={altText}
                    className="country_flag"
                />
                <div className="country_info">
                    <h2>{name.common}</h2>
                    <p>
                        <span className="country_info_label">Population:</span>
                        {population.toLocaleString()}
                    </p>
                    <p>
                        <span className="country_info_label">Region:</span>
                        {region}
                    </p>
                    <p>
                        <span className="country_info_label">Capital:</span>
                        {capital}
                    </p>
                </div>
            </Link>
        </div>
    );
}

export default CountryCard;
