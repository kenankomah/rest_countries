import "./country_list.scss";
import { CountriesData, CountryType } from "../../App";
import CountryCard from "./country_card";
import { useContext } from "react";

interface CountryListProps {
    countryList: CountryType[];
}

function CountryList({ countryList }: CountryListProps) {
    const { error, countries } = useContext(CountriesData);

    console.log(countries.length);

    if (error) {
        return (
            <div className="error_container">
                <h3>Something went wrong, refresh the page to try again</h3>
            </div>
        );
    }

    if (!countries.length)
        return (
            <div className="empty_list">
                <h3>Loadingggggg</h3>
            </div>
        );

    const ListContainerClass =
        countryList.length === 1
            ? "country_list_container single_country"
            : "country_list_container";
    return (
        <div className={ListContainerClass}>
            {countryList.map((country: CountryType) => {
                return <CountryCard key={country.cca3} country={country} />;
            })}

            {!countryList.length && (
                <div className="empty_list">
                    <h3>No countries found</h3>
                </div>
            )}
        </div>
    );
}

export default CountryList;
