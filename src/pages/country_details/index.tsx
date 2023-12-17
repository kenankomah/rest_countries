import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { CountriesData } from "../../App";
import { CountryType } from "../../App";
import Nav from "../../components/nav/nav";
import "./country_details.scss";
import CountryDetailsInfo from "./country_details_info";
import { findSelectedCountry } from "./utilities";

function CountryDetails() {
    const { countries } = useContext(CountriesData);
    let { country } = useParams();

    const selectedCountry = findSelectedCountry(country, countries);

    if (!selectedCountry)
        return (
            <div className="country_not_found">
                <p>
                    Country not found! <br />
                    <Link to={"/"}>Back to homepage</Link>
                </p>
            </div>
        );

    const { name, flags } = selectedCountry as CountryType;

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

                    <CountryDetailsInfo />
                </div>
            </div>
        </>
    );
}

export default CountryDetails;
