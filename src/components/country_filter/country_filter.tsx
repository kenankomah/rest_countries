import { ChangeEvent, useContext } from "react";
import { CountriesData } from "../../App";

interface CountryFilterProps {
    setCountryList: Function;
    setRegionList: Function;
}

export default function CountryFilter({
    setCountryList,
    setRegionList,
}: CountryFilterProps) {
    const countries = useContext(CountriesData);

    function filterByRegion(region: string) {
        if (region === "Filter by Region") {
            setRegionList(countries);
            return countries;
        }
        setRegionList(countries.filter((country) => country.region === region));
        return countries.filter((country) => country.region === region);
    }

    return (
        <select
            name="region"
            id="region"
            onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                const target = e.target as HTMLSelectElement;
                setCountryList(filterByRegion(target.value));
            }}
        >
            <option value="Filter by Region">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </select>
    );
}
