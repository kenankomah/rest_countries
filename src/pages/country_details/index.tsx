import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { CountriesData } from "../../App";
import Header from "../../components/header/header";
import "./country_details.scss";
import CountryDetailsInfo from "./country_details_info";
import { findSelectedCountry } from "./utilities";

function CountryDetails() {
    const { countries } = useContext(CountriesData);
    let { countryCode } = useParams();

    const selectedCountry = findSelectedCountry(countryCode, countries);

    if (!selectedCountry)
        return (
            <div className="country_not_found">
                <p>
                    Country not found! <br />
                    <Link to={"/"}>Back to homepage</Link>
                </p>
            </div>
        );

    return (
        <>
            <Header />
            <div className="country_details">
                <Link to="/">
                    <button className="back_button">
                        <span className="button_text">Back </span>
                    </button>
                </Link>
                <CountryDetailsInfo />
            </div>
        </>
    );
}

export default CountryDetails;
