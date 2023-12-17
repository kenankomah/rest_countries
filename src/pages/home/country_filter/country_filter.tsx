import { MouseEvent, useContext, useState } from "react";
import { CountriesData } from "../../../App";
import "./country_filter.scss";
import { regionFilter } from "../utilities";
interface CountryFilterProps {
    setCountryList: Function;
    setRegionList: Function;
}

export default function CountryFilter({
    setCountryList,
    setRegionList,
}: CountryFilterProps) {
    const { countries } = useContext(CountriesData);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [region, setRegion] = useState("Filter by Region");

    function filterByRegion(region: string) {
        if (region === "Filter by Region" || region === "All Regions") {
            setRegionList(countries);
            return countries;
        }

        setRegionList(regionFilter(countries, region));
        return regionFilter(countries, region);
    }

    function menuSate(e: MouseEvent<HTMLDivElement>) {
        setIsMenuOpen(!isMenuOpen);
        const target = e.target as HTMLDivElement;
        if (target.nodeName === "P") {
            const textContent = target.textContent as string;
            setRegion(textContent);
            setCountryList(filterByRegion(textContent));
        }
    }

    const menuClass = isMenuOpen ? "dropdown-content" : "dropdown-content hide";
    const chevronClass = isMenuOpen
        ? "chevron_container rotate"
        : "chevron_container";

    return (
        <div className="dropdown" onClick={menuSate}>
            <button className="dropbtn">
                {region}

                <div className={chevronClass}></div>
            </button>
            <div className={menuClass}>
                <p>All Regions</p>
                <p>Africa</p>
                <p>Americas</p>
                <p>Asia</p>
                <p>Europe</p>
                <p>Oceania</p>
            </div>
        </div>
    );
}
