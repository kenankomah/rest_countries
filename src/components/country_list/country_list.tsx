import "./country_list.scss";
import { CountryType } from "../../App";
import CountryCard from "./country_card";

interface CountryListProps {
    countryList: CountryType[];
}

function CountryList({ countryList }: CountryListProps) {
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
