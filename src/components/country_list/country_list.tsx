import React, {
    useState,
    useEffect,
    useContext,
    ChangeEvent,
    useRef,
} from "react";
import { Link } from "react-router-dom";
import Nav from "../nav/nav";
import "./country_list.scss";
import { CountriesData } from "../../App";

function CountryList() {
    const countries = useContext(CountriesData);
    const [countryList, setCountrList] = useState(countries);
    const [regionList, setRegionList] = useState(countries);

    const inputRef = useRef<HTMLInputElement>(null);

    function filterByRegion(region: string) {
        if (region === "Filter by Region") {
            setRegionList(countries);
            return countries;
        }
        setRegionList(countries.filter((country) => country.region === region));
        return countries.filter((country) => country.region === region);
    }

    function searchByCountryName(name: string) {
        return regionList.filter((country) =>
            country.name.common.toLowerCase().includes(name.toLowerCase())
        );
    }

    useEffect(() => {
        setCountrList(countries);
        setRegionList(countries);
    }, [countries]);

    useEffect(() => {
        const value = inputRef.current?.value;
        if (value) {
            setCountrList(searchByCountryName(value));
        }
    }, [regionList]);

    return (
        <div className="App ">
            <Nav />

            <div className="container">
                <div className="search_and_filter">
                    <input
                        type="text"
                        placeholder="Search for a country..."
                        ref={inputRef}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            const target = e.target as HTMLInputElement;
                            setCountrList(searchByCountryName(target.value));
                        }}
                    />
                    <select
                        name="region"
                        id="region"
                        onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                            const target = e.target as HTMLSelectElement;
                            setCountrList(filterByRegion(target.value));
                        }}
                    >
                        <option value="Filter by Region">
                            Filter by Region
                        </option>
                        <option value="Africa">Africa</option>
                        <option value="Americas">Americas</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Oceania">Oceania</option>
                    </select>
                </div>

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
            </div>
        </div>
    );
}

export default CountryList;
