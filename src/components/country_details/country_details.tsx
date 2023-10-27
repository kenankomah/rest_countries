import { useContext } from "react";
import { useParams } from "react-router-dom";
import { CountriesData } from "../../App";

function CountryDetails() {
    const countries = useContext(CountriesData);
    console.log(countries);
    let { country } = useParams();
    return <div>{country}</div>;
}

export default CountryDetails;
