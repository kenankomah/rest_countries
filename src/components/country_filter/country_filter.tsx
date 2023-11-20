import { MouseEvent, useContext, useState } from "react";
import { CountriesData } from "../../App";
import "./country_filter.scss";
interface CountryFilterProps {
    setCountryList: Function;
    setRegionList: Function;
}

export default function CountryFilter({
    setCountryList,
    setRegionList,
}: CountryFilterProps) {
    const countries = useContext(CountriesData);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [region, setRegion] = useState("Filter by Region");

    function filterByRegion(region: string) {
        if (region === "Filter by Region") {
            setRegionList(countries);
            return countries;
        }
        setRegionList(countries.filter((country) => country.region === region));
        return countries.filter((country) => country.region === region);
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

    const isDarkTheme = document.body.classList.contains("dark-theme");

    // const chevron = isDarkTheme
    //     ? "/assets/chevron_down_icon_white.svg"
    //     : "/assets/chevron_down_icon.svg";

    return (
        <div className="dropdown" onClick={menuSate}>
            <button className="dropbtn">
                {region}
                {/* <img
                    className={chevronClass}
                    src={chevron}
                    alt="down chevron icon"
                /> */}
                <div className={chevronClass}></div>
            </button>
            <div className={menuClass}>
                <p>Filter by Region</p>
                <p>Africa</p>
                <p>Americas</p>
                <p>Asia</p>
                <p>Europe</p>
                <p>Oceania</p>
            </div>
        </div>
    );
}
